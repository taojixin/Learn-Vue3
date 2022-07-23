// 可选链是ES11中的语法，用于判断是否有值
type Person = {
  name: string,
  friend?: {
    name: string,
    age?: number
  }
}
const info:Person = {
  name: 'tjx',
  friend: {
    name: 'yn'
  }
}

// 在一个看不到该代码的地方调用时
console.log(info.friend?.name); // 不确定是否有friend属性，有的话取name的值，没有返回undefined
