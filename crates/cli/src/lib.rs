mod app;
pub mod commands;
pub mod enums;
mod helpers;
pub mod queries;

use crate::commands::bin::bin;
use crate::commands::check::{check, CheckOptions};
use crate::commands::ci::{ci, CiOptions};
use crate::commands::clean::{clean, CleanOptions};
use crate::commands::docker;
use crate::commands::generate::{generate, GenerateOptions};
use crate::commands::graph::{dep::dep_graph, project::project_graph};
use crate::commands::init::{init, InitOptions};
use crate::commands::migrate;
use crate::commands::node;
use crate::commands::project::project;
use crate::commands::query::{self, QueryProjectsOptions, QueryTouchedFilesOptions};
use crate::commands::run::{run, RunOptions};
use crate::commands::setup::setup;
use crate::commands::sync::sync;
use crate::commands::teardown::teardown;
use crate::helpers::setup_colors;
use app::{App, Commands, DockerCommands, MigrateCommands, NodeCommands, QueryCommands};
use clap::Parser;
use console::Term;
use enums::{CacheMode, LogLevel};
use moon_launchpad::check_version;
use moon_logger::{color, debug, LevelFilter, Logger};
use moon_terminal::ExtendedTerm;
use std::env;
use std::path::PathBuf;
use tokio::task;

pub use app::BIN_NAME;

fn setup_logging(level: &LogLevel, log_file: Option<PathBuf>) {
    if env::var("MOON_LOG").is_err() {
        env::set_var("MOON_LOG", level.to_string());
    }

    // This is annoying, but clap requires applying the `ValueEnum`
    // trait onto the enum, which we can't apply to the log package.
    Logger::init(
        match level {
            LogLevel::Off => LevelFilter::Off,
            LogLevel::Error => LevelFilter::Error,
            LogLevel::Warn => LevelFilter::Warn,
            LogLevel::Info => LevelFilter::Info,
            LogLevel::Debug => LevelFilter::Debug,
            LogLevel::Trace => LevelFilter::Trace,
        },
        log_file,
    );

    let version = env!("CARGO_PKG_VERSION");

    if let Ok(exe_with) = env::var("MOON_EXECUTED_WITH") {
        debug!(
            target: "moon",
            "Running moon v{} (with {})",
            version,
            color::file(exe_with),
        );
    } else {
        debug!(target: "moon", "Running moon v{}", version);
    }

    env::set_var("MOON_VERSION", version);
}

fn setup_caching(mode: &CacheMode) {
    if env::var("MOON_CACHE").is_err() {
        env::set_var("MOON_CACHE", mode.to_string());
    }
}

pub async fn run_cli() {
    // Create app and parse arguments
    let args = App::parse();

    setup_colors(args.color);
    setup_logging(&args.log, args.log_file);
    setup_caching(&args.cache);

    let version = env!("CARGO_PKG_VERSION");
    let version_check = task::spawn(check_version(version));

    // Match and run subcommand
    let result = match &args.command {
        Commands::Bin { tool } => bin(tool).await,
        Commands::Ci {
            base,
            head,
            job,
            job_total,
        } => {
            ci(CiOptions {
                base: base.clone(),
                concurrency: args.concurrency,
                head: head.clone(),
                job: *job,
                job_total: *job_total,
            })
            .await
        }
        Commands::Check {
            ids,
            all,
            update_cache,
        } => {
            check(
                ids,
                CheckOptions {
                    all: *all,
                    concurrency: args.concurrency,
                    update_cache: *update_cache,
                },
            )
            .await
        }
        Commands::Clean { lifetime } => {
            clean(CleanOptions {
                cache_lifetime: lifetime.to_owned(),
            })
            .await
        }
        Commands::DepGraph { target, dot, json } => dep_graph(target, *dot, *json).await,
        Commands::Docker { command } => match command {
            DockerCommands::Prune => docker::prune().await,
            DockerCommands::Scaffold { ids, include } => docker::scaffold(ids, include).await,
        },
        Commands::Generate {
            name,
            dest,
            defaults,
            dry_run,
            force,
            template,
            vars,
        } => {
            generate(
                name,
                GenerateOptions {
                    defaults: *defaults,
                    dest: dest.clone(),
                    dry_run: *dry_run,
                    force: *force,
                    template: *template,
                    vars: vars.clone(),
                },
            )
            .await
        }
        Commands::Init {
            dest,
            force,
            minimal,
            tool,
            yes,
        } => {
            init(
                dest,
                tool.as_ref(),
                InitOptions {
                    force: *force,
                    minimal: *minimal,
                    yes: *yes,
                },
            )
            .await
        }
        Commands::Migrate {
            command,
            skip_touched_files_check,
        } => match command {
            MigrateCommands::FromPackageJson { id } => {
                migrate::from_package_json(id, skip_touched_files_check).await
            }
            MigrateCommands::FromTurborepo => {
                migrate::from_turborepo(skip_touched_files_check).await
            }
        },
        Commands::Node { command } => match command {
            NodeCommands::RunScript { name, project } => node::run_script(name, project).await,
        },
        Commands::Project { id, json } => project(id, *json).await,
        Commands::ProjectGraph { id, dot, json } => project_graph(id, *dot, *json).await,
        Commands::Sync => sync().await,
        Commands::Query { command } => match command {
            QueryCommands::Projects {
                alias,
                affected,
                id,
                language,
                source,
                tasks,
                type_of,
            } => {
                query::projects(&QueryProjectsOptions {
                    alias: alias.clone(),
                    affected: *affected,
                    id: id.clone(),
                    language: language.clone(),
                    source: source.clone(),
                    tasks: tasks.clone(),
                    type_of: type_of.clone(),
                })
                .await
            }
            QueryCommands::TouchedFiles {
                base,
                default_branch,
                head,
                local,
                status,
            } => {
                query::touched_files(&mut QueryTouchedFilesOptions {
                    base: base.clone().unwrap_or_default(),
                    default_branch: *default_branch,
                    head: head.clone().unwrap_or_default(),
                    local: *local,
                    log: false,
                    status: status.clone(),
                })
                .await
            }
            QueryCommands::Tasks {
                alias,
                affected,
                id,
                language,
                source,
                tasks,
                type_of,
            } => {
                query::tasks(&QueryProjectsOptions {
                    alias: alias.clone(),
                    affected: *affected,
                    id: id.clone(),
                    language: language.clone(),
                    source: source.clone(),
                    tasks: tasks.clone(),
                    type_of: type_of.clone(),
                })
                .await
            }
        },
        Commands::Run {
            targets,
            affected,
            dependents,
            update_cache,
            status,
            passthrough,
            profile,
            remote,
        } => {
            run(
                targets,
                RunOptions {
                    affected: *affected,
                    concurrency: args.concurrency,
                    dependents: *dependents,
                    status: status.clone(),
                    passthrough: passthrough.clone(),
                    profile: profile.clone(),
                    remote: *remote,
                    update_cache: *update_cache,
                },
            )
            .await
        }
        Commands::Setup => setup().await,
        Commands::Teardown => teardown().await,
    };

    match version_check.await {
        Ok(Ok(Some(newer_version))) => {
            println!(
                "There's a new version of moon! {newer_version}. Go to https://moonrepo.dev/docs/install to install",
            );
        }
        Ok(Err(error)) => {
            debug!(
                "Failed to get current version of the cli from remote: {}",
                error
            );
        }
        Err(error) => {
            debug!("Failed to spawn check for current version: {}", error);
        }
        Ok(Ok(None)) => {}
    }

    if let Err(error) = result {
        let error_message = error.to_string();

        // Rust crashes with a broken pipe error by default,
        // so we unfortunately need to work around it with this hack!
        // https://github.com/rust-lang/rust/issues/46016
        if error_message.to_lowercase().contains("broken pipe") {
            std::process::exit(0);
        } else {
            Term::buffered_stderr().render_error(error);
        }
    }
}
