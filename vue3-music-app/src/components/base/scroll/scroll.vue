<template>
  <div class="scroll" ref="rootRef">
    <slot></slot>
  </div>
</template>

<script setup>
import useScroll from "./use-scroll";
import { ref, defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  click: {
    type: Boolean,
    default: true,
  },
  probeType: {
    type: Number,
    default: 0,
  },
});
const emits = defineEmits(["scroll"]);
const rootRef = ref(null);
const scroll = useScroll(rootRef, props, emits);
// 将内部的方法抛出，父组件可以直接用
defineExpose({
  scroll,
});
</script>

<style lang="less" scoped></style>
