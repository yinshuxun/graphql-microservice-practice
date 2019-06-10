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
GraphQL 全称叫 Graph Query Language，官方宣传语是“为你的 API 量身定制的查询语言”，用传统的方式来解释就是：相当于将你所有后端 API 组成的集合看成一个数据库，用户终端发送一个查询语句，你的 GraphQL 服务解析这条语句并通过一系列规则从你的“ API 数据库”里面将查询的数据结果返回给终端，而 GraphQL 就相当于这个系统的一个查询语言，像 SQL 之于 MySQL 一样。 {.text-content style="font-size:25px"}
:::

<slide class="bg-white-blue aligncenter" image="https://source.unsplash.com/n9WPPWiPPJw/ .dark">

# GrqphQL 相比 REST 有什么优势
---

* 单一入口 {.animated.fadeInUp style="font-size:30px"}
* 便捷文档 {.animated.fadeInUp.delay-400 style="font-size:30px"}
* 避免数据冗余 {.animated.fadeInUp.delay-800 style="font-size:30px"}
* 数据聚合 {.animated.fadeInUp.delay-1200 style="font-size:30px"}
* 方便数据Mock Position {.animated.fadeInUp.delay-1600 style="font-size:30px"}


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
{
  "status": "success",
  "template_uuid": "42693d20-96ef-48f8-84ac-f405ec24de1a",
  "display_name": "system",
  "description": "",
  "created_at": "2019-05-17T09:41:59.168481Z",
  "namespace": "project",
  "updated_at": "2019-05-17T09:41:59.168481Z",
  "name": "system",
  "token": "b536d8f3e301f534c217d3a88f4560454ab2100f",
  "template": "empty-template",
  "service_type": [
    "kubernetes"
  ],
  "updated_at": "2019-05-17T09:45:13.797292Z",
  "mirror": {},
  "service_type": "kubernetes",
  "total_quota": "{'pods': 110, 'storage': 45240, 'cpu': 4, 'memory': 7}",
  "name": "project-test"
}
```
----

=> {style="font-size:50px"}

----
### GraphQL
```json

{
  "name": "project-test"
}
```
:::






