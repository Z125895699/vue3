import { Module } from 'vuex'

import { ILoginState } from './type'
import { IRootState } from '../type'
import localcache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

import router from '@/router'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //userMenus => routes   得到所有的路由配置
      const routes = mapMenusToRoutes(userMenus)

      //将routes =>router.main.children 动态添加路由
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户的按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      console.log(permissions)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      //1、实现登录逻辑  请求登录
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localcache.setCache('token', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localcache.setCache('userInfo', userInfo)

      // 3、请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localcache.setCache('userMenus', userMenus)

      //4、跳到首页
      router.push('/main')
    },

    // 防止vuex的数据会丢失
    loadLocalLogin({ commit }) {
      const token = localcache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localcache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localcache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
