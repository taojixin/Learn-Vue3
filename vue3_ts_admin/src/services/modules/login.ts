import yRequest from '@/services'

// export function accountLogin(account: any) {
//   return yRequest.request({
//     url: '/login',
//     method: 'POST',
//     data: account
//   })
// }

export function accountLogin(account: any) {
  return yRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserById(id: number) {
  return yRequest.get({
    url: '/users/' + id
  })
}

export function getRoleMenus(id: number) {
  return yRequest.get({
    url: `/role/${id}/menu`
  })
}
