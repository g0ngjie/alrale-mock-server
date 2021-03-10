"use strict";

const Koa = require('koa');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const http = require('http');
const path = require('path');
const routes = require('./routes');
const { Log, GetIPAdress } = require('./common/util');

const app = new Koa();

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(require("koa-static")(path.join(__dirname, '..', 'public')));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    if (ctx.url.startsWith('/swagger-ui')) return
    debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

module.exports = async function (p, filePath) {
    await routes(app, filePath);
    const PORT = p || 8090
    http.createServer(app.callback())
        .listen(PORT)
        .on('listening', function () {
            Log.sys(`http://${GetIPAdress()}:${PORT}`)
            Log.sys(`http://localhost:${PORT}`)
        });
}

