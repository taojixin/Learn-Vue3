// 通过类型type别名声明对象类型
// type InfoType = {name: 'tjx', age: 18}

// 另一种声明对象的类型：接口interface
interface InfoType {
  // 定义只读属性
  name: string
  age: number
  // 定义可选类型
  friend?: {
    name: string
  }
}

const info: InfoType = {
  name: 'tjx',
  age: 18
}