import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  //1、搜索查询
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const queryClick = (qureyInfo: any) => {
    pageContentRef.value?.getPageData(qureyInfo)
  }
  return [pageContentRef, queryClick]
}
