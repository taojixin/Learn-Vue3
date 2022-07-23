
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}
// 传两个参数也可以
printPoint({x: 123, y: 123})
// 传三个参数也可以
printPoint({x: 123, y: 123, z: 123})


export {}