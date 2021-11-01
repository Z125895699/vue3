<template>
  <div class="list">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="story"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/src/page-content.vue'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'story',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.list {
  padding: 20px 0;
  background-color: #fff;
}
</style>
