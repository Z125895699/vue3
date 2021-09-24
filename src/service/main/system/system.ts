import hyRequest from '../../index'

export function getPagelistData(url: string, queryInfo: any) {
  return hyRequest.post({
    url: url,
    //查询条件放在data中
    data: queryInfo
  })
}
export function deletePageListData(url: string) {
  return hyRequest.delete({
    url: url
  })
}
export function creatPageListData(url: string, newData: any) {
  return hyRequest.post({
    url: url,
    //查询条件放在data中
    data: newData
  })
}

export function editPageListData(url: string, newData: any) {
  return hyRequest.patch({
    url: url,
    //查询条件放在data中
    data: newData
  })
}
