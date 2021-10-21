<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryClick="queryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
      headName="新建部门"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      pageName="department"
      headName="新建部门"
      :defaultValue="defaultValue"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search/src/page-search.vue'
import PageContent from '@/components/page-content/src/page-content.vue'
import PageModal from '@/components/page-modal/src/page-modal.vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'department',
  setup() {
    //调用hook
    const [pageContentRef, queryClick] = usePageSearch()
    const [pageModalRef, defaultValue, handleNewData, handleEditData] =
      usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultValue,
      handleNewData,
      handleEditData,
      pageContentRef,
      queryClick
    }
  }
})
</script>

<style scoped lang="less">
.department {
  padding: 20px 0;
  background-color: #fff;
}
</style>
