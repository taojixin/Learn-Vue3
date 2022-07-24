function makeArea(shape: Shape) {
  return shape.getArea()
}
// 抽象类
abstract class Shape {
  // 抽象方法
  abstract getArea()
}
class Rectangle extends Shape {
  private width: number
  private height: number
  constructor(width: number, height: number) {
    super()
    this.width =width
    this.height =height
  }
  // 子类继承了抽象类，必须实现抽象类中的抽象方法
  getArea() {
    return this.width * this.height
  }
}
class Circle extends Shape{
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() {
    return this.r * this.r * 3.14
  }
}
const rectangle = new Rectangle(20 ,40)
const circle = new Circle(10)
console.log(makeArea(rectangle));
console.log(makeArea(circle));
