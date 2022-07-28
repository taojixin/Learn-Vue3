<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="phoneRules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="auth-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '../config/phone.config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone,
      phoneRules
    }
  }
})
</script>

<style scoped lang="less">
.auth-code {
  display: flex;
  .get-code {
    margin-left: 5px;
  }
}
</style>
