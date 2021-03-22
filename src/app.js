"use strict";

const Koa = require('koa');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const http = require('http');
const path = require('path');
const koastatic = require("koa-static")
const cors = require('koa2-cors');
const routes = require('./routes');
const designRoutes = require('./designRoutes');
const { Log, GetIPAdress } = require('./common/util');

const app = new Koa();

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(cors());

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    if (
        // swagger
        ctx.url.startsWith('/swagger') ||
        ctx.url.startsWith('/favicon') ||
        // design
        ctx.url.startsWith('/css') ||
        ctx.url.startsWith('/js') ||
        ctx.url.startsWith('/fonts')
    ) return
    Log.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

module.exports = async function (p, filePath, isDesign = false) {
    const PORT = p || 8090

    if (!isDesign) {
        app.use(koastatic(path.join(__dirname, '..', 'public', 'swagger')));
        await routes(app, filePath, PORT);
    } else {
        app.use(koastatic(path.join(__dirname, '..', 'public', 'design')));
        designRoutes(app)
    }

    http.createServer(app.callback())
        .listen(PORT)
        .on('listening', function () {
            Log.sys(`http://${GetIPAdress()}:${PORT}`)
            Log.sys(`http://localhost:${PORT}`)
        });
    return PORT
}

