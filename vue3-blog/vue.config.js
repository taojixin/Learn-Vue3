// const path = require('path')

// 这些代码是在node环境下执行的，node默认支持commonjs，所以使用commonjs的方式导出
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        // 远程服务器
        target: 'http://120.79.177.24:8881',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
        // 本地服务器
        // target: 'http://localhost:8881',
      },
      '/admin': {
        // target: 'http://localhost:8881',
        target: 'http://120.79.177.24:8881'
      }
    }
  }
  // outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // }
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  // }
}
