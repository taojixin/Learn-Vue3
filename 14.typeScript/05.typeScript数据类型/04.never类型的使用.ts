// function foo(): never {
//   // 死循环
//   while(true) {

//   }
// }

// function bar(): never {
//   throw new Error()
// }

// never应用场景
function handlMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log("string处理message");
      break
    case 'number':
      console.log(("number处理message"));
      break
    default:
      // 应用场景，用于提示开发者使代码更完整
      // const check: never = message // 报错
  }
}

handlMessage("abc")
handlMessage(123)