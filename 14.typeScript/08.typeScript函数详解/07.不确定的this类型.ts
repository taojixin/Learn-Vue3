function sayHello() {
  console.log(this.name);
}

const info = {
  name: 'tjx',
  sayHello
}
info.sayHello()
// 这段代码运行会报错的：
// 这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全；
// 所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的；
// 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来调用函数；

export {}

