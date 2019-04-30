import * as Koa from 'koa';
import {
  ApolloServer,
  gql,
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas,
} from 'apollo-server-koa';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const linkTypeDefs = `
  extend type User {
    blogs: [Blog]
  }

  extend type Blog {
    author: User
  }
`;

const userLink = new HttpLink({ uri: 'http://localhost:4001/graphql', fetch });
const blogLink = new HttpLink({ uri: 'http://localhost:4003/graphql', fetch });

async function cb() {
  const userSchema = await introspectSchema(userLink)
  const blogSchema = await introspectSchema(blogLink)
  const userRESchema = makeRemoteExecutableSchema({
    schema: userSchema,
    link: userLink,
  })
  const blogRESchema = makeRemoteExecutableSchema({
    schema: blogSchema,
    link: blogLink,
  })

  const schema = mergeSchemas({
    schemas: [
      userRESchema,
      blogRESchema,
      linkTypeDefs
    ],
    resolvers: {
      User: {
        blogs: {
          fragment: `fragment UserFragment on user { name }`,
          resolve(user, args, context, info) {
            return info.mergeInfo.delegateToSchema({
              schema: blogRESchema,
              operation: 'query',
              fieldName: 'getBlogsByUserId',
              args: {
                user_id: +user.user_id,
              },
              context,
              info,
            });
          },
        },
      },
    }
  });

  const server = new ApolloServer({
    schema,
  });

  const app = new Koa();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
}

cb();
