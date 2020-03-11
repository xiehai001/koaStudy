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
import koaComposes from 'koa-compress'
import koaCompress from 'koa-compress'

const app = new Koa();
const isDevMode = process.env.NODE_ENV==="production"?false:true;

// app.use(helmet());
// app.use(statics(path.join(__dirname,'../public')))

// 使用 koa-compose 集成中间件

const middleware = koaComposes([
    koaBody(),
    statics(path.join(__dirname,'../public')),
    koaCors(),
    koaJson({pretty:false,param:'pretty'}),
    koaHelmet(),
    routers()
])
if(!isDevMode){
    app.use(koaCompress())
}
app.use(middleware);

app.listen(3000); 