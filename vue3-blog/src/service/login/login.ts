import ynRequest from '../index'
import { IAccount, IDataType, ILoginResult, RootObject } from './types'

enum loginAPI {
  AccountLogin = '/login',
  // 请求用户信息
  LoginUserInfo = '/users/',
  // 用户菜单
  UserMenus = '/role/'
}

// 登录请求
export function accountLoginRequest(account: IAccount) {
  return ynRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}
// 获取用户信息
export function requestUserInfoById(id: number) {
  return ynRequest.get<IDataType<RootObject>>({
    url: loginAPI.LoginUserInfo + id
  })
}
// 获取菜单
export function requestUserMenusByRoleId(id: number) {
  return ynRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}
