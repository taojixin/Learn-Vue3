interface IPerson<T1, T2> {
  name: T1
  age: T2
}
const p: IPerson<string, number> = {
  name: 'tjx',
  age: 19
}
// 没有类型推导，但是可以给一个默认类型
// interface IPerson<T1, T2 = number> {
//   name: T1
//   age: T2
// }



export {}