"use strict";

const fsExtra = require('fs-extra')
const path = require('path')
const fs = require('fs')
const { object, randomString, typeIs } = require('@alrale/common-lib')
const { Log } = require('./util');

function createSwaggerJson(files) {
    const { paths } = files
    const swaggerJson = files ? JSON.parse(JSON.stringify(files)) : {}
    for (const path in paths) {
        const router = paths[path];
        for (const method in router) {
            const item = router[method]
            if (item.parameters) {
                const _parameters = eval("(" + item.parameters + ")")
                let params;
                if (method === 'get' || method === 'put') {
                    params = []
                    for (const key in _parameters) {
                        if (Object.hasOwnProperty.call(_parameters, key)) {
                            const _type = _parameters[key];
                            params.push({
                                in: 'query',
                                name: key,
                                type: typeIs(_type),
                                description: _type + ''
                            })
                        }
                    }
                } else {
                    // post
                    const properties = {}
                    for (const key in _parameters) {
                        if (Object.hasOwnProperty.call(_parameters, key)) {
                            const _type = _parameters[key];
                            properties[key] = { type: typeIs(_type), description: _type + '' }
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
                swaggerJson.paths[path][method].parameters = params
            }
            if (item.responses) {
                if (typeIs(item.responses) === 'object') {
                    const res = {}
                    for (const status in item.responses) {
                        const description = item.responses[status];
                        res[status] = { description }
                    }
                    swaggerJson.paths[path][method].responses = res
                }
                else
                    swaggerJson.paths[path][method].responses = {
                        '200': {
                            description: item.responses.replace(/(\r\n|\r|\n|\")/g, '')
                        }
                    }
            }
        }
    }
    return swaggerJson
}

/**?????????????????? */
function createTemplate(src, dst) {
    return new Promise(resolve => {
        fs.stat(src, function (err, stats) {  //stats  ????????? ??????????????????
            if (err) throw err;
            if (stats.isFile()) { //??????????????????????????? 
                let readable = fs.createReadStream(src);//???????????????
                let writable = fs.createWriteStream(dst);//???????????????
                readable.pipe(writable);
                Log.sys(`${dst} ????????????????????????`)
            }
            resolve()
        });
    })
}

exports.fmtSwaggerJson = async function (filePath, port) {
    const publicPath = path.join(__dirname, '..', '..', 'public', 'swagger', 'swagger.json')
    try {
        if (filePath) {
            const files = require(filePath);
            const swaggerData = createSwaggerJson(files);
            if (port) swaggerData.host = `localhost:${port}`
            fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerData, '', '\t'))
            Log.sys('swagger.json ????????????')
            return
        }
        Log.sys('swagger.json ????????????')
    } catch (error) {
        console.log(error)
        Log.sys('swagger.json ????????????')
        process.exit(1)
    }
}

exports.getFileRoutes = function (filePath) {
    const routes = []
    if (filePath) {
        const { paths, basePath } = require(filePath);
        for (const path in paths) {
            const router = paths[path];
            for (const method in router) {
                const { condition, responses } = router[method];
                const putObj = {
                    path: `${basePath || ''}${path}`,
                    method,
                    response: responses,
                }
                if (object.isEmpty(condition)) {
                    putObj.condition = condition
                }
                routes.push(putObj)
            }
        }
    }
    return routes
}

/**swagger???????????????js */
exports.transformSwagger = function (filePath) {
    const swagger = require(filePath)
    const { paths } = swagger
    for (const path in paths) {
        const router = paths[path]
        for (const method in router) {
            const params = {}
            const { summary, tags, produces, parameters = [], responses } = router[method];
            for (let i = 0; i < parameters.length; i++) {
                const { schema = {}, items = {} } = parameters[i];
                const { properties } = schema || {}
                for (const key in properties) {
                    const { type, description } = properties[key];
                    params[key] = type
                    params.description = description
                }
                for (const key in items) {
                    const item = items[key];
                    params[key] = item
                }
            }
            const res = {}
            for (const status in responses) {
                const { description } = responses[status];
                res[status] = description
            }
            swagger.paths[path][method] = {
                summary, tags, produces,
                parameters: JSON.stringify(params, '', '\n'),
                responses: res
            }
        }
    }

    try {
        const putPath = path.join(process.cwd(), `${randomString(5).toLowerCase()}_transform.js`)
        fsExtra.writeFileSync(putPath, 'module.exports = ' + JSON.stringify(swagger, '', '\t'))
    } catch (error) {
        console.log(error);
    }
}