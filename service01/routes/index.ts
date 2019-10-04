import * as Router from 'koa-router';
const graphqlHTTP = require('koa-graphql');
import OwnGraphQLSchema from '../graphql/schema';

const router = new Router();
router.get('/', ctx => (ctx.body = 'alla'));
router.all(
  '/graphql',
  graphqlHTTP({
    schema: OwnGraphQLSchema,
    graphiql: true,
  }),
);

export default router;
