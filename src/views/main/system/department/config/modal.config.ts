import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      //传入类型  field字段
      field: 'name',
      type: 'input',
      label: '部门',
      placeholder: '请输入部门'
    },
    {
      field: 'leader',
      type: 'input',
      label: 'leader',
      placeholder: '请输入leader'
    }
  ],
  collLayout: { span: 24 }
}
