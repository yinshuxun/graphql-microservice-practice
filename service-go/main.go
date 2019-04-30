package main

import (
	"log"
	"net/http"

	_ "graphql-microservice-practice/service-go/db"

	"graphql-microservice-practice/service-go/resolvers"
	"github.com/graphql-go/graphql"
	gqlhandler "github.com/graphql-go/handler"
)

func main() {
	fields := graphql.Fields{
		"getBlogs": resolvers.GetBlogs(),
		"getBlogsByUserId": resolvers.GetBlogsByUserId(),
	}
	rootQuery := graphql.ObjectConfig{Name: "GetBlog", Fields: fields}
	schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}
	schema, _ := graphql.NewSchema(schemaConfig)


	graphqlHandler := gqlhandler.New(&gqlhandler.Config{
    Schema: &schema,
    Pretty:     true,
		GraphiQL:   false,
		Playground: true,
	})

	http.Handle("/graphql", graphqlHandler)

	log.Println("🚀 Server ready at http://localhost:4003/graphql")
	log.Fatal(http.ListenAndServe(":4003", nil))
}
