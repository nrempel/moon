import React from 'react';
// @ts-expect-error Ignore deep imports
import { Markdown } from 'docusaurus-plugin-typedoc-api/lib/components/Markdown';

const SUPPORTED = '🟩';
const PARTIALLY_SUPPORTED = '🟨';
const SIMILARLY_SUPPORTED = '🟦';
const NOT_SUPPORTED = '🟥';

type Comparable = 'moon' | 'nx' | 'turborepo';

interface Comparison {
	feature: string;
	support: Partial<Record<Comparable, string[] | string>>;
}

const headers: Comparable[] = ['moon', 'nx', 'turborepo'];

const workspaceRows: Comparison[] = [
	{
		feature: 'Written in',
		support: {
			moon: 'Rust',
			nx: 'Node.js',
			turborepo: 'Go (being rewritten in Rust)',
		},
	},
	{
		feature: 'Workspace configured with',
		support: {
			moon: '`.moon/workspace.yml`',
			nx: '`nx.json`',
			turborepo: '`turbo.json`',
		},
	},
	{
		feature: 'Project list configured in',
		support: {
			moon: '`.moon/workspace.yml`',
			nx: '`workspace.json`',
			turborepo: '`package.json` workspaces',
		},
	},
	{
		feature: 'Repo / folder structure',
		support: {
			moon: 'loose',
			nx: 'strict',
			turborepo: 'loose',
		},
	},
	{
		feature: 'Ignore file support',
		support: {
			nx: [SUPPORTED, '.nxignore'],
		},
	},
	{
		feature: 'Supports dependencies inherited by all tasks',
		support: {
			moon: [SUPPORTED, 'via `implicitDeps`'],
		},
	},
	{
		feature: 'Supports inputs inherited by all tasks',
		support: {
			moon: [SUPPORTED, 'via `implicitInputs`'],
			nx: [SUPPORTED, 'via `implicitDependencies`'],
			turborepo: [SUPPORTED, 'via `globalDependencies`'],
		},
	},
	{
		feature: 'Supports tasks inherited by all projects',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Integrates with a version control system',
		support: {
			moon: [SUPPORTED, 'git', PARTIALLY_SUPPORTED, 'svn (in dev)'],
			nx: [SUPPORTED, 'git'],
			turborepo: [SUPPORTED, 'git'],
		},
	},
	{
		feature: 'Supports scaffolding / generators',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
];

const toolchainRows: Comparison[] = [
	{
		feature: 'Supported languages',
		support: {
			moon: 'Bash, Batch, Bun, Deno, Go, Node, JavaScript, TypeScript, PHP, Ruby, Rust, Python',
			nx: 'JavaScript, TypeScript',
			turborepo: 'JavaScript, TypeScript',
		},
	},
	{
		feature: 'Supported dependency managers',
		support: {
			moon: 'npm, pnpm, yarn',
			nx: 'npm, pnpm, yarn',
			turborepo: 'npm, pnpm, yarn',
		},
	},
	{
		feature: 'Has a built-in toolchain',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Downloads and installs languages (when applicable)',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Configures explicit language/dependency manager versions',
		support: {
			moon: SUPPORTED,
		},
	},
];

const projectsRows: Comparison[] = [
	{
		feature: 'Dependencies on other projects',
		support: {
			moon: [SUPPORTED, 'implicit from `package.json` or explicit in `moon.yml`'],
			nx: [SUPPORTED, 'implicit from `package.json` or explicit in `project.json`'],
			turborepo: [SUPPORTED, 'implicit from `package.json`'],
		},
	},
	{
		feature: 'Ownership metadata',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Primary programming language',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Project type (app, lib, etc)',
		support: {
			moon: [SUPPORTED, 'app, lib, tool'],
			nx: [SUPPORTED, 'app, lib'],
		},
	},
	{
		feature: 'Project-level file groups',
		support: {
			moon: SUPPORTED,
			nx: [SUPPORTED, 'via `namedInputs`'],
		},
	},
	{
		feature: 'Project-level tasks',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
	{
		feature: 'Tags and scopes',
		support: {
			nx: SUPPORTED,
		},
	},
];

const tasksRows: Comparison[] = [
	{
		feature: 'Known as',
		support: {
			moon: 'tasks',
			nx: 'targets, executors',
			turborepo: 'tasks',
		},
	},
	{
		feature: 'Defines tasks in',
		support: {
			moon: '`moon.yml` or `package.json` scripts',
			nx: '`project.json` or `package.json` scripts',
			turborepo: '`package.json` scripts',
		},
	},
	{
		feature: 'Run a single task with',
		support: {
			moon: '`moon run project:task`',
			nx: '`nx run project:target`',
			turborepo: '`turbo run task --filter=project`',
		},
	},
	{
		feature: 'Run multiple tasks with',
		support: {
			moon: '`moon run :task` or `moon run a:task b:task` or `moon check`',
			nx: '`nx run-many --target=target`',
			turborepo: '`turbo run task` or `turbo run a b c`',
		},
	},
	{
		feature: 'Can define tasks globally',
		support: {
			moon: [SUPPORTED, 'with `.moon/tasks.yml`'],
		},
	},
	{
		feature: 'Merges or overrides global tasks',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Runs a command with args',
		support: {
			moon: SUPPORTED,
			nx: [SIMILARLY_SUPPORTED, 'behind an executor abstraction'],
			turborepo: [PARTIALLY_SUPPORTED, 'within the script'],
		},
	},
	{
		feature: 'Runs commands from',
		support: {
			moon: 'project or workspace root',
			nx: 'workspace root',
			turborepo: 'project root',
		},
	},
	{
		feature: 'Supports pipes, redirects, etc',
		support: {
			moon: [PARTIALLY_SUPPORTED, 'encapsulated in a file'],
			nx: [PARTIALLY_SUPPORTED, 'within the executor or script'],
			turborepo: [PARTIALLY_SUPPORTED, 'within the script'],
		},
	},
	{
		feature: 'Dependencies on other tasks',
		support: {
			moon: [SUPPORTED, 'via `deps`'],
			nx: [SUPPORTED, 'via `dependsOn`'],
			turborepo: [SUPPORTED, 'via `dependsOn`'],
		},
	},
	{
		feature: 'Can depend on arbitrary or unrelated tasks',
		support: {
			moon: SUPPORTED,
			nx: [NOT_SUPPORTED, 'dependent projects only'],
			turborepo: [NOT_SUPPORTED, 'dependent projects only'],
		},
	},
	{
		feature: 'Runs task dependencies in parallel',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
	{
		feature: 'Can run task dependencies in serial',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'File groups',
		support: {
			moon: SUPPORTED,
			nx: [SIMILARLY_SUPPORTED, 'via `namedInputs`'],
		},
	},
	{
		feature: 'Environment variables',
		support: {
			moon: [SUPPORTED, 'via `env`'],
			nx: [PARTIALLY_SUPPORTED, 'within the executor or script'],
			turborepo: [PARTIALLY_SUPPORTED, 'within the script'],
		},
	},
	{
		feature: 'Inputs',
		support: {
			moon: [SUPPORTED, 'files, globs, env vars'],
			nx: [SUPPORTED, 'files, globs, env vars, runtime'],
			turborepo: [SUPPORTED, 'files, globs'],
		},
	},
	{
		feature: 'Outputs',
		support: {
			moon: [SUPPORTED, 'files'],
			nx: [SUPPORTED, 'files, globs'],
			turborepo: [SUPPORTED, 'files'],
		},
	},
	{
		feature: 'Output logging style',
		support: {
			moon: [SUPPORTED, 'via `outputStyle`'],
			nx: [SUPPORTED, 'via `--output-style`'],
			turborepo: [SUPPORTED, 'via `outputMode`'],
		},
	},
	{
		feature: 'Custom hash inputs',
		support: {
			nx: [SUPPORTED, 'via `runtimeCacheInputs`'],
			turborepo: [SUPPORTED, 'via `globalDependencies`'],
		},
	},
	{
		feature: 'Token substitution',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Configuration presets',
		support: {
			nx: [SUPPORTED, 'via `configurations`'],
		},
	},
	{
		feature: 'Configurable options',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
];

const taskRunnerRows: Comparison[] = [
	{
		feature: 'Known as',
		support: {
			moon: 'action pipeline',
			nx: 'task runner',
			turborepo: 'pipeline',
		},
	},
	{
		feature: 'Generates a dependency graph',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
	{
		feature: 'Runs in topological order',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
	{
		feature: 'Automatically retries failed tasks',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Caches task outputs via a unique hash',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
	{
		feature: 'Can customize the underlying runner',
		support: {
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Can profile running tasks',
		support: {
			moon: [SUPPORTED, 'cpu, heap'],
			nx: [SUPPORTED, 'cpu'],
			turborepo: [SUPPORTED, 'cpu'],
		},
	},
	{
		feature: 'Can generate run reports',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Continuous integration (CI) support',
		support: {
			moon: SUPPORTED,
			nx: PARTIALLY_SUPPORTED,
			turborepo: PARTIALLY_SUPPORTED,
		},
	},
	{
		feature: 'Continuous deployment (CD) support',
		support: {},
	},
	{
		feature: 'Remote / cloud caching and syncing',
		support: {
			moon: [PARTIALLY_SUPPORTED, 'in beta (paid)'],
			nx: [SUPPORTED, 'with Nx cloud (paid)'],
			turborepo: [SUPPORTED, 'requires a Vercel account (free)'],
		},
	},
];

const generatorRows: Comparison[] = [
	{
		feature: 'Known as',
		support: {
			moon: 'generator',
			nx: 'generator',
			turborepo: 'n/a',
		},
	},
	{
		feature: 'Templates are configured with a schema',
		support: {
			moon: [SUPPORTED, 'via `template.yml`'],
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Template file extensions (optional)',
		support: {
			moon: [SUPPORTED, '.tera, .twig'],
		},
	},
	{
		feature: 'Template files support frontmatter',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Creates/copies files to destination',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Updates/merges with existing files',
		support: {
			moon: [SUPPORTED, 'JSON/YAML only'],
			nx: [SUPPORTED, 'using JavaScript'],
		},
	},
	{
		feature: 'Renders with a template engine',
		support: {
			moon: [SUPPORTED, 'via Tera'],
			nx: [SUPPORTED, 'via EJS'],
		},
	},
	{
		feature: 'Variable interpolation in file content',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Variable interpolation in file paths',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Can define variable values via interactive prompts',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Can define variable values via command line args',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Supports dry runs',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Supports render helpers, filters, and built-ins',
		support: {
			moon: SUPPORTED,
			nx: SUPPORTED,
		},
	},
	{
		feature: 'Generators can compose other generators',
		support: {
			nx: [SUPPORTED, 'using JavaScript'],
		},
	},
];

const otherSystemRows: Comparison[] = [
	{
		feature: 'Can send webhooks for critical pipeline events',
		support: {
			moon: SUPPORTED,
		},
	},
];

const javascriptRows: Comparison[] = [
	{
		feature: 'Will automatically install node modules when lockfile changes',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can automatically dedupe when lockfile changes',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can alias `package.json` names for projects',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can add `engines` constraint to root `package.json`',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can sync version manager configs (`.nvmrc`, etc)',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can sync cross-project dependencies to `package.json`',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can sync project references to applicable `tsconfig.json`',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can auto-create missing `tsconfig.json`',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can sync dependencies as `paths` to `tsconfig.json`',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Can route `outDir` to a shared cached in `tsconfig.json`',
		support: {
			moon: SUPPORTED,
		},
	},
];

const dockerRows: Comparison[] = [
	{
		feature: 'Efficient scaffolding for Dockerfile layer caching',
		support: {
			moon: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
	{
		feature: 'Automatic production-only dependency installation',
		support: {
			moon: SUPPORTED,
		},
	},
	{
		feature: 'Environment pruning to reduce image/container sizes',
		support: {
			moon: SUPPORTED,
			turborepo: SUPPORTED,
		},
	},
];

function isSupported(data?: string[] | string): boolean {
	if (!data) {
		return false;
	}

	return (
		data === SUPPORTED ||
		(data !== NOT_SUPPORTED && data !== PARTIALLY_SUPPORTED && data !== SIMILARLY_SUPPORTED) ||
		// eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
		(Array.isArray(data) && data[0] === SUPPORTED)
	);
}

function Cell({ content }: { content: string[] | string | undefined }) {
	if (!content) {
		return <>{NOT_SUPPORTED}</>;
	}

	// nbsp
	const markdown = Array.isArray(content) ? content.join(' \u00A0') : content;

	if (markdown === SUPPORTED || markdown === PARTIALLY_SUPPORTED) {
		return <>{markdown}</>;
	}

	return <Markdown content={markdown} />;
}

function Table({ rows }: { rows: Comparison[] }) {
	return (
		<table width="100%">
			<thead>
				<tr>
					<th />
					{headers.map((header) => (
						<th key={header} align="center">
							{header} ({rows.filter((row) => isSupported(row.support[header])).length})
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.feature}>
						<td>
							<Markdown content={row.feature} />
						</td>
						{headers.map((header) => (
							<td key={row.feature + header} align="center">
								<Cell content={row.support[header]} />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

function createTable(rows: Comparison[]) {
	return () => <Table rows={rows} />;
}

export const DockerTable = createTable(dockerRows);
export const GeneratorTable = createTable(generatorRows);
export const JavaScriptTable = createTable(javascriptRows);
export const OtherSystemsTable = createTable(otherSystemRows);
export const ProjectsTable = createTable(projectsRows);
export const TasksTable = createTable(tasksRows);
export const TaskRunnerTable = createTable(taskRunnerRows);
export const ToolchainTable = createTable(toolchainRows);
export const WorkspaceTable = createTable(workspaceRows);
