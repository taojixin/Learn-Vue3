// number|string 联合类型
function printID(id: number | string | boolean) {
  // console.log(id.toUpperCase()); // 会报错，id可能不是字符串类型，所以使用时要小心
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

export {}