"use strict";

const fsExtra = require('fs-extra')
const path = require('path')
const fs = require('fs')
const swaggerJson = require('./swagger.json');
const { Log } = require('./util');

function createSwaggerJson(files) {
    const { paths } = files
    const swaggerJson = files || {}
    for (const path in paths) {
        const router = paths[path];
        for (const method in router) {
            const item = router[method]
            console.log('[debug]item.parameters-> ', item.parameters);
            console.log('[debug]swaggerJson.paths[path][method]-> ', swaggerJson.paths[path][method]);
            if (item.parameters) swaggerJson.paths[path][method].parameters = eval("(" + item.parameters + ")")
            if (item.responses) swaggerJson.paths[path][method].responses = eval("(" + item.responses + ")")
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
        const putPath = path.join(process.cwd(), 'mock.js')
        await createTemplate(path.join(__dirname, 'mock-template.js'), putPath)
        fsExtra.writeFileSync(publicPath, JSON.stringify(swaggerJson, '', '\t'))
        Log.sys('swagger.json 加载成功')
    } catch (error) {
        Log.sys('swagger.json 加载失败')
        process.exit(1)
    }
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