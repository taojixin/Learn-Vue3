// process.env.NODE_ENV的值在开发环境下为：development 生产环境下为：production 测试环境下为：test
let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'production'
} else {
  BASE_URL = 'test'
}

export { TIME_OUT, BASE_URL }
