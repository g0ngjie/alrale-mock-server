"use strict";

const fsExtra = require('fs-extra')
const path = require('path')
const fs = require('fs')
const swaggerJson = require('./swagger.json');
const { Log } = require('./util');

function createSwaggerJson(files) {
    const { paths, host, prefix } = files
    const swaggerJson = files ? JSON.parse(JSON.stringify(files)) : {}
    swaggerJson.host = host + prefix || ''
    delete swaggerJson.prefix
    for (const path in paths) {
        const router = paths[path];
        for (const method in router) {
            const item = router[method]
            if (item.parameters) {
                // swaggerJson.paths[path][method].parameters = eval("(" + item.parameters + ")")
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
                                type: _type,
                                description: ''
                            })
                        }
                    }
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
                swaggerJson.paths[path][method].parameters = params
            }
            if (item.responses) swaggerJson.paths[path][method].responses = {
                '200': {
                    description: JSON.stringify(eval("(" + item.responses + ")"))
                }
            }
        }
    }
    return swaggerJson
}

/**创建模板文件 */
function createTemplate(src, dst) {
    return new Promise(resolve => {
        fs.stat(src, function (err, stats) {  //stats  该对象 包含文件属性
            if (err) throw err;
            if (stats.isFile()) { //如果是个文件则拷贝 
                let readable = fs.createReadStream(src);//创建读取流
                let writable = fs.createWriteStream(dst);//创建写入流
                readable.pipe(writable);
                Log.sys(`${dst} 模板文件已经创建`)
            }
            resolve()
        });
    })
}

exports.fmtSwaggerJson = async function (filePath) {
    const publicPath = path.join(__dirname, '..', '..', 'public', 'swagger', 'swagger.json')
    try {
        if (filePath) {
            const files = require(filePath);
            const swaggerData = createSwaggerJson(files);
            fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerData, '', '\t'))
            Log.sys('swagger.json 加载成功')
            return
        }
        // const putPath = path.join(process.cwd(), 'mock.js')
        // await createTemplate(path.join(__dirname, 'mock-template.js'), putPath)
        // fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerJson, '', '\t'))
        Log.sys('swagger.json 加载成功')
    } catch (error) {
        console.log(error)
        Log.sys('swagger.json 加载失败')
        process.exit(1)
    }
}

exports.getFileRoutes = function (filePath) {
    const routes = []
    if (filePath) {
        const { paths, prefix } = require(filePath);
        for (const path in paths) {
            const router = paths[path];
            for (const method in router) {
                const { condition, parameters, responses } = router[method];
                const putObj = {
                    path: `${prefix}${path}`,
                    method,
                    response: responses,
                }
                if (condition) {
                    putObj.parameters = parameters
                    putObj.condition = condition
                }
                routes.push(putObj)
            }
        }
    }
    return routes
}