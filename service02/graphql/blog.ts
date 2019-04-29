import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import mysqlConnection from './mysql';

const Blog = new GraphQLObjectType({
  name: 'Blog',
  fields: {
    blog_id: {
      type: GraphQLID,
    },
    user_id:{
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
  },
});

export const getBlogList = {
  type: new GraphQLList(Blog),
  description: 'get all Blog',
  resolve: async (_source, _params) => {
    let blogs = await mysqlConnection.pifySelect('select * from blog');
    return blogs;
  },
};

export const getBlogByParam = {
  type: Blog,
  args: {
    blog_id: {
      name: 'blog_id',
      type: GraphQLID,
    },
    name: {
      name: 'name',
      type: GraphQLString,
    },
  },
  description: 'get blog by param',
  resolve: async (_source, _params) => {
    let blogs = await mysqlConnection.pifySelect(
      `select * from blog where blog_id=${_params.blog_id}`,
    );
    return blogs[0];
  },
};

export const getBlogByUserId = {
  type:  new GraphQLList(Blog),
  args: {
    userId: {
      name: 'userId',
      type: GraphQLID,
    }
  },
  description: 'get blog by userId',
  resolve: async (_source, _params) => {
    let blogs = await mysqlConnection.pifySelect(
      `select * from blog where user_id=${_params.userId}`,
    );
    return blogs;
  },
};
