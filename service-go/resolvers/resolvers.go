package resolvers

import (
	"log"

	"graphql-microservice-practice/service-go/db"
	"github.com/graphql-go/graphql"
)

var BlogType = graphql.NewObject(graphql.ObjectConfig{
    Name: "Blog",
    Description: "这是博客模型",
		Fields: graphql.Fields{
			"blog_id": &graphql.Field{
        Description: "博客id",
				Type: graphql.NewNonNull(graphql.Int),
			},
			"user_id": &graphql.Field{
        Description: "博客创建者id",
				Type: graphql.NewNonNull(graphql.Int),
			},
			"name": &graphql.Field{
        Description: "博客名称",
				Type: graphql.String,
			},
			"content": &graphql.Field{
        Description: "博客内容",
				Type: graphql.String,
			},
		},
	})


func GetBlogs() *graphql.Field {
	return &graphql.Field{
    Description: "博客列表",
		Type: graphql.NewList(BlogType),
		Resolve: func(p graphql.ResolveParams) (interface{}, error) {

			return db.GetBlogList()
		},
	}
}

func GetBlogsByUserId() *graphql.Field {
	return &graphql.Field{
    Description: "通过userid获取博客列表",
		Type: graphql.NewList(BlogType),
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



