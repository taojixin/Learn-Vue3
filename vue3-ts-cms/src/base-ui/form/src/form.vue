<template>
  <div class="hy-from">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOption"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placehold"
                  v-bind="item.otherOption"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOption"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      // 为了限制Array的类型，可以结合PropType进行限制类型
      type: Array as PropType<IFormItem[]>,
      // 默认值为数组或对象时需要使用箭头函数
      defautl: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.hy-from {
  padding-top: 22px;

  .form-tiem {
    padding: 5px 3px;
  }
}
</style>
