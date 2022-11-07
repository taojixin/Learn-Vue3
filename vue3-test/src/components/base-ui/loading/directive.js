import { createApp } from 'vue'
import Loading from './loading.vue'

// g-realtive为一个calssName，定义在全局中，有属性position:relative
const relativeCls = 'g-relative'

const loadingDirective = {
    // el：指令绑定到的元素。这可以用于直接操作 DOM。
    mounted(el, binding) {
        const app = createApp(Loading)
        const instance = app.mount(document.createElement('div'))
        // 保存instance后面还会多次使用
        el.instance = instance
        // 添加文字
        const title = binding.arg
        if (typeof title !== 'undefined') {
            // setTitle方位为组件loding中的方法，注意这里的setTitle不能写在setup语法糖中，可能会找不到
            instance.setTitle(title)
        }
        // 如果为binding.value为真，将loading组件挂在到el上
        if (binding.value) {
            append(el)
        }
    },
    updated(el, binding) {
        const title = binding.arg
        if (typeof title !== 'undefined') {
            // setTitle方位为组件loding中的方法
            el.instance.setTitle(title)
        }
        if (binding.value !== binding.oldValue) {
            binding.value ? append(el) : remove(el)
        }
    }
}

// 添加loading
function append(el) {
    // 优化loading让更具通用性。loading组将使用了position:absolute
    const style = getComputedStyle(el)
    // 如果不是以下三个中的一个，添加新的className，添加属性position:relative
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
        // 添加样式
        addClass(el, relativeCls)
    }
    // appendChild方法可向节点的子节点列表的末尾添加新的子节点
    el.appendChild(el.instance.$el)
    // 注意这里的el和el.instance.$el不是同一个，el为需要绑定到的节点，el.instance.$el为loading组件
}
// 移除loading
function remove(el) {
    // 移除样式
    removeClass(el, relativeCls)
    el.removeChild(el.instance.$el)
}
// 添加className
function addClass(el, className) {
    // classList.contains(X)：查看元素是否存在类名为x的类
    if (!el.classList.contains(className)) {
        el.classList.add(className)
    }
}
function removeClass(el, className) {
    el.classList.remove(className)
}

export default loadingDirective