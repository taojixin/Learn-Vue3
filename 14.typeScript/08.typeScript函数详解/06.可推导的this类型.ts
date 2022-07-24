const info = {
  name: 'tjx',
  sayHello() {
    console.log(this.name);
  }
}
info.sayHello()
// 上面的代码是可以正常运行的，也就是TypeScript在编译时，认为我们的this是可以正确去使用的：
// TypeScript认为函数 sayHello 有一个对应的this的外部对象 info，所以在使用时，就会把this当做该对象。

export {}