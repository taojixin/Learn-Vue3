<template>
  <div class="user">
    <div class="search">
      <!-- <hy-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
        :colLayout="colLayout"
      ></hy-form> -->
      <!-- 合并为一个配置对象 -->
      <!-- <hy-form v-bind="formConfig" /> -->
      <hy-form v-bind="searchFormConfig" :formData="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <el-button class="primary">重置</el-button>
        </template>
      </hy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HyForm from '@/base-ui/form'
// import HyForm, { IForm, IFormItem } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
