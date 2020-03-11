const combineRoutes = require('koa-combine-routers');


const aRouter = require('./aRouter');
const bRouter = require('./bRouter');

module.exports = combineRoutes(
    aRouter,
    bRouter
)