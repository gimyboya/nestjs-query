(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(189)),i={title:"FAQ"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"The resolver is complaining about my QueryService",source:"@site/docs/faq.md",slug:"/faq",permalink:"/nestjs-query/docs/faq",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/faq.md",version:"current"},l=[{value:"The resolver is complaining about my QueryService",id:"the-resolver-is-complaining-about-my-queryservice",children:[]},{value:"Do I need a DTO and Entity?",id:"do-i-need-a-dto-and-entity",children:[]},{value:"Can I use OFFSET paging instead of a cursor with connections?",id:"can-i-use-offset-paging-instead-of-a-cursor-with-connections",children:[]},{value:"Can I use turn off paging?",id:"can-i-use-turn-off-paging",children:[]},{value:"How can I filter on relations?",id:"how-can-i-filter-on-relations",children:[]},{value:"Does nestjs-query support specifying complexity.",id:"does-nestjs-query-support-specifying-complexity",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-resolver-is-complaining-about-my-queryservice"},"The resolver is complaining about my QueryService"),Object(o.b)("p",null,"If you see an error that contains the following "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"The types of 'service.query' are incompatible between these types.\n")),Object(o.b)("p",null,"It means that your entity and DTO are not compatible. "),Object(o.b)("p",null,"Typically this indicates that your DTO contains additional fields that your entity does not OR that you have different types for fields. "),Object(o.b)("p",null,"To fix:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ensure that your entity has the same fields and field types as your DTO."),Object(o.b)("li",{parentName:"ul"},"If you have fields that should be computed or derived from your entity try using an ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/concepts/assemblers"}),"Assembler")," ")),Object(o.b)("h2",{id:"do-i-need-a-dto-and-entity"},"Do I need a DTO and Entity?"),Object(o.b)("p",null,"No, you do not! "),Object(o.b)("p",null,"For a small project the overhead may not be worth managing both the Entity and DTO especially if they are copies of eachother."),Object(o.b)("p",null,"In a larger, longer lived project the initial overhead of creating a DTO in the beginning can pay off if you need to make changes to your persistence layer while keeping changes in your API passive. "),Object(o.b)("p",null,"DTOs also provide a clean separation between the fields and relationships that the persistence layer should not know or care about."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When combining your entity and DTO you should ",Object(o.b)("strong",{parentName:"p"},"NOT")," decorate your relationships with ",Object(o.b)("inlineCode",{parentName:"p"},"@Field")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableField"),". Instead, add them to your CRUDResolver. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/persistence/services#relations"}),"Read More")," "))),Object(o.b)("h2",{id:"can-i-use-offset-paging-instead-of-a-cursor-with-connections"},"Can I use OFFSET paging instead of a cursor with connections?"),Object(o.b)("p",null,"Yes! You can specify a ",Object(o.b)("inlineCode",{parentName:"p"},"pagingStrategy")," option to customize how paging is handled at the resolver or relation level. "),Object(o.b)("p",null,"For more information and examples check out the following docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/resolvers#paging-strategy"}),"Resolver Paging Strategy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/relations#many-relation"}),"Relations"))),Object(o.b)("h2",{id:"can-i-use-turn-off-paging"},"Can I use turn off paging?"),Object(o.b)("p",null,"Yes! You can specify a ",Object(o.b)("inlineCode",{parentName:"p"},"pagingStrategy")," option to customize how paging is handled at the resolver or relation level. "),Object(o.b)("p",null,"For more information and examples check out the following docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/resolvers#paging-strategy"}),"Resolver Paging Strategy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/relations#many-relation"}),"Relations"))),Object(o.b)("h2",{id:"how-can-i-filter-on-relations"},"How can I filter on relations?"),Object(o.b)("p",null,"You can filter based on relations if you use the ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableRelation")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableConnection")," decorators when defining your relations."),Object(o.b)("p",null,"To read more and see examples read the following docs."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/relations#filterablerelation-decorator"}),Object(o.b)("inlineCode",{parentName:"a"},"@FilterableRelation"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/nestjs-query/docs/graphql/relations#filterableconnection-decorator"}),Object(o.b)("inlineCode",{parentName:"a"},"@FilterableConnection")))),Object(o.b)("h2",{id:"does-nestjs-query-support-specifying-complexity"},"Does nestjs-query support specifying complexity."),Object(o.b)("p",null,"Yes! "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableField")," decorator accepts the same arguments as the ",Object(o.b)("inlineCode",{parentName:"p"},"@Field")," decorator from ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs/graphql")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@Relation")," ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableRelation"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@Connection")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableConnection")," decorators also accept a complexity option."),Object(o.b)("p",null,"To read more about complexity ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.nestjs.com/graphql/complexity"}),"see the nestjs docs")))}p.isMDXComponent=!0}}]);