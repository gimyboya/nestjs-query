(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{192:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(229)),i={id:"initial-release",title:"Initial Release",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["nestjs","typeorm","graphql"]},l={permalink:"/nestjs-query/blog/initial-release",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-01-26-Initial Release.md",source:"@site/blog/2020-01-26-Initial Release.md",description:"Initial Release of nestjs-query.",date:"2020-01-26T00:00:00.000Z",tags:[{label:"nestjs",permalink:"/nestjs-query/blog/tags/nestjs"},{label:"typeorm",permalink:"/nestjs-query/blog/tags/typeorm"},{label:"graphql",permalink:"/nestjs-query/blog/tags/graphql"}],title:"Initial Release",readingTime:.415,truncated:!1,prevItem:{title:"v0.0.4",permalink:"/nestjs-query/blog/v0.0.4"}},c=[],s={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Initial Release of ",Object(o.b)("inlineCode",{parentName:"p"},"nestjs-query"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"nestjs-query")," is collection of packages to make crud for ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," (and potentially other transports) easier."),Object(o.b)("p",null,"This library is composed of three packages."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/core"}),Object(o.b)("inlineCode",{parentName:"a"},"@nestjs-query/core"))," - Defines all interfaces and utility types implemented by the other packages."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/graphql"}),Object(o.b)("inlineCode",{parentName:"a"},"@nestjs-query/query-graphql"))," - Package that provides the graphql resolver and decorators for crud endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/typeorm"}),Object(o.b)("inlineCode",{parentName:"a"},"@nestjs-query/query-typeorm"))," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",Object(o.b)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),".")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://doug-martin.github.io/nestjs-query/docs/introduction/getting-started"}),"To read more checkout the docs")))}p.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(g,l(l({ref:t},s),{},{components:r})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);