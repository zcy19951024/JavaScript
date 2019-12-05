const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = cxt => {
    cxt.response.redirect('/');
};
const main = cxt => {
    cxt.response.body = 'Hello World';
};
app.use(route.get('/', main));
app.use(route.get('/redirect', redirect))

app.use(main);
app.listen(3000);