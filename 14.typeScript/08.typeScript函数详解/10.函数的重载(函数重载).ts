// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载
// 定义重载函数
function add(num1: number, num2: number): number; // 没有函数体
function add(num1: string, num2: string): string; // 没有函数体
// 定义函数体，即实现函数，参数值类型一般比较宽泛
function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}
// 执行时根据参数的不同进行相应的重载函数，执行相同的函数体
const result = add(20, 30)
const result2 = add('abc', 'cga')
console.log(result);
console.log(result2);

// 在函数重载中，实现函数是不能被调用的
// add({name: 'tjx'}, {age: 18})


export {}
