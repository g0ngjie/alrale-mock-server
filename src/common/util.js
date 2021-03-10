"use strict";

const debug = require('debug')('[SYS]')
debug.enabled = true
const info = require('debug')('[INFO]')
info.enabled = true

/**日志输出 */
exports.Log = {
    sys: (...args) => debug(...args),
    info: (...args) => info(...args),
}

/**获取本机ip */
exports.GetIPAdress = function () {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
