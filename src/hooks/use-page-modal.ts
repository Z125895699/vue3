import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

const pageModalRef = ref<InstanceType<typeof PageModal>>()
const defaultValue = ref({})

export function usePageModal(handleNew?: any, handleEdit?: any) {
  //新建
  const handleNewData = () => {
    defaultValue.value = {}
    // console.log('新建')
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    handleNew && handleNew()
  }
  //编辑
  const handleEditData = (item: any) => {
    // console.log(item)
    defaultValue.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // console.log('点击了编辑按钮')
    handleEdit && handleEdit(item)
  }
  return [pageModalRef, defaultValue, handleNewData, handleEditData]
}
