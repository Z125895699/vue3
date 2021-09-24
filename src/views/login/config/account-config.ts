const rules = {
  name: [
    { required: true, message: '用户名是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '用户名必须是3到10的字母或数字',
      trigger: 'blur'
    }
  ],

  password: [
    { required: true, message: '密码是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: '密码必须是5位以上的字母或数字',
      trigger: 'blur'
    }
  ]
}
export default rules
