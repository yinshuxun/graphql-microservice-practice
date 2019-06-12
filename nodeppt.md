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

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}
## 什么是 GraphQL 
:::
:::div {.content-left}
GraphQL 全称叫 "Graph Query Language"，官方解释是 “GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。” 通俗理解一下就是，GraphQL 是一门查询语言，更精确的说 API 查询语言。它能显示服务器提供的不同类型的数据，客户端根据这些数据可以准确地选择它想要的内容。 {.text-content style="font-size:25px"}
:::

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}

## GraphQL 特性 
:::
:::div {.content-left}
* [定义 Schema，来描述接口获取数据的逻辑](https://graphql.cn/learn/schema/#type-system)
* [查询和变更类型（The Query and Mutation Types）](https://graphql.cn/learn/schema/#the-query-and-mutation-types)
* [它定义了一套类型系统(Type System)，进行数据模型的抽象](https://graphql.cn/learn/schema/#type-system)
*  ....
:::

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}
### GraphQL 的延伸，graphical & graph(s)
:::
:::div {.content-left}
* [apollo-client](https://github.com/apollographql/apollo-client): A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server，提供了每个UI框架和GraphQL服务器的功能齐全的 GraphQL客户端
* [graphiql](https://github.com/graphql/graphiql): 一款运行于浏览器的GraphQL IDE，几乎所有的服务端库都会提供这么一个经典的web页面。该页面是一个单页面应用，可以直接在其上运行查询语句，自带代码补全和校错功能，直接查看GraphQL所有的文档(定义好的Schema)
* [graphql-voyager](https://apis.guru/graphql-voyager/ ): Represent any GraphQL API as an interactive graph. It's time to finally see the graph behind GraphQL! 用交互式的Schema 图表展示任意的 GraphQL API，总算能看见 GraphQL背后的 graph 了! （在 Github API 4.0 开放出的 GraphQL API，它将 Github 所有的对外类型都暴露出来了，提供给开发者开发插件的）
* [Graphql-Network](https://github.com/Ghirro/graphql-network): Chrome的调试工具，由于GraphQL查询语句是一串字符串，浏览器审查元素看起来非常难看，这个工具则可以将其格式化成我们想要的格式。
* [GraphDoc](https://github.com/2fd/graphdoc): 可以将文档页面生成静态文档站点。
:::
  
<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">


# GrqphQL 相比 REST 有什么优势
---

* 单一入口 {.animated.fadeInUp style="font-size:30px"}
* 便捷文档 {.animated.fadeInUp.delay-400 style="font-size:30px"}
* 避免数据冗余 {.animated.fadeInUp.delay-800 style="font-size:30px"}
* 数据聚合 {.animated.fadeInUp.delay-1200 style="font-size:30px"}


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

* 学习成本 {.animated.fadeInUp style="font-size:30px"}
* 操作复杂 {.animated.fadeInUp.delay-400 style="font-size:30px"}
* API 修改和文档难以同步 {.animated.fadeInUp.delay-800 style="font-size:30px"}

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
----

=> {style="font-size:50px"}

----
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
----

<span>+<span> {style="font-size:50px"}

----
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

## GraphQL存在的问题
graphQl也不是没有缺点，主要有以下几个缺点：

* 改造成本
要使用GraphQL对数据源进行管理，我们需要对整个后端模型用Graphql类型系统来描述，同时需要改造服务端暴露数据的方式，这无疑成本是巨大的。[swagger to graphql](https://github.com/yarax/swagger-to-graphql)

* 查询性能
GraphQL 相比于传统的后端服务更容易出现N + 1的问题，尤其是当资源需要通过 RPC 请求从其他微服务中获取时，问题就有些复杂了，并不能通过简单的改变 SQL 查询的方式来解决。这里GraphQL 使用了 DataLoader 从业务层面解决了 N + 1 问题，其核心逻辑就是整合多个请求，通过批量请求的方式解决问题。

* ...当然还会在实践过程中遇到其他问题，需要共同去探索

<slide image="https://source.unsplash.com/UJbHNoVPZW0/">

OVER {.aligncenter style="font-size:80px"}

