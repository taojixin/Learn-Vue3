// 可以确定是一个数组，但是不能确定数组中存放什么数据类型：一个数组中在typescript开发中，最好存放的数据类型是固定的
// const names = [] 
// 不好的习惯
// names.push('abc')
// names.push(123)
const names: Array<string> = [] // 不推荐（会在react的jsx中有冲突）
// names.push(123) 报错
const names2: string[] = [] // 推荐