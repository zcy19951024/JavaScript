const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = cxt => {
    cxt.response.type = 'html';
    cxt.response.body = '<a href="/">Index Page</a>'
};
const main = cxt => {
    cxt.response.body = 'Hello World';
}
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.listen(3000);