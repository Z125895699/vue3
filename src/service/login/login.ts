import hyRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

//枚举
enum LoginAPI {
  //登录url后缀
  AccountLogin = '/login',
  //用户url后缀
  LoginUserInfo = '/users/', // 用法: /users/1
  //角色url后缀
  UserMenus = '/role/' // 用法: role/1/menu
}
//登录
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
