import React from "react";
import AceEditor from "react-ace";
// 这个webpack文件会产生大量的build后的文件
// import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { typeIs } from "@alrale/common-lib";

export default (props) => {
    const { name, code, onChange } = props;
    const isJson = ['parameters', 'responses'].includes(name)
    const mode = isJson ? 'json' : 'javascript'

    const _conf = {
        parameters: `{
    "start": "number", // 查询参数 和 类型
}`,
        responses: '{}',
        condition: `let q = query; // get参数
let b = body; // post参数
if (condition) {
    ctx.body = { ok: true, data: 'success' }
}
ctx.body = {}`
    }
    const placeholder = code ? code : _conf[name]
    let value = '';
    if (code && typeIs(code) === 'string') value = code
    else if (code && typeIs(code) === 'object')  value = JSON.stringify(code, '', '\n')

    return (
        <AceEditor
            width={"100%"}
            height={"200px"}
            mode={mode}
            theme="monokai"
            placeholder={placeholder}
            onChange={(value) => onChange(value, name)}
            name={name}
            value={value}
            editorProps={{ $blockScrolling: true }}
            fontSize="14px"
            showGutter={true}
            // readOnly={true}
            tabSize={2}
            highlightActiveLine={true}
            showPrintMargin={false}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
            }}
        />
    );
};
