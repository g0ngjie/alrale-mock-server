# @alrale/mock-server
cli

- [x] 文档设计
- [x] mock服务
- [x] 请求协议GET、POST、PUT、DELETE
- [x] 格式化swagger.json
- [ ] 文件流上传、下载
- [ ] 格式化yap.json

## Install

```shell
$ npm install -g @alrale/mock-server
```

## Usage
``` shell
Usage: cli [options] [command]

Options:
  -v, -version        output the version number
  -h, --help          display help for command

Commands:
  start [options]             启动Mock服务
  design|d [options]          设计器
  transform|t <swagger.json>  格式化swagger.json,生成js文件
```