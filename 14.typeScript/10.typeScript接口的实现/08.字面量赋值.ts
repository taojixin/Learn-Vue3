interface IPerson {
  name: string
  age: number
  height: number
}
const info = {
  name: 'tjx',
  age: 10,
  height: 1.88,
  address: '四川'
}
// const p: IPerson = {
//   name: 'tjx',
//   age: 10,
//   height: 1.88,
//   address: '四川' // 报错
// }
const p: IPerson = info  // 不报错  
// 这是因为TypeScript在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制。
// 但是之后如果我们是将一个 变量标识符 赋值给其他的变量时，会进行freshness擦除操作。
console.log(info);
console.log(p);
