export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '60' },
    {
      prop: 'departmentId',
      label: '所属部门',
      minWidth: '60',
      slotName: 'departmentId'
    },
    { prop: 'roleId', label: '所属角色', minWidth: '60', slotName: 'roleId' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '电话号码', minWidth: '150' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '150', slotName: 'handle' }
  ],
  showSelectColumn: true
}
