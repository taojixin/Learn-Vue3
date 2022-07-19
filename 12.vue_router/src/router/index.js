// import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
// import Home from '../pages/Home.vue'
// @ts-ignore
// import About from '../pages/About.vue'

// 配置映射关系
const routes = [
  // 默认路由
  // { path: '/', component: Home},
  // 重定向
  { path: '/', redirect: '/home' },
  {
    path: '/home', name: "home", component: () => {
      // @ts-ignore
      return import("../pages/Home.vue") // 路由懒加载：完整写法
    }
  },
  {
    // @ts-ignore
    path: '/about', name: "about", component: () => import('../pages/About.vue'),
    meta: {
      name: 'tjx',
      age: 18
    }
  }, // 路由懒加载：简写
]

// 创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory()
})

// 导出路由对象
export default router

