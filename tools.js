"use strict";

const fsExtra = require('fs-extra')
const path = require('path')
const fs = require('fs')
const debug = require('debug')('::')
debug.enabled = true

const swaggerJson = require('./swagger.json')

function createSwaggerJson(files = []) {
    // 声明
    const declaration = {
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
    const _swaggerPaths = {}
    for (let i = 0; i < files.length; i++) {
        const {
            path: _path,
            summary: _summary,
            method: _method,
            parameters: _parameters,
            response: _response
        } = files[i];
        _swaggerPaths[_path] = {
            [_method]: {
                summary: _summary,
                tags: [],
                produces: ['application/json'],
                responses: {
                    '200': {
                        description: JSON.stringify(_response)
                    },
                    '404': {
                        description: '接口连接错误'
                    }
                }
            }
        }
        let params;
        if (_method === 'get') {
            params = []
            for (const key in _parameters) {
                if (Object.hasOwnProperty.call(_parameters, key)) {
                    const _type = _parameters[key];
                    params.push({
                        in: 'query',
                        name: key,
                        type: _type,
                        description: ''
                    })
                }
            }
            _swaggerPaths[_path][_method].parameters = params
        } else {
            // post
            const properties = {}
            for (const key in _parameters) {
                if (Object.hasOwnProperty.call(_parameters, key)) {
                    const _type = _parameters[key];
                    properties[key] = { type: _type, description: '' }
                }
            }
            params = [{
                in: 'body',
                name: 'body',
                required: false,
                schema: {
                    type: 'object',
                    required: [],
                    properties,
                },
                description: ''
            }]
        }
        _swaggerPaths[_path][_method].parameters = params
    }
    declaration.paths = _swaggerPaths
    return declaration
}

/**创建模板文件 */
function createTemplate(src, dst) {
    fs.stat(src, function (err, stats) {  //stats  该对象 包含文件属性
        if (err) throw err;
        if (stats.isFile()) { //如果是个文件则拷贝 
            let readable = fs.createReadStream(src);//创建读取流
            let writable = fs.createWriteStream(dst);//创建写入流
            readable.pipe(writable);
            debug(`${dst} 模板文件已经创建`)
        }
    });
}

exports.fmtSwaggerJson = async function (filePath) {
    const publicPath = path.join(__dirname, 'public', 'swagger.json')
    try {
        if (filePath) {
            const files = require(filePath)
            const swaggerData = createSwaggerJson(files);
            fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerData, '', '\t'))
            debug('swagger.json 加载成功')
            return
        }
        const putPath = path.join(process.cwd(), 'mock.js')
        createTemplate(path.join(__dirname, 'mock-template.js'), putPath)
        fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerJson, '', '\t'))
        debug('swagger.json 加载成功')
    } catch (error) {
        debug('swagger.json 加载失败')
        process.exit(1)
    }
}

exports.getDefaultRoutes = function () {
    
}

exports.getFileRoutes = function (filePath) {
    const routes = []
    if (filePath) {
        const paths = require(filePath);
        for (let i = 0; i < paths.length; i++) {
            const { 
                path: _path,
                method: _method,
                response: _response
            } = paths[i];
            routes.push({
                path: _path,
                method: _method,
                response: _response
            })
        }
    }
    else {
        const paths = swaggerJson.paths
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
    }
    return routes
}