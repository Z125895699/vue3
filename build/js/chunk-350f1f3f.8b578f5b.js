(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-350f1f3f"],{"078e":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("7a23");function l(){var e=Object(n["O"])(),t=function(t){var a;null===(a=e.value)||void 0===a||a.getPageData(t)};return[e,t]}},"17f8":function(e,t,a){"use strict";a("8477")},3835:function(e,t,a){"use strict";function n(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function l(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,o=[],r=!0,c=!1;try{for(a=a.call(e);!(r=(n=a.next()).done);r=!0)if(o.push(n.value),t&&o.length===t)break}catch(i){c=!0,l=i}finally{try{r||null==a["return"]||a["return"]()}finally{if(c)throw l}}return o}}var o=a("06c5");function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return n(e)||l(e,t)||Object(o["a"])(e,t)||r()}},"6a85":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("5530"),l=a("7a23"),o=Object(l["O"])(),r=Object(l["O"])({});function c(e,t,a){var l=function(){r.value={},o.value&&(o.value.dialogVisible=!0,o.value.headName="新建".concat(a.value)),e&&e()},c=function(e){r.value=Object(n["a"])({},e),o.value&&(o.value.dialogVisible=!0,o.value.headName="编辑".concat(a.value)),t&&t()};return[o,r,l,c]}},8477:function(e,t,a){},c9d2:function(e,t,a){"use strict";var n=a("7a23"),l={class:"page-modal"},o={class:"dialog-footer"},r=Object(n["o"])("取 消"),c=Object(n["o"])(" 确 定 ");function i(e,t,a,i,u,d){var f=Object(n["S"])("hy-form"),b=Object(n["S"])("el-button"),p=Object(n["S"])("el-dialog");return Object(n["J"])(),Object(n["l"])("div",l,[Object(n["p"])(p,{title:e.headName,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.dialogVisible=t}),width:"30%","destroy-on-close":"",center:""},{footer:Object(n["fb"])((function(){return[Object(n["m"])("span",o,[Object(n["p"])(b,{onClick:t[1]||(t[1]=function(t){return e.dialogVisible=!1})},{default:Object(n["fb"])((function(){return[r]})),_:1}),Object(n["p"])(b,{type:"primary",onClick:e.handleConfirmClick},{default:Object(n["fb"])((function(){return[c]})),_:1},8,["onClick"])])]})),default:Object(n["fb"])((function(){return[Object(n["p"])(f,Object(n["x"])(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData=t})}),null,16,["modelValue"]),Object(n["R"])(e.$slots,"default")]})),_:3},8,["title","modelValue"])])}var u=a("5530"),d=a("b85c"),f=(a("b64b"),a("0613")),b=a("6fac"),p=Object(n["q"])({components:{HyForm:b["a"]},props:{modalConfig:{type:Object,default:function(){return{}}},defaultValue:{type:Object,required:!0},otherInfo:{type:Object,default:function(){return{}}},pageName:{type:String,required:!0}},setup:function(e){var t=Object(n["O"])(!1),a=Object(n["O"])({}),l=Object(n["O"])("");Object(n["db"])((function(){return e.defaultValue}),(function(t){console.log("newValue:",t),console.log("传值:",e.modalConfig.formItems);var n,l=Object(d["a"])(e.modalConfig.formItems);try{for(l.s();!(n=l.n()).done;){var o=n.value;a.value["".concat(o.field)]=t["".concat(o.field)]}}catch(r){l.e(r)}finally{l.f()}}));var o=Object(f["c"])(),r=function(){t.value=!1,Object.keys(e.defaultValue).length?o.dispatch("system/editPageDataAction",{pageName:e.pageName,editData:Object(u["a"])(Object(u["a"])({},a.value),e.otherInfo),id:e.defaultValue.id}):o.dispatch("system/creatPageDataAction",{pageName:e.pageName,creatData:Object(u["a"])(Object(u["a"])({},a.value),e.otherInfo)})};return{dialogVisible:t,formData:a,handleConfirmClick:r,headName:l}}}),m=a("d959"),s=a.n(m);const O=s()(p,[["render",i]]);t["a"]=O},cacb:function(e,t,a){"use strict";a.r(t);var n=a("7a23");Object(n["M"])("data-v-ab93e9ba");var l={class:"department"};function o(e,t,a,o,r,c){var i=Object(n["S"])("page-search"),u=Object(n["S"])("page-content"),d=Object(n["S"])("page-modal");return Object(n["J"])(),Object(n["l"])("div",l,[Object(n["p"])(i,{searchFormConfig:e.searchFormConfigRef,onQueryClick:e.queryClick},null,8,["searchFormConfig","onQueryClick"]),Object(n["p"])(u,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageName:"department",onHandleNewClick:e.handleNewData,onHandleEditClick:e.handleEditData,headName:"新建部门"},null,8,["contentTableConfig","onHandleNewClick","onHandleEditClick"]),Object(n["p"])(d,{modalConfig:e.modalConfig,ref:"pageModalRef",pageName:"department",defaultValue:e.defaultValue},null,8,["modalConfig","defaultValue"])])}Object(n["K"])();var r=a("3835"),c=(a("7db0"),a("d81d"),a("b0c0"),a("0613")),i=a("fae0"),u=a("309c"),d=a("c9d2"),f={formItems:[{field:"name",type:"select",label:"部门名",placeholder:"请输入部门名",options:[]},{field:"id",type:"input",label:"id",placeholder:"请输入id"},{field:"createAt",type:"datapicker",label:"创建时间",placeholder:"请输入创建时间范围"}]},b={title:"部门列表",propList:[{prop:"name",label:"部门",minWidth:"100"},{prop:"leader",label:"leader",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"150",slotName:"handle"}],showSelectColumn:!0},p={formItems:[{field:"name",type:"input",label:"部门",placeholder:"请输入部门"},{field:"leader",type:"input",label:"leader",placeholder:"请输入leader"}],collLayout:{span:24}},m=a("078e"),s=a("6a85"),O=Object(n["q"])({components:{PageSearch:i["a"],PageContent:u["a"],PageModal:d["a"]},name:"department",setup:function(){var e=Object(n["O"])("部门"),t=Object(c["c"])(),a=Object(n["h"])((function(){var e=f.formItems.find((function(e){return"name"===e.field}));return e.options=t.state.departmentList.map((function(e){return{title:e.name,value:e.name}})),f})),l=Object(m["a"])(),o=Object(r["a"])(l,2),i=o[0],u=o[1],d=Object(s["a"])(void 0,void 0,e),O=Object(r["a"])(d,4),j=O[0],g=O[1],h=O[2],v=O[3];return{searchFormConfigRef:a,contentTableConfig:b,modalConfig:p,pageModalRef:j,defaultValue:g,handleNewData:h,handleEditData:v,pageContentRef:i,queryClick:u}}}),j=(a("17f8"),a("d959")),g=a.n(j);const h=g()(O,[["render",o],["__scopeId","data-v-ab93e9ba"]]);t["default"]=h},d81d:function(e,t,a){"use strict";var n=a("23e7"),l=a("b727").map,o=a("1dde"),r=o("map");n({target:"Array",proto:!0,forced:!r},{map:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-350f1f3f.8b578f5b.js.map