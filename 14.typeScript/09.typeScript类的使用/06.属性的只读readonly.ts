class Person {
  // 2.属性本身不能进行修改，但是如果他是对象类型，对象中的属性可以修改
  readonly name: string
  readonly friend?: Person
  constructor(name: string, friend?: Person) {
    // 1.只读属性是可以在构造器中赋值，赋值之后就不可以修改了
    this.name = name
    this.friend = friend
  }
}

const p = new Person('tjx', new Person('yn'))
console.log(p.name);
// 不可以直接修改friend
// p.friend = new Person('james')



export { }