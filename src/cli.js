#!/usr/bin/env node

const program = require('commander');
const PKG = require('../package.json');
const path = require('path')
const open = require('open');
const tool = require('./common/tools')

/**mock服务启动 */
function startFunc(file, cmd) {
    const { port } = cmd
    const cwd = process.cwd();
    const file_path = path.join(cwd, file)
    require('./app')(port, file_path)
}

/**打开设计器 */
async function openDesign(cmd) {
    const port = await require('./app')(cmd.port, null, true)
    open(`http://localhost:${port}`)
}

function transformFunc(file) {
    const cwd = process.cwd()
    const file_path = path.join(cwd, file)
    tool.transformSwagger(file_path)
}

/* ========== commander ========== */
program
    .version(PKG.version, '-v, -version')

program
    .command('start <file>')
    .option('-p, --port <port>', '端口号')
    .description('启动Mock服务')
    .action(startFunc);

program
    .command('design')
    .alias('d')
    .option('-p, --port <port>', '端口号')
    .description('设计器')
    .action(openDesign)

program
    .command('transform <swagger.json>')
    .alias('t')
    .description('格式化swagger.json,生成js文件')
    .action(transformFunc)

program
    .parse(process.argv);