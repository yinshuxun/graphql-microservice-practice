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
GraphQL 全称叫 "Graph Query Language"，官方解释是 “GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。” 拆解一下，SQL (Structured Query Language) 是结构化查询语言的简称,所以 GraphqQL = Graph + QL ，图形化查询语言，是一种描述客户端如何向服务端请求数据的API语法，类似于 RESTful Api规范。 {.text-content style="font-size:25px"}
:::

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}
## GraphQL 特性 
:::
:::div {.content-left}
* [它定义了一套类型系统(Type System)](https://graphql.cn/learn/schema/#type-system)
* [查询和变更类型（The Query and Mutation Types）](https://graphql.cn/learn/schema/#the-query-and-mutation-types)
*  ....
:::

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">
:::div {.content-left}
### GraphQL 的延伸，graphical & graph(s)
:::
:::div {.content-left}
* [graphiql](https://github.com/graphql/graphiql)  —— A <b>graphical interactive</b> in-browser GraphQL IDE. 一个让我们在浏览器里用<b>图形交互</b>的方式探索及书写<code>GraphQL</code>的 IDE。</li>
* [graphql-voyager](https://apis.guru/graphql-voyager/ ) 在 Github API 4.0 开放出的 GraphQL API，它将 Github 所有的对外类型都暴露出来了，提供给开发者开发插件的
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

<slide image="https://source.unsplash.com/UJbHNoVPZW0/">

OVER {.aligncenter style="font-size:80px"}

