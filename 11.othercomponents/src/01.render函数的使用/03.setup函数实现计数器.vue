

<script>
import { h, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);


    // setup代替render函数
    return () => {
      return h("h2", { class: "app" }, [
        h("h2", null, `当前计数:${counter.value}`),
        h(
          "button",
          {
            onClick: () => counter.value++,
          },
          "+1"
        ),
        h(
          "button",
          {
            onClick: () => counter.value--,
          },
          "-1"
        ),
      ]);
    };
  },
};
</script>

<style scoped>
</style>