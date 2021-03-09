#!/usr/bin/env node

const program = require('commander');
const PKG = require('./package.json');
const path = require('path')

function init() {
    const [files] = program.args
    const cwd = process.cwd();
    let fullPath;
    if (files) {
        fullPath = path.join(cwd, files)
    }
    require('./app')(fullPath)
}

/* ========== commander ========== */
program
    .version(PKG.version, '-v, -version')

program
    .description('启动')
    .action(init);

program
    .parse(process.argv);