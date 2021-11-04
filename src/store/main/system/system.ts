import { Module } from 'vuex'
import { IRootState } from '../../type'
import { ISystemState } from './type'

import {
  getPagelistData,
  deletePageListData,
  creatPageListData,
  editPageListData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      departmentList: [],
      departmentCount: 0,
      menuList: [],
      menuCount: 0,
      goodsList: [],
      goodsCount: 0,
      storyList: [],
      storyCount: 0
    }
  },
  mutations: {
    changeUserList(state, list) {
      state.userList = list
      // console.log(state)
    },
    changeUserCount(state, totalCount) {
      state.userCount = totalCount
    },
    changeRoleList(state, list) {
      state.roleList = list
    },
    changeRoleCount(state, totalCount) {
      state.roleCount = totalCount
    },
    changeDepartMentList(state, list) {
      state.departmentList = list
    },
    changeDepartMentCount(state, totalCount) {
      state.departmentCount = totalCount
    },
    changeMenuList(state, list) {
      state.menuList = list
    },

    changeMenuCount(state, totalCount) {
      state.menuCount = totalCount
    },
    changeGoodsList(state, list) {
      state.goodsList = list
    },
    changeGoodsCount(state, totalCount) {
      state.goodsCount = totalCount
      // console.log(state.goodsCount)
    },
    changeStoryList(state, list) {
      state.storyList = list
    },
    changeStoryCount(state, totalCount) {
      state.storyCount = totalCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
          case 'department':
            return state.departmentList
          case 'menu':
            return state.menuList
          case 'goods':
            return state.goodsList
          case 'story':
            return state.storyList
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userCount
          case 'role':
            return state.roleCount
          case 'department':
            return state.departmentCount
          case 'menu':
            return state.menuCount
          case 'goods':
            return state.goodsCount
          case 'story':
            return state.storyCount
        }
      }
    }
  },
  actions: {
    //获取数据请求
    async getPageListAction({ commit }, payload: any) {
      //1、获取pageUrl
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
        case 'department':
          pageUrl = '/department/list'
          break
        case 'menu':
          pageUrl = '/menu/list'
          break
        case 'goods':
          pageUrl = '/goods/list'
          break
        case 'story':
          pageUrl = '/story/list'
          break
      }

      //2、对页面发送请求   不要粗心
      const pageResult = await getPagelistData(pageUrl, payload.queryInfo)
      // console.log(pageResult.data)

      //3、提交mutations  存储数据
      //解构
      const { list, totalCount } = pageResult.data
      switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
        case 'department':
          commit('changeDepartMentList', list)
          commit('changeDepartMentCount', totalCount)
          break
        case 'menu':
          commit('changeMenuList', list)
          // console.log(list)
          commit('changeMenuCount', totalCount)
          break
        case 'goods':
          commit('changeGoodsList', list)
          commit('changeGoodsCount', totalCount)
          break
        case 'story':
          commit('changeStoryList', list)
          commit('changeStoryCount', totalCount)
          break
      }
    },
    //删除请求
    async deletePageListAction({ dispatch }, payload: any) {
      //1、获取pageUrl
      const { pageName, id } = payload
      // console.log(id)
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = `/users/${id}`
          break
        case 'role':
          pageUrl = `/role/${id}`
          break
        case 'department':
          pageUrl = `/department/${id}`
          break
        case 'menu':
          pageUrl = `/menu/${id}`
          break
        case 'goods':
          pageUrl = `/goods/${id}`
          break
      }

      //2、进行删除请求
      await deletePageListData(pageUrl)

      //3、重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    //新建请求
    async creatPageDataAction({ dispatch }, payload: any) {
      //1、创建数据请求
      const { pageName, creatData } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users'
          break
        case 'role':
          pageUrl = '/role'
          break
        case 'department':
          pageUrl = '/department'
          break
        case 'menu':
          pageUrl = '/menu'
          break
        case 'goods':
          pageUrl = '/goods'
          break
      }
      await creatPageListData(pageUrl, creatData)
      //2、重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    //编辑请求
    async editPageDataAction({ dispatch }, payload: any) {
      //1、编辑数据请求
      const { pageName, editData, id } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = `/users/${id}`
          break
        case 'role':
          pageUrl = `/role/${id}`
          break
        case 'department':
          pageUrl = `/department/${id}`
          break
        case 'menu':
          pageUrl = `/menu/${id}`
          break
        case 'goods':
          pageUrl = `/goods/${id}`
          break
      }
      await editPageListData(pageUrl, editData)
      //2、重新请求数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
