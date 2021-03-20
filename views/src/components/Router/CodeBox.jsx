import React from "react";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default (props) => {
    const { name, code, onChange } = props;
    return (
        <AceEditor
            width={"100%"}
            height={"300px"}
            mode="javascript"
            theme="monokai"
            placeholder={"###"}
            onChange={(value) => onChange(value, name)}
            name={name}
            value={code || ''}
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
        // onLoad = {(editor)=>{
        // console.log(editor)  //onLoad 的第一个参数是编辑器实例
        //}}
        // commands= {[{    //键盘指令
        //	name:'saveFile',
        //	bindKey:{win:'Ctrl-S',mac:'Command-S'}
        //	exec:()=>{
        //		console.log('saveFile')
        //}
        //}]}
        //debounceChangePeriod = {500} // 防抖时间
        />
    );
};
