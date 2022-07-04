<template>
  <div>
    <!-- <button @click="btnClick">tjx按钮</button>
    <h2>tjxInputMessage: {{ modelValue }}</h2> -->

    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  methods: {
    btnClick() {
      this.$emit("update:modelValue", 156165);
    },
  },
};
</script>

<style scoped>
</style>