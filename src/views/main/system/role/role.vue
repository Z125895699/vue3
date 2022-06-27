<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryClick="queryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
      pageName="role"
      headName="新建角色"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :otherInfo="otherInfoRef"
      pageName="role"
      :defaultValue="defaultValue"
    >
      <div class="menuTree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { leafMunuMapKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search'
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
  name: 'role',
  setup() {
    const headName = ref('角色')

    //处理hook的回调  编辑回显  eltree树形
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const handleEdit = (item: any) => {
      const leafKeys = leafMunuMapKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const [pageContentRef, queryClick] = usePageSearch()
    const [pageModalRef, defaultValue, handleNewData, handleEditData] =
      usePageModal(undefined, handleEdit, headName)

    const store = useStore()
    const otherInfoRef = ref({})

    //tree数据
    const menus = computed(() => {
      return store.state.menuList
    })

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfoRef.value = { menuList }
    }
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      pageModalRef,
      defaultValue,
      handleNewData,
      handleEditData,
      queryClick,
      menus,
      otherInfoRef,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="less">
.role {
  padding: 20px 0;
  background-color: #fff;
  .menuTree {
    margin-top: -35px;
    margin-left: 65px;
  }
}
</style>
