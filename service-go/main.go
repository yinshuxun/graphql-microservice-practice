package main

import (
	"log"
	"net/http"

	_ "graphql-go/db"

	"graphql-go/resolvers"
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
	})
	graphiqlHandler := gqlhandler.New(&gqlhandler.Config{
		Schema:     &schema,
		Pretty:     true,
		GraphiQL:   false,
		Playground: true,
	})

	http.Handle("/graphql", graphqlHandler)
	http.Handle("/graphiql", graphiqlHandler)

	log.Println("GraphQL Server started at http://localhost:4003/graphql")
	log.Println("GraphiQL Server started at http://localhost:4003/graphiql")
	log.Fatal(http.ListenAndServe(":4003", nil))
}
