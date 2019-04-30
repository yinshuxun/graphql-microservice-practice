package db

import (
	"database/sql"
	"strings"
	"fmt"

    _ "github.com/go-sql-driver/mysql"
)

//数据库配置
const (
    userName = "root"
    password = "888888"
    ip = "127.0.0.1"
    port = "3306"
    dbName = "app"
)

var db *sql.DB

func init() {
	//构建连接："用户名:密码@tcp(IP:端口)/数据库?charset=utf8"
    path := strings.Join([]string{userName, ":", password, "@tcp(",ip, ":", port, ")/", dbName, "?charset=utf8"}, "")

    //打开数据库,前者是驱动名，所以要导入： _ "github.com/go-sql-driver/mysql"
    db, _ = sql.Open("mysql", path)
    //设置数据库最大连接数
    db.SetConnMaxLifetime(100)
    //设置上数据库最大闲置连接数
    db.SetMaxIdleConns(10)
    //验证连接
    if err := db.Ping(); err != nil{
        fmt.Println("opon database fail")
        return
    }
    // fmt.Println("connnect success")
}

type Blog struct {
	Blog_id string `json:"blog_id"`
	User_Id string `json:"user_id"`
	Name string
	Content string
}

func GetBlogList() ([]*Blog, error) {
	statement := fmt.Sprintf("SELECT * FROM blog")
	rows, err := db.Query(statement)
	if err != nil {
		return nil, err
	}

	defer rows.Close()
	blogs := []*Blog{}

	for rows.Next() {
		var c Blog
		if err := rows.Scan(&c.Blog_id, &c.User_Id, &c.Name, &c.Content); err != nil {
			return nil, err
		}
		blogs = append(blogs, &c)
	}

	return blogs, nil
}

func GetBlogListByUserId(user_id int) ([]*Blog, error) {
	statement := fmt.Sprintf("SELECT * FROM blog where user_id=%d",user_id)
	rows, err := db.Query(statement)
	if err != nil {
		return nil, err
	}

	defer rows.Close()
	blogs := []*Blog{}

	for rows.Next() {
		var c Blog
		if err := rows.Scan(&c.Blog_id, &c.User_Id, &c.Name, &c.Content); err != nil {
			return nil, err
		}
		blogs = append(blogs, &c)
	}

	return blogs, nil
}



