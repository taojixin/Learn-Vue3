class Person {
  name: string = ""
  eating() {
  }
}
const p = new Person()
// 类也可以作为变量的类型，当然也要有其中的属性及方法
const p1: Person = {
  name: 'tjx',
  eating() {
  }
}