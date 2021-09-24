export const rules = {
  num: [
    { message: '手机号是必填的内容', trigger: 'blur' },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须为11数字',
      trigger: 'blur'
    }
  ],
  code: [
    { message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须是6位数字',
      trigger: 'blur'
    }
  ]
}
