// 通过type定义函数类型
// type CalcFn = (n1: number, n2: number) => number
// 通过接口定义函数类型
interface CalcFn {
  (num1: number, num2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}
const add: CalcFn = (num1, num2) => {
  return num1 + num2
}
calc(20, 30, add)



export {}