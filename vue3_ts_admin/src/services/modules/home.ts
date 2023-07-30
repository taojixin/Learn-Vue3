import yRequest from '..'

yRequest
  .request({
    url: '/home/multidata'
  })
  .then((res: any) => {
    console.log(res)
  })
