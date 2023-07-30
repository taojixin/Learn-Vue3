import yRequest from "@/services";

export function accountLogin(account: any) {
  return yRequest.post({
    url： '/login',
    data: account
  })
}