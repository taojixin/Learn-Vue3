enum Direction {
  // 枚举类型的值也可以手动改变,也可以是字符串
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM = 111
}
function turnDirection(direction: Direction) {
  console.log(direction);
  
} 
// 枚举类型其实是有个默认的值的：改变之前如下
// turnDirection(Direction.BOTTOM) // 3
// turnDirection(Direction.TOP) // 2
// 改变之后
turnDirection(Direction.BOTTOM) // 111
turnDirection(Direction.RIGHT) // 101
turnDirection(Direction.TOP) // 102
turnDirection(Direction.LEFT) // 100