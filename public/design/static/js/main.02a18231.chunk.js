(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{286:function(e,t,n){},287:function(e,t,n){},305:function(e,t){},307:function(e,t){},317:function(e,t){},319:function(e,t){},346:function(e,t){},347:function(e,t){},352:function(e,t){},354:function(e,t){},361:function(e,t){},380:function(e,t){},499:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(27),r=n.n(i),o=(n(285),n(286),n(98)),c=n(189),l=n(35),u=n(53),h=n(54),d=n(56),j=n(55),p=(n(287),n(70)),f=n(260),b=n(278),m=n(507),g=n(501),O=n(158),v=n(509),x=n(262),y=n.n(x),w=n(7),S=Object(O.c)((function(){return Object(w.jsx)(v.a,{style:{cursor:"grab",color:"#999"}})})),C=[{title:"#",dataIndex:"sort",width:30,render:function(){return Object(w.jsx)(S,{})}},{title:"Path",dataIndex:"path"},{title:"Method",dataIndex:"method",render:function(e,t){return Object(w.jsxs)(m.a,{style:{color:{GET:"#61affe",POST:"#49cc90",PUT:"#fca130",DELETE:"#F56C6C"}[e.toUpperCase()]},children:[" ",e.toUpperCase()," "]},t)}},{title:"Tag",dataIndex:"tag",render:function(e,t){return Object(w.jsx)(m.a,{color:"cyan",children:e.toUpperCase()},t)}},{title:"\u6982\u8981",dataIndex:"summary",ellipsis:!0},{title:"operation",dataIndex:"operation",render:function(e,t,n){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("a",{onClick:function(){return t.remove(n)},style:{marginRight:10,color:"#F56C6C"},children:"Delete"}),Object(w.jsx)("a",{onClick:function(){return t.edit(n)},children:"Edit"})]})}}],k=Object(O.b)((function(e){return Object(w.jsx)("tr",Object(l.a)({},e))})),I=Object(O.a)((function(e){return Object(w.jsx)("tbody",Object(l.a)({},e))})),R=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onSortEnd=function(t){var n=t.oldIndex,a=t.newIndex,s=e.props.list;if(n!==a){var i=y()([].concat(s),n,a).filter((function(e){return!!e}));e.props.updateRows(i)}},e.DraggableContainer=function(t){return Object(w.jsx)(I,Object(l.a)({useDragHandle:!0,disableAutoscroll:!0,helperClass:"row-dragging",onSortEnd:e.onSortEnd},t))},e.DraggableBodyRow=function(t){t.className,t.style;var n=Object(b.a)(t,["className","style"]),a=e.props.list.findIndex((function(e){return e.index===n["data-row-key"]}));return Object(w.jsx)(k,Object(l.a)({index:a},n))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{style:{width:"100%"},children:Object(w.jsx)(g.a,{loading:this.props.loading,pagination:!1,dataSource:this.props.list,columns:C,rowKey:"index",components:{body:{wrapper:this.DraggableContainer,row:this.DraggableBodyRow}}})})}}]),n}(s.a.Component),T=n(504),E=n(38),V=n(510),M=n(505),P=n(503),D=n(506),F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={form:null},e.handleOk=function(){var t=e.state.form.current.getFieldsValue(["title","version","host","description"]),n=t.title,a=t.version,s=t.host,i=t.description;e.props.setInfos({host:s,info:{title:n,version:a,description:i}}),e.setIsModalVisible(!1)},e.handleCancel=function(){e.setIsModalVisible(!1)},e}return Object(h.a)(n,[{key:"setIsModalVisible",value:function(e){this.props.setModalShow(e)}},{key:"componentDidMount",value:function(){this.state.form=s.a.createRef()}},{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(M.a,{title:"\u57fa\u7840\u4fe1\u606f",style:{top:20},visible:this.props.isShow,onOk:this.handleOk,onCancel:this.handleCancel,children:Object(w.jsxs)(P.a,{ref:this.state.form,labelCol:{span:4},wrapperCol:{span:17},layout:"horizontal",initialValues:{version:"1.0.0"},children:[Object(w.jsx)(P.a.Item,{label:"\u6807\u9898",name:"title",children:Object(w.jsx)(D.a,{placeholder:"\u63a5\u53e3\u6587\u6863"})}),Object(w.jsx)(P.a.Item,{label:"\u7248\u672c",name:"version",children:Object(w.jsx)(D.a,{placeholder:"\u7248\u672c"})}),Object(w.jsx)(P.a.Item,{label:"Prefix",name:"host",children:Object(w.jsx)(D.a,{placeholder:"\u8def\u5f84\u8bf7\u6c42\u524d\u7f00"})}),Object(w.jsx)(P.a.Item,{label:"\u63cf\u8ff0",name:"description",children:Object(w.jsx)(D.a.TextArea,{placeholder:"\u63cf\u8ff0\u4fe1\u606f"})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.isShow){var n=e.infos,a=n.host,s=n.info,i=s.version,r=s.title,o=s.description;setTimeout((function(){var e;null===(e=t.form.current)||void 0===e||e.setFieldsValue({host:a,version:i,title:r,description:o})}),100)}return null}}]),n}(s.a.Component),B=T.a.Title,z=T.a.Paragraph,N=T.a.Text,U=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isShow:!1},e}return Object(h.a)(n,[{key:"setModalShow",value:function(e){this.setState({isShow:e})}},{key:"render",value:function(){var e=this,t=this.props.infos,n=t.info,a=t.host;return Object(w.jsxs)("div",{style:{width:"100%"},children:[Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(w.jsx)(B,{level:2,children:n.title}),Object(w.jsx)(E.a,{disabled:this.props.loading,size:"small",style:{marginLeft:"30px"},onClick:function(){return e.setState({isShow:!0})},icon:Object(w.jsx)(V.a,{})})]}),Object(w.jsxs)(N,{type:"secondary",children:["Version: ",n.version]}),Object(w.jsx)("br",{}),Object(w.jsxs)(N,{children:["[Base URL: ",a,"]"]}),Object(w.jsx)(z,{children:n.description}),Object(w.jsx)(F,{setModalShow:function(t){return e.setModalShow(t)},isShow:this.state.isShow,infos:this.props.infos,setInfos:this.props.setInfos})]})}}]),n}(s.a.Component),A=n(188),L=n.n(A),q=n(268),G=n(148),K=n(122),J=n(269),H=n.n(J),$=(n(496),n(497),n(498),function(e){var t=e.name,n=e.code,a=e.onChange;return Object(w.jsx)(H.a,{width:"100%",height:"300px",mode:"javascript",theme:"monokai",placeholder:"###",onChange:function(e){return a(e)},name:t,value:n,editorProps:{$blockScrolling:!0},fontSize:"14px",showGutter:!0,tabSize:2,highlightActiveLine:!0,showPrintMargin:!1,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1}})}),_=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={parameters:null,responses:null,condition:null},a.handleCancel=function(){a.setIsModalVisible(!1)},a.state.form=s.a.createRef(),a}return Object(h.a)(n,[{key:"setIsModalVisible",value:function(e){this.props.setModalShow(e)}},{key:"handleOk",value:function(){var e=Object(q.a)(L.a.mark((function e(){var t,n,a,s,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.state.form.current.validateFields();case 3:t=e.sent,n=this.state,a=n.parameters,s=n.responses,i=n.condition,this.props.setRows(Object(l.a)(Object(l.a)({},t),{},{index:Object(p.uniqueId)(),parameters:a,responses:s,condition:i})),this.state.form.current.resetFields(),this.setIsModalVisible(!1),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return");case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleCodeChange",value:function(e,t){this.setState(Object(o.a)({},t,e))}},{key:"render",value:function(){var e=this,t=this.props.routerValues||{},n=t.parameters,a=t.responses,s=t.condition;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(M.a,{title:"\u63a5\u53e3\u6587\u4ef6",style:{top:20},visible:this.props.isShow,onOk:function(){return e.handleOk()},onCancel:this.handleCancel,width:"850px",children:Object(w.jsxs)(P.a,{ref:this.state.form,labelCol:{span:4},wrapperCol:{span:17},layout:"horizontal",initialValues:{method:"get",tag:"Default"},children:[Object(w.jsx)(P.a.Item,{label:"Path",name:"path",rules:[{required:!0,message:"\u8def\u7531\u5730\u5740"}],children:Object(w.jsx)(D.a,{placeholder:"\u8def\u7531\u5730\u5740"})}),Object(w.jsx)(P.a.Item,{label:"\u534f\u8bae",name:"method",children:Object(w.jsxs)(G.a.Group,{children:[Object(w.jsx)(G.a.Button,{value:"get",children:"GET"}),Object(w.jsx)(G.a.Button,{value:"post",children:"POST"}),Object(w.jsx)(G.a.Button,{value:"put",children:"PUT"}),Object(w.jsx)(G.a.Button,{value:"delete",children:"DELETE"})]})}),Object(w.jsx)(P.a.Item,{label:"Tag",name:"tag",rules:[{required:!0,message:"\u8def\u7531\u5730\u5740"}],children:Object(w.jsx)(K.a,{style:{width:120},children:this.props.tags.map((function(e,t){return Object(w.jsx)(K.a.Option,{value:e.name,children:e.name},t)}))})}),Object(w.jsx)(P.a.Item,{label:"\u6982\u8981",name:"summary",children:Object(w.jsx)(D.a.TextArea,{placeholder:"\u6982\u8981"})}),Object(w.jsx)(P.a.Item,{label:"Parameters",name:"parameters",children:Object(w.jsx)($,{code:n,onChange:function(t){return e.handleCodeChange(t,"parameters")}})}),Object(w.jsx)(P.a.Item,{label:"Responses",name:"responses",children:Object(w.jsx)($,{code:a,onChange:function(t){return e.handleCodeChange(t,"responses")}})}),Object(w.jsx)(P.a.Item,{label:"\u6761\u4ef6\u8fd4\u56de",name:"condition",children:Object(w.jsx)($,{code:s,onChange:function(t){return e.handleCodeChange(t,"condition")}})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.isRouterEdit){var n=e.routerValues,a=n.method,s=n.path,i=n.tag,r=n.summary,o=n.parameters,c=n.responses,l=n.condition;return Object(p.sleep)(300,(function(){return t.form.current.setFieldsValue({method:a,path:s,tag:i,summary:r})})),{parameters:o,responses:c,condition:l}}return null}}]),n}(s.a.Component),Q=n(508),W=n(511),X=n(512),Y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).inpRef=s.a.createRef(null),e.state={isEdit:!1,tagName:""},e}return Object(h.a)(n,[{key:"handleOk",value:function(){this.state.tagName&&this.props.setTags(this.state.tagName),this.setState({isEdit:!1})}},{key:"handleKeyDown",value:function(e){var t=e.keyCode,n=e.target;13===t&&n.value&&(this.props.setTags(n.value),this.setState({isEdit:!1,tagName:""}))}},{key:"handleBlur",value:function(e){var t=e.target;t.value&&this.props.setTags(t.value),this.setState({isEdit:!1,tagName:""})}},{key:"handleChange",value:function(e){this.setState({tagName:e.target.value})}},{key:"handleEdit",value:function(){var e=this;this.setState({isEdit:!0},(function(){return e.inpRef.current.focus()}))}},{key:"handleCheck",value:function(e,t){this.props.updateTagsStatus(e,t)}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{style:{width:"100%",display:"flex",marginBottom:"10px"},children:[this.props.tags.map((function(t,n){return Object(w.jsx)(Q.a,{size:"small",content:Object(w.jsx)("a",{onClick:function(){return e.props.removeTag(n)},children:"remove"}),trigger:"hover",visible:t.visible,onVisibleChange:function(t){return e.props.tagVisibleChange(n,t)},children:Object(w.jsx)(E.a,{disabled:e.props.loading,type:t.focus&&"primary",size:"small",style:{marginRight:5},onClick:function(){return e.handleCheck(t,n)},children:t.name})},n)})),this.state.isEdit?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(D.a,{ref:this.inpRef,size:"small",onKeyDown:function(t){return e.handleKeyDown(t)},onBlur:function(t){return e.handleBlur(t)},placeholder:"tag name",onChange:function(t){return e.handleChange(t)},style:{width:80,marginRight:5}}),Object(w.jsx)(E.a,{disabled:this.props.loading,size:"small",onClick:function(){return e.handleOk()},icon:Object(w.jsx)(W.a,{style:{color:"#F56C6C"}})})]}):Object(w.jsx)(E.a,{disabled:this.props.loading,size:"small",onClick:function(){return e.handleEdit()},icon:Object(w.jsx)(X.a,{style:{color:"#F56C6C"}})})]})}}]),n}(s.a.Component),Z={swagger:"2.0",info:{description:"mock-server",version:"1.0.0",title:"\u63a5\u53e3\u6587\u6863"},host:"localhost:8090",schemes:["http"]},ee=n(273),te=n(502),ne=n(513),ae=n(279),se=n(514),ie=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n),(e=t.call(this)).state={};var a="";return e.state={infos:Z,isShow:!1,list:[],cacheTables:[],tags:[{name:"Default",focus:!0,visible:!1}],routerValues:null,isRouterEdit:!1,editRouterIndex:null,loading:!1,host:a},e}return Object(h.a)(n,[{key:"setModalShow",value:function(e){this.setState({isShow:e,isRouterEdit:!1,routerValues:null})}},{key:"removeRow",value:function(e){var t=this.state.list;t.splice(e,1);var n=t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{index:e.index+Math.random().toString().substr(2,3)})}));this.setState({list:n,cacheTables:n})}},{key:"editRow",value:function(e){var t=this,n=this.state.list;this.setState({routerValues:n[e],isRouterEdit:!0,editRouterIndex:e},(function(){return t.setState({isShow:!0})}))}},{key:"setRows",value:function(e){var t=this,n=this.state,a=n.list,s=n.isRouterEdit,i=n.editRouterIndex;if(e.remove=function(e){return t.removeRow(e)},e.edit=function(e){return t.editRow(e)},s){a[i]=e;var r=a.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{index:Object(p.uniqueId)()})}));this.setState({list:r,cacheTables:r})}else this.setState({list:[].concat(Object(c.a)(a),[e]),cacheTables:[].concat(Object(c.a)(a),[e])})}},{key:"setTags",value:function(e){var t=this.state.tags;t.push({name:e,focus:!0}),this.setState({tags:t})}},{key:"updateTagsStatus",value:function(e,t){var n=this.state,a=n.tags,s=n.cacheTables;a[t].focus=!a[t].focus;var i=a.filter((function(e){return e.focus})).map((function(e){return e.name})),r=[];s.forEach((function(e){i.includes(e.tag)&&r.push(Object(l.a)(Object(l.a)({},e),{},{index:Object(p.uniqueId)()}))})),this.setState({list:r,tags:a})}},{key:"removeTag",value:function(e){var t=this.state.tags;t.splice(e,1),this.setState({tags:t})}},{key:"tagVisibleChange",value:function(e,t){var n=this.state.tags;n[e].visible=t,this.setState({tags:n})}},{key:"updateRows",value:function(e){this.setState({list:e})}},{key:"setInfos",value:function(e){this.setState({infos:Object(l.a)(Object(l.a)({},this.state.infos),e)})}},{key:"handleDownload",value:function(){var e=this.state,t=e.infos,n=e.list,a=e.host,s=Object(l.a)(Object(l.a)({},t),{},{host:"".concat(a).concat(t.host),paths:{}});n.forEach((function(e){var t=e.path,n=e.method,a=e.tag,i=e.summary,r=e.parameters,c=e.responses,l=e.condition;s.paths[t]=Object(o.a)({},n,{summary:i,tags:[a],produces:["application/json"],parameters:r,responses:c,condition:l})})),Object(f.a)("module.exports = ".concat(JSON.stringify(s,null,"\t")),"".concat(Object(p.randomString)(5).toLowerCase(),"_mock.js"))}},{key:"handleBeforeUpload",value:function(e){return this.setState({loading:!0}),Object(p.stringExtension)(e.name,".","js")?Promise.resolve():(ee.b.error("\u8bf7\u4e0a\u4f20js\u6587\u4ef6"),this.setState({loading:!1}),Promise.reject())}},{key:"handleUpload",value:function(e){var t=this;if(e.file.status,"done"===e.file.status){this.setState({loading:!1});var n=e.file.response,a=n.ok,s=n.data;if(a){var i=s.swagger,r=s.info,o=s.schemes,c=s.paths,l=void 0===c?{}:c,u=[],h=new Set;for(var d in l){var j={path:d,index:Object(p.uniqueId)()};if(Object.hasOwnProperty.call(l,d)){var f=l[d];for(var b in f)if(Object.hasOwnProperty.call(f,b)){var m=f[b],g=m.tags,O=(m.produces,m.parameters,m.responses,m.summary);j.summary=O,j.method=b,j.tag=g[0],h.add(g[0])}}j.remove=function(e){return t.removeRow(e)},j.edit=function(e){return t.editRow(e)},u.push(j)}var v=[];h.forEach((function(e){return v.push({name:e,focus:!0,visible:!1})})),this.setState({infos:{swagger:i,info:r,schemes:o},list:u,tags:v})}}else"error"===e.file.status&&(console.log("error"),this.setState({loading:!1}))}},{key:"render",value:function(){var e=this;return Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"container-columns",children:[Object(w.jsxs)("div",{style:{display:"flex",position:"fixed",top:25,right:25},children:[Object(w.jsx)(te.a,{beforeUpload:function(t){return e.handleBeforeUpload(t)},name:"file",method:"POST",previewFile:function(){return Promise.resolve(!1)},action:"".concat(this.state.host,"/upload"),onChange:function(t){return e.handleUpload(t)},children:Object(w.jsx)(E.a,{disabled:this.state.loading,type:"primary",icon:Object(w.jsx)(ne.a,{})})}),Object(w.jsx)(E.a,{disabled:this.state.loading||0===this.state.list.length,type:"primary",style:{marginLeft:10},icon:Object(w.jsx)(ae.a,{}),onClick:function(){return e.handleDownload()}})]}),Object(w.jsx)(U,{loading:this.state.loading,infos:this.state.infos,setInfos:function(t){return e.setInfos(t)}}),Object(w.jsx)(Y,{loading:this.state.loading,tags:this.state.tags,setTags:function(t){return e.setTags(t)},updateTagsStatus:function(t,n){return e.updateTagsStatus(t,n)},removeTag:function(t){return e.removeTag(t)},tagVisibleChange:function(t,n){return e.tagVisibleChange(t,n)}}),Object(w.jsx)(R,{loading:this.state.loading,updateRows:function(t){return e.updateRows(t)},list:this.state.list}),Object(w.jsx)(E.a,{disabled:this.state.loading,size:"small",type:"ghost",icon:Object(w.jsx)(se.a,{style:{color:"rgba(255,255,255,0.9)"}}),onClick:function(){return e.setModalShow(!0)},style:{marginTop:"20px",width:"50px"}}),Object(w.jsx)(_,{list:this.state.list,tags:this.state.tags,setRows:function(t){return e.setRows(t)},setModalShow:function(t){return e.setModalShow(t)},isShow:this.state.isShow,isRouterEdit:this.state.isRouterEdit,routerValues:this.state.routerValues})]})})}}]),n}(s.a.Component);r.a.render(Object(w.jsx)(ie,{}),document.getElementById("root"))}},[[499,1,2]]]);