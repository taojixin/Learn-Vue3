import { ref } from 'vue'
export default function () {
  const scrollx = ref(0)
  const scrolly = ref(0)
  document.addEventListener("scroll", () => {
    scrollx.value = window.scrollX
    scrolly.value = window.scrollY
  })

  return {
    scrollx,
    scrolly
  }
}