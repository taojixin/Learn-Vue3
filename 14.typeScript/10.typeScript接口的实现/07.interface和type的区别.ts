interface IFoo {
  name: string
}
interface IFoo {
  age: number
}
// 分开写实际会做一个合并
const foo: IFoo = {
  name: 'tjx',
  age: 10
}