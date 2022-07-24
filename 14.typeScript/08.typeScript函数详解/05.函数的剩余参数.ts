// 从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。
function sum(...nums: number[]) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}
const result = sum(10, 30, 20)
console.log(result);
const result1 = sum(10, 30, 20, 40)
console.log(result1);
