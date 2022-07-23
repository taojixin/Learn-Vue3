// 一个参数是可选类型的时候，它其实类似于是这个参数是 类型|undefined d的联合类型
function foo1(message?: string) {
  console.log(message);
}
foo1(undefined) // 不报错
foo1()  // 不报错
function foo2(message: string | undefined) {
  console.log(message);
}
// foo2() // 报错，不能为空
foo2(undefined) // 不报错
