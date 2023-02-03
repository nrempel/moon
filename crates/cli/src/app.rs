// https://github.com/clap-rs/clap/tree/master/examples/derive_ref#app-attributes

use crate::commands::bin::BinTool;
use crate::commands::init::InitTool;
use crate::enums::{CacheMode, LogLevel, TouchedStatus};
use clap::{Parser, Subcommand};
use moon_action_context::ProfileType;
use moon_config::{FileGlob, ProjectID};
use moon_task::TargetID;
use std::path::PathBuf;

pub const BIN_NAME: &str = if cfg!(windows) { "moon.exe" } else { "moon" };

const HEADING_AFFECTED: &str = "Affected by changes";
const HEADING_DEBUGGING: &str = "Debugging";
const HEADING_PARALLELISM: &str = "Parallelism and distribution";

#[derive(Debug, Subcommand)]
pub enum DockerCommands {
    #[command(
        name = "prune",
        about = "Remove extraneous files and folders within Dockerfile(s)."
    )]
    Prune,

    #[command(
        name = "scaffold",
        about = "Scaffold a repository skeleton for use within Dockerfile(s)."
    )]
    Scaffold {
        #[arg(required = true, help = "List of project IDs to copy sources for")]
        ids: Vec<ProjectID>,

        #[arg(long, help = "Additional file globs to include in sources")]
        include: Vec<FileGlob>,
    },
}

#[derive(Debug, Subcommand)]
pub enum MigrateCommands {
    #[command(
        name = "from-package-json",
        about = "Migrate `package.json` scripts and dependencies to `moon.yml`."
    )]
    FromPackageJson {
        #[arg(help = "ID of project to migrate")]
        id: ProjectID,
    },

    #[command(
        name = "from-turborepo",
        about = "Migrate `turbo.json` to moon configuration files."
    )]
    FromTurborepo,
}

#[derive(Debug, Subcommand)]
pub enum NodeCommands {
    #[command(
        name = "run-script",
        about = "Run a `package.json` script within a project."
    )]
    RunScript {
        #[arg(help = "Name of the script")]
        name: String,

        #[arg(long, help = "ID of project to run in")]
        project: Option<ProjectID>,
    },
}

#[derive(Debug, Subcommand)]
pub enum QueryCommands {
    #[command(
        name = "projects",
        about = "Query for projects within the project graph.",
        long_about = "Query for projects within the project graph. All options support regex patterns."
    )]
    Projects {
        #[arg(long, help = "Filter projects that match this alias")]
        alias: Option<String>,

        #[arg(
            long,
            help = "Filter projects that are affected based on touched files"
        )]
        affected: bool,

        #[arg(long, help = "Filter projects that match this ID")]
        id: Option<String>,

        #[arg(long, help = "Filter projects of this programming language")]
        language: Option<String>,

        #[arg(long, help = "Filter projects that match this source path")]
        source: Option<String>,

        #[arg(long, help = "Filter projects that have the following tasks")]
        tasks: Option<String>,

        #[arg(long = "type", help = "Filter projects of this type")]
        type_of: Option<String>,
    },

    #[command(
        name = "tasks",
        about = "List all available projects & tasks.",
        rename_all = "camelCase"
    )]
    Tasks {
        #[arg(long, help = "Filter projects that match this alias")]
        alias: Option<String>,

        #[arg(
            long,
            help = "Filter projects that are affected based on touched files"
        )]
        affected: bool,

        #[arg(long, help = "Filter projects that match this ID")]
        id: Option<String>,

        #[arg(long, help = "Filter projects of this programming language")]
        language: Option<String>,

        #[arg(long, help = "Filter projects that match this source path")]
        source: Option<String>,

        #[arg(long, help = "Filter projects that have the following tasks")]
        tasks: Option<String>,

        #[arg(long = "type", help = "Filter projects of this type")]
        type_of: Option<String>,
    },

    #[command(
        name = "touched-files",
        about = "Query for touched files between revisions.",
        rename_all = "camelCase"
    )]
    TouchedFiles {
        #[arg(long, help = "Base branch, commit, or revision to compare against")]
        base: Option<String>,

        #[arg(
            long,
            help = "When on the default branch, compare against the previous revision"
        )]
        default_branch: bool,

        #[arg(long, help = "Current branch, commit, or revision to compare with")]
        head: Option<String>,

        #[arg(long, help = "Gather files from you local state instead of the remote")]
        local: bool,

        #[arg(value_enum, long, help = "Filter files based on a touched status")]
        status: Vec<TouchedStatus>,
    },
}

#[derive(Debug, Subcommand)]
pub enum Commands {
    // ENVIRONMENT

    // moon init
    #[command(
        name = "init",
        about = "Initialize a new tool or a new moon repository, and scaffold config files.",
        rename_all = "camelCase"
    )]
    Init {
        #[arg(help = "Destination to initialize in", default_value = ".")]
        dest: String,

        #[arg(long, help = "Overwrite existing configurations")]
        force: bool,

        #[arg(long, help = "Initialize with minimal configuration and prompts")]
        minimal: bool,

        #[arg(long, help = "Skip prompts and use default values")]
        yes: bool,

        #[arg(long, value_enum, help = "Specific tool to initialize")]
        tool: Option<InitTool>,
    },

    // TOOLCHAIN

    // moon bin <tool>
    #[command(
        name = "bin",
        about = "Return an absolute path to a tool's binary within the toolchain.",
        long_about = "Return an absolute path to a tool's binary within the toolchain. If a tool has not been configured or installed, this will return a non-zero exit code with no value."
    )]
    Bin {
        #[arg(value_enum, help = "The tool to query")]
        tool: BinTool,
    },

    // moon node <command>
    #[command(name = "node", about = "Special Node.js commands.")]
    Node {
        #[command(subcommand)]
        command: NodeCommands,
    },

    // moon setup
    #[command(
        name = "setup",
        about = "Setup the environment by installing all tools."
    )]
    Setup,

    // moon teardown
    #[command(
        name = "teardown",
        about = "Teardown the environment by uninstalling all tools and deleting temp files."
    )]
    Teardown,

    // PROJECTS

    // moon dep-graph [target]
    #[command(
        name = "dep-graph",
        about = "Display a dependency graph of all tasks and actions in DOT format.",
        alias = "dg"
    )]
    DepGraph {
        #[arg(help = "Target to *only* graph")]
        target: Option<String>,

        #[arg(long, help = "Print the graph in DOT format")]
        dot: bool,

        #[arg(long, help = "Print the graph data in JSON format")]
        json: bool,
    },

    // moon project <id>
    #[command(
        name = "project",
        about = "Display information about a single project.",
        alias = "p"
    )]
    Project {
        #[arg(help = "ID of project to display")]
        id: ProjectID,

        #[arg(long, help = "Print in JSON format")]
        json: bool,
    },

    // moon project-graph [id]
    #[command(
        name = "project-graph",
        about = "Display a graph of projects in DOT format.",
        alias = "pg"
    )]
    ProjectGraph {
        #[arg(help = "ID of project to *only* graph")]
        id: Option<ProjectID>,

        #[arg(long, help = "Print the graph in DOT format")]
        dot: bool,

        #[arg(long, help = "Print the graph data in JSON format")]
        json: bool,
    },

    #[command(
        name = "sync",
        about = "Sync all projects in the workspace to a healthy state."
    )]
    Sync,

    // GENERATOR

    // moon generate
    #[command(
        name = "generate",
        about = "Generate and scaffold files from a pre-defined template.",
        alias = "g",
        rename_all = "camelCase"
    )]
    Generate {
        #[arg(help = "Name of template to generate")]
        name: String,

        #[arg(help = "Destination path, relative from the current working directory")]
        dest: Option<String>,

        #[arg(
            long,
            help = "Use the default value of all variables instead of prompting"
        )]
        defaults: bool,

        #[arg(long, help = "Run entire generator process without writing files")]
        dry_run: bool,

        #[arg(long, help = "Force overwrite any existing files at the destination")]
        force: bool,

        #[arg(long, help = "Create a new template")]
        template: bool,

        // Variable args (after --)
        #[arg(last = true, help = "Arguments to define as variable values")]
        vars: Vec<String>,
    },

    // RUNNER

    // moon check
    #[command(
        name = "check",
        about = "Run all build and test related tasks for the current project.",
        alias = "c",
        rename_all = "camelCase"
    )]
    Check {
        #[arg(help = "List of project IDs to explicitly check")]
        #[clap(group = "projects")]
        ids: Vec<ProjectID>,

        #[arg(long, help = "Run check for all projects in the workspace")]
        #[clap(group = "projects")]
        all: bool,

        #[arg(
            long,
            short = 'u',
            help = "Bypass cache and force update any existing items"
        )]
        update_cache: bool,
    },

    // moon ci
    #[command(
        name = "ci",
        about = "Run all affected projects and tasks in a CI environment.",
        rename_all = "camelCase"
    )]
    Ci {
        #[arg(long, help = "Base branch, commit, or revision to compare against")]
        base: Option<String>,

        #[arg(long, help = "Current branch, commit, or revision to compare with")]
        head: Option<String>,

        #[arg(long, help = "Index of the current job", help_heading = HEADING_PARALLELISM)]
        job: Option<usize>,

        #[arg(long, help = "Total amount of jobs to run", help_heading = HEADING_PARALLELISM)]
        job_total: Option<usize>,
    },

    // moon run [...targets]
    #[command(
        name = "run",
        about = "Run one or many project tasks and their dependent tasks.",
        alias = "r",
        rename_all = "camelCase"
    )]
    Run {
        #[arg(required = true, help = "List of targets (project:task) to run")]
        targets: Vec<TargetID>,

        #[arg(
            long,
            help = "Run dependents of the primary targets, as well as dependencies"
        )]
        dependents: bool,

        #[arg(
            long,
            short = 'u',
            help = "Bypass cache and force update any existing items"
        )]
        update_cache: bool,

        // Debugging
        #[arg(
            value_enum,
            long,
            help = "Record and generate a profile for ran tasks",
            help_heading = HEADING_DEBUGGING,
        )]
        profile: Option<ProfileType>,

        // Affected
        #[arg(
            long,
            help = "Only run target if affected by touched files",
            help_heading = HEADING_AFFECTED,
            group = "affected-args"
        )]
        affected: bool,

        #[arg(
            long,
            help = "Determine affected against remote by comparing against a base revision",
            help_heading = HEADING_AFFECTED,
            requires = "affected-args",
        )]
        remote: bool,

        #[arg(
            value_enum,
            long,
            help = "Filter affected files based on a touched status",
            help_heading = HEADING_AFFECTED,
            requires = "affected-args",
        )]
        status: Vec<TouchedStatus>,

        // Passthrough args (after --)
        #[arg(
            last = true,
            help = "Arguments to pass through to the underlying command"
        )]
        passthrough: Vec<String>,
    },

    // OTHER

    // moon clean
    #[command(
        name = "clean",
        about = "Clean the workspace and delete any stale or invalid artifacts."
    )]
    Clean {
        #[arg(long, default_value = "7 days", help = "Lifetime of cached artifacts")]
        lifetime: String,
    },

    // moon docker <operation>
    #[command(
        name = "docker",
        about = "Operations for integrating with Docker and Dockerfile(s)."
    )]
    Docker {
        #[command(subcommand)]
        command: DockerCommands,
    },

    // moon migrate <operation>
    #[command(
        name = "migrate",
        about = "Operations for migrating existing projects to moon.",
        rename_all = "camelCase"
    )]
    Migrate {
        #[command(subcommand)]
        command: MigrateCommands,

        #[arg(
            long,
            global = true,
            help = "Disable the check for touched/dirty files"
        )]
        skip_touched_files_check: bool,
    },

    // moon query <operation>
    #[command(
        name = "query",
        about = "Query information about moon, the environment, and pipeline.",
        long_about = "Query information about moon, the environment, and pipeline. Each operation will output JSON so that it may be consumed easily."
    )]
    Query {
        #[command(subcommand)]
        command: QueryCommands,
    },
}

#[derive(Debug, Parser)]
#[command(
    bin_name = BIN_NAME,
    name = "moon",
    about = "Take your repo to the moon!",
    version,
    disable_colored_help = true,
    disable_help_subcommand = true,
    propagate_version = true,
    next_line_help = false,
    rename_all = "camelCase"
)]
pub struct App {
    #[arg(
        value_enum,
        long,
        global = true,
        env = "MOON_CACHE",
        help = "Mode for cache operations",
        default_value_t
    )]
    pub cache: CacheMode,

    #[arg(
        long,
        global = true,
        env = "MOON_COLOR",
        help = "Force colored output for moon"
    )]
    pub color: bool,

    #[arg(
        long,
        short = 'c',
        global = true,
        env = "MOON_CONCURRENCY",
        help = "Maximum number of threads to utilize"
    )]
    pub concurrency: Option<usize>,

    #[arg(
        value_enum,
        long,
        global = true,
        env = "MOON_LOG",
        help = "Lowest log level to output",
        default_value_t
    )]
    pub log: LogLevel,

    #[arg(
        long,
        global = true,
        env = "MOON_LOG_FILE",
        help = "Path to a file to dump the moon logs"
    )]
    pub log_file: Option<PathBuf>,

    #[command(subcommand)]
    pub command: Commands,
}
