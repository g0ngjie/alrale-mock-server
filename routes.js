"use strict";

const Router = require("koa-router");
const router = new Router();
const debug = require('debug')(':')
debug.enabled = true
const { getFileRoutes, fmtSwaggerJson } = require('./tools')

function getRoutes(files) {
  getFileRoutes(files).forEach(route => {
    const { path, method, response } = route;
    const m = method.toLowerCase() || 'get'
    router[m](path, function (ctx, next) {
      const { query, body } = ctx.request
      debug(`${m.toUpperCase()}请求参数: `, m === 'get' ? JSON.stringify(query, '', '\t') : JSON.stringify(body, '', '\t'))
      ctx.body = response || 'Nil'
      next()
    })
    router.allowedMethods()
  })
}

module.exports = async (app, files) => {
  await fmtSwaggerJson(files);
  getRoutes(files)
  app.use(router.routes())
}