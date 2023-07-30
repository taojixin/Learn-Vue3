<template>
  <div class="account">
    <el-form :model="account" label-width="60px" ref="formRef" :rules="accountRules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'

const account = reactive({
  name: 'coderwhy',
  password: '123456'
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入用户名~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20个字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ]
}

// 定义登录逻辑
const formRef = ref<FormInstance>()
</script>

<style lang="less" scoped></style>
