import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // require为webpack中的函数：https://webpack.docschina.org/guides/dependency-management/#requirecontext
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // routeFiles.keys()路径数组
  routeFiles.keys().forEach((key) => {
    // console.log(key) // 获取的路径：如：./system/user/user.ts
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 所有的路由对象
  // console.log(allRoutes)

  // 2.根据菜单获取需要的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
