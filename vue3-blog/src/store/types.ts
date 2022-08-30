import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithMedule {
  login: ILoginState
}

// 交叉类型
export type IStoreType = IRootState & IRootWithMedule
