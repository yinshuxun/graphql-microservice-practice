import "reflect-metadata";
import * as Koa from 'koa';

import router from './routes';

const app = new Koa();

router.use(router.routes())
app.use(router.routes())
   .use(router.allowedMethods());

app.listen({ port: 4001 }, () =>
  console.log(`🚀 Server ready at http://localhost:4001`)
);

