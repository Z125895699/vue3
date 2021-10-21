import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './type'

import { getPagelistData } from '@/service/main/system/system'

import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'

const store = createStore<IRootState>({
  state() {
    return {
      departmentList: [],
      roleList: [],
      menuList: []
    }
  },
  mutations: {
    changeDepartmentList(state, list) {
      state.departmentList = list
    },
    changeRoleList(state, list) {
      state.roleList = list
    },
    changeMenuList(state, list) {
      state.menuList = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      //1、请求部门和角色的数据
      const departmentResult = await getPagelistData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: dapartmentList } = departmentResult.data
      const roleResult = await getPagelistData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPagelistData('/menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: menuList } = menuResult.data
      //2、保存数据到mutations
      commit('changeDepartmentList', dapartmentList)
      commit('changeRoleList', roleList)
      commit('changeMenuList', menuList)
    }
  },
  //注册模块
  modules: {
    login,
    system,
    dashboard
  }
})

//刷新的时候 防止vuex的数据会丢失 vuex数据持久化
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

//ts和vuex的搭配使用
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
