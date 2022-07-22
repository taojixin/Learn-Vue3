
var name: string = 'tjx'
let age: number = 18
const height: number = 1.88

// string 和 String 是有区别的：
// string: 表示typescript中的字符串类型
// String: 表示JavaScript的字符串包装类的类型
const message: string = "所以应该使用string"

// 类型推导/推断：默认情况下进行赋值时：会将赋值的值的类型，作为当前标识符的类型
let foo = "foo"
// foo = 123  不能将类型“number”分配给类型“string”。

export { }