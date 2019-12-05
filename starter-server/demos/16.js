/**
 * 处理错误的中间件
 */
const Koa = require('Koa');
const app = new Koa();
const handler = async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        ctx.response.status = e.statusCode || err.status || 500;
        ctx.response.body = { message: e.message };
    }
};

const main = ctx => {
    ctx.throw(500);
};
app.use(handler);
app.use(main);
app.listen(3000);