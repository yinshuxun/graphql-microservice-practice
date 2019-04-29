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
const blogLink = new HttpLink({ uri: 'http://localhost:4002/graphql', fetch });

async function cb() {
  const userSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(userLink),
    link: userLink,
  })
  const blogSchema = makeRemoteExecutableSchema({
    schema: await introspectSchema(blogLink),
    link: blogLink,
  })

  const schema = mergeSchemas({
    schemas: [
      userSchema,
      blogSchema,
      linkTypeDefs
    ],
    resolvers: {
      User: {
        blogs: {
          fragment: `fragment UserFragment on user { name }`,
          resolve(user, args, context, info) {
            return info.mergeInfo.delegateToSchema({
              schema: blogSchema,
              operation: 'query',
              fieldName: 'getBlogByUserId',
              args: {
                userId: user.user_id,
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
