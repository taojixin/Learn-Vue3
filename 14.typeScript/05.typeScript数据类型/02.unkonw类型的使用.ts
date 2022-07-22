function foo() {
  return 'abc'
}

function bar() {
  return 123
}

// any 和 unknow 的区别：
// unknow类型只能赋值给any和unknow类型，any类型可以赋值给任意类型

let flag = true
// let result: any
let result: unknown  // 最好不要使用any
if (flag) {
  result = foo()
} else {
  result = bar()
}

// 以下报错：
// let message: string = result
// let num: number = result

console.log(result);

export {}
