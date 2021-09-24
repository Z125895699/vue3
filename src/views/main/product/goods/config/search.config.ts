export const searchFormConfig = {
  formItems: [
    {
      //传入类型  field字段
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '商品地址',
      placeholder: '请输入商品地址'
    },
    {
      field: 'createTime',
      type: 'datapicker',
      label: '创建时间',
      placeholder: '请输入创建时间范围'
    }
  ]
}
