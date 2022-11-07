import { createRouter, createWebHashHistory } from "vue-router";
import SingerDetail from "@/views/singer-detail.vue";

const routes = [
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    component: () => import("@/views/Recommend.vue"),
  },
  {
    path: "/singer",
    component: () => import("@/views/Singer.vue"),
    children: [
      {
        path: ":id",
        component: SingerDetail,
      },
    ],
  },
  {
    path: "/search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/toplist",
    component: () => import("@/views/TopList.vue"),
  },
  {
    path: "/:catchAll(.*)",
    hidden: true,
    component: () => import("@/views/404.vue"), //这个是我自己的路径
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
