class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log("eating");
  }
}
class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    // 通过super调用父类的构造方法
    super(name, age)
    this.sno = sno
  }
  studying() {
    console.log("studying");
  }
  // 方法的重写
  eating() {
    // 执行父类中的方法
    super.eating()
    console.log("student eating");
  }
}

const stu = new Student('tjx', 18, 100)
stu.name = 'tjx'
stu.age = 18
console.log(stu.name);
console.log(stu.age);
console.log(stu.sno);
console.log(stu.eating());

export { }