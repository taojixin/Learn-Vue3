import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  colLayout: { span: 8 },
  formItems: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'select',
      label: '用户名',
      placeholder: '请输入用户名',
      options: [
        {
          title: '篮球',
          value: 'basketball'
        },
        {
          title: '足球',
          value: 'football'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
