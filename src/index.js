import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import routers from './routes/routes'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import koaCors from '@koa/cors'
import koaComposes from 'koa-compose'
import koaHelmet from 'koa-helmet'


const app = new Koa();

// app.use(helmet());
// app.use(statics(path.join(__dirname,'../public')))
// app.use(routers());
// 使用 koa-compose 集成中间件

const middleware = koaComposes([
    koaBody(),
    statics(path.join(__dirname,'../public')),
    koaCors(),
    koaJson({pretty:false,param:'pretty'}),
    koaHelmet(),
])
app.use(middleware);

app.listen(3000); 