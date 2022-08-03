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
      <hy-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'
// import HyForm, { IForm, IFormItem } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    // const formItems: IFormItem[] = [
    //   {
    //     type: 'input',
    //     label: 'id',
    //     placeholder: '请输入id'
    //   },
    //   {
    //     type: 'input',
    //     label: '用户名',
    //     placeholder: '请输入用户名'
    //   },
    //   {
    //     type: 'password',
    //     label: '用户名',
    //     placeholder: '请输入用户名'
    //   },
    //   {
    //     type: 'select',
    //     label: '用户名',
    //     placeholder: '请输入用户名',
    //     options: [
    //       {
    //         title: '篮球',
    //         value: 'basketball'
    //       },
    //       {
    //         title: '足球',
    //         value: 'football'
    //       }
    //     ]
    //   },
    //   {
    //     type: 'datepicker',
    //     label: '创建时间',
    //     otherOption: {
    //       startPlaceholder: '开始时间',
    //       endPlaceholder: '结束时间',
    //       type: 'daterange'
    //     }
    //   }
    // ]
    // const labelWidth = '120px'
    // const itemStyle = {
    //   padding: '20px 40px'
    // }
    // const colLayout = {
    //   span: 8
    // }
    // 合并为一个参数
    // const formConfig: IForm = {
    //   labelWidth: '120px',
    //   colLayout: { span: 8 },
    //   formItems: [
    //     {
    //       type: 'input',
    //       label: 'id',
    //       placeholder: '请输入id'
    //     },
    //     {
    //       type: 'input',
    //       label: '用户名',
    //       placeholder: '请输入用户名'
    //     },
    //     {
    //       type: 'password',
    //       label: '用户名',
    //       placeholder: '请输入用户名'
    //     },
    //     {
    //       type: 'select',
    //       label: '用户名',
    //       placeholder: '请输入用户名',
    //       options: [
    //         {
    //           title: '篮球',
    //           value: 'basketball'
    //         },
    //         {
    //           title: '足球',
    //           value: 'football'
    //         }
    //       ]
    //     },
    //     {
    //       type: 'datepicker',
    //       label: '创建时间',
    //       otherOption: {
    //         startPlaceholder: '开始时间',
    //         endPlaceholder: '结束时间',
    //         type: 'daterange'
    //       }
    //     }
    //   ]
    // }
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
