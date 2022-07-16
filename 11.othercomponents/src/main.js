import { createApp } from 'vue'
// @ts-ignore
import App from './04.teleport内置组件/App.vue'
import registerDirectives from './direactives'
// 引入插件
import pluginObject from "./plugins/plugins_object"
import pluginFunction from './plugins/plugins_function'

const app = createApp(App)

registerDirectives(app)

// 使用插件
app.use(pluginObject)
app.use(pluginFunction)

// 全局自定义指令
// app.directive("focus", {
//   mounted(el) {
//     console.log("focus");
//     el.focus()
//   }
// })

app.mount('#app')
