package resolvers

import (
	"log"

	"graphql-go/db"
	"github.com/graphql-go/graphql"
)

func CreateType() *graphql.Object {
	return graphql.NewObject(graphql.ObjectConfig{
		Name: "Blog",
		Fields: graphql.Fields{
			"blog_id": &graphql.Field{
				Type: graphql.NewNonNull(graphql.Int),
			},
			"user_id": &graphql.Field{
				Type: graphql.NewNonNull(graphql.Int),
			},
			"name": &graphql.Field{
				Type: graphql.String,
			},
			"content": &graphql.Field{
				Type: graphql.String,
			},
		},
	})
}

func GetBlogs() *graphql.Field {
	return &graphql.Field{
		Type: graphql.NewList(CreateType()),
		Resolve: func(p graphql.ResolveParams) (interface{}, error) {
			
			return db.GetBlogList()
		},
	}
}

func GetBlogsByUserId() *graphql.Field {
	return &graphql.Field{
		Type: graphql.NewList(CreateType()),
		Args: graphql.FieldConfigArgument{
			"user_id": &graphql.ArgumentConfig{
				Type: graphql.NewNonNull(graphql.Int),
			},
		},
		Resolve: func(p graphql.ResolveParams) (interface{}, error) {
			id := p.Args["user_id"]
			v, _ := id.(int)
			log.Printf("fetching comment with id: %d", v)
			return db.GetBlogListByUserId(v)
		},
	}
}



