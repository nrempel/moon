"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3358],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8109:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7378);function o(e){let{src:t,width:n="90%",alt:o="",title:i,align:a="center",padding:s="1rem"}=e;return r.createElement("div",{style:{paddingBottom:s,paddingTop:s,textAlign:a}},r.createElement("img",{src:t.default,width:n,alt:o,title:i}))}},4722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(5773),o=(n(7378),n(5318)),i=n(8109);const a={title:"Open source usage"},s=void 0,l={unversionedId:"guides/open-source",id:"guides/open-source",title:"Open source usage",description:"Although moon was designed for large monorepos, it can also be used for open source projects,",source:"@site/docs/guides/open-source.mdx",sourceDirName:"guides",slug:"/guides/open-source",permalink:"/docs/guides/open-source",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/open-source.mdx",tags:[],version:"current",frontMatter:{title:"Open source usage"},sidebar:"guides",previous:{title:"Docker usage",permalink:"/docs/guides/docker"},next:{title:"Task profiling",permalink:"/docs/guides/profile"}},c={},u=[{value:"Reporting run results",id:"reporting-run-results",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although moon was designed for large monorepos, it can also be used for open source projects,\nespecially when coupled with our ",(0,o.kt)("a",{parentName:"p",href:"./ci"},"built-in continuous integration support"),"."),(0,o.kt)("p",null,"However, a pain point with moon is that it only supports a single Node.js version within its\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/toolchain"},"toolchain"),", but open source projects typically need to run checks against\nmultiple Node.js versions! To mitigate this problem, we built the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/tool-version-action"},(0,o.kt)("inlineCode",{parentName:"a"},"moonrepo/tool-version-action"))," GitHub Action,\nwhich will override the Node.js version configured in the workspace."),(0,o.kt)("p",null,"This action works best when paired with a matrix, as demonstrated below!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"name: 'Pipeline'\non:\n  push:\n    branches:\n      - 'master'\n  pull_request:\njobs:\n  ci:\n    name: 'CI'\n    runs-on: ${{ matrix.os }}\n    strategy:\n      matrix:\n        os: ['ubuntu-latest', 'windows-latest']\n        node-version: [14, 16, 18]\n    steps:\n      # Checkout repository\n      - uses: 'actions/checkout@v3'\n        with:\n          fetch-depth: 0\n      # Install Node.js so we can install dependencies\n      - uses: 'actions/setup-node@v3'\n        with:\n          cache: 'yarn'\n      # Set Node.js version to use in moon\n      - uses: 'moonrepo/tool-version-action@v1'\n        with:\n          node: ${{ matrix.node-version }}\n      # Install dependencies\n      - run: 'yarn install --immutable'\n      # Run moon and affected tasks\n      - run: 'yarn moon ci'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, we only have a solution for GitHub actions, but the same mechanism can be applied to\nother CI environments by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"MOON_NODE_VERSION")," environment variable.")),(0,o.kt)("h2",{id:"reporting-run-results"},"Reporting run results"),(0,o.kt)("p",null,"We also suggest using our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/moon-ci-run-reports"},(0,o.kt)("inlineCode",{parentName:"a"},"moonrepo/run-report-action"))," GitHub\naction. This action will report the results of a ",(0,o.kt)("a",{parentName:"p",href:"../commands/ci"},(0,o.kt)("inlineCode",{parentName:"a"},"moon ci"))," run to a pull request\nas a comment and workflow summary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"# ...\njobs:\n  ci:\n    name: 'CI'\n    runs-on: 'ubuntu-latest'\n    steps:\n      # ...\n      - run: 'yarn moon ci'\n      - uses: 'moonrepo/run-report-action@v1'\n        if: success() || failure()\n        with:\n          access-token: ${{ secrets.GITHUB_TOKEN }}\n")),(0,o.kt)("p",null,"The report looks something like the following:"),(0,o.kt)(i.Z,{src:n(3432),width:"60%",mdxType:"Image"}))}m.isMDXComponent=!0},3432:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/run-report-41cffa17cd530ab8cca5cef47b38dcfd.png"}}]);