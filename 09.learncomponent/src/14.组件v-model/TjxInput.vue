<template>
  <div>
    <input type="text" v-model="value" />
    <input type="text" v-model="titles" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ["update:modelValue", "update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    titles: {
      set(titles) {
        this.$emit("update:title", titles);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped>
</style>