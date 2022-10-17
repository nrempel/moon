"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3380],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8109:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7378);function o(e){let{src:t,width:n="90%",alt:o="",title:i,align:a="center",padding:l="1rem"}=e;return r.createElement("div",{style:{paddingBottom:l,paddingTop:l,textAlign:a}},r.createElement("img",{src:t.default,width:n,alt:o,title:i}))}},2136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(5773),o=(n(7378),n(5318)),i=n(8109);const a={slug:"vscode-extension",title:"New VS Code extension!",authors:["milesj"],tags:["editors","vscode"]},l=void 0,s={permalink:"/blog/vscode-extension",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-17_vscode-extension.mdx",source:"@site/blog/2022-10-17_vscode-extension.mdx",title:"New VS Code extension!",description:"We're very excited to announce the initial release of our Visual Studio Code extension!",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"editors",permalink:"/blog/tags/editors"},{label:"vscode",permalink:"/blog/tags/vscode"}],readingTime:.645,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"vscode-extension",title:"New VS Code extension!",authors:["milesj"],tags:["editors","vscode"]},nextItem:{title:"v0.16 - Per-project tool versions and TypeScript impovements",permalink:"/blog/v0.16"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're very excited to announce the initial release of our Visual Studio Code extension!"),(0,o.kt)("p",null,"If you're a huge VS Code fan like us, you most likely use extensions in your everyday workflow. We\nwant to enhance this experience by providing a fully integrated and interactive moon console! Here's\na preview of what it looks like:"),(0,o.kt)(i.Z,{src:n(958),width:"40%",mdxType:"Image"}),(0,o.kt)("p",null,"Excited?? Want to learn more? Check out the official\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=moonrepo.moon-console"},"moonrepo.moon-console"),"\nmarketplace page, or read the ",(0,o.kt)("a",{parentName:"p",href:"../docs/editors/vscode"},"official documentation"),". This is only the\nfirst iteration of the extension. Expect more advanced features in the future, like..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Schema validation for configuration files"),(0,o.kt)("li",{parentName:"ul"},"Autocompletion for configuration files"),(0,o.kt)("li",{parentName:"ul"},"Automatic running/building of projects in the background"),(0,o.kt)("li",{parentName:"ul"},"File type association"),(0,o.kt)("li",{parentName:"ul"},"Integrated language server"),(0,o.kt)("li",{parentName:"ul"},"And much more!")))}m.isMDXComponent=!0},958:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/projects-view-675ba8c24ec1896093663c29966b5e50.png"}}]);