function foo(x: number, y: number = 100) {
  console.log(x, y);
}
foo(20)

function foo2(x: number = 100, y: number) {
  console.log(x, y);
}
// 只有传入为undefined时才会使用第一个参数的默认值；所以一般有默认值的放在后面
foo2(undefined, 20)

export {}