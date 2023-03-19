import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import("../views/home/home.vue")
    },
    {
        path: '/favor',
        component: () => import("../views/favor/favor.vue")
    },
    {
        path: '/order',
        component: () => import("../views/order/order.vue")
    },
    {
        path: '/message',
        component: () => import("../views/message/message.vue")
    },
    {
        path: '/city',
        component: () => import("../views/city/city.vue"),
        meta: {
            tabBarHidden: true
        }
    },
    {
        path: '/detail/:id',
        component: () => import("@/views/detail/detail.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router