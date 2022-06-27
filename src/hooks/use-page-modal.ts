import { ref } from 'vue'
import PageModal from '@/components/page-modal/index'

const pageModalRef = ref<InstanceType<typeof PageModal>>()
const defaultValue = ref({})

export function usePageModal(
  handleNew?: any,
  handleEdit?: any,
  headName?: any
) {
  //新建
  const handleNewData = () => {
    // console.log(headName.value)
    defaultValue.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.headName = `新建${headName.value}`
    }
    handleNew && handleNew()
  }
  //编辑
  const handleEditData = (item: any) => {
    // console.log('item:', item)
    defaultValue.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.headName = `编辑${headName.value}`
    }
    // console.log('点击了编辑按钮')
    handleEdit && handleEdit()
  }
  return [pageModalRef, defaultValue, handleNewData, handleEditData]
}
