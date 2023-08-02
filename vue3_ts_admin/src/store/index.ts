import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  app.use(pinia)

  // 加载本地数据
  const loginStore = useLoginStore()
  loginStore.loadLocalDataAction()
}

export default registerStore
