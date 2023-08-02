import type { RouteRecordRaw } from 'vue-router'

export let firstRoute: RouteRecordRaw | undefined = undefined

export function mapMenuToPerssions(menus: any[]) {
  const permissions: string[] = []
  function _recurseGetPermission(menuList: any[]) {
    for (const menu of menuList) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(menus)
  return permissions
}

// 动态添加路由
export function mapMenuToRoutes(menus: any[]) {
  // 加载所有的路由对象
  const localRoutes = loadLocalRoutes()
  const finalRoutes: RouteRecordRaw[] = []
  function _recurseGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((item) => item.path === menu.url)
        if (route) finalRoutes.push(route)
        if (!firstRoute && route) firstRoute = route
      } else {
        if (menu.type === 1 && menu.children.length) {
          finalRoutes.push({ path: menu.url, redirect: menu.children[0].url })
        }
        _recurseGetRoute(menu.children ?? [])
      }
    }
  }
  _recurseGetRoute(menus)
  return finalRoutes
}
function loadLocalRoutes() {
  // 1.加载所有的模板
  const modules: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })
  // 2.遍历所有的模板为路由对象
  const routes: RouteRecordRaw[] = []
  for (const key in modules) {
    const route = modules[key].default
    routes.push(route)
  }
  return routes
}
