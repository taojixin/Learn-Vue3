import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/Recommend.vue')
  },
  {
    path: '/singer',
    component: () => import('@/views/Singer.vue')
  },
  {
    path: '/search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/toplist',
    component: () => import('@/views/TopList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
