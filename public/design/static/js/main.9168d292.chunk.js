(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{167:function(t,e,a){},168:function(t,e,a){},179:function(t,e,a){},254:function(t,e,a){},257:function(t,e,a){},258:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(25),r=a.n(i),o=(a(166),a(167),a(96)),c=a(155),l=a(32),u=a(43),h=a(44),d=a(46),j=a(45),f=(a(168),a(160)),b=a(266),p=a(260),O=a(119),v=a(268),m=a(143),g=a.n(m),x=(a(179),a(7)),y=Object(O.c)((function(){return Object(x.jsx)(v.a,{style:{cursor:"grab",color:"#999"}})})),w=[{title:"#",dataIndex:"sort",width:30,render:function(){return Object(x.jsx)(y,{})}},{title:"Path",dataIndex:"path"},{title:"Method",dataIndex:"method",render:function(t,e){return Object(x.jsxs)(b.a,{style:{color:{GET:"#61affe",POST:"#49cc90",PUT:"#fca130",DELETE:"#F56C6C"}[t.toUpperCase()]},children:[" ",t.toUpperCase()," "]},e)}},{title:"Tag",dataIndex:"tag",render:function(t,e){return Object(x.jsx)(b.a,{color:"cyan",children:t.toUpperCase()},e)}},{title:"\u6982\u8981",dataIndex:"summary",ellipsis:!0},{title:"operation",dataIndex:"operation",render:function(t,e,a){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("a",{onClick:function(){return e.remove(a)},style:{marginRight:10,color:"#F56C6C"},children:"Delete"}),Object(x.jsx)("a",{onClick:function(){return e.edit(a)},children:"Edit"})]})}}],k=Object(O.b)((function(t){return Object(x.jsx)("tr",Object(l.a)({},t))})),S=Object(O.a)((function(t){return Object(x.jsx)("tbody",Object(l.a)({},t))})),C=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).onSortEnd=function(e){var a=e.oldIndex,n=e.newIndex,s=t.props.list;if(a!==n){var i=g()([].concat(s),a,n).filter((function(t){return!!t}));t.props.updateRows(i)}},t.DraggableContainer=function(e){return Object(x.jsx)(S,Object(l.a)({useDragHandle:!0,disableAutoscroll:!0,helperClass:"row-dragging",onSortEnd:t.onSortEnd},e))},t.DraggableBodyRow=function(e){e.className,e.style;var a=Object(f.a)(e,["className","style"]),n=t.props.list.findIndex((function(t){return t.index===a["data-row-key"]}));return Object(x.jsx)(k,Object(l.a)({index:n},a))},t}return Object(h.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"table-container",children:Object(x.jsx)(p.a,{pagination:!1,dataSource:this.props.list,columns:w,rowKey:"index",components:{body:{wrapper:this.DraggableContainer,row:this.DraggableBodyRow}}})})}}]),a}(s.a.Component),R=a(262),I=a(38),E=a(269),T=(a(254),a(263)),V=a(261),D=a(264),M=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={form:null},t.handleOk=function(){var e=t.state.form.current.getFieldsValue(["title","version","host","description"]),a=e.title,n=e.version,s=e.host,i=e.description;t.props.setInfos({host:s,info:{title:a,version:n,description:i}}),t.setIsModalVisible(!1)},t.handleCancel=function(){t.setIsModalVisible(!1)},t}return Object(h.a)(a,[{key:"setIsModalVisible",value:function(t){this.props.setModalShow(t)}},{key:"componentDidMount",value:function(){this.state.form=s.a.createRef()}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(T.a,{title:"\u57fa\u7840\u4fe1\u606f",style:{top:20},visible:this.props.isShow,onOk:this.handleOk,onCancel:this.handleCancel,children:Object(x.jsxs)(V.a,{ref:this.state.form,labelCol:{span:4},wrapperCol:{span:17},layout:"horizontal",initialValues:{version:"1.0.0"},children:[Object(x.jsx)(V.a.Item,{label:"\u6807\u9898",name:"title",children:Object(x.jsx)(D.a,{placeholder:"\u63a5\u53e3\u6587\u6863"})}),Object(x.jsx)(V.a.Item,{label:"\u7248\u672c",name:"version",children:Object(x.jsx)(D.a,{placeholder:"\u7248\u672c"})}),Object(x.jsx)(V.a.Item,{label:"Prefix",name:"host",children:Object(x.jsx)(D.a,{placeholder:"\u8def\u5f84\u8bf7\u6c42\u524d\u7f00"})}),Object(x.jsx)(V.a.Item,{label:"\u63cf\u8ff0",name:"description",children:Object(x.jsx)(D.a.TextArea,{placeholder:"\u63cf\u8ff0\u4fe1\u606f"})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.isShow){var a=t.infos,n=a.host,s=a.info,i=s.version,r=s.title,o=s.description;setTimeout((function(){var t;null===(t=e.form.current)||void 0===t||t.setFieldsValue({host:n,version:i,title:r,description:o})}),100)}return null}}]),a}(s.a.Component),F=R.a.Title,N=R.a.Paragraph,A=R.a.Text,P=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={isShow:!1},t}return Object(h.a)(a,[{key:"setModalShow",value:function(t){this.setState({isShow:t})}},{key:"render",value:function(){var t=this,e=this.props.infos,a=e.info,n=e.host;return Object(x.jsxs)("div",{className:"header-info-container",children:[Object(x.jsxs)("div",{className:"header-title-container",children:[Object(x.jsx)(F,{level:2,children:a.title}),Object(x.jsx)(I.a,{size:"small",className:"btn",onClick:function(){return t.setState({isShow:!0})},icon:Object(x.jsx)(E.a,{})})]}),Object(x.jsxs)(A,{type:"secondary",children:["Version: ",a.version]}),Object(x.jsx)("br",{}),Object(x.jsxs)(A,{children:["[Base URL: ",n,"]"]}),Object(x.jsx)(N,{children:a.description}),Object(x.jsx)(M,{setModalShow:function(e){return t.setModalShow(e)},isShow:this.state.isShow,infos:this.props.infos,setInfos:this.props.setInfos})]})}}]),a}(s.a.Component),z=a(127),B=a.n(z),U=a(151),K=a(109),L=a(89),G=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={form:s.a.createRef()},t.handleCancel=function(){t.setIsModalVisible(!1)},t}return Object(h.a)(a,[{key:"setIsModalVisible",value:function(t){this.props.setModalShow(t)}},{key:"handleOk",value:function(){var t=Object(U.a)(B.a.mark((function t(){var e;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.state.form.current.validateFields();case 3:e=t.sent,this.props.setRows(Object(l.a)(Object(l.a)({},e),{},{index:Date.now()})),this.state.form.current.resetFields(),this.setIsModalVisible(!1),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return");case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(T.a,{title:"\u63a5\u53e3\u6587\u4ef6",style:{top:20},visible:this.props.isShow,onOk:function(){return t.handleOk()},onCancel:this.handleCancel,children:Object(x.jsxs)(V.a,{ref:this.state.form,labelCol:{span:4},wrapperCol:{span:17},layout:"horizontal",initialValues:{method:"get",tag:"Default"},children:[Object(x.jsx)(V.a.Item,{label:"Path",name:"path",rules:[{required:!0,message:"\u8def\u7531\u5730\u5740"}],children:Object(x.jsx)(D.a,{placeholder:"\u8def\u7531\u5730\u5740"})}),Object(x.jsx)(V.a.Item,{label:"\u534f\u8bae",name:"method",children:Object(x.jsxs)(K.a.Group,{children:[Object(x.jsx)(K.a.Button,{value:"get",children:"GET"}),Object(x.jsx)(K.a.Button,{value:"post",children:"POST"}),Object(x.jsx)(K.a.Button,{value:"put",children:"PUT"}),Object(x.jsx)(K.a.Button,{value:"delete",children:"DELETE"})]})}),Object(x.jsx)(V.a.Item,{label:"Tag",name:"tag",rules:[{required:!0,message:"\u8def\u7531\u5730\u5740"}],children:Object(x.jsx)(L.a,{style:{width:120},children:this.props.tags.map((function(t,e){return Object(x.jsx)(L.a.Option,{value:t.name,children:t.name},e)}))})}),Object(x.jsx)(V.a.Item,{label:"\u6982\u8981",name:"summary",children:Object(x.jsx)(D.a.TextArea,{placeholder:"\u6982\u8981"})})]})})})}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.isRouterEdit){var a=t.routerValues,n=a.method,s=a.path,i=a.tag,r=a.summary;e.form.current.setFieldsValue({method:n,path:s,tag:i,summary:r})}return null}}]),a}(s.a.Component),J=a(267),q=a(270),H=a(271),Q=(a(257),function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).inpRef=s.a.createRef(null),t.state={isEdit:!1,tagName:""},t}return Object(h.a)(a,[{key:"handleOk",value:function(){this.state.tagName&&this.props.setTags(this.state.tagName),this.setState({isEdit:!1})}},{key:"handleKeyDown",value:function(t){var e=t.keyCode,a=t.target;13===e&&a.value&&(this.props.setTags(a.value),this.setState({isEdit:!1}),this.setState({tagName:""}))}},{key:"handleChange",value:function(t){this.setState({tagName:t.target.value})}},{key:"handleEdit",value:function(){var t=this;this.setState({isEdit:!0},(function(){return t.inpRef.current.focus()}))}},{key:"handleCheck",value:function(t){this.props.updateTagsStatus(t)}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:"tags-group-container",children:[this.props.tags.map((function(e,a){return Object(x.jsx)(J.a,{size:"small",content:Object(x.jsx)("a",{onClick:function(){return t.props.removeTag(a)},children:"remove"}),trigger:"hover",visible:e.visible,onVisibleChange:function(e){return t.props.tagVisibleChange(a,e)},children:Object(x.jsx)(I.a,{type:e.focus&&"primary",size:"small",style:{marginRight:5},onClick:function(){return t.handleCheck(a)},children:e.name})},a)})),this.state.isEdit?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(D.a,{ref:this.inpRef,size:"small",onKeyDown:function(e){return t.handleKeyDown(e)},placeholder:"tag name",onChange:function(e){return t.handleChange(e)},style:{width:80,marginRight:5}}),Object(x.jsx)(I.a,{size:"small",onClick:function(){return t.handleOk()},icon:Object(x.jsx)(q.a,{style:{color:"#F56C6C"}})})]}):Object(x.jsx)(I.a,{size:"small",onClick:function(){return t.handleEdit()},icon:Object(x.jsx)(H.a,{style:{color:"#F56C6C"}})})]})}}]),a}(s.a.Component)),W={swagger:"2.0",info:{description:"mock-server",version:"1.0.0",title:"\u63a5\u53e3\u6587\u6863"},host:"localhost:8090",schemes:["http"]},X=a(265),Y=a(272),Z=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(u.a)(this,a),(t=e.call(this)).state={},t.state={infos:W,isShow:!1,list:[],tags:[{name:"Default",focus:!0,visible:!1}],routerValues:null,isRouterEdit:!1,editRouterIndex:null},t}return Object(h.a)(a,[{key:"setModalShow",value:function(t){this.setState({isShow:t,isRouterEdit:!1,routerValues:null})}},{key:"removeRow",value:function(t){var e=this.state.list;e.splice(t,1);var a=e.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{index:t.index+Math.random().toString().substr(2,3)})}));this.setState({list:a})}},{key:"editRow",value:function(t){var e=this,a=this.state.list;this.setState({routerValues:a[t],isRouterEdit:!0,editRouterIndex:t},(function(){return e.setState({isShow:!0})}))}},{key:"setRows",value:function(t){var e=this,a=this.state,n=a.list,s=a.isRouterEdit,i=a.editRouterIndex;if(t.remove=function(t){return e.removeRow(t)},t.edit=function(t){return e.editRow(t)},s){n[i]=t;var r=n.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{index:t.index+Math.random().toString().substr(2,3)})}));this.setState({list:r})}else this.setState({list:[].concat(Object(c.a)(n),[t])})}},{key:"setTags",value:function(t){var e=this.state.tags;e.push({name:t,focus:!0}),this.setState({tags:e})}},{key:"updateTagsStatus",value:function(t){var e=this.state.tags;e[t].focus=!e[t].focus,this.setState({tags:e})}},{key:"removeTag",value:function(t){var e=this.state.tags;e.splice(t,1),this.setState({tags:e})}},{key:"tagVisibleChange",value:function(t,e){var a=this.state.tags;a[t].visible=e,this.setState({tags:a})}},{key:"updateRows",value:function(t){this.setState({list:t})}},{key:"setInfos",value:function(t){this.setState({infos:Object(l.a)(Object(l.a)({},this.state.infos),t)})}},{key:"handleDownload",value:function(){var t=this.state,e=t.infos,a=t.list,n=Object(l.a)(Object(l.a)({},e),{},{paths:{}});a.forEach((function(t){var e=t.path,a=t.method,s=t.tag,i=t.summary;n.paths[e]=Object(o.a)({},a,{summary:i,tags:[s],produces:["application/json"],parameters:[{}],responses:{}})}));var s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8,module.exports = "+JSON.stringify(n,null,"\t")),s.setAttribute("download","mock.js"),s.style.display="none",s.click()}},{key:"render",value:function(){var t=this;return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"columns",children:[Object(x.jsxs)(X.a,{style:{position:"fixed",top:25,right:25},children:[Object(x.jsx)(I.a,{type:"primary",danger:!0,children:"Sync"}),Object(x.jsx)(I.a,{type:"primary",style:{marginLeft:20},onClick:function(){return t.handleDownload()},children:"Download"})]}),Object(x.jsx)(P,{infos:this.state.infos,setInfos:function(e){return t.setInfos(e)}}),Object(x.jsx)(Q,{tags:this.state.tags,setTags:function(e){return t.setTags(e)},updateTagsStatus:function(e){return t.updateTagsStatus(e)},removeTag:function(e){return t.removeTag(e)},tagVisibleChange:function(e,a){return t.tagVisibleChange(e,a)}}),Object(x.jsx)(C,{updateRows:function(e){return t.updateRows(e)},list:this.state.list}),Object(x.jsx)(I.a,{size:"small",type:"ghost",icon:Object(x.jsx)(Y.a,{style:{color:"rgba(255,255,255,0.9)"}}),onClick:function(){return t.setModalShow(!0)},style:{marginTop:"20px",width:"50px"}}),Object(x.jsx)(G,{list:this.state.list,tags:this.state.tags,setRows:function(e){return t.setRows(e)},setModalShow:function(e){return t.setModalShow(e)},isShow:this.state.isShow,isRouterEdit:this.state.isRouterEdit,routerValues:this.state.routerValues})]})})}}]),a}(s.a.Component);r.a.render(Object(x.jsx)(Z,{}),document.getElementById("root"))}},[[258,1,2]]]);