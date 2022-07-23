function printMessageLength(message?: string) {
  // console.log(message.length); 报错，可能并没有传入值
  // if (message) {
  //   console.log(message.length);
  // }
  // 非空断言：！，表示一定不为空
  console.log(message!.length);
  
}

printMessageLength("abc")
// printMessageLength() // 如果还是传入一个空的，则编译时会报错