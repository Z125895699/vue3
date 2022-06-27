import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb'

//保存第一个menu
let firstMenu: any = null

//权限管理  根据后端返回的菜单提供路由
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  //符合条件的映射到routes中
  const routes: RouteRecordRaw[] = []

  //1、先去加载默认所有的routes
  //先把之前创建的routes放在allRoutes中
  const allRoutes: RouteRecordRaw[] = []
  //require.context(webpack的函数)第一个参数是路径   第二个参数决定递归   第三个参数是匹配ts文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    //./product/category/category.ts  做一个切割
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2、根据菜单获取需要添加的routes
  //useMenus有type分级  需要递归
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        //在allRoutes里面查找menu的url和route的path是否相等  find返回的是route
        const route = allRoutes.find((route) => route.path === menu.url)
        //相等加到routes里
        if (route) {
          routes.push(route)
          //保存firstMenu
          if (!firstMenu) {
            firstMenu = menu
          }
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

//面包屑数据   以及菜单的url等于当前的刷新的路径  绑定id值
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
      // console.log(menu)
      return menu
    }
  }
}

//面包屑数据
// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string): any {
//   const breadcrumbs: IBreadcrumb[] = []
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         // console.log(findMenu)
//         breadcrumbs.push({ name: menu.name })
//         breadcrumbs.push({ name: findMenu.name })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
//   return breadcrumbs
// }

// // 菜单的url等于当前的刷新的路径  绑定id值
// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         // console.log(findMenu)
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }

//用户的按钮权限数据 递归查询
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

//菜单列表的叶子节点  eltree的递归
export function leafMunuMapKeys(menusList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menusList)

  return leafKeys
}

export { firstMenu }
