import axios from 'axios'

//模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

//全局配置
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 10000
//请求头
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded;charset=UTF-8'
//模拟get请求 传参数 后面要加get
// axios
//   .get('/get', {
//     params: {
//       name: 'code'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// axios
//   .post('/post', {
//     data: {
//       name: 'code'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .all([
//     axios.get('/get', { params: { name: 'code' } }),
//     axios.post('/post', { data: { name: 'code' } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })

// //请求拦截器
// axios.interceptors.request.use(
//   (config) => {
//     在发送请求之前做些什么
//     console.log('请求发送成功')
//     return config
//   },
//   (err) => {
//     对请求错误做些什么
//     console.log('请求发送失败')
//     return err
//   }
// )
// //响应拦截器
// axios.interceptors.response.use(
//   (res) => {
//对响应数据做些什么
//     console.log('响应拦截成功')
//     return res
//   },
//   (err) => {
//对响应错误做点什么
//     console.log('响应拦截失败')
//     return err
//   }
// )

//axios(config) 传递相关配置创建请求
axios
  .request({
    method: 'get',
    url: 'http://123.207.32.32:8000/home/multidata',
    params: {
      name: 'code'
    }
  })
  .then((res) => {
    console.log(res.config)
  })
