// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'
import { ElMessage } from 'element-plus'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //在请求发送之前做的事
      // console.log('请求成功的拦截')
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      //在请求失败后做的事
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      //在响应成功之后做的事
      // console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      //在响应失败之后做的事
      // console.log('响应失败的拦截')
      ElMessage.warning({
        message: '您的账号或密码错误',
        type: 'warning'
      })
      return err
    }
  }
})

export default hyRequest
