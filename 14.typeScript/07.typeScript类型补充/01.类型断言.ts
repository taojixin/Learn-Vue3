// 类型断言就是将一个类型较大范围缩小为一个具体的类型，从而可以去调用该类型的相应的属性及方法
const el = document.getElementById('tjx') as HTMLImageElement
el.src = 'url地址'

class Person {
}
class Student extends Person {
  studying() {
  }
}
function sayHello(p: Person) {
  // p.studying() // 报错：类型“Person”上不存在属性“studying”。
  // 这时就可以使用类型断言
  (p as Student).studying()
}
const stu = new Student()
sayHello(stu)