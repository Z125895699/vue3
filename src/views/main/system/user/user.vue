<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryClick="queryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      headName="新建用户"
      :departmentItemName="departmentItemName"
      :roleItemName="roleItemName"
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="users"
      :defaultValue="defaultValue"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search/src/page-search.vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import PageModal from '@/components/page-modal/src/page-modal.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },

  setup() {
    const headName = ref('用户')
    //1、 处理密码的逻辑   编辑密码不可见 新建密码可见
    const handleNew = () => {
      for (const item of modalConfig.formItems) {
        if (item.field === 'password') {
          item.isHidden = false
        }
      }
    }
    //编辑
    const handleEdit = () => {
      for (const item of modalConfig.formItems) {
        if (item.field === 'password') {
          item.isHidden = true
        }
      }
    }

    //2、动态添加部门和角色列表  响应式
    const store = useStore()
    const modalConfigRef = computed(() => {
      //用户部门
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      // console.log('departmentItem:', departmentItem)
      departmentItem!.options = store.state.departmentList.map((item) => {
        return { title: item.name, value: item.name }
      })
      //用户角色
      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      // console.log('roleItem:', roleItem)
      roleItem!.options = store.state.roleList.map((item) => {
        return { title: item.name, value: item.name }
      })
      // console.log('departmentItem:', departmentItem?.options)
      return modalConfig
    })

    //部门名
    const departmentItemName = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })

      departmentItem!.options = store.state.departmentList.map((item) => {
        return item.name
      })
      // console.log('departmentItem:', departmentItem?.options)
      return departmentItem!.options.reverse()
    })
    const changeDepartmentItemName = (departmentItemName: any) => {
      store.commit('system/changedepartmentItemName', departmentItemName.value)
    }
    changeDepartmentItemName(departmentItemName)

    //角色名
    const roleItemName = computed(() => {
      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      // console.log('departmentItem:', departmentItem)
      roleItem!.options = store.state.roleList.map((item) => {
        return item.name
      })
      // console.log('roleItem:', roleItem?.options)
      return roleItem!.options.reverse()
    })

    //调用hook
    const [pageContentRef, queryClick] = usePageSearch()
    const [pageModalRef, defaultValue, handleNewData, handleEditData] =
      usePageModal(handleNew, handleEdit, headName)

    return {
      departmentItemName,
      contentTableConfig,
      searchFormConfig,
      modalConfigRef,
      defaultValue,
      pageContentRef,
      pageModalRef,
      queryClick,
      handleNewData,
      handleEditData,
      roleItemName,
      changeDepartmentItemName
    }
  }
})
</script>

<style scoped lang="less">
.user {
  padding: 20px 0;
  background-color: #fff;
  .el-row {
    padding: 0 10px;
  }
  .el-form {
    padding: 0 10px;
  }
  .el-pagination {
    text-align: right;
    padding: 20px 20px;
  }
}
</style>
