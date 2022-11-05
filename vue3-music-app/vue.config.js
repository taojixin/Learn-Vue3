
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和mixin
        additionalData: `
      @import "@/assets/scss/variable.scss";
      @import "@/assets/scss/mixin.scss";
      `
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9002'
      }
    }
  }
})
