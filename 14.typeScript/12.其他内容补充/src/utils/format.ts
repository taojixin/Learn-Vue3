namespace time {
  export function format(time: string) {
    return "2022-02-22"
  }

  export function foo() {

  }
  // 命名空间的东西只能在内部使用，要想在外部使用需要export导出
  let name: string = 'abc'
}

// 要想在另一个模块中使用命名空间，命名空间也需要导出
export namespace price {
  export function format(price: number) {
    return "99.99"
  }
}

time.format
price.format
// time.name


