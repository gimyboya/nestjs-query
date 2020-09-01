(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(189)),l=n(193),i=n(194),d=n(197),p={title:"Example",sidebar_label:"Example"},s={unversionedId:"introduction/example",id:"introduction/example",isDocsHomePage:!1,title:"Example",description:"Let's create a simple todo-item graphql example.",source:"@site/docs/introduction/example.mdx",slug:"/introduction/example",permalink:"/nestjs-query/docs/introduction/example",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/introduction/example.mdx",version:"current",sidebar_label:"Example",sidebar:"docs",previous:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"},next:{title:"DTOs",permalink:"/nestjs-query/docs/concepts/dtos"}},c=[{value:"Set up a new nest app",id:"set-up-a-new-nest-app",children:[]},{value:"Install Dependencies",id:"install-dependencies",children:[]},{value:"Generate the Module",id:"generate-the-module",children:[]},{value:"Create the Entity",id:"create-the-entity",children:[]},{value:"Create the DTO",id:"create-the-dto",children:[]},{value:"Wire everything up.",id:"wire-everything-up",children:[]},{value:"Running the Example",id:"running-the-example",children:[]},{value:"Exploring The GraphQL Endpoint",id:"exploring-the-graphql-endpoint",children:[{value:"Create a TodoItem",id:"create-a-todoitem",children:[]},{value:"Create Multiple TodoItems",id:"create-multiple-todoitems",children:[]},{value:"Query For Multiple TodoItems",id:"query-for-multiple-todoitems",children:[]},{value:"Query For One TodoItem",id:"query-for-one-todoitem",children:[]},{value:"Update a TodoItem",id:"update-a-todoitem",children:[]},{value:"Update Multiple TodoItems",id:"update-multiple-todoitems",children:[]},{value:"Delete One TodoItem",id:"delete-one-todoitem",children:[]},{value:"Delete Many TodoItems",id:"delete-many-todoitems",children:[]}]}],u={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Let's create a simple todo-item graphql example."),Object(r.b)("h2",{id:"set-up-a-new-nest-app"},"Set up a new nest app"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -g @nestjs/cli\nnest new nestjs-query-getting-started\n")),Object(r.b)("h2",{id:"install-dependencies"},"Install Dependencies"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nestjs-query/docs/introduction/install"}),"Install your packages"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Be sure to install the correct ORM package!"))),Object(r.b)("p",null,"Install extra dependencies for the example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i pg apollo-server-express\n")),Object(r.b)("h2",{id:"generate-the-module"},"Generate the Module"),Object(r.b)("p",null,"From the root of your project run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g mo todo-item\n")),Object(r.b)("h2",{id:"create-the-entity"},"Create the Entity"),Object(r.b)("p",null,"From the root of your project run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g cl todo-item.entity todo-item\n")),Object(r.b)("p",null,"Now lets fill out the entity."),Object(r.b)("p",null,"Add the following to ",Object(r.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.entity.ts"),"."),Object(r.b)(l.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"typeorm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts"',title:'"todo-item/todo-item.entity.ts"'}),"import {\n  Column,\n  CreateDateColumn,\n  Entity,\n  PrimaryGeneratedColumn,\n  UpdateDateColumn,\n} from 'typeorm';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n"))),Object(r.b)(i.a,{value:"sequelize",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.entity.ts"',title:'"todo-item/todo-item.entity.ts"'}),"import {\n  Table,\n  Column,\n  Model,\n  CreatedAt,\n  UpdatedAt,\n  PrimaryKey,\n  AutoIncrement,\n} from 'sequelize-typescript';\n\n@Table\nexport class TodoItemEntity extends Model<TodoItemEntity> {\n  @PrimaryKey\n  @AutoIncrement\n  @Column\n  id!: number;\n\n  @Column\n  title!: string;\n\n  @Column\n  completed!: boolean;\n\n  @CreatedAt\n  created!: Date;\n\n  @UpdatedAt\n  updated!: Date;\n}\n\n")))),Object(r.b)("h2",{id:"create-the-dto"},"Create the DTO"),Object(r.b)("p",null,"The DTO (Data Transfer Object) is used by the resolver to represent incoming requests and outgoing responses."),Object(r.b)("p",null,"The DTO is where you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define fields that should be rendered by graphql."),Object(r.b)("li",{parentName:"ul"},"Define fields that should be filterable using the ",Object(r.b)("inlineCode",{parentName:"li"},"@FilterableField")," decorator."),Object(r.b)("li",{parentName:"ul"},"Define validation that will be used by mutations.")),Object(r.b)("p",null,"In this example the DTO and entity are two different classes to clearly demonstrate what is required for ",Object(r.b)("inlineCode",{parentName:"p"},"graphql")," vs\nthe persistence layer. However, you can combine the two into a single class."),Object(r.b)("p",null,"From the root of your project run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g cl todo-item.dto todo-item\n")),Object(r.b)("p",null,"Now lets fill out the DTO. Add the following to ",Object(r.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.dto.ts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.dto.ts"',title:'"todo-item/todo-item.dto.ts"'}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, GraphQLISODateTime, Field, Int } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => Int)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @Field(() => GraphQLISODateTime)\n  created!: Date;\n\n  @Field(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n\n")),Object(r.b)("p",null,"Notice the use of ",Object(r.b)("inlineCode",{parentName:"p"},"@FilterableField")," this will let ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," know to allow filtering on the\ncorresponding field. If you just use ",Object(r.b)("inlineCode",{parentName:"p"},"@Field")," then you will not be able to filter on the corresponding field."),Object(r.b)("h2",{id:"wire-everything-up"},"Wire everything up."),Object(r.b)("p",null,"Update the ",Object(r.b)("inlineCode",{parentName:"p"},"todo-item.module")," to set up the ",Object(r.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," and the entities to provide a ",Object(r.b)("inlineCode",{parentName:"p"},"QueryService"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," will automatically create a Resolver that will expose the following ",Object(r.b)("inlineCode",{parentName:"p"},"queries")," and ",Object(r.b)("inlineCode",{parentName:"p"},"mutations"),":"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Queries")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItems")," - find multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItem")," - find one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),".")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Mutations")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createManyTodoItems")," - create multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createOneTodoItems")," - create one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateManyTodoItems")," - update multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateOneTodoItems")," - update one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteManyTodoItems")," - delete multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems"),"s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteOneTodoItems")," - delete one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),".")),Object(r.b)(l.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"typeorm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:"{9-15}","{9-15}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQueryTypeOrmModule to register the entity with typeorm\n      // and provide a QueryService\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // describe the resolvers you want to expose\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),Object(r.b)(i.a,{value:"sequelize",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:"{9-15}","{9-15}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      // import the NestjsQueryTypeOrmModule to register the entity with typeorm\n      // and provide a QueryService\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      // describe the resolvers you want to expose\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))),Object(r.b)("p",null,"Next update ",Object(r.b)("inlineCode",{parentName:"p"},"app.module")," to set up your db connection and the ",Object(r.b)("inlineCode",{parentName:"p"},"graphql")," nest modules."),Object(r.b)(l.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"typeorm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot({\n      type: 'postgres',\n      database: 'gettingstarted',\n      username: 'gettingstarted',\n      autoLoadEntities: true,\n      synchronize: true,\n      logging: true,\n    }),\n    GraphQLModule.forRoot({\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n    TodoItemModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n"))),Object(r.b)(i.a,{value:"sequelize",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { SequelizeModule } from '@nestjs/sequelize';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\n\n@Module({\n  imports: [\n    TodoItemModule,\n    SequelizeModule.forRoot({\n      dialect: 'postgres',\n      database: 'gettingstarted',\n      username: 'gettingstarted',\n      autoLoadModels: true,\n      synchronize: true,\n      logging: true,\n    }),\n    GraphQLModule.forRoot({\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n\n")))),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the root of the project"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),'version: "3"\n\nservices:\n  postgres:\n    image: "postgres:11.5"\n    environment:\n      - "POSTGRES_USER=gettingstarted"\n      - "POSTGRES_DB=gettingstarted"\n    expose:\n      - "5432"\n    ports:\n      - "5432:5432"\n\n')),Object(r.b)("h2",{id:"running-the-example"},"Running the Example"),Object(r.b)("p",null,"Start the backing services"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up -d\n")),Object(r.b)("p",null,"Start the app"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(r.b)("p",null,"Visit http://localhost:3000/graphql where you should see the playground"),Object(r.b)("img",{alt:"Example playground",src:Object(d.a)("img/introduction/getting-started-playground.png")}),Object(r.b)("h2",{id:"exploring-the-graphql-endpoint"},"Exploring The GraphQL Endpoint"),Object(r.b)("h3",{id:"create-a-todoitem"},"Create a TodoItem"),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-01T00:43:16.000Z",\n      "updated": "2020-01-01T00:43:16.000Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"create-multiple-todoitems"},"Create Multiple TodoItems"),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      }\n    ]\n  }\n}\n')))),Object(r.b)("h3",{id:"query-for-multiple-todoitems"},"Query For Multiple TodoItems"),Object(r.b)("h4",{id:"query-for-all-todo-items"},"Query for all todo items"),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjI="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-01T00:43:16.000Z",\n            "updated": "2020-01-01T00:43:16.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h4",{id:"query-for-completed-todo-items"},"Query for completed todo items"),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems(filter: { completed: { is: true } }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjA="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"query-for-one-todoitem"},"Query For One TodoItem"),Object(r.b)("h4",{id:"query-by-id"},"Query by id"),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItem(id: 1) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-13T06:19:17.543Z",\n      "updated": "2020-01-13T06:19:17.543Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"update-a-todoitem"},"Update a TodoItem"),Object(r.b)("p",null,"Lets update the completed ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," we created earlier to not be completed."),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  updateOneTodoItem(input: { id: 3, update: { completed: false } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "3",\n      "title": "Create Many Todo Items - 2",\n      "completed": false,\n      "created": "2020-01-13T09:19:46.727Z",\n      "updated": "2020-01-13T09:23:37.658Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"update-multiple-todoitems"},"Update Multiple TodoItems"),Object(r.b)("p",null,"Lets update the completed ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," we created earlier to not be completed."),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: [1, 2] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n')))),Object(r.b)("p",null,"You can check this by running the completed query from above."),Object(r.b)("h3",{id:"delete-one-todoitem"},"Delete One TodoItem"),Object(r.b)("p",null,"Lets update delete the first ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem"),"."),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteOneTodoItem": {\n      "id": null,\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-13T09:44:41.176Z",\n      "updated": "2020-01-13T09:44:54.822Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"delete-many-todoitems"},"Delete Many TodoItems"),Object(r.b)("p",null,"Lets update delete the create many todo items ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," using a filter."),Object(r.b)(l.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 2\n    }\n  }\n}\n')))))}b.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),b=a,m=c["".concat(l,".").concat(b)]||c[b]||u[b]||r;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},191:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},192:function(e,t,n){"use strict";var a=n(0),o=n(191);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},193:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(192),l=n(190),i=n(47),d=n.n(i);const p=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:c,groupId:u}=e,{tabGroupChoices:b,setTabGroupChoices:m}=Object(r.a)(),[O,j]=Object(a.useState)(i),[y,g]=Object(a.useState)(!1);if(null!=u){const e=b[u];null!=e&&e!==O&&c.some(t=>t.value===e)&&j(e)}const h=e=>{j(e),null!=u&&m(u,e)},T=[],f=e=>{e.metaKey||e.altKey||e.ctrlKey||g(!0)},v=()=>{g(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",f),window.addEventListener("mousedown",v)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(l.a)("tabs__item",d.a.tabItem,{"tabs__item--active":O===e}),style:y?{}:{outline:"none"},key:e,ref:e=>T.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(T,e.target,e),f(e)},onFocus:()=>h(e),onClick:()=>{h(e),g(!1)},onPointerDown:()=>g(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},194:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},195:function(e,t,n){"use strict";var a=n(0),o=n(22);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},197:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n(195),o=n(199);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;const l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return r?e+l:l}(t,e,n,a)}}function l(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},199:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);