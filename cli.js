#!/usr/bin/env node

const program = require('commander');
const PKG = require('./package.json');
const path = require('path')
const open = require('open')

function init() {
    const [files] = program.args
    const cwd = process.cwd();
    let fullPath;
    if (files) {
        fullPath = path.join(cwd, files)
    }
    require('./app')(fullPath)
}

function openFunc() {
    init()
    open('http://localhost:8091')
}

/* ========== commander ========== */
program
    .version(PKG.version, '-v, -version')

program
    .command('open')
    .alias('o')
    .description('打开浏览器')
    .action(openFunc);

// program
//     .description('启动')
//     .action(init);

program
    .parse(process.argv);