"use strict";

// 默认测试路由
exports.DefaultRoutes = [
    { path: '/get', method: 'get', params: { req: 123 }, response: { ok: true, data: { a: 1, b: 2 }}},
    { path: '/post', method: 'post', body: { data: { a: 'postdata' } }, response: { ok: true, data: { a: 1, b: 2 }}},
]