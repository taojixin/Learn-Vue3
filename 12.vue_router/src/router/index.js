// import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

// 配置映射关系
const routes = [
  // 默认路由
  // { path: '/', component: Home},
  // 重定向
  { path: '/', redirect: '/home' },
  {
    path: '/home', name: "home", component: () => {
      return import("../pages/Home.vue") // 路由懒加载：完整写法
    },
    children: [
      { path: 'message', component: () => import('../pages/HomeMessage.vue') },
      { path: 'shops', component: () => import('../pages/HomeShops.vue') },
    ]
  },
  {
    path: '/about', component: () => import('../pages/About.vue'),
    meta: {
      name: 'tjx',
      age: 18
    }
  }, // 路由懒加载：简写
  { path: '/user/:username/id/:id', component: () => import('../pages/User.vue') },
  { path: '/:pathMatch(.*)', component: () => import("../pages/NotFound.vue") },  // 固定写法：'/:pathMatch(.*)'
]

// 创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory()
})

// 动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import("../pages/Category.vue")
}
router.addRoute(categoryRoute)

// 给一级路由对象home添加二级路由对象
router.addRoute('home', {
  path: 'moment',
  component: () => import('../pages/HomeMount.vue')
})

// 导航守卫 beforEach
// router.beforeEach((to, form) => {
//   // to: route对象，即将跳转到的route对象
//   // from: route对象，从哪一个路由对象跳转过来的
//   // 返回值：1.false 不进行导航 2.undefined或不写返回值：进行默认导航，该去哪去哪 3.字符串：路径，跳转到该路径中去
//   console.log();
//   return false // 不能跳转
// })

// 导出路由对象
export default router

