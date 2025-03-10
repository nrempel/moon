use moon::{build_dep_graph, generate_project_graph, load_workspace_from};
use moon_config::{
    InheritedTasksConfig, NodeConfig, ToolchainConfig, WorkspaceConfig, WorkspaceProjects,
};
use moon_dep_graph::BatchedTopoSort;
use moon_project_graph::ProjectGraph;
use moon_target::Target;
use moon_test_utils::{assert_snapshot, create_sandbox_with_config, Sandbox};
use moon_utils::string_vec;
use moon_workspace::Workspace;
use petgraph::graph::NodeIndex;
use rustc_hash::{FxHashMap, FxHashSet};

async fn create_project_graph() -> (Workspace, ProjectGraph, Sandbox) {
    let workspace_config = WorkspaceConfig {
        projects: WorkspaceProjects::Sources(FxHashMap::from_iter([
            ("advanced".to_owned(), "advanced".to_owned()),
            ("basic".to_owned(), "basic".to_owned()),
            ("emptyConfig".to_owned(), "empty-config".to_owned()),
            ("noConfig".to_owned(), "no-config".to_owned()),
            // Deps
            ("foo".to_owned(), "deps/foo".to_owned()),
            ("bar".to_owned(), "deps/bar".to_owned()),
            ("baz".to_owned(), "deps/baz".to_owned()),
            // Tasks
            ("tasks".to_owned(), "tasks".to_owned()),
            ("platforms".to_owned(), "platforms".to_owned()),
        ])),
        ..WorkspaceConfig::default()
    };
    let toolchain_config = ToolchainConfig {
        node: Some(NodeConfig {
            version: Some("16.0.0".into()),
            dedupe_on_lockfile_change: false,
            ..NodeConfig::default()
        }),
        ..ToolchainConfig::default()
    };
    let tasks_config = InheritedTasksConfig {
        file_groups: FxHashMap::from_iter([
            ("sources".to_owned(), string_vec!["src/**/*", "types/**/*"]),
            ("tests".to_owned(), string_vec!["tests/**/*"]),
        ]),
        ..InheritedTasksConfig::default()
    };

    let sandbox = create_sandbox_with_config(
        "projects",
        Some(&workspace_config),
        Some(&toolchain_config),
        Some(&tasks_config),
    );

    let mut workspace = load_workspace_from(sandbox.path()).await.unwrap();
    let project_graph = generate_project_graph(&mut workspace).await.unwrap();

    (workspace, project_graph, sandbox)
}

async fn create_tasks_project_graph() -> (Workspace, ProjectGraph, Sandbox) {
    let workspace_config = WorkspaceConfig {
        projects: WorkspaceProjects::Sources(FxHashMap::from_iter([
            ("basic".to_owned(), "basic".to_owned()),
            ("buildA".to_owned(), "build-a".to_owned()),
            ("buildB".to_owned(), "build-b".to_owned()),
            ("buildC".to_owned(), "build-c".to_owned()),
            ("chain".to_owned(), "chain".to_owned()),
            ("cycle".to_owned(), "cycle".to_owned()),
            ("inputA".to_owned(), "input-a".to_owned()),
            ("inputB".to_owned(), "input-b".to_owned()),
            ("inputC".to_owned(), "input-c".to_owned()),
            (
                "mergeAllStrategies".to_owned(),
                "merge-all-strategies".to_owned(),
            ),
            ("mergeAppend".to_owned(), "merge-append".to_owned()),
            ("mergePrepend".to_owned(), "merge-prepend".to_owned()),
            ("mergeReplace".to_owned(), "merge-replace".to_owned()),
            ("noTasks".to_owned(), "no-tasks".to_owned()),
        ])),
        ..WorkspaceConfig::default()
    };
    let toolchain_config = ToolchainConfig {
        node: Some(NodeConfig {
            version: Some("16.0.0".into()),
            ..NodeConfig::default()
        }),
        ..ToolchainConfig::default()
    };
    let tasks_config = InheritedTasksConfig {
        file_groups: FxHashMap::from_iter([("sources".to_owned(), vec!["src/**/*".to_owned()])]),
        ..InheritedTasksConfig::default()
    };

    let sandbox = create_sandbox_with_config(
        "tasks",
        Some(&workspace_config),
        Some(&toolchain_config),
        Some(&tasks_config),
    );

    let mut workspace = load_workspace_from(sandbox.path()).await.unwrap();
    let project_graph = generate_project_graph(&mut workspace).await.unwrap();

    (workspace, project_graph, sandbox)
}

fn sort_batches(batches: BatchedTopoSort) -> BatchedTopoSort {
    let mut list: BatchedTopoSort = vec![];

    for batch in batches {
        let mut new_batch = batch.clone();
        new_batch.sort();
        list.push(new_batch);
    }

    list
}

#[tokio::test]
#[should_panic(
    expected = "CycleDetected(\"RunTarget(cycle:a) → RunTarget(cycle:b) → RunTarget(cycle:c)\")"
)]
async fn detects_cycles() {
    let (workspace, projects, _sandbox) = create_tasks_project_graph().await;

    let mut graph = build_dep_graph(&workspace, &projects);
    graph
        .run_target(&Target::new("cycle", "a").unwrap(), None)
        .unwrap();
    graph
        .run_target(&Target::new("cycle", "b").unwrap(), None)
        .unwrap();
    graph
        .run_target(&Target::new("cycle", "c").unwrap(), None)
        .unwrap();
    let graph = graph.build();

    assert_eq!(
        sort_batches(graph.sort_batched_topological().unwrap()),
        vec![vec![NodeIndex::new(0)], vec![NodeIndex::new(1)]]
    );
}

mod run_target {
    use super::*;

    #[tokio::test]
    async fn single_targets() {
        let (workspace, projects, _sandbox) = create_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("tasks", "test").unwrap(), None)
            .unwrap();
        graph
            .run_target(&Target::new("tasks", "lint").unwrap(), None)
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());

        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(1),
                NodeIndex::new(2), // sync project
                NodeIndex::new(3), // test
                NodeIndex::new(4), // lint
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(0)],
                vec![NodeIndex::new(1), NodeIndex::new(2)],
                vec![NodeIndex::new(3), NodeIndex::new(4)]
            ]
        );
    }

    #[tokio::test]
    async fn deps_chain_target() {
        let (workspace, projects, _sandbox) = create_tasks_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("basic", "test").unwrap(), None)
            .unwrap();
        graph
            .run_target(&Target::new("basic", "lint").unwrap(), None)
            .unwrap();
        graph
            .run_target(&Target::new("chain", "a").unwrap(), None)
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(1),
                NodeIndex::new(2),  // sync project
                NodeIndex::new(3),  // test
                NodeIndex::new(4),  // lint
                NodeIndex::new(5),  // sync project
                NodeIndex::new(11), // f
                NodeIndex::new(10), // e
                NodeIndex::new(9),  // d
                NodeIndex::new(8),  // c
                NodeIndex::new(7),  // b
                NodeIndex::new(6),  // a
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(0)],
                vec![NodeIndex::new(1), NodeIndex::new(5)],
                vec![NodeIndex::new(11)],
                vec![NodeIndex::new(10)],
                vec![NodeIndex::new(9)],
                vec![NodeIndex::new(8)],
                vec![NodeIndex::new(2), NodeIndex::new(7)],
                vec![NodeIndex::new(3), NodeIndex::new(4), NodeIndex::new(6)]
            ]
        );
    }

    #[tokio::test]
    async fn avoids_dupe_targets() {
        let (workspace, projects, _sandbox) = create_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("tasks", "lint").unwrap(), None)
            .unwrap();
        graph
            .run_target(&Target::new("tasks", "lint").unwrap(), None)
            .unwrap();
        graph
            .run_target(&Target::new("tasks", "lint").unwrap(), None)
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());

        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(1),
                NodeIndex::new(2), // sync project
                NodeIndex::new(3), // lint
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(0)],
                vec![NodeIndex::new(1), NodeIndex::new(2)],
                vec![NodeIndex::new(3)]
            ]
        );
    }

    #[tokio::test]
    async fn runs_all_projects_for_target_all_scope() {
        let (workspace, projects, _sandbox) = create_tasks_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::parse(":build").unwrap(), None)
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());

        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(1),
                NodeIndex::new(2),  // sync project: basic
                NodeIndex::new(3),  // basic:build
                NodeIndex::new(4),  // sync project: build-c
                NodeIndex::new(5),  // sync project: build-a
                NodeIndex::new(7),  // build-c:build
                NodeIndex::new(6),  // build-a:build
                NodeIndex::new(8),  // sync project: build-b
                NodeIndex::new(9),  // build-b:build
                NodeIndex::new(10), // notasks
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(0)],
                vec![
                    NodeIndex::new(1),
                    NodeIndex::new(2),
                    NodeIndex::new(4),
                    NodeIndex::new(7)
                ],
                vec![
                    NodeIndex::new(3),
                    NodeIndex::new(5),
                    NodeIndex::new(6),
                    NodeIndex::new(9)
                ],
                vec![NodeIndex::new(8), NodeIndex::new(10)],
            ]
        );
    }

    #[tokio::test]
    #[should_panic(expected = "Target(NoProjectDepsInRunContext)")]
    async fn errors_for_target_deps_scope() {
        let (workspace, projects, _sandbox) = create_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::parse("^:lint").unwrap(), None)
            .unwrap();
    }

    #[tokio::test]
    #[should_panic(expected = "Target(NoProjectSelfInRunContext)")]
    async fn errors_for_target_self_scope() {
        let (workspace, projects, _sandbox) = create_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::parse("~:lint").unwrap(), None)
            .unwrap();
    }

    #[tokio::test]
    #[should_panic(expected = "Project(UnconfiguredID(\"unknown\"))")]
    async fn errors_for_unknown_project() {
        let (workspace, projects, _sandbox) = create_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("unknown", "test").unwrap(), None)
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }

    #[tokio::test]
    #[should_panic(expected = "Project(UnconfiguredTask(\"build\", \"tasks\"))")]
    async fn errors_for_unknown_task() {
        let (workspace, projects, _sandbox) = create_project_graph().await;

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("tasks", "build").unwrap(), None)
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }
}

mod run_target_if_touched {
    use super::*;

    #[tokio::test]
    async fn skips_if_untouched_project() {
        let (workspace, projects, sandbox) = create_tasks_project_graph().await;

        let mut touched_files = FxHashSet::default();
        touched_files.insert(sandbox.path().join("input-a/a.ts"));
        touched_files.insert(sandbox.path().join("input-c/c.ts"));

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("inputA", "a").unwrap(), Some(&touched_files))
            .unwrap();
        graph
            .run_target(&Target::new("inputB", "b").unwrap(), Some(&touched_files))
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }

    #[tokio::test]
    async fn skips_if_untouched_task() {
        let (workspace, projects, sandbox) = create_tasks_project_graph().await;

        let mut touched_files = FxHashSet::default();
        touched_files.insert(sandbox.path().join("input-a/a2.ts"));
        touched_files.insert(sandbox.path().join("input-b/b2.ts"));
        touched_files.insert(sandbox.path().join("input-c/any.ts"));

        let mut graph = build_dep_graph(&workspace, &projects);
        graph
            .run_target(&Target::new("inputA", "a").unwrap(), Some(&touched_files))
            .unwrap();
        graph
            .run_target(&Target::new("inputB", "b2").unwrap(), Some(&touched_files))
            .unwrap();
        graph
            .run_target(&Target::new("inputC", "c").unwrap(), Some(&touched_files))
            .unwrap();
        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }
}

mod sync_project {
    use super::*;
    use moon_dep_graph::DepGraphBuilder;

    fn sync_projects(graph: &mut DepGraphBuilder, projects: &ProjectGraph, ids: &[&str]) {
        for id in ids {
            let project = projects.get(id).unwrap();

            graph.sync_project(project).unwrap();
        }
    }

    #[tokio::test]
    async fn isolated_projects() {
        let (workspace, projects, _sandbox) = create_project_graph().await;
        let mut graph = build_dep_graph(&workspace, &projects);

        sync_projects(
            &mut graph,
            &projects,
            &["advanced", "basic", "emptyConfig", "noConfig"],
        );

        let graph = graph.build();

        assert_snapshot!(graph.to_dot());

        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(1), // advanced
                NodeIndex::new(3), // noConfig
                NodeIndex::new(4),
                NodeIndex::new(2), // basic
                NodeIndex::new(5), // emptyConfig
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(3)],
                vec![NodeIndex::new(0), NodeIndex::new(4)],
                vec![NodeIndex::new(1), NodeIndex::new(2), NodeIndex::new(5)]
            ]
        );
    }

    #[tokio::test]
    async fn projects_with_deps() {
        let (workspace, projects, _sandbox) = create_project_graph().await;
        let mut graph = build_dep_graph(&workspace, &projects);

        sync_projects(&mut graph, &projects, &["foo", "bar", "baz", "basic"]);

        let graph = graph.build();

        // Not deterministic!
        // assert_snapshot!(graph.to_dot());

        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(2), // baz
                NodeIndex::new(3), // bar
                NodeIndex::new(4),
                NodeIndex::new(1), // foo
                NodeIndex::new(6), // noConfig
                NodeIndex::new(5), // basic
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(2)],
                vec![
                    NodeIndex::new(0),
                    NodeIndex::new(3),
                    NodeIndex::new(4),
                    NodeIndex::new(6)
                ],
                vec![NodeIndex::new(1), NodeIndex::new(5)]
            ]
        );
    }

    #[tokio::test]
    async fn projects_with_tasks() {
        let (workspace, projects, _sandbox) = create_project_graph().await;
        let mut graph = build_dep_graph(&workspace, &projects);

        sync_projects(&mut graph, &projects, &["noConfig", "tasks"]);

        let graph = graph.build();

        assert_snapshot!(graph.to_dot());

        assert_eq!(
            graph.sort_topological().unwrap(),
            vec![
                NodeIndex::new(0),
                NodeIndex::new(1), // noConfig
                NodeIndex::new(2),
                NodeIndex::new(3) // tasks
            ]
        );
        assert_eq!(
            sort_batches(graph.sort_batched_topological().unwrap()),
            vec![
                vec![NodeIndex::new(0), NodeIndex::new(2)],
                vec![NodeIndex::new(1), NodeIndex::new(3)]
            ]
        );
    }

    #[tokio::test]
    async fn avoids_dupe_projects() {
        let (workspace, projects, _sandbox) = create_project_graph().await;
        let mut graph = build_dep_graph(&workspace, &projects);

        sync_projects(&mut graph, &projects, &["advanced", "advanced", "advanced"]);

        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }

    #[tokio::test]
    #[should_panic(expected = "UnconfiguredID(\"unknown\")")]
    async fn errors_for_unknown_project() {
        let (workspace, projects, _sandbox) = create_project_graph().await;
        let mut graph = build_dep_graph(&workspace, &projects);

        sync_projects(&mut graph, &projects, &["unknown"]);

        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }
}

mod installs_deps {
    use super::*;

    #[tokio::test]
    async fn tool_is_based_on_task_platform() {
        let (workspace, projects, _sandbox) = create_project_graph().await;
        let mut graph = build_dep_graph(&workspace, &projects);

        graph
            .run_target(&Target::new("platforms", "system").unwrap(), None)
            .unwrap();

        graph
            .run_target(&Target::new("platforms", "node").unwrap(), None)
            .unwrap();

        let graph = graph.build();

        assert_snapshot!(graph.to_dot());
    }
}
