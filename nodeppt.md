title: Hello GraphQL
speaker: shuxun
plugins:

- echarts: {theme: infographic}
- mermaid: {theme: forest}
- katex

<slide class="bg-black aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .anim">
<img src="./imgs/logo.svg" class="size-20 alignleft" />

## Hello GraphQL {.text-landing.text-shadow}

By shuxun.yin {.text-intro}

[:fa-github: Github](https://github.com/yinshuxun/graphql-microservice-practice){.button.ghost}

<slide class="bg-black-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::column {.vertical-align}
## 聊一聊 REST 
{.description}

---

一、起源

REST 这个词，是[Roy Thomas Fielding](http://en.wikipedia.org/wiki/Roy_Fielding)在他 2000 年的[博士论文](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)中提出的。

Fielding 将他对互联网软件的架构原则，定名为 REST，即 Representational State Transfer 的缩写。我对这个词组的翻译是"表现层状态转化"。

如果一个架构符合 REST 原则，就称它为 RESTful 架构。

二、特点

（1）每一个 URI 代表一种资源；

（2）客户端和服务器之间，传递这种资源的某种表现层；

（3）客户端通过特定的 HTTP 动词（GET、POST、PUT、DELETE ...），对服务器端资源进行操作，实现"表现层状态转化"。
{.text-intro}

:::

<slide class="bg-black-blue " image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.vertical-align}
##  GraphQL 是什么？怎么开始的 ？
----
## 一、起源
---
GraphQL 的起源可追溯到这个行业向移动的转变。当时，Facebook 的移动战略（即，在移动设备上采用 HTML5）由于网络的使用量过高而未能实现。结果，Facebook 决定使用原生技术从头构建 iOS 应用程序。{.text-intro}

在 2012 年，Facebook 决定，他们需要构建一个新的新闻推送 API，以构建 Facebook 的移动应用程序。这就是 GraphQL 开始成形的时间，并且，在 8 月中旬，Facebook 发布了采用新 GraphQL 技术的 iOS5.0 应用程序。它允许开发人员通过利用其数据获取（data-fetching）功能来减少网络的使用。在接下来的一年半时间里，除了新闻推送外，GraphQL API 扩展到大多数的 FacebookiOS 应用程序。在 2015 年，GraphQL 规范首次与 JavaScript 中的引用实现一起发布。{.text-intro}

:::

<slide class="bg-black-blue " image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.vertical-align}
## 二、是什么
---
GraphQL 是一种开源语言，用于从客户端应用程序查询数据。

GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。 {.text-intro}
:::

<slide class="bg-black-blue " image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.vertical-align}
## 三、生态系统
:::div {.content-left}
#####  GraphQL 服务器
* [GraphQL-JS](https://github.com/graphql/graphql-js): 是 GraphQL 原始参考实现，可以与 Express、Koa 一起使用。
* [GraphQL-Server](https://www.apollographql.com/docs/apollo-server/): 是 Apollo 的一体式 GraphQL 服务器实现，正在迅速获得关注。它可以从任何 GraphQL 客户端查询。
#####  GraphQL 客户端
* [Apollo Client](https://github.com/apollographql/apollo-client): 提供了每个UI框架和GraphQL服务器的功能齐全的 GraphQL客户端，主流UI框架上层封装版本 如apollo-angular、react-apollo
:::
:::div {.content-left}
<img src="./imgs/apollo-server.png" class="size-400" style="margin-left:50px;" />
:::
:::

<slide class="bg-black-blue " image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.vertical-align}

##### GraphQL 其他开源工具
* [graphiql](https://github.com/graphql/graphiql): 一款运行于浏览器的GraphQL IDE，几乎所有的服务端库都会提供这么一个经典的web页面。该页面是一个单页面应用，可以直接在其上运行查询语句，自带代码补全和校错功能，直接查看GraphQL所有的文档(定义好的Schema)
* [graphql-voyager](https://apis.guru/graphql-voyager/ ): Represent any GraphQL API as an interactive graph. It's time to finally see the graph behind GraphQL! 用交互式的Schema 图表展示任意的 GraphQL API，总算能看见 GraphQL背后的 graph 了! （在 Github API 4.0 开放出的 GraphQL API，它将 Github 所有的对外类型都暴露出来了，提供给开发者开发插件的）
* [Graphql-Network](https://github.com/Ghirro/graphql-network): Chrome的调试工具，由于GraphQL查询语句是一串字符串，浏览器审查元素看起来非常难看，这个工具则可以将其格式化成我们想要的格式。
* [GraphDoc](https://github.com/2fd/graphdoc): 可以将文档页面生成静态文档站点。
* [Graphql Codegen](https://github.com/dotansimha/graphql-code-generator): 可扩展的graphql 代码生成工具
:::
:::

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}

## GraphQL 特性

:::
:::div {.content-left}

- [定义 Schema，来描述接口获取数据的逻辑](https://graphql.cn/learn/schema/#type-system)
- [查询和变更类型（The Query and Mutation Types）](https://graphql.cn/learn/schema/#the-query-and-mutation-types)
- [它定义了一套类型系统(Type System)，进行数据模型的抽象](https://graphql.cn/learn/schema/#type-system)
- ....
:::

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div

<img src="./imgs/schema-demo.png" style="width:80%;height:80%;"  />

:::

<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.vertical-align}
## Angular 中使用
---
```{json}
# installing Apollo Angular in Angular CLI
ng add apollo-angular
或者
# installing each piece independently
yarn add apollo-client apollo-cache-inmemory apollo-angular-link-http apollo-angular-link-error apollo-angular graphql-tag graphql
```
:::

<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div 
## Graphql Queries
---
```{javascript}
query allUser {
  getUserList {
    name
    user_id
    blogs {
      name
    }
  }
}
```
:::

<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div 
## Graphql Mutations
---
```
mutation user($name: String!, $age: Int!) {
      createUser(name: $name, age: $age) {
        code
      }
    }
```
:::

<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div 
## Graphql Fragment
---
```{graphql}
export class UserFragements {
  blogFragment = gql`
    fragment blogFragment on Blog {
      name
      blog_id
      content
    }
  `;

  userFragment = gql`
    fragment userFragment on User {
      name
      age
      user_id
      blogs {
        ...blogFragment
      }
    }
    ${this.blogFragment}
  `;
}
```
:::
  
<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}
## Authentication
:::
:::div {.content-left}
<img src="./imgs/schema-demo.png" />
:::

<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
## Caching
#### apollo-cache-inmemory
---
- addTypename: boolean, 指定是否需要在document中添加__typename, 默认为true.
- dataIdFromObject, 由于InMemoryCache是会normalize数据再存入store, 具体做法是先把数据分成一个个对象, 然后给每个对象创建一个全局标识符_id, 
然后把这些对象以一种扁平的数据格式存储. 默认情况下, InMemoryCache会找到__typename和边上主键id值作为标识符_id的值(如__typename:id). 如果id或者__typename没有指定, 
那么InMemoryCache会fall back查询query的对象路径. 但是我们也可以使用dataIdFromObject来自定义对象的唯一表示符:
- fragmentMatcher, fragment matcher默认使用heuristic fragment matcher
- cacheRedirects(以前叫cacheResolvers, customResolvers), 在发出请求之前将查询重定向到缓存中的另一个条目的函数映射。


<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

# GrqphQL 相比 REST 有什么优势

---

- 单一入口 {.animated.fadeInUp style="font-size:30px"}
- 便捷文档 {.animated.fadeInUp.delay-400 style="font-size:30px"}
- 避免数据冗余 {.animated.fadeInUp.delay-800 style="font-size:30px"}
- 数据聚合 {.animated.fadeInUp.delay-1200 style="font-size:30px"}

<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

## **1、单一入口**

---

<img src="./imgs/p2.png" class="size-60" />

<slide class="bg-white-blue" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

## **2、便捷文档**

:::flexblock

![](./imgs/swagger.png)

---

![](./imgs/rap.png)

---

![](./imgs/show_doc.png)

:::

- 学习成本 {.animated.fadeInUp style="font-size:30px"}
- 操作复杂 {.animated.fadeInUp.delay-400 style="font-size:30px"}
- API 修改和文档难以同步 {.animated.fadeInUp.delay-800 style="font-size:30px"}

<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

### **3、数据冗余**

:::column {.vertical-align}

### REST

```json
[
  {
    "name": "第一篇博客",
    "blog_id": 1,
    "content": "阿大沙发斯蒂芬三大发送的发的所发生的盛大发售的发生的发送到发送到范德萨发撒第三方sad",
    "user_id": 1
  },
  {
    "name": "第二篇博客",
    "blog_id": 2,
    "content": "爱的色放撒旦法发的撒发大水发的撒范德萨发大水发的萨芬沙发发大发发发发的发发艾弗森的",
    "user_id": 1
  },
  {
    "name": "前端博客说明g",
    "blog_id": 3,
    "content": "阿盛大发售的发生发的说法是",
    "user_id": 3
  },
  {
    "name": "前端博客说明01222",
    "blog_id": 4,
    "content": "的发打发是打发斯蒂芬萨达",
    "user_id": 2
  },
  {
    "name": "知识知识未来的一部分",
    "blog_id": 5,
    "content": "阿斯顿发送到发多少发撒旦法师打发第三方的萨芬",
    "user_id": 1
  }
]
```

---

=> {style="font-size:50px"}

---

### GraphQL

```json
[
  {
    "name": "第一篇博客"
  },
  {
    "name": "第二篇博客"
  },
  {
    "name": "前端博客说明g"
  },
  {
    "name": "前端博客说明01222"
  },
  {
    "name": "知识知识未来的一部分"
  }
]
```

:::

<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

### **4、数据聚合**

:::column {.vertical-align}

### 用户列表

```json
  [
      {
        "user_id": "1",
        "name": "user01"
      },
      {
        "user_id": "2",
        "name": "tuoni"
      },
      {
        "user_id": "3",
        "name": "绿箭侠"
      },
      ....
  ]
```

---

<span>+<span> {style="font-size:50px"}

---

### 博客列表

```json
 [
      {
        "name": "第一篇博客",
        "blog_id": 1,
        "user_id": 1
      },
      {
        "name": "第二篇博客",
        "blog_id": 2,
        "user_id": 1
      },
      {
        "name": "前端博客说明g",
        "blog_id": 3,
        "user_id": 3
      },
      ....
    ]
```

:::

<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

### 聚合列表

```json
 [
      {
        "user_id": "1",
        "name": "user01",
        "blogs": [
          {
            "name": "第一篇博客"
          },
          {
            "name": "第二篇博客"
          },
          {
            "name": "知识知识未来的一部分"
          }
        ]
      },
      {
        "user_id": "2",
        "name": "tuoni",
        "blogs": [
          {
            "name": "前端博客说明01222"
          }
        ]
      }
      ....
    ]
```

<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

## GraphQL 存在的问题

graphQl 也不是没有缺点，主要有以下几个缺点：

- 改造成本
  要使用 GraphQL 对数据源进行管理，我们需要对整个后端模型用 Graphql 类型系统来描述，同时需要改造服务端暴露数据的方式，这无疑成本是巨大的。[Swagger to graphql](https://github.com/yarax/swagger-to-graphql)

- 查询性能
  GraphQL 相比于传统的后端服务更容易出现 N + 1 的问题，尤其是当资源需要通过 RPC 请求从其他微服务中获取时，问题就有些复杂了，并不能通过简单的改变 SQL 查询的方式来解决。这里 GraphQL 使用了 DataLoader 从业务层面解决了 N + 1 问题，其核心逻辑就是整合多个请求，通过批量请求的方式解决问题。

- ...当然还会在实践过程中遇到其他问题，需要共同去探索

<slide image="https://source.unsplash.com/UJbHNoVPZW0/">

OVER {.aligncenter style="font-size:80px"}
