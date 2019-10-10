import { GraphQLSchema, GraphQLObjectType, GraphQLInputObjectType, buildSchema } from 'graphql';

import { getUserList, getUserByParam,createUser } from './user';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'getUser',
    fields: {
      getUserList,
      getUserByParam
    },
  }),
  mutation: new GraphQLObjectType({
    name:'createUser',
    fields: {
      createUser
    }
  })
});
