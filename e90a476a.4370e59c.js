(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{167:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return m})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(2),r=o(6),a=(o(0),o(189)),i=o(193),l=o(194),s={title:"v0.11.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},m={permalink:"/nestjs-query/blog/2020/05/07/v0.11.0",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-05-07-v0.11.0.mdx",source:"@site/blog/2020-05-07-v0.11.0.mdx",description:"@InjectQueryService",date:"2020-05-07T00:00:00.000Z",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],title:"v0.11.0",readingTime:4.055,truncated:!1,prevItem:{title:"v0.11.2",permalink:"/nestjs-query/blog/2020/05/13/v0.11.2"},nextItem:{title:"v0.8.6",permalink:"/nestjs-query/blog/2020/04/22/v0.8.6"}},c=[{value:"<code>@InjectQueryService</code>",id:"injectqueryservice",children:[]},{value:"Relation Decorators",id:"relation-decorators",children:[{value:"@Relation",id:"relation",children:[]},{value:"@Connection",id:"connection",children:[]}]},{value:"Auto Generated Resolvers",id:"auto-generated-resolvers",children:[{value:"Example",id:"example",children:[]}]}],u={rightToc:c};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"injectqueryservice"},Object(a.b)("inlineCode",{parentName:"h3"},"@InjectQueryService")),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"v0.11.x")," an new decorator was added ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectQueryService"),", this decorator replaces the ORM specific decorators:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@InjectTypeOrmQueryService")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@InjectSequelizeQueryService"))),Object(a.b)("p",null,"To migrate replace all ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectSequelizeQueryService")," with ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectQueryService"),"."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You still need to import the ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to use ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectQueryService"),"."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService, InjectQueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),Object(a.b)("h2",{id:"relation-decorators"},"Relation Decorators"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"v0.11.x")," two new decorators were introduced from the ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package. The ",Object(a.b)("inlineCode",{parentName:"p"},"@Relation")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@Connection")," allow specifying relations on the DTO rather than passing them in as options to the ",Object(a.b)("inlineCode",{parentName:"p"},"CRUDResolver"),"."),Object(a.b)("h3",{id:"relation"},"@Relation"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@Relation")," decorator allow specifying a single relation (e.g. one-to-one, many-to-one)."),Object(a.b)("p",null,"In this example we add a relation for a ",Object(a.b)("inlineCode",{parentName:"p"},"todoItem"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:"{6}","{6}":!0}),"import { FilterableField, Relation } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../todo-item/todo-item.dto.ts';\n\n@ObjectType('SubTask')\n@Relation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n")),Object(a.b)("h3",{id:"connection"},"@Connection"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@Connection")," decorator allow specifying a connection relation (e.g. many-to-many, one-to-many)."),Object(a.b)("p",null,"In this example we add a connection for ",Object(a.b)("inlineCode",{parentName:"p"},"subTasks"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:"{6}","{6}":!0}),"import { FilterableField, Connection } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/sub-task.dto'\n\n@ObjectType('TodoItem')\n@Connection('subTasks', () => SubTaskDTO, { disableRemove: true })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n")),Object(a.b)("h2",{id:"auto-generated-resolvers"},"Auto Generated Resolvers"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"v0.11.x")," the ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graph")," package is now able to automatically create your resolvers."),Object(a.b)("p",null,"To start using this feature update your module to import the ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"When used with the new relation decorators, you can remove a lot of boiler plate."))),Object(a.b)(i.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"typeorm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),Object(a.b)(l.a,{value:"sequelize",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))),Object(a.b)("p",null,"Once you have updated your module you can remove the old resolver."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Be sure to add the ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to the imports in ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule"),"."))),Object(a.b)("p",null,"To read more about the auto-generated resolvers check out the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/graphql/resolvers"}),"resolvers docs")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("h4",{id:"previously"},"Previously"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.resolver.ts"',title:'"todo-item.resolver.ts"'}),"import { QueryService, InjectQueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n")),Object(a.b)(i.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"typeorm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'}),"import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n"))),Object(a.b)(l.a,{value:"sequelize",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'}),"import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n")))),Object(a.b)("h4",{id:"new"},"New"),Object(a.b)(i.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"typeorm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),Object(a.b)(l.a,{value:"sequelize",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))))}d.isMDXComponent=!0},189:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var m=r.a.createContext({}),c=function(e){var t=r.a.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=n,b=u["".concat(i,".").concat(p)]||u[p]||d[p]||a;return o?r.a.createElement(b,l(l({ref:t},m),{},{components:o})):r.a.createElement(b,l({ref:t},m))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=o[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},190:function(e,t,o){"use strict";function n(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},191:function(e,t,o){"use strict";var n=o(0);const r=Object(n.createContext)(void 0);t.a=r},192:function(e,t,o){"use strict";var n=o(0),r=o(191);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},193:function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=o(192),i=o(190),l=o(47),s=o.n(l);const m=37,c=39;t.a=function(e){const{block:t,children:o,defaultValue:l,values:u,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:b}=Object(a.a)(),[j,y]=Object(n.useState)(l),[O,v]=Object(n.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==j&&u.some(t=>t.value===e)&&y(e)}const f=e=>{y(e),null!=d&&b(d,e)},T=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},g=()=>{v(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",g)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),style:O?{}:{outline:"none"},key:e,ref:e=>T.push(e),onKeyDown:e=>{((e,t,o)=>{switch(o.keyCode){case c:((e,t)=>{const o=e.indexOf(t)+1;e[o]?e[o].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const o=e.indexOf(t)-1;e[o]?e[o].focus():e[e.length-1].focus()})(e,t)}})(T,e.target,e),h(e)},onFocus:()=>f(e),onClick:()=>{f(e),v(!1)},onPointerDown:()=>v(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(o).filter(e=>e.props.value===j)[0]))}},194:function(e,t,o){"use strict";var n=o(0),r=o.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);