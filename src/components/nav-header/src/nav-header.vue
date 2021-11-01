<template>
  <div class="nav-header">
    <i
      class="header-main"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="changeFold"
    >
    </i>
    <div class="header-content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      <div class="header-right">
        <i class="el-icon-chat-dot-round"></i>
        <i class="el-icon-message-solid"></i>
        <i class="el-icon-collection-tag"></i>
        <i class="el-icon-user-solid"></i>
        <el-dropdown>
          <span class="el-dropdown-link">{{ myNanme }}</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>系统管理</el-dropdown-item>
              <el-dropdown-item @click="selfMessageClick">
                个人信息
              </el-dropdown-item>
              <el-dropdown-item @click="handleQuitClick">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { pathMapToMenu } from '@/utils/map-menus'

import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

import HyBreadcrumb from '@/base-ui/breadcrumb'
import localcache from '@/utils/cache'
import LocalCache from '@/utils/cache'

export default defineComponent({
  components: {
    HyBreadcrumb
  },
  emits: ['foldChange', 'selfMessageChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    //面包屑数据
    const store = useStore()
    //使用计算属性
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    // console.log(breadcrumbs.value)

    const changeFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    //用户名
    const myNanme = LocalCache.getCache('name')

    //退出登录
    const router = useRouter()
    const handleQuitClick = () => {
      localcache.deleteCache('token')
      localcache.deleteCache('userInfo')
      localcache.deleteCache('userMenus')
      router.push('/login')
    }
    //个人信息

    const selfMessageClick = () => {
      emit('selfMessageChange')
    }
    return {
      isFold,
      myNanme,
      changeFold,
      breadcrumbs,
      handleQuitClick,
      selfMessageClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .header-main {
    font-size: 30px;
    cursor: pointer;
  }
  .header-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    .el-icon-chat-dot-round {
      padding: 0 8px;
    }
    .el-icon-message-solid {
      padding: 0 8px;
    }
    .el-icon-collection-tag {
      padding: 0 8px;
    }
    .el-dropdown-link {
      padding: 0 5px;
    }
  }
}
</style>
