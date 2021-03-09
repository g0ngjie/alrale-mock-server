"use strict";

const Router = require("koa-router");
const router = new Router();
const { DefaultRoutes } = require('./tools')

DefaultRoutes.forEach(route => {
  const { path, method, params, body, response } = route;
  const m = method.toLowerCase() || 'get'
  router[m](path, function (ctx, next) {
    console.log(`${m}请求参数: `, m === 'get' ? params : body)
    ctx.body = response || 'Nil'
    next()
  })
  router.allowedMethods()
})

module.exports = app => {
  app.use(router.routes())
}