// import axios from 'axios'

// //导入就相当于axios的实例对象
// //模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })
// //模拟get请求 并传入数据
// // axios
// //   .get('http://httpbin.org/get', {
// //     params: {
// //       name: 'code'
// //     }
// //   })
// //   .then((res) => {
// //     console.log(res.data)
// //   })
// // //模拟post请求
// // axios
// //   .post('http://httpbin.org/post', {
// //     data: {
// //       name: 'code'
// //     }
// //   })
// //   .then((res) => {
// //     console.log(res.data)
// //   })

// //Promise本身可以有类型
// // new Promise<string>((resolve) => {
// //   resolve('code')
// // }).then((res) => {
// //   console.log(res)
// // })

// //axios的配置选项
// //全局配置
// axios.defaults.baseURL = 'http://httpbin.org'
// //超时时间
// axios.defaults.timeout = 10000

// axios
//   .get('/get', {
//     params: {
//       name: 'code'
//     }
//     //单独配置
//     // timeout: 10000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// // //模拟post请求
// // axios
// //   .post('/post', {
// //     data: {
// //       name: 'code'
// //     }
// //   })
// //   .then((res) => {
// //     console.log(res.data)
// //   })

// //5 axios.all  多个请求 同时返回
// // axios
// //   .all([
// //     axios.get('/get', { params: { name: 'code', age: 20 } }),
// //     axios.post('/post', { data: { name: 'code', age: 20 } })
// //   ])
// //   .then((res) => {
// //     //返回的数据都在data中
// //     console.log(res[0].data)
// //     console.log(res[1].data)
// //   })

// //axios拦截器
// //fn1请求发送成功会执行的函数
// //fn2请求发送失败会执行的函数
// axios.interceptors.request.use(
//   (config) => {
//     在发送请求之前做些什么
//     // 1 给请求添加token
//     //2 isloading动画
//     console.log('请求发送成功')
//     //用完把config返回出去
//     return config
//   },
//   (err) => {
//     console.log('请求发送错误')
//     return err
//   }
// )

// //fn1： 数据响应成功  (服务器正常的返回数据  20x)
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     console.log('服务器响应失败')
//     return err
//   }
// )
