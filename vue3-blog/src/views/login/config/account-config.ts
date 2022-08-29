// 编写验证规则
export const rules = {
  name: [
    { required: true, message: '用户名为空！', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名需为5-10个字母或数组',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码为空', trigger: 'blur' },
    { min: 6, max: 12, message: '密码为6-12个字母！', trigger: 'blur' }
  ]
}
