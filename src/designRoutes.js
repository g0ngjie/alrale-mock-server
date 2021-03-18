"use strict";

const Router = require("koa-router");
const koaBody = require("koa-body");
const router = new Router();

/**端口号 */
router.get('/port', (ctx, next) => {
    const port = ctx.header.host.split(':')[1]
    ctx.body = { ok: true, data: port }
    next()
})

router.post(
    "/upload",
    koaBody({
        multipart: true,
        formidable: { maxFileSize: 10 * 1024 * 1024, multipart: true }
    }),
    async (ctx, next) => {
        const req = ctx.request;
        const { path } = req.files.file || {};
        const data = require(path);
        ctx.body = { ok: true, data }
        await next();
    }
)


module.exports = async (app) => {
    router.allowedMethods()
    app.use(router.routes())
}