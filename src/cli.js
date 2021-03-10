#!/usr/bin/env node

const program = require('commander');
const PKG = require('../package.json');
const path = require('path')
const open = require('open');

/**mock服务启动 */
function startFunc(cmd) {
    let file_path;
    const { port, file } = cmd
    if (file) {
        const cwd = process.cwd();
        file_path = path.join(cwd, file)
    }
    require('./app')(port, file_path)
}

/**打开浏览器 */
function openFunc() {
    open('http://localhost:8090')
}

/* ========== commander ========== */
program
    .version(PKG.version, '-v, -version')

program
    .command('open')
    .alias('o')
    .option('-p, --port', '端口号')
    .description('打开浏览器')
    .action(openFunc);

program
    .command('start')
    .option('-p, --port <port>', '端口号')
    .option('-f, --file <file_name>', '加载Mock文件')
    .description('启动Mock服务')
    .action(startFunc);

program
    .parse(process.argv);