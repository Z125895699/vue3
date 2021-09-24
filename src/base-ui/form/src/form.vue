<template>
  <div class="form">
    <el-form label-width="100px" class="formItems">
      <el-row>
        <!-- 遍历formItems -->
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="collLayout">
            <el-form-item :label="item.label" v-if="!item.isHidden">
              <!-- 判断类型是否为输入框-->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- v-model绑定字段 -->
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <!-- 判断类型是否为下拉框-->
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <!-- 判断类型是否为时间框-->
              <template v-if="item.type === 'datapicker'">
                <el-date-picker
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as any,
      default: () => []
    },
    collLayout: {
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //是对props的modelValue的一个拷贝  不会产生依赖
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.formItems {
  padding: 20px 20px;
  .el-col {
    padding: 10px 20px;
  }
}
</style>
