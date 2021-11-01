export const contentTableConfig = {
  title: '故事列表',
  propList: [
    { prop: 'title', label: '故事名', minWidth: '60' },
    { prop: 'content', label: '内容', minWidth: '150' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    }
  ],
  showSelectColumn: true
}
