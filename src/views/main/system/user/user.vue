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
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="users"
      :defaultValue="defaultValue"
      headName="新建用户"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
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
    //1、 处理密码的逻辑   编辑密码不可见 新建密码可见
    const handleNew = () => {
      for (const item of modalConfig.formItems) {
        if (item.field === 'password') {
          item.isHidden = false
        }
      }
    }
    const handleEdit = () => {
      for (const item of modalConfig.formItems) {
        if (item.field === 'password') {
          item.isHidden = true
        }
      }
    }

    //2、动态添加部门和角色列表  需要响应式
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      // console.log(departmentItem)
      departmentItem!.options = store.state.departmentList.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      // console.log(roleItem)
      roleItem!.options = store.state.roleList.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    //调用hook
    const [pageContentRef, queryClick] = usePageSearch()
    const [pageModalRef, defaultValue, handleNewData, handleEditData] =
      usePageModal(handleNew, handleEdit)

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfigRef,
      defaultValue,
      pageContentRef,
      pageModalRef,
      queryClick,
      handleNewData,
      handleEditData
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
