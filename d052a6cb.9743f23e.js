(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(189)),a=(n(193),n(194),{title:"v0.15.x to v0.16.x"}),s={unversionedId:"migration-guides/v0.15.x-to-v0.16.x",id:"migration-guides/v0.15.x-to-v0.16.x",isDocsHomePage:!1,title:"v0.15.x to v0.16.x",description:"Filter on Relations",source:"@site/docs/migration-guides/v0.15.x-to-v0.16.x.mdx",slug:"/migration-guides/v0.15.x-to-v0.16.x",permalink:"/nestjs-query/docs/migration-guides/v0.15.x-to-v0.16.x",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/migration-guides/v0.15.x-to-v0.16.x.mdx",version:"current",sidebar:"docs",previous:{title:"v0.14.x to v0.15.x",permalink:"/nestjs-query/docs/migration-guides/v0.14.x-to-v0.15.x"}},l=[{value:"Filter on Relations",id:"filter-on-relations",children:[]},{value:"Filter Definitions",id:"filter-definitions",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"filter-on-relations"},"Filter on Relations"),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"v0.16.x")," we made a big step forward in the functionality of relations by allowing for filtering on their properties. While making this change it was aso decided to unify the way that relations are defined."),Object(i.b)("p",null,"In previous versions of ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query")," you could define relations using the ",Object(i.b)("inlineCode",{parentName:"p"},"@Relation")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@Connection")," decorator as well as manually defining them when creating your resolvers, this leads to an in consistent experience while using ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query"),". In the latest version all relations ",Object(i.b)("strong",{parentName:"p"},"MUST")," be defined using the decorators."),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"v0.16.x")," there are two new decorators (",Object(i.b)("inlineCode",{parentName:"p"},"@FilterableRelation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@FilterableConnection"),") exposed to allow you to decide if end users should be able to filter on the relation."),Object(i.b)("p",null,"To read more about the new decorators as well as defining relations you can read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/nestjs-query/docs/graphql/relations"}),Object(i.b)("inlineCode",{parentName:"a"},"relations docs"))),Object(i.b)("h2",{id:"filter-definitions"},"Filter Definitions"),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"v0.16.x")," filters are defined based on the operation (read, update, delete). In previous versions of ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query")," all filters for a type in graphql were the same. In ",Object(i.b)("inlineCode",{parentName:"p"},"v0.16.x")," this behavior needed to change in order to support filtering on relations."),Object(i.b)("p",null,"This should be a passive change for most, however the generated graphql schema will contain new types for each filter operation."))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},191:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},192:function(e,t,n){"use strict";var r=n(0),o=n(191);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},193:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(192),a=n(190),s=n(47),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:d,groupId:p}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(i.a)(),[m,v]=Object(r.useState)(s),[y,h]=Object(r.useState)(!1);if(null!=p){const e=f[p];null!=e&&e!==m&&d.some(t=>t.value===e)&&v(e)}const g=e=>{v(e),null!=p&&b(p,e)},O=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},w=()=>{h(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",w)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(a.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),style:y?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),j(e)},onFocus:()=>g(e),onClick:()=>{g(e),h(!1)},onPointerDown:()=>h(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},194:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);