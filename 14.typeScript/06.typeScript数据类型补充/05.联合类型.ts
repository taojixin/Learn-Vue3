// number|string 联合类型
// 传入给一个联合类型的值是非常简单的：只要保证是联合类型中的某一个类型的值即可
// 但是我们拿到这个值之后，我们应该如何使用它呢？因为它可能是任何一种类型。
// 比如我们拿到的值可能是string或者number，我们就不能对其调用string上的一些方法；
function printID(id: number | string | boolean) {
  // console.log(id.toUpperCase()); // 会报错，id可能不是字符串类型，所以使用时要小心
  // 那么我们怎么处理这样的问题呢？
  // 我们需要使用缩小（narrow）联合（后续我们还会专门讲解缩小相关的功能）；
  // TypeScript可以根据我们缩小的代码结构，推断出更加具体的类型；
  if (typeof id === 'string') {
    // typescript 可以帮助确定id一定时string类型
    console.log(id.toUpperCase);
  } else {
    console.log(id);
  }
}
printID(123)
printID("asd")
printID(true)

export { }