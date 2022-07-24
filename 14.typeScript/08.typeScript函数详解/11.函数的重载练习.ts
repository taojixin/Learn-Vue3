// 实现方式一：联合类型
// function getLength(args: string | any[]) {
//   return args.length
// }
// console.log(getLength('dsf'));
// console.log(getLength([123, 213, 3213]));

// 实现方式二：函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;
function getLength(args: any): number {
  return args.length
}
console.log(getLength('dsf'));
console.log(getLength([123, 213, 3213]));
