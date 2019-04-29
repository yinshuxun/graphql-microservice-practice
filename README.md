# graphql-microservice-practice

Graphql microservice demo 
- one gateway server built in node
- one custom server built in go
- one custom server built in node

The server is backed by a mysql database and exposes `Post` and `Comment` models

## Installation
Clone this repository
```
git clone https://github.com/yinshuxun/graphql-microservice-practice.git
```

Install dependencies
```
./init.sh
docker-compose up
```
## Getting Started
1. Run `yarn start`
2. Open `http://localhost:40000/graphql` for GraphQL Playground
