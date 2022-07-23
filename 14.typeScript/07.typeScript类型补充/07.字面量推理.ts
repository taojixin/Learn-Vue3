
type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

type Request = {
  url: string,
  method: 'GET'
}

// 此时options中的method类型为string类型
const options = {
  url: "https:/www.tjx.cn/abc",
  method: "POST"
} as const  // as const 这里就称为字面量推理，此时的options的method类型为Method

// 开发中一般这么写：
// const options: Request = {
//   url: "https:/www.tjx.cn/abc",
//   method: "POST"
// }

// 但是request中的method类型要求是Method类型：
// request(options.url, options.method)  // 所以这里报错：类型“string”的参数不能赋给类型“Method”的参数。
// 解决办法：类型断言
request(options.url, options.method as Method)




export {}