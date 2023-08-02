/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const src: DefineComponent
  export default src
}

declare module '*.mjs'
