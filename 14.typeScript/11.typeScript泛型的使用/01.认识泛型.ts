// 泛型就是对类型进行参数化

// 在定义函数时，不指明参数的类型，而是让调用者以参数的形式告知是什么类型
function sum<Type>(num: Type): Type {
  return num
}
// 调用方式一：明确的传入类型
sum<number>(1)
sum<{name: string}>({name: 'tjx'})
sum<any[]>(['abc'])
// 调用方式二：类型推导
// 他会自己推导参数是什么类型
sum(50) 
sum('abc')