class Person {
  name: string = ''
  age: number = 0
  eating() {
    console.log("eating");
  }
}
class Student extends Person{
  sno: number = 0
  studying() {
    console.log("studying");
  }
}
class Teacher extends Person{
  title: string = ''
  teaching() {
    console.log("teaching");
  }
}

const stu = new Student()
stu.name = 'tjx'
stu.age = 18
console.log(stu.name);
console.log(stu.age);
console.log(stu.eating());


export {}