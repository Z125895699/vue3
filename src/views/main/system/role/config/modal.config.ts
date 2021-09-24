import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      //传入类型  field字段
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    }
  ],
  collLayout: { span: 24 }
}
