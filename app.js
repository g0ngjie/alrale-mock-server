"use strict";

const Koa = require('koa');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const http = require('http');
const routes = require('./routes')
const debug = require('debug')(':')
debug.enabled = true

const app = new Koa();

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(require("koa-static")(__dirname + "/public"));

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    if (ctx.url.startsWith('/swagger-ui')) return
    debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

module.exports = function (filePath) {
    routes(app, filePath);
}

http.createServer(app.callback())
    .listen(8090)
    .on('listening', function () {
        debug('server listening on: http://localhost:' + 8090)
    });
