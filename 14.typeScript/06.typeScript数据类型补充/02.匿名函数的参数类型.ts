// 通常情况下，在定义一个函数时，都会给参数加上类型注解
function foo(message: string) {
}
const names = ['abc', 'cba', 'bdj']
// item根据上下文环境推导出来的，这个时候可以不加类型注解
names.forEach(function (item) {
  // 我们并没有指定item的类型，但是item是一个string类型
  // 这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型；
  // 这个过程称之为上下文类型（contextual typing），因为函数执行的上下文可以帮助确定参数和返回值的类型
  console.log(item.split(" "));
})