<template>
  <div class="page-modal">
    <el-dialog
      :title="headName"
      v-model="dialogVisible"
      width="30%"
      destroy-on-close
      center
    >
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import { useStore } from '@/store'

import HyForm from '@/base-ui/form/src/form.vue'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      default: () => ({})
    },
    defaultValue: {
      type: Object,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    const headName = ref('')
    // console.log(props.modalConfig.formItems)
    // console.log('传值:', props.modalConfig.formItems)

    //监听defaultValue 回显作用
    //传入为get函数 newValue为一个Proxy对象
    watch(
      () => props.defaultValue,
      (newValue) => {
        console.log('newValue:', newValue)
        console.log('传值:', props.modalConfig.formItems)
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    //确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultValue).length) {
        //编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultValue.id
        })
      } else {
        //新建
        // console.log('新建用户')
        store.dispatch('system/creatPageDataAction', {
          pageName: props.pageName,
          creatData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick,
      headName
    }
  }
})
</script>

<style scoped></style>
