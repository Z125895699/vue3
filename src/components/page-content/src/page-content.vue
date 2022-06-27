<template>
  <div class="page-content">
    <hy-table
      :dataList="dataList"
      :listCount="listCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 列的插槽 -->
      <template v-slot:status="scope">
        <el-button type="success" size="small" plain>
          {{ scope.row.status ? '禁用' : '启用' }}
        </el-button>
      </template>

      <!-- 时间格式化 -->
      <template v-slot:createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template v-slot:updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <template v-slot:departmentId="scope">
        <p>{{ departmentItemName[scope.row.departmentId - 1] }}</p>
        <!-- <p v-if="scope.row.departmentId === 1">总裁办</p>
        <p v-if="scope.row.departmentId === 2">研发部</p>
        <p v-if="scope.row.departmentId === 3">运营部</p>
        <p v-if="scope.row.departmentId === 4">客服</p>
        <p v-if="scope.row.departmentId === 5">人事</p> -->
      </template>

      <!-- 所属角色 -->
      <template v-slot:roleId="scope">
        <p>{{ roleItemName[scope.row.roleId - 1] }}</p>
        <!-- <p v-if="scope.row.roleId === 1">总裁办</p>
        <p v-if="scope.row.roleId === 2">研发部</p>
        <p v-if="scope.row.roleId === 3">运营部</p>
        <p v-if="scope.row.roleId === 4">客服</p>
        <p v-if="scope.row.roleId === 5">人事</p> -->
      </template>

      <!-- 图片显示-->
      <template v-slot:image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>

      <!-- 操作 -->
      <template v-slot:handle="scope">
        <el-button
          size="mini"
          @click="handleEditClick(scope.row)"
          v-if="isUpdate"
        >
          编辑
        </el-button>
        <el-popconfirm
          confirm-button-text="是的"
          cancel-button-text="不"
          icon="el-icon-info"
          icon-color="red"
          title="你确定要删除这个吗?"
          @confirm="handleDeleteClick(scope.row)"
        >
          <template v-slot:reference>
            <el-button size="mini" type="danger" v-if="isDelete">
              删除
            </el-button>
          </template>
        </el-popconfirm>
      </template>

      <!-- 头部具名插槽  新建-->
      <template v-slot:headerHandle>
        <el-button type="primary" @click="handleNewClick" v-if="isCreate">
          {{ headName }}
        </el-button>
      </template>

      <!-- 尾部具名插槽 -->
      <template v-slot:footer></template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, reactive } from 'vue'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table/src/table.vue'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    departmentItemName: {
      type: Object,
      default: () => ({})
    },
    roleItemName: {
      type: Object,
      default: () => ({})
    },
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    headName: {
      type: String,
      default: ''
    }
  },
  emits: ['handleNewClick', 'handleEditClick'],
  setup(props, { emit }) {
    //获取按钮的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    // console.log(isCreate, isUpdate, isDelete, isQuery)

    //1、双向绑定pageInfos
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    //2、监听pageInfo
    //需要深度监听
    watch(
      () => pageInfo,
      () => {
        getPageData()
      },
      { deep: true }
    )

    //3、发送网络请求
    const store = useStore()
    const getPageData = (queryInfo: any = {}) => {
      // if (!isQuery) return
      console.log(pageInfo.value.currentPage * pageInfo.value.pageSize)
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          //查询偏移量
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          //查询的数据条数
          size: pageInfo.value.pageSize,
          //根据搜索条件模糊查询
          ...queryInfo
        }
      })
    }
    getPageData()
    // const departmentNameList = reactive(props.departmentItemName)
    // console.log('传值departmentItemName:', props.departmentItemName)
    // const roleNameList = reactive(props.roleItemName)
    // console.log('传值roleItemName:', props.roleItemName)

    //4、删除//编辑//新建
    //删除
    const handleDeleteClick = (item: any) => {
      // console.log(item)
      store.dispatch('system/deletePageListAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    //新建
    const handleNewClick = () => {
      emit('handleNewClick')
    }

    //编辑
    const handleEditClick = (item: any) => {
      // console.log(item)
      emit('handleEditClick', item)
    }

    //获取vuex数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    // console.log('dataList:', dataList.value)
    const listCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    return {
      dataList,
      listCount,
      pageInfo,
      getPageData,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
