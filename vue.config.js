// const path = require('path')
const { domToCodePlugin, domToCodeDevServerV4 } = require('dom-to-code/webpack')

//通过commonJs导出
module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  // publicPath: './',

  //配置跨域问题  devServer相当于一台服务器
  devServer: {
    ...domToCodeDevServerV4,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        //重写路径
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      //别名
      alias: {
        // @对应src
        components: '@/components'
      }
    },
    plugins: [
      domToCodePlugin({
        mode: 'vue'
      })
    ]
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
