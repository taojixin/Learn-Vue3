interface ILength {
  length: number
}
// 通过extends对类型进行限制
function getLength<T extends ILength>(arg: T) {
  return arg.length
}
getLength('abc')
getLength(['abc', 'dsf'])
getLength({length: 100})