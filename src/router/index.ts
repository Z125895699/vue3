import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localcache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

//创建路由映射
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    //重定向
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    //children :[] 根据userMenus决定  children
  },
  //NotFound
  {
    //.*任意字符
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('@/views/main/NotFound.vue')
  }
]

//创建路由对象
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localcache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  // console.log(to)

  //从main跳到第一个保存的路由
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
