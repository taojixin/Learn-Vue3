import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import store from '@/store'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] ->根据suerMenus来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  const userMenus = (store.state as any).login.userMenus
  const routes = mapMenusToRoutes(userMenus) // 根据菜单获取需要添加的routes
  routes.forEach((route) => {
    // 添加动态路由
    router.addRoute('main', route)
  })
})

export default router
