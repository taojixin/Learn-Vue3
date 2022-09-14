import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

export default function useScroll() {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  // 监听window创建的滚动
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("到达底部了");
      isReachBottom.value = true
    }
  }, 100)
  // 挂载的时候添加监听
  onMounted(() => {
   window.addEventListener("scroll", scrollListenerHandler);
  });
  // 卸载的时候移除监听
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
return {isReachBottom, clientHeight, scrollTop, scrollHeight}
}