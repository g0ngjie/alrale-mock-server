module.exports = [
	{
		path: '/get/users',
		summary: '获取用户列表',
		method: 'get',
		parameters: {
			start: 'number',
			limit: 'number'
		},
		response: {
			ok: true,
			data: {
				list: [{ name: 'zhangsan', age: 20 }, { name: 'lisi', age: 23 }]
			}
		}
	}, {
		path: '/post/saveUser',
		summary: '添加用户',
		method: 'post',
		parameters: {
			user: 'string',
			age: 'number'
		},
		response: {
			ok: true
		}
	}
]