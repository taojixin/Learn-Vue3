
<script>
import {h} from "vue"
  export default {
    render() {
      return h("div", null, [
        this.$slots.default ? this.$slots.default() : h("span", null, "我是hello的默认插槽值")
      ])
    }
  }
</script>

<style scoped>

</style>