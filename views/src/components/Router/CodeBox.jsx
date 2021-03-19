import React from "react";
// 引入codemirror
import CodeMirror from 'react-codemirror';
// 引入基本样式
// import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.css';
// 引入语言类型(可选)
// import 'codemirror/mode/sql/sql';
import 'codemirror/mode/javascript/javascript';
// 引入主题颜色(可选)
import 'codemirror/theme/monokai.css';
// 按ctrl+空格进行提示功能：
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import "codemirror/addon/fold/foldgutter.css"
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/indent-fold.js';
import "codemirror/addon/fold/brace-fold";
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';


const options = {
    mode: { name: "javascript", json: true },    //定义mode  
    extraKeys: { "Ctrl": "autocomplete" },   //自动提示配置  
    theme: "monokai",                  //选中的theme
    value: '// 请求参数\n{\n}', // 初始值，字符串或者Document对象
    indentUnit: 2, // 缩进单位(默认2)
    smartIndent: true, // 是否智能缩进 默认 true
    tabSize: 2, // tab 宽度
    keyMap: 'default', // 是否配置秘钥映射
    lineWrapping: true, // 是否换行(默认不换行 scroll)
    foldGutter: true,
    lineNumbers: false, // 是否显示行号
    firstLineNumber: 1, // 初始行号(默认是1，通常不需要设置)
    readOnly: false, // / false / nocursor, // 只读模式
    undoDepth: 40, // 撤销次数
    autofocus: false, // 初始自动聚焦
    onDragEvent: true,
    matchBrackets: true,  //括号匹配
    autoCloseBrackets: true,
    onKeyEvent: true, // 是否允许拖拽事件和键盘事件
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    styleActiveLine: true,
};

export default class CodeBox extends React.Component {

    render() {
        return (
            <>
                <CodeMirror
                    value={this.props.code}
                    options={options}
                    onChange={(code) => this.props.onChange(code)}
                />
            </>
        );
    }
}
