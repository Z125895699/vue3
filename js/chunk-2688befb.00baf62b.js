(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2688befb"],{"078e":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a("707f");function l(){const e=Object(o["ref"])(),t=t=>{var a;null===(a=e.value)||void 0===a||a.getPageData(t)};return[e,t]}},"257c":function(e,t,a){},3754:function(e,t,a){"use strict";a("257c")},"6a85c":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a("707f");const l=Object(o["ref"])(),n=Object(o["ref"])({});function r(e,t,a){const o=()=>{n.value={},l.value&&(l.value.dialogVisible=!0,l.value.headName="新建"+a.value),e&&e()},r=e=>{n.value={...e},l.value&&(l.value.dialogVisible=!0,l.value.headName="编辑"+a.value),t&&t()};return[l,n,o,r]}},a4c2:function(e,t,a){"use strict";a.r(t);var o=a("707f");const l={"data-code-location":"/home/runner/work/vue3/vue3/src/views/main/system/user/user.vue:2:3",class:"user"};function n(e,t,a,n,r,c){const d=Object(o["resolveComponent"])("page-search"),i=Object(o["resolveComponent"])("page-content"),m=Object(o["resolveComponent"])("page-modal");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createVNode"])(d,{searchFormConfig:e.searchFormConfig,onQueryClick:e.queryClick},null,8,["searchFormConfig","onQueryClick"]),Object(o["createVNode"])(i,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageName:"users",headName:"新建用户",departmentItemName:e.departmentItemName,roleItemName:e.roleItemName,onHandleNewClick:e.handleNewData,onHandleEditClick:e.handleEditData},null,8,["contentTableConfig","departmentItemName","roleItemName","onHandleNewClick","onHandleEditClick"]),Object(o["createVNode"])(m,{modalConfig:e.modalConfigRef,ref:"pageModalRef",pageName:"users",defaultValue:e.defaultValue},null,8,["modalConfig","defaultValue"])])}var r=a("0613"),c=a("fae0"),d=a("309c"),i=a("c9d2");const m={formItems:[{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"id",type:"input",label:"id",placeholder:"请输入id"},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"enable",type:"select",label:"用户状态",placeholder:"请选择用户状态",options:[{title:"启用",value:"1"},{title:"禁用",value:"0"}]},{field:"createAt",type:"datapicker",label:"创建时间",placeholder:"请输入创建时间范围"}]},s={title:"用户列表",propList:[{prop:"name",label:"用户名",minWidth:"60"},{prop:"departmentId",label:"所属部门",minWidth:"60",slotName:"departmentId"},{prop:"roleId",label:"所属角色",minWidth:"60",slotName:"roleId"},{prop:"realname",label:"真实姓名",minWidth:"100"},{prop:"cellphone",label:"电话号码",minWidth:"150"},{prop:"enable",label:"状态",minWidth:"100",slotName:"status"},{prop:"createAt",label:"创建时间",minWidth:"200",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"200",slotName:"updateAt"},{label:"操作",minWidth:"150",slotName:"handle"}],showSelectColumn:!0},p={formItems:[{field:"name",type:"input",label:"用户名",placeholder:"请输入用户名"},{field:"cellphone",type:"input",label:"电话号码",placeholder:"请输入电话号码"},{field:"password",type:"password",label:"密码",placeholder:"请输入密码",isHidden:!0},{field:"realname",type:"input",label:"真实姓名",placeholder:"请输入真实姓名"},{field:"departmentId",type:"select",label:"用户部门",placeholder:"请选择用户部门",options:[]},{field:"roleId",type:"select",label:"用户角色",placeholder:"请选择用户角色",options:[]}],collLayout:{span:24}};var u=a("078e"),f=a("6a85c"),b=Object(o["defineComponent"])({name:"user",components:{PageSearch:c["a"],PageContent:d["a"],PageModal:i["a"]},setup(){const e=Object(o["ref"])("用户"),t=()=>{for(const e of p.formItems)"password"===e.field&&(e.isHidden=!1)},a=()=>{for(const e of p.formItems)"password"===e.field&&(e.isHidden=!0)},l=Object(r["c"])(),n=Object(o["computed"])(()=>{const e=p.formItems.find(e=>"departmentId"===e.field);e.options=l.state.departmentList.map(e=>({title:e.name,value:e.name}));const t=p.formItems.find(e=>"roleId"===e.field);return t.options=l.state.roleList.map(e=>({title:e.name,value:e.name})),p}),c=Object(o["computed"])(()=>{const e=p.formItems.find(e=>"departmentId"===e.field);return e.options=l.state.departmentList.map(e=>e.name),e.options.reverse()}),d=e=>{l.commit("system/changedepartmentItemName",e.value)};d(c);const i=Object(o["computed"])(()=>{const e=p.formItems.find(e=>"roleId"===e.field);return e.options=l.state.roleList.map(e=>e.name),e.options.reverse()}),[b,h]=Object(u["a"])(),[g,v,j,C]=Object(f["a"])(t,a,e);return{departmentItemName:c,contentTableConfig:s,searchFormConfig:m,modalConfigRef:n,defaultValue:v,pageContentRef:b,pageModalRef:g,queryClick:h,handleNewData:j,handleEditData:C,roleItemName:i,changeDepartmentItemName:d}}}),h=(a("3754"),a("6865")),g=a.n(h);const v=g()(b,[["render",n],["__scopeId","data-v-bb40f3f6"]]);t["default"]=v},c9d2:function(e,t,a){"use strict";var o=a("707f");const l={"data-code-location":"/home/runner/work/vue3/vue3/src/components/page-modal/src/page-modal.vue:2:3",class:"page-modal"},n={"data-code-location":"/home/runner/work/vue3/vue3/src/components/page-modal/src/page-modal.vue:13:9",class:"dialog-footer"};function r(e,t,a,r,c,d){const i=Object(o["resolveComponent"])("hy-form"),m=Object(o["resolveComponent"])("el-button"),s=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createVNode"])(s,{title:e.headName,modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t),width:"30%","destroy-on-close":"",center:""},{footer:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",n,[Object(o["createVNode"])(m,{onClick:t[1]||(t[1]=t=>e.dialogVisible=!1)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取 消")]),_:1}),Object(o["createVNode"])(m,{type:"primary",onClick:e.handleConfirmClick},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" 确 定 ")]),_:1},8,["onClick"])])]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,Object(o["mergeProps"])(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),null,16,["modelValue"]),Object(o["renderSlot"])(e.$slots,"default")]),_:3},8,["title","modelValue"])])}var c=a("0613"),d=a("6fac"),i=Object(o["defineComponent"])({components:{HyForm:d["a"]},props:{modalConfig:{type:Object,default:()=>({})},defaultValue:{type:Object,required:!0},otherInfo:{type:Object,default:()=>({})},pageName:{type:String,required:!0}},setup(e){const t=Object(o["ref"])(!1),a=Object(o["ref"])({}),l=Object(o["ref"])("");Object(o["watch"])(()=>e.defaultValue,t=>{console.log("newValue:",t),console.log("传值:",e.modalConfig.formItems);for(const o of e.modalConfig.formItems)a.value[""+o.field]=t[""+o.field]});const n=Object(c["c"])(),r=()=>{t.value=!1,Object.keys(e.defaultValue).length?n.dispatch("system/editPageDataAction",{pageName:e.pageName,editData:{...a.value,...e.otherInfo},id:e.defaultValue.id}):n.dispatch("system/creatPageDataAction",{pageName:e.pageName,creatData:{...a.value,...e.otherInfo}})};return{dialogVisible:t,formData:a,handleConfirmClick:r,headName:l}}}),m=a("6865"),s=a.n(m);const p=s()(i,[["render",r]]);t["a"]=p}}]);
//# sourceMappingURL=chunk-2688befb.00baf62b.js.map