export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名', minWidth: '60' },
    { prop: 'oldPrice', label: '旧价格', minWidth: '60' },
    { prop: 'newPrice', label: '新价格', minWidth: '60' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'image' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showIndexColumn: true
}
