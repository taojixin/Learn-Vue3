export const phoneRules = {
  num: [
    {
      required: true,
      message: '电话未填写',
      trigger: 'blur'
    },
    {
      min: 11,
      max: 11,
      message: '电话应为11个数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码未填写',
      trigger: 'blur'
    },
    {
      min: 4,
      max: 6,
      message: '验证码需为4-6个字母或数字',
      trigger: 'blur'
    }
  ]
}
