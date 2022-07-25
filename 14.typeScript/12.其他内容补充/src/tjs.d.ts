// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}

// 声明变量、函数、类
declare let tjxName: string
declare let tjxAge: number
declare let tjxHeight: number

declare function tjxFoo(): void

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}