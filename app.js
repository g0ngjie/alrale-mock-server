const Koa = require('koa');
const koaJson = require('koa-json');
const bodyParser = require('koa-bodyparser');
const http = require('http');

const app = new Koa();

app.use(bodyParser());
app.use(koaJson());

http.createServer(app.callback())
    .listen(8090)
    .on('listening', function () {
        console.log('server listening on: ' + 8090)
    });