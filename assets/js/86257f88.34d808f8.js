"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1795],{6981:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>P,contentTitle:()=>J,default:()=>M,frontMatter:()=>I,metadata:()=>A,toc:()=>W});var r=o(5773),n=o(7378),a=o(5318),s=o(7279);const p="\ud83d\udfe9",i="\ud83d\udfe8",u="\ud83d\udfe6",l=["moon","nx","turborepo"],m=[{feature:"Written in",support:{moon:"Rust",nx:"Node.js",turborepo:"Go"}},{feature:"Workspace configured with",support:{moon:"`.moon/workspace.yml`",nx:"`nx.json`",turborepo:"`turbo.json`"}},{feature:"Projects configured in",support:{moon:"`.moon/workspace.yml`",nx:"`workspace.json`",turborepo:"`package.json` workspaces"}},{feature:"Repo / folder structure",support:{moon:"loose",nx:"strict",turborepo:"loose"}},{feature:"Ignore file support",support:{nx:[p,".nxignore"]}},{feature:"Supports dependencies inherited by all tasks",support:{moon:[p,"via `implicitDeps`"]}},{feature:"Supports inputs inherited by all tasks",support:{moon:[p,"via `implicitInputs`"],nx:[p,"via `implicitDependencies`"],turborepo:[p,"via `globalDependencies`"]}},{feature:"Supports tasks inherited by all projects",support:{moon:p}},{feature:"Integrates with a version control system",support:{moon:[p,"git",i,"svn"],nx:[p,"git"],turborepo:[p,"git"]}},{feature:"Supports scaffolding / generators",support:{moon:p,nx:p}}],c=[{feature:"Supported languages",support:{moon:"Bash, Batch, JavaScript, TypeScript",nx:"JavaScript, TypeScript",turborepo:"JavaScript, TypeScript"}},{feature:"Supported package managers",support:{moon:"npm, pnpm, yarn",nx:"npm, pnpm, yarn",turborepo:"npm, pnpm, yarn"}},{feature:"Has a built-in toolchain",support:{moon:p}},{feature:"Downloads and installs languages (when applicable)",support:{moon:p}},{feature:"Configures explicit language/package manager versions",support:{moon:p}}],d=[{feature:"Dependencies on other projects",support:{moon:[p,"implicit from `package.json` or explicit in `moon.yml`"],nx:[p,"implicit from `package.json` or explicit in `project.json`"],turborepo:[p,"implicit from `package.json`"]}},{feature:"Ownership metadata",support:{moon:p}},{feature:"Primary programming language",support:{moon:p}},{feature:"Project type (app, lib, etc)",support:{moon:[p,"app, lib, tool"],nx:[p,"app, lib"]}},{feature:"Project-level file groups",support:{moon:p,nx:[p,"via `namedInputs`"]}},{feature:"Project-level tasks",support:{moon:p,nx:p,turborepo:p}},{feature:"Tags and scopes",support:{nx:p}}],f=[{feature:"Known as",support:{moon:"tasks",nx:"targets, executors",turborepo:"tasks"}},{feature:"Defines tasks in",support:{moon:"`moon.yml` or `package.json` scripts",nx:"`project.json` or `package.json` scripts",turborepo:"`package.json` scripts"}},{feature:"Run a single task with",support:{moon:"`moon run project:task`",nx:"`nx run project:target`",turborepo:"`turbo run task --filter=project`"}},{feature:"Run multiple tasks with",support:{moon:"`moon run :task` or `moon run a:task b:task ...` or `moon check`",nx:"`nx run-many --target=target`",turborepo:"`turbo run task`"}},{feature:"Can define tasks globally",support:{moon:[p,"with `.moon/project.yml`"]}},{feature:"Merges or overrides global tasks",support:{moon:p}},{feature:"Runs a command with args",support:{moon:p,nx:[u,"behind an executor abstraction"],turborepo:[i,"within the script"]}},{feature:"Runs commands from",support:{moon:"project or workspace root",nx:"workspace root",turborepo:"project root"}},{feature:"Supports pipes, redirects, etc",support:{moon:[i,"encapsulated in a file"],nx:[i,"within the executor or script"],turborepo:[i,"within the script"]}},{feature:"Dependencies on other tasks",support:{moon:[p,"via `deps`"],nx:[p,"via `dependsOn`"],turborepo:[p,"via `dependsOn`"]}},{feature:"Runs task dependencies in parallel",support:{moon:p,nx:p,turborepo:p}},{feature:"Can run task dependencies in serial",support:{moon:p}},{feature:"File groups",support:{moon:p,nx:[u,"via `namedInputs`"]}},{feature:"Environment variables",support:{moon:[p,"via `env`"],nx:[i,"within the executor or script"],turborepo:[i,"within the script"]}},{feature:"Inputs",support:{moon:[p,"files, globs, env vars"],nx:[p,"files, globs, env vars, runtime"],turborepo:[p,"files, globs"]}},{feature:"Outputs",support:{moon:[p,"files"],nx:[p,"files, globs"],turborepo:[p,"files"]}},{feature:"Output logging style",support:{moon:[p,"via `outputStyle`"],nx:[p,"via `--output-style`"],turborepo:[p,"via `outputMode`"]}},{feature:"Custom hash inputs",support:{nx:[p,"via `runtimeCacheInputs`"],turborepo:[p,"via `globalDependencies`"]}},{feature:"Token substitution",support:{moon:p}},{feature:"Configuration presets",support:{nx:[p,"via `configurations`"]}},{feature:"Configurable options",support:{moon:p,nx:p,turborepo:p}}],h=[{feature:"Known as",support:{moon:"action or task runner",nx:"task runner",turborepo:"pipeline"}},{feature:"Generates a dependency graph",support:{moon:p,nx:p,turborepo:p}},{feature:"Runs in topological order",support:{moon:p,nx:p,turborepo:p}},{feature:"Automatically retries failed tasks",support:{moon:p}},{feature:"Caches task outputs via a unique hash",support:{moon:p,nx:p,turborepo:p}},{feature:"Can customize the underlying runner",support:{nx:p}},{feature:"Can profile running tasks",support:{moon:[p,"cpu, heap"],nx:[p,"cpu"],turborepo:[p,"cpu"]}},{feature:"Can generate run reports",support:{moon:p}},{feature:"Continuous integration (CI) support",support:{moon:p,nx:i,turborepo:i}},{feature:"Continuous deployment (CD) support",support:{}},{feature:"Remote / cloud caching and syncing",support:{nx:[p,"with Nx cloud (paid)"],turborepo:[p,"requires a Vercel account (free)"]}}],g=[{feature:"Known as",support:{moon:"generator",nx:"generator",turborepo:"n/a"}},{feature:"Templates are configured with a schema",support:{moon:[p,"via `template.yml`"],nx:p}},{feature:"Template file extensions (optional)",support:{moon:[p,".tera, .twig"]}},{feature:"Template files support frontmatter",support:{moon:p}},{feature:"Creates/copies files to destination",support:{moon:p,nx:p}},{feature:"Updates/merges with existing files",support:{nx:[p,"using JavaScript"]}},{feature:"Renders with a template engine",support:{moon:[p,"via Tera"],nx:[p,"via EJS"]}},{feature:"Variable interpolation in file content",support:{moon:p,nx:p}},{feature:"Variable interpolation in file paths",support:{moon:p,nx:p}},{feature:"Can define variable values via interactive prompts",support:{moon:p,nx:p}},{feature:"Can define variable values via command line args",support:{moon:p}},{feature:"Supports dry runs",support:{moon:p,nx:p}},{feature:"Supports render helpers, filters, and built-ins",support:{moon:p,nx:p}},{feature:"Generators can compose other generators",support:{nx:[p,"using JavaScript"]}}],k=[{feature:"Can send webhooks for critical pipeline events",support:{moon:p}}],b=[{feature:"Will automatically install node modules when lockfile changes",support:{moon:p}},{feature:"Can automatically dedupe when lockfile changes",support:{moon:p}},{feature:"Can alias `package.json` names for projects",support:{moon:p}},{feature:"Can add `engines` constraint to root `package.json`",support:{moon:p}},{feature:"Can sync version manager configs (`.nvmrc`, etc)",support:{moon:p}},{feature:"Can sync cross-project dependencies to `package.json`",support:{moon:p}},{feature:"Can sync project references to applicable `tsconfig.json`",support:{moon:p}},{feature:"Can auto-create missing `tsconfig.json`",support:{moon:p}},{feature:"Can sync dependencies as `paths` to `tsconfig.json`",support:{moon:p}},{feature:"Can route `outDir` to a shared cached in `tsconfig.json`",support:{moon:p}}];function v(e){let{content:t}=e;if(!t)return n.createElement(n.Fragment,null,"\ud83d\udfe5");const o=Array.isArray(t)?t.join(" \xa0"):t;return o===p||o===i?n.createElement(n.Fragment,null,o):n.createElement(s.Markdown,{content:o})}function y(e){let{rows:t}=e;return n.createElement("table",{width:"100%"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null),l.map((e=>n.createElement("th",{key:e,align:"center"},e," (",t.filter((t=>{return!!(o=t.support[e])&&(o===p||"\ud83d\udfe5"!==o&&o!==i&&o!==u||Array.isArray(o)&&o[0]===p);var o})).length,")"))))),n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.feature},n.createElement("td",null,n.createElement(s.Markdown,{content:e.feature})),l.map((t=>n.createElement("td",{key:e.feature+t,align:"center"},n.createElement(v,{content:e.support[t]})))))))))}function x(e){return()=>n.createElement(y,{rows:e})}const w=x([{feature:"Efficient scaffolding for Dockerfile layer caching",support:{moon:p,turborepo:p}},{feature:"Automatic production-only dependency installation",support:{moon:p}},{feature:"Environment pruning to reduce image/container sizes",support:{moon:p,turborepo:p}}]),j=x(g),T=x(b),C=x(k),S=x(d),N=x(f),E=x(h),D=x(c),R=x(m),I={title:"Feature comparison"},J=void 0,A={unversionedId:"comparison",id:"comparison",title:"Feature comparison",description:"The following comparisons are not an exhaustive list of features, and may be inaccurate or out of",source:"@site/docs/comparison.mdx",sourceDirName:".",slug:"/comparison",permalink:"/docs/comparison",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/comparison.mdx",tags:[],version:"current",frontMatter:{title:"Feature comparison"},sidebar:"docs",previous:{title:"teardown",permalink:"/docs/commands/teardown"},next:{title:"Terminology",permalink:"/docs/terminology"}},P={},W=[{value:"Questions",id:"questions",level:2},{value:"moon versus competitors?",id:"moon-versus-competitors",level:3},{value:"What about Lerna?",id:"what-about-lerna",level:3},{value:"Comparison tables",id:"comparison-tables",level:2},{value:"Workspace",id:"workspace",level:3},{value:"Toolchain",id:"toolchain",level:3},{value:"Projects",id:"projects",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Runner",id:"runner",level:3},{value:"Generator",id:"generator",level:3},{value:"Other systems",id:"other-systems",level:3},{value:"JavaScript ecosystem",id:"javascript-ecosystem",level:3},{value:"Docker integration",id:"docker-integration",level:3}],O={toc:W};function M(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},O,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following comparisons are ",(0,a.kt)("em",{parentName:"p"},"not")," an exhaustive list of features, and may be inaccurate or out of\ndate, but represent a good starting point for investigation. If something is not correct, please\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/issues"},"create an issue")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/blob/master/website/src/components/ComparisonTable.tsx"},"submit a patch"),"."),(0,a.kt)("p",null,"Before diving into our comparisons below, we highly suggest reading\n",(0,a.kt)("a",{parentName:"p",href:"https://monorepo.tools/"},"monorepo.tools")," for a deeper insight into monorepos and available tooling.\nAlthough moon is not included, it's a great resource for learning about the current state of things\nand the ecosystem."),(0,a.kt)("h2",{id:"questions"},"Questions"),(0,a.kt)("h3",{id:"moon-versus-competitors"},"moon versus competitors?"),(0,a.kt)("p",null,"moon is currently in its infancy (we're not even at v1 yet), and as such, we're missing some very\nimportant features like cloud caching. Once we've progressed further, we will provide more in-depth\narticles comparing moon to other tools, but in the meantime, what we ",(0,a.kt)("em",{parentName:"p"},"do offer")," that others do not\nis:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An integrated toolchain, ensuring the same version of Node.js (and other tools) is used across all\nmachines."),(0,a.kt)("li",{parentName:"ul"},"Automation of common JavaScript problems, like ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies, ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"\nproject references, and more."),(0,a.kt)("li",{parentName:"ul"},"Easy task declaration and inheritance across the entire workspace. Define a task once for ",(0,a.kt)("em",{parentName:"li"},"all"),"\nprojects."),(0,a.kt)("li",{parentName:"ul"},"First-class continuous integration (CI) support.")),(0,a.kt)("p",null,"With that being said, we also suggest these wonderful articles provided by the community:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azu.github.io/slide/2022/moa/moon-packemon.html"},"A review of moon + Packemon")," by\n",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/azu_re"},"azu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/improve-repo-management-moon/"},"Improve repo management with moon")," by\n",(0,a.kt)("a",{parentName:"li",href:"https://jamesinkala.com/"},"James Sinkala"))),(0,a.kt)("h3",{id:"what-about-lerna"},"What about Lerna?"),(0,a.kt)("p",null,"Lerna was a fantastic tool that helped the JavaScript ecosystem grow and excelled at package\nversioning and publishing (and still does), but it offered a very rudimentary build system. While\nLerna was able to run scripts in parallel, it wasn't the most efficient, as it did not support\ncaching, hashing, or performant scheduling."),(0,a.kt)("p",null,"However, the reason Lerna is not compared below, is that Lerna was unowned and maintained for quite\nsome time, and has recently fallen under the Nx umbrella."),(0,a.kt)("h2",{id:"comparison-tables"},"Comparison tables"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\ud83d\udfe9 Supported"),(0,a.kt)("td",null,"\ud83d\udfe8 Partially supported"),(0,a.kt)("td",null,"\ud83d\udfe6 Similarly supported"),(0,a.kt)("td",null,"\ud83d\udfe5 Not supported"))),(0,a.kt)("h3",{id:"workspace"},"Workspace"),(0,a.kt)(R,{mdxType:"WorkspaceTable"}),(0,a.kt)("h3",{id:"toolchain"},"Toolchain"),(0,a.kt)(D,{mdxType:"ToolchainTable"}),(0,a.kt)("h3",{id:"projects"},"Projects"),(0,a.kt)(S,{mdxType:"ProjectsTable"}),(0,a.kt)("h3",{id:"tasks"},"Tasks"),(0,a.kt)(N,{mdxType:"TasksTable"}),(0,a.kt)("h3",{id:"runner"},"Runner"),(0,a.kt)(E,{mdxType:"TaskRunnerTable"}),(0,a.kt)("h3",{id:"generator"},"Generator"),(0,a.kt)(j,{mdxType:"GeneratorTable"}),(0,a.kt)("h3",{id:"other-systems"},"Other systems"),(0,a.kt)(C,{mdxType:"OtherSystemsTable"}),(0,a.kt)("h3",{id:"javascript-ecosystem"},"JavaScript ecosystem"),(0,a.kt)(T,{mdxType:"JavaScriptTable"}),(0,a.kt)("h3",{id:"docker-integration"},"Docker integration"),(0,a.kt)(w,{mdxType:"DockerTable"}))}M.isMDXComponent=!0}}]);