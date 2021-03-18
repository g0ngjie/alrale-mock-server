"use strict";

const Router = require("koa-router");
const koaBody = require("koa-body");
const router = new Router();
const { getFileRoutes, fmtSwaggerJson } = require('./common/tools');
const { Log } = require("./common/util");

function getRoutes(files) {
  getFileRoutes(files).forEach(route => {
    const { path, method, response } = route;
    const m = method.toLowerCase() || 'get'
    router[m](path, function (ctx, next) {
      const { query, body } = ctx.request
      Log.info(`${m.toUpperCase()}请求参数: `, m === 'get' ? JSON.stringify(query, '', '\t') : JSON.stringify(body, '', '\t'))
      ctx.body = response || 'Nil'
      next()
    })
    router.allowedMethods()
  })
}

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

module.exports = async (app, files) => {
  await fmtSwaggerJson(files);
  getRoutes(files)
  app.use(router.routes())
}