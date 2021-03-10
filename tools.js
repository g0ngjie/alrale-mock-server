"use strict";

const fsExtra = require('fs-extra')
const path = require('path')
const debug = require('debug')('::')
debug.enabled = true

const defaultSwagger = {
    swagger: "2.0",
    info: {
        description: "mock-server",
        version: "1.0.0",
        title: "接口文档"
    },
    host: "localhost:8090",
    schemes: [
        "http"
    ],
}

const swaggerJson = require('./swagger.json')

exports.fmtSwaggerJson = async function (filePath) {
    if (filePath) {
        const files = require(filePath)
        return
    }
    const publicPath = path.join(__dirname, 'public', 'swagger.json')
    try {
        const pwd = process.cwd()
        console.log(pwd, 'pwd');
        const putPath = path.join(pwd, 'mock.json')
        fsExtra.writeFileSync(putPath, JSON.stringify(swaggerJson, '', '\t'))
        fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerJson, '', '\t'))
        debug('swagger.json 加载成功')
    } catch (error) {
        debug('swagger.json 加载失败')
    }
}

exports.getDefaultRoutes = function () {
    const { paths } = swaggerJson;
    const routes = []
    for (const key in paths) {
        const item = paths[key];
        if (!item) continue
        const isPost = 'post' in item;
        const method = isPost ? 'post' : 'get'
        const { responses } = item[method];
        routes.push({
            path: key,
            method,
            response: responses
        })
    }
    return routes
}

exports.getFileRoutes = function (filePath) {
    const files = require(filePath)
    console.log(files, 'files');
}