(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2caf4c52"],{"078e":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("7a23");function l(){var e=Object(n["O"])(),t=function(t){var a;null===(a=e.value)||void 0===a||a.getPageData(t)};return[e,t]}},2572:function(e,t,a){},3835:function(e,t,a){"use strict";function n(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return i}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function l(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,o=[],r=!0,i=!1;try{for(a=a.call(e);!(r=(n=a.next()).done);r=!0)if(o.push(n.value),t&&o.length===t)break}catch(c){i=!0,l=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw l}}return o}}var o=a("06c5");function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){return n(e)||l(e,t)||Object(o["a"])(e,t)||r()}},"49cf":function(e,t,a){"use strict";a("2572")},"6a85":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("5530"),l=a("7a23"),o=Object(l["O"])(),r=Object(l["O"])({});function i(e,t,a){var l=function(){r.value={},o.value&&(o.value.dialogVisible=!0,o.value.headName="新建".concat(a.value)),e&&e()},i=function(e){r.value=Object(n["a"])({},e),o.value&&(o.value.dialogVisible=!0,o.value.headName="编辑".concat(a.value)),t&&t()};return[o,r,l,i]}},a4c2:function(e,t,a){"use strict";a.r(t);var n=a("7a23");Object(n["M"])("data-v-6048ddcc");var l={class:"user"};function o(e,t,a,o,r,i){var c=Object(n["S"])("page-search"),d=Object(n["S"])("page-content"),u=Object(n["S"])("page-modal");return Object(n["J"])(),Object(n["l"])("div",l,[Object(n["p"])(c,{searchFormConfig:e.searchFormConfig,onQueryClick:e.queryClick},null,8,["searchFormConfig","onQueryClick"]),Object(n["p"])(d,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageName:"users",headName:"新建用户",departmentItemName:e.departmentItemName,roleItemName:e.roleItemName,onHandleNewClick:e.handleNewData,onHandleEditClick:e.handleEditData},null,8,["contentTableConfig","departmentItemName","roleItemName","onHandleNewClick","onHandleEditClick"]),Object(n["p"])(u,{modalConfig:e.modalConfigRef,ref:"pageModalRef",pageName:"users",defaultValue:e.defaultValue},null,8,["modalConfig","defaultValue"])])}Object(n["K"])();var r=a("3835"),i=a("b85c"),c=(a("7db0"),a("d81d"),a("b0c0"),a("0613")),d=a("fae0"),u=a("309c"),f=a("c9d2"),m={formItems:[{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"id",type:"input",label:"id",placeholder:"请输入id"},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"enable",type:"select",label:"用户状态",placeholder:"请选择用户状态",options:[{title:"启用",value:"1"},{title:"禁用",value:"0"}]},{field:"createAt",type:"datapicker",label:"创建时间",placeholder:"请输入创建时间范围"}]},p={title:"用户列表",propList:[{prop:"name",label:"用户名",minWidth:"60"},{prop:"departmentId",label:"所属部门",minWidth:"60",slotName:"departmentId"},{prop:"roleId",label:"所属角色",minWidth:"60",slotName:"roleId"},{prop:"realname",label:"真实姓名",minWidth:"100"},{prop:"cellphone",label:"电话号码",minWidth:"150"},{prop:"enable",label:"状态",minWidth:"100",slotName:"status"},{prop:"createAt",label:"创建时间",minWidth:"200",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"200",slotName:"updateAt"},{label:"操作",minWidth:"150",slotName:"handle"}],showSelectColumn:!0},s={formItems:[{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"cellphone",type:"input",label:"电话号码",placeholder:"请输入电话号码"},{field:"password",type:"password",label:"密码",placeholder:"请输入密码",isHidden:!0},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"departmentId",type:"select",label:"用户部门",placeholder:"请选择用户部门",options:[]},{field:"roleId",type:"select",label:"用户角色",placeholder:"请选择用户角色",options:[]}],collLayout:{span:24}},b=a("078e"),h=a("6a85"),O=Object(n["q"])({name:"user",components:{PageSearch:d["a"],PageContent:u["a"],PageModal:f["a"]},setup:function(){var e=Object(n["O"])("用户"),t=function(){var e,t=Object(i["a"])(s.formItems);try{for(t.s();!(e=t.n()).done;){var a=e.value;"password"===a.field&&(a.isHidden=!1)}}catch(n){t.e(n)}finally{t.f()}},a=function(){var e,t=Object(i["a"])(s.formItems);try{for(t.s();!(e=t.n()).done;){var a=e.value;"password"===a.field&&(a.isHidden=!0)}}catch(n){t.e(n)}finally{t.f()}},l=Object(c["c"])(),o=Object(n["h"])((function(){var e=s.formItems.find((function(e){return"departmentId"===e.field}));e.options=l.state.departmentList.map((function(e){return{title:e.name,value:e.name}}));var t=s.formItems.find((function(e){return"roleId"===e.field}));return t.options=l.state.roleList.map((function(e){return{title:e.name,value:e.name}})),s})),d=Object(n["h"])((function(){var e=s.formItems.find((function(e){return"departmentId"===e.field}));return e.options=l.state.departmentList.map((function(e){return e.name})),e.options.reverse()})),u=function(e){l.commit("system/changedepartmentItemName",e.value)};u(d);var f=Object(n["h"])((function(){var e=s.formItems.find((function(e){return"roleId"===e.field}));return e.options=l.state.roleList.map((function(e){return e.name})),e.options.reverse()})),O=Object(b["a"])(),v=Object(r["a"])(O,2),j=v[0],g=v[1],y=Object(h["a"])(t,a,e),I=Object(r["a"])(y,4),C=I[0],N=I[1],V=I[2],w=I[3];return{departmentItemName:d,contentTableConfig:p,searchFormConfig:m,modalConfigRef:o,defaultValue:N,pageContentRef:j,pageModalRef:C,queryClick:g,handleNewData:V,handleEditData:w,roleItemName:f,changeDepartmentItemName:u}}}),v=(a("49cf"),a("d959")),j=a.n(v);const g=j()(O,[["render",o],["__scopeId","data-v-6048ddcc"]]);t["default"]=g},c9d2:function(e,t,a){"use strict";var n=a("7a23"),l={class:"page-modal"},o={class:"dialog-footer"},r=Object(n["o"])("取 消"),i=Object(n["o"])(" 确 定 ");function c(e,t,a,c,d,u){var f=Object(n["S"])("hy-form"),m=Object(n["S"])("el-button"),p=Object(n["S"])("el-dialog");return Object(n["J"])(),Object(n["l"])("div",l,[Object(n["p"])(p,{title:e.headName,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dialogVisible=t}),width:"30%","destroy-on-close":"",center:""},{footer:Object(n["fb"])((function(){return[Object(n["m"])("span",o,[Object(n["p"])(m,{onClick:t[1]||(t[1]=function(t){return e.dialogVisible=!1})},{default:Object(n["fb"])((function(){return[r]})),_:1}),Object(n["p"])(m,{type:"primary",onClick:e.handleConfirmClick},{default:Object(n["fb"])((function(){return[i]})),_:1},8,["onClick"])])]})),default:Object(n["fb"])((function(){return[Object(n["p"])(f,Object(n["x"])(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData=t})}),null,16,["modelValue"]),Object(n["R"])(e.$slots,"default")]})),_:3},8,["title","modelValue"])])}var d=a("5530"),u=a("b85c"),f=(a("b64b"),a("0613")),m=a("6fac"),p=Object(n["q"])({components:{HyForm:m["a"]},props:{modalConfig:{type:Object,default:function(){return{}}},defaultValue:{type:Object,required:!0},otherInfo:{type:Object,default:function(){return{}}},pageName:{type:String,required:!0}},setup:function(e){var t=Object(n["O"])(!1),a=Object(n["O"])({}),l=Object(n["O"])("");Object(n["db"])((function(){return e.defaultValue}),(function(t){console.log("newValue:",t),console.log("传值:",e.modalConfig.formItems);var n,l=Object(u["a"])(e.modalConfig.formItems);try{for(l.s();!(n=l.n()).done;){var o=n.value;a.value["".concat(o.field)]=t["".concat(o.field)]}}catch(r){l.e(r)}finally{l.f()}}));var o=Object(f["c"])(),r=function(){t.value=!1,Object.keys(e.defaultValue).length?o.dispatch("system/editPageDataAction",{pageName:e.pageName,editData:Object(d["a"])(Object(d["a"])({},a.value),e.otherInfo),id:e.defaultValue.id}):o.dispatch("system/creatPageDataAction",{pageName:e.pageName,creatData:Object(d["a"])(Object(d["a"])({},a.value),e.otherInfo)})};return{dialogVisible:t,formData:a,handleConfirmClick:r,headName:l}}}),s=a("d959"),b=a.n(s);const h=b()(p,[["render",c]]);t["a"]=h},d81d:function(e,t,a){"use strict";var n=a("23e7"),l=a("b727").map,o=a("1dde"),r=o("map");n({target:"Array",proto:!0,forced:!r},{map:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2caf4c52.612648c8.js.map