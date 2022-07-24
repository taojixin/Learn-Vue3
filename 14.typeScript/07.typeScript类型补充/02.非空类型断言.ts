function printMessageLength(message?: string) {
  // console.log(message.length); 报错，因为传入的message有可能是为undefined的，这个时候是不能执行方法的；
  // if (message) {
  //   console.log(message.length);
  // }
  // 但是，我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言,跳过ts在编译阶段对它的检测
  // 非空断言：！，表示一定不为空
  console.log(message!.length);
  
}

printMessageLength("abc")
// printMessageLength() // 如果还是传入一个空的，则编译时会报错