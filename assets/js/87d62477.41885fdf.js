"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9551],{5318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,g=u["".concat(d,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2189:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7378),r=t(3469),i=t(1792);function o(e){let{to:n}=e;return a.createElement("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(i.Z,{icon:r.dT$}))}},9022:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7378),r=t(9619);function i(e){let{header:n,updated:t,version:i}=e;return a.createElement(r.Z,{text:`v${i}`,variant:t?"success":"info",className:n?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7378),r=t(8944),i=t(1792);const o={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:n,icon:t,text:l,variant:d}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",d?o[d]:"bg-gray-100 text-gray-800",n)},t&&a.createElement(i.Z,{icon:t,className:"mr-1"}),l)}},9051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(5773),r=(t(7378),t(5318)),i=t(2189),o=t(9022);const l={title:"Webhooks",toc_max_heading_level:6},d=void 0,p={unversionedId:"guides/webhooks",id:"guides/webhooks",title:"Webhooks",description:"Looking to gather metrics for your pipelines? Gain insight into run durations and failures? Maybe",source:"@site/docs/guides/webhooks.mdx",sourceDirName:"guides",slug:"/guides/webhooks",permalink:"/docs/guides/webhooks",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/webhooks.mdx",tags:[],version:"current",frontMatter:{title:"Webhooks",toc_max_heading_level:6},sidebar:"guides",previous:{title:"Sharing workspace configuration",permalink:"/docs/guides/sharing-config"},next:{title:"Examples",permalink:"/docs/guides/examples"}},s={},c=[{value:"Payload structure",id:"payload-structure",level:2},{value:"Events",id:"events",level:2},{value:"Runner",id:"runner",level:3},{value:"<code>runner.started</code>",id:"runnerstarted",level:3},{value:"<code>runner.finished</code>",id:"runnerfinished",level:3},{value:"<code>runner.aborted</code>",id:"runneraborted",level:3},{value:"Actions",id:"actions",level:3},{value:"<code>action.started</code>",id:"actionstarted",level:3},{value:"<code>action.finished</code>",id:"actionfinished",level:3},{value:"<code>dependencies.installing</code>",id:"dependenciesinstalling",level:3},{value:"<code>dependencies.installed</code>",id:"dependenciesinstalled",level:3},{value:"<code>project.syncing</code>",id:"projectsyncing",level:3},{value:"<code>project.synced</code>",id:"projectsynced",level:3},{value:"<code>tool.installing</code>",id:"toolinstalling",level:3},{value:"<code>tool.installed</code>",id:"toolinstalled",level:3},{value:"<code>target.running</code>",id:"targetrunning",level:3},{value:"<code>target.ran</code>",id:"targetran",level:3},{value:"Targets",id:"targets",level:3},{value:"<code>target-output.cache-check</code>",id:"target-outputcache-check",level:3},{value:"<code>target-output.archiving</code>",id:"target-outputarchiving",level:3},{value:"<code>target-output.archived</code>",id:"target-outputarchived",level:3},{value:"<code>target-output.hydrating</code>",id:"target-outputhydrating",level:3},{value:"<code>target-output.hydrated</code>",id:"target-outputhydrated",level:3}],u={toc:c};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{header:!0,version:"0.17",mdxType:"VersionLabel"}),(0,r.kt)("p",null,"Looking to gather metrics for your pipelines? Gain insight into run durations and failures? Maybe\nyou want to send Slack or Discord notifications? With our webhooks, all of these are possible!"),(0,r.kt)("p",null,"When the ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#webhookurl"},(0,r.kt)("inlineCode",{parentName:"a"},"notifier.webhookUrl"))," setting is configured with an HTTPS\nURL, and moon is running in a CI environment, moon will POST a payload to this endpoint for every\nevent in our pipeline."),(0,r.kt)("h2",{id:"payload-structure"},"Payload structure"),(0,r.kt)("p",null,"Every webhook event is posted with the following request body, known as a payload."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - The type of ",(0,r.kt)("a",{parentName:"li",href:"#events"},"event"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event")," - The event specific payload. View each event for an example of their structure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createdAt")," - When the event was created, as a UTC timestamp in ISO 8601 (RFC 3339) format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," - A unique identifier for all webhooks in the current run batch.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "...",\n  "event": {\n    // ...\n  },\n  "createdAt": "...",\n  "uuid": "..."\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," field can be used to differentiate concurrently running pipelines!")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"runner"},"Runner"),(0,r.kt)("p",null,"Runs actions within moon using a robust dependency graph. Is triggered when using\n",(0,r.kt)("a",{parentName:"p",href:"../commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run")),"."),(0,r.kt)("h3",{id:"runnerstarted"},(0,r.kt)("inlineCode",{parentName:"h3"},"runner.started")),(0,r.kt)(i.Z,{to:"/api/types#PayloadRunnerStarted",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when the runner has been created but before actions have started to run."),(0,r.kt)("p",null,"This event includes the number of actions registered within the runner, but does not provide\ndetailed information about the actions. Use the ",(0,r.kt)("a",{parentName:"p",href:"#actionstarted"},(0,r.kt)("inlineCode",{parentName:"a"},"action.*"))," events for this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "runner.started",\n  "createdAt": "...",\n  "event": {\n    "actionsCount": 15\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"runnerfinished"},(0,r.kt)("inlineCode",{parentName:"h3"},"runner.finished")),(0,r.kt)(i.Z,{to:"/api/types#PayloadRunnerFinished",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when the runner has finished running all actions, with aggregated counts based on final\nstatus."),(0,r.kt)("p",null,"This event is ",(0,r.kt)("em",{parentName:"p"},"not")," triggered if the runner crashes (this does not include actions that have failed,\nas those are legitimate runs). Use the ",(0,r.kt)("a",{parentName:"p",href:"#runneraborted"},(0,r.kt)("inlineCode",{parentName:"a"},"runner.aborted"))," event if you want to also\ncatch crashes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "runner.finished",\n  "createdAt": "...",\n  "event": {\n    "cachedCount": 10,\n    "duration": {\n      "secs": 120,\n      "nanos": 3591693\n    },\n    "failedCount": 1,\n    "passedCount": 4\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"runneraborted"},(0,r.kt)("inlineCode",{parentName:"h3"},"runner.aborted")),(0,r.kt)(i.Z,{to:"/api/types#PayloadRunnerAborted",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when the runner has crashed for unknown reasons, or had to abort as a result of a critical\naction failing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "runner.aborted",\n  "createdAt": "...",\n  "event": {\n    "error": "..."\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,'Actions are "jobs" within the runner that are executed topologically.'),(0,r.kt)("h3",{id:"actionstarted"},(0,r.kt)("inlineCode",{parentName:"h3"},"action.started")),(0,r.kt)(i.Z,{to:"/api/types#PayloadActionStarted",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when an action within the runner has started to run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "action.started",\n  "createdAt": "...",\n  "event": {\n    "action": {\n      "attempts": null,\n      "createdAt": "...",\n      "duration": {\n        "secs": 0,\n        "nanos": 3591693\n      },\n      "error": null,\n      "label": "InstallNodeDeps(18.0.0)",\n      "nodeIndex": 5,\n      "status": "passed"\n    },\n    "node": {\n      "action": "InstallDeps",\n      "params": [\n        {\n          "platform": "Node",\n          "version": "18.0.0"\n        }\n      ]\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"actionfinished"},(0,r.kt)("inlineCode",{parentName:"h3"},"action.finished")),(0,r.kt)(i.Z,{to:"/api/types#PayloadActionFinished",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when an action within the runner has finished running, either with a success or failure.\nIf the action failed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," field will be set with the error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "action.finished",\n  "createdAt": "...",\n  "event": {\n    "action": {\n      "attempts": null,\n      "createdAt": "...",\n      "duration": {\n        "secs": 0,\n        "nanos": 3591693\n      },\n      "error": null,\n      "label": "InstallNodeDeps(18.0.0)",\n      "nodeIndex": 5,\n      "status": "passed"\n    },\n    "error": null,\n    "node": {\n      "action": "InstallDeps",\n      "params": {\n        "platform": "Node",\n        "version": "18.0.0"\n      }\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"dependenciesinstalling"},(0,r.kt)("inlineCode",{parentName:"h3"},"dependencies.installing")),(0,r.kt)(i.Z,{to:"/api/types#PayloadDependenciesInstalling",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when dependencies for a workspace or project have started to install. When targeting a\nproject, the ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," field will be set, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for the entire workspace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dependencies.installing",\n  "createdAt": "...",\n  "event": {\n    "project": {\n      "id": "server"\n      // ...\n    },\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"dependenciesinstalled"},(0,r.kt)("inlineCode",{parentName:"h3"},"dependencies.installed")),(0,r.kt)(i.Z,{to:"/api/types#PayloadDependenciesInstalled",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when dependencies for a workspace or project have finished installing. When targeting a\nproject, the ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," field will be set, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," for the entire workspace. If the install\nfailed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," field will be set with the error message."),(0,r.kt)("p",null,"For more information about the action, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#actionfinished"},(0,r.kt)("inlineCode",{parentName:"a"},"action.finished"))," event.\nInstalled deps can be scoped with the ",(0,r.kt)("inlineCode",{parentName:"p"},"InstallDeps(...)")," labels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "dependencies.installed",\n  "createdAt": "...",\n  "event": {\n    "error": null,\n    "project": null,\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"projectsyncing"},(0,r.kt)("inlineCode",{parentName:"h3"},"project.syncing")),(0,r.kt)(i.Z,{to:"/api/types#PayloadProjectSyncing",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when an affected project has started syncing its workspace state. This occurs\nautomatically before a project's task is ran."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project.syncing",\n  "createdAt": "...",\n  "event": {\n    "project": {\n      "id": "client"\n      // ...\n    },\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"projectsynced"},(0,r.kt)("inlineCode",{parentName:"h3"},"project.synced")),(0,r.kt)(i.Z,{to:"/api/types#PayloadProjectSynced",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when an affected project has finished syncing. If the sync failed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," field will\nbe set with the error message."),(0,r.kt)("p",null,"For more information about the action, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#actionfinished"},(0,r.kt)("inlineCode",{parentName:"a"},"action.finished"))," event.\nSynced projects can be scoped with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncProject(...)")," labels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project.synced",\n  "createdAt": "...",\n  "event": {\n    "error": null,\n    "project": {\n      "id": "client"\n      // ...\n    },\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"toolinstalling"},(0,r.kt)("inlineCode",{parentName:"h3"},"tool.installing")),(0,r.kt)(i.Z,{to:"/api/types#PayloadToolInstalling",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when a tool within the toolchain has started downloading and installing."),(0,r.kt)("p",null,"This event is ",(0,r.kt)("em",{parentName:"p"},"always")," triggered, regardless of whether the tool has already been installed or not.\nFor an accurate state, use the ",(0,r.kt)("a",{parentName:"p",href:"#actionfinished"},(0,r.kt)("inlineCode",{parentName:"a"},"action.finished"))," event. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),' is\n"skipped", then the tool was already installed.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "tool.installing",\n  "createdAt": "...",\n  "event": {\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"toolinstalled"},(0,r.kt)("inlineCode",{parentName:"h3"},"tool.installed")),(0,r.kt)(i.Z,{to:"/api/types#PayloadToolInstalled",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when a tool within the toolchain has finished installing. If the install failed, the\n",(0,r.kt)("inlineCode",{parentName:"p"},"error")," field will be set with the error message."),(0,r.kt)("p",null,"For more information about the action, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#actionfinished"},(0,r.kt)("inlineCode",{parentName:"a"},"action.finished"))," event.\nTools can be scoped with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SetupTool(...)")," labels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "tool.installed",\n  "createdAt": "...",\n  "event": {\n    "error": null,\n    "runtime": {\n      "platform": "Node",\n      "version": "18.0.0"\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"targetrunning"},(0,r.kt)("inlineCode",{parentName:"h3"},"target.running")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetRunning",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when a ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"target")," has started to run (via\n",(0,r.kt)("a",{parentName:"p",href:"../commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run")),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target.running",\n  "createdAt": "...",\n  "event": {\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"targetran"},(0,r.kt)("inlineCode",{parentName:"h3"},"target.ran")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetRan",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when a ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"target")," has finished running. If the run failed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\nfield will be set with the error message."),(0,r.kt)("p",null,"For more information about the action, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#actionfinished"},(0,r.kt)("inlineCode",{parentName:"a"},"action.finished"))," event. Ran\ntargets can be scoped with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunTarget(...)")," labels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target.ran",\n  "createdAt": "...",\n  "event": {\n    "error": null,\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"targets"},"Targets"),(0,r.kt)("p",null,"Targets to run. Each event contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," field, that is a unique SHA-256 identifier for the the\ntarget's hashed contents."),(0,r.kt)("h3",{id:"target-outputcache-check"},(0,r.kt)("inlineCode",{parentName:"h3"},"target-output.cache-check")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetOutputCacheCheck",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when the runner is checking for a cached archive of the currently running target."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target-output.cache-check",\n  "createdAt": "...",\n  "event": {\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "target": "app:build"\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"target-outputarchiving"},(0,r.kt)("inlineCode",{parentName:"h3"},"target-output.archiving")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetOutputArchiving",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when the ",(0,r.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs")," of a task are being cached into a tarball\narchive. This archive will be stored within ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache/outputs")," on the host machine."),(0,r.kt)("p",null,"This event ",(0,r.kt)("em",{parentName:"p"},"does not")," trigger if the task has no ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target-output.archiving",\n  "createdAt": "...",\n  "event": {\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"target-outputarchived"},(0,r.kt)("inlineCode",{parentName:"h3"},"target-output.archived")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetOutputArchived",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when the ",(0,r.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs")," of a task have been archived and stored in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache/outputs")," directory. The ",(0,r.kt)("inlineCode",{parentName:"p"},"archivePath")," field is an absolute path to this archive,\n",(0,r.kt)("em",{parentName:"p"},"but")," is unique to the host machine that the target ran on."),(0,r.kt)("p",null,"This event ",(0,r.kt)("em",{parentName:"p"},"does not")," trigger if ",(0,r.kt)("a",{parentName:"p",href:"#targetoutputarchiving"},(0,r.kt)("inlineCode",{parentName:"a"},"target-output.archiving"))," did not run or\nfailed to run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target-output.archived",\n  "createdAt": "...",\n  "event": {\n    "archivePath": "...",\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"target-outputhydrating"},(0,r.kt)("inlineCode",{parentName:"h3"},"target-output.hydrating")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetOutputHydrating",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when a target has a cache hit for the generated hash (a cached archive exists on the local\nfile system) and the archive is being unpacked into the project directory at the defined\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#outputs"},"outputs"),"."),(0,r.kt)("p",null,"This event ",(0,r.kt)("em",{parentName:"p"},"does not")," trigger if the task has no ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),", or there was a cache miss (no matching\narchive)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target-output.hydrating",\n  "createdAt": "...",\n  "event": {\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n')),(0,r.kt)("h3",{id:"target-outputhydrated"},(0,r.kt)("inlineCode",{parentName:"h3"},"target-output.hydrated")),(0,r.kt)(i.Z,{to:"/api/types#PayloadTargetOutputHydrated",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"Triggered when a target has hydrated a project with the contents of a cached archive. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"archivePath")," field is an absolute path to this archive, ",(0,r.kt)("em",{parentName:"p"},"but")," is unique to the host machine that\nthe target ran on."),(0,r.kt)("p",null,"This event ",(0,r.kt)("em",{parentName:"p"},"does not")," trigger if ",(0,r.kt)("a",{parentName:"p",href:"#targetoutputhydrating"},(0,r.kt)("inlineCode",{parentName:"a"},"target-output.hydrating"))," did not run or\nfailed to run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "target-output.hydrated",\n  "createdAt": "...",\n  "event": {\n    "archivePath": "...",\n    "hash": "1f5205cdb0912e97190e08a6cf98e41804bf6824b0a325d315e8b488a12677b0",\n    "project": {\n      "id": "app"\n      // ...\n    },\n    "target": "app:build",\n    "task": {\n      "id": "build"\n      // ...\n    }\n  },\n  "uuid": "..."\n}\n')))}h.isMDXComponent=!0}}]);