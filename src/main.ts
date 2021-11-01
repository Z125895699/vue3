import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import 'element-plus/dist/index.css'
import {
  ElButton,
  ElTabPane,
  ElTabs,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElBreadcrumbItem,
  ElBreadcrumb,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElCol,
  ElRow,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElSelect,
  ElOption,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElPopconfirm,
  ElAlert
} from 'element-plus'

import App from './App.vue'

//导出axios
// import './service/axios_demo'
// import './service/axios_demo1'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElInput,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElBreadcrumbItem,
  ElBreadcrumb,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElCol,
  ElRow,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElSelect,
  ElOption,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElPopconfirm,
  ElAlert
]

// import hyRequest from '@/service/index'

import router from './router'
import store from './store'
//刷新的时候 vuex的数据会丢失   调用函数
import { setupStore } from './store'

const app = createApp(App)

//全局注册组件
for (const compnent of components) {
  app.component(compnent.name, compnent)
}

//注册插件
app.use(store)
//刷新vuex的数据会丢失 数据没有缓存   先匹配路由
// app.use(router)

//重新运行都会调用这个方法
setupStore()

app.use(router)

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// request请求
// hyRequest
//   .request<DataType>({
//     url: 'home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
//get请求
// hyRequest
//   .get<DataType>({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//对UTC时间格式化.   过滤器
import { formatUtcString } from '@/utils/date-format'

app.config.globalProperties.$filters = {
  formatTime(value: string) {
    return formatUtcString(value)
  }
}

app.mount('#app')
