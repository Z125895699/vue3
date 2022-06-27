<template>
  <div class="table">
    <div class="header">
      <!-- 插槽默认值 -->
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
        <div class="handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      v-bind="childrenProps"
    >
      <!-- 根据外部的配置是否显示 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template v-slot:default="scope">
            <!-- 动态插槽  插槽名是传进来配置的slotName-->
            <!-- 作用域插槽 -->
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <!-- 插槽默认值 -->
      <slot name="footer">
        <el-pagination
          v-if="showPagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage + 1"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    dataList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    listCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSizes: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:page'],
  setup(props, { emit }) {
    // console.log('dataList:', props.dataList)

    //切换页数
    const handleSizeChange = (pageSize: number) => {
      console.log('改变页数')
      emit('update:page', { ...props.page, pageSize })
    }
    //跳转页数
    const handleCurrentChange = (currentPage: number) => {
      // console.log('111:', currentPage)
      //每一页减1为offfset
      currentPage = currentPage - 1
      console.log('111:', currentPage)
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  .title {
    font-size: 20px;
    font-weight: 900;
  }
}
.el-pagination {
  text-align: right;
  padding: 20px 20px;
}
</style>
