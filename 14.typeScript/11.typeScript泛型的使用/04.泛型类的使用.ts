class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}
const p = new Point<string>('1.2', '1.4', '2')
// 类型推导
const p2 = new Point('1.2', '1.4', '2')
const p3: Point<string> = new Point('1.2', '1.4', '2')

const name: Array<string> = ['abc']

export {}