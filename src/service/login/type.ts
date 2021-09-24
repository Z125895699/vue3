export interface IAccount {
  name: string
  password: string
}
//定义用户的data类型
export interface IDataType<T = any> {
  code: number
  data: T
}
export interface ILoginResult {
  id: number
  name: string
  token: string
}
