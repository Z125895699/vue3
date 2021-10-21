<template>
  <hy-form v-bind="searchFormConfig" v-model="formData"></hy-form>
  <div class="handle-btns">
    <!-- 重置按钮 -->
    <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
    <!-- 搜索按钮 -->
    <el-button type="primary" icon="el-icon-search" @click="handleQueryClick">
      搜索
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form/src/form.vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  emits: ['queryClick'],
  setup(props, { emit }) {
    //双向绑定的数据即表单前面的label应该是由配置文件的field决定
    // 1、优化formData中的属性应该动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOrignData: any = {}
    for (const item of formItems) {
      formOrignData[item.field] = ''
    }
    const formData = ref(formOrignData)

    //2、优化重置点击
    const handleResetClick = () => {
      // formData.value = formOrignData
      for (const key in formOrignData) {
        //对象的值做修改  而不是复制
        formData.value[`${key}`] = formOrignData[key]
      }
      //重新请求数据
      emit('queryClick')
    }

    //3、优化搜索点击
    const handleQueryClick = () => {
      emit('queryClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 10px 20px;
}
</style>
