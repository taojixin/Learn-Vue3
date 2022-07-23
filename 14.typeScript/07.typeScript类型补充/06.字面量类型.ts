// "hello world" 也可以作为类型，叫做字面量类型
const message: 'hello world' = 'hello world'
// let num: 123 = 456 // 报错，前后的值必须一样
// 字面量类型的意义，就是必须结合联合类型
type Alignment = 'left' | 'center' | 'right'
let align: Alignment = 'left'
align = 'center'
align = 'right'
// align = 'hhh'   // 报错








export {}