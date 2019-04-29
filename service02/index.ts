import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import router from './routes'

const app = new Koa();

router.use(router.routes())
app.use(router.routes())
   .use(router.allowedMethods());

app.listen({ port: 4002 }, () =>
  console.log(`🚀 Server ready at http://localhost:4002`)
);
