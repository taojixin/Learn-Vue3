export const rules = {
  name: [
    {
      required: true,
      message: '用户未填写',
      trigger: 'blur'
    },
    {
      min: 5,
      max: 10,
      message: '用户名需为5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码未填写',
      trigger: 'blur'
    },
    {
      min: 5,
      max: 10,
      message: '密码需为5-10个字母或数字',
      trigger: 'blur'
    }
  ]
}
