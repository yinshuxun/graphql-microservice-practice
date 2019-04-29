import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { getBlogList, getBlogByParam, getBlogByUserId } from './blog';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'BlogQuery',
    fields: {
      getBlogList,
      getBlogByParam,
      getBlogByUserId
    },
  }),
});
