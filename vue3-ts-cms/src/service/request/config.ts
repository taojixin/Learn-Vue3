let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'htt'
} else {
  BASE_URL = 'sdfsd'
}

export { BASE_URL, TIME_OUT }
