<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      headName="新建菜单"
      @handleNewClick="handleNewData"
      @handleEditClick="handleEditData"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content/src/page-content.vue'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: {
    PageContent
  },
  name: 'mymenu',
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.menu {
  padding: 20px 0;
  background-color: #fff;
}
</style>
