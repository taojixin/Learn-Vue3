import { createApp } from 'vue'
// @ts-ignore
import App from './02.compositionAPI基本使用/App.vue'

const app = createApp(App);

// app.mixin({
//   data() {
//     return {}
//   },
//   methods: {

//   },
//   created() {
//     console.log("全局混入");
//   }
// })



app.mount('#app')
