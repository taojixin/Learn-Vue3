import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []

  // 1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // require.context()为webpack函数，用于查找文件，参数一：哪个文件种查找，参数二：是否递归该文件夹下的文件夹中查找，false(只在main文件夹下查找),参数三：查找以.ts结尾的文件
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  // require.context()返回的是一个对象，该对象keys()方法返回一个数组，数组中有所有文件的路径
  routeFiles.keys().forEach((key) => {
    // console.log(key)  // 返回：./system/.../...ts，相对于main文件
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recuresGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recuresGetRoute(menu.children)
      }
    }
  }

  _recuresGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
