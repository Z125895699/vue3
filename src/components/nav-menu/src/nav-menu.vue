<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!isCollapse">后台管理系统</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="#001529"
      active-text-color="#001529"
      :collapse="isCollapse"
    >
      <template v-for="item in $store.state.login.userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <!-- 二级菜单的父菜单 -->
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name + '' }}</span>
            </template>
            <!-- 二级菜单的子菜单 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handeItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="item.icon"></i>
                <span>{{ subitem.name + '' }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  setup() {
    //store
    const store = useStore()

    //router 可写路由对象
    const router = useRouter()
    //当前路由信息对象 只读路由对象
    const route = useRoute()

    //data
    const currentPath = route.path

    const menu = pathMapToMenu(store.state.login.userMenus, currentPath)

    //绑定menu的id 刷新的时候绑定菜单id
    const defaultValue = ref(menu.id + '')
    // console.log(defaultValue)

    //methods  路由跳转  没有用<router-link>
    const handeItemClick = (subitem: any) => {
      // console.log('路由跳转')
      router.push({
        path: subitem.url
      })
    }
    return {
      handeItemClick,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #0a60bd !important;
  }

  // hover 高亮  二级菜单
  .el-menu-item:hover {
    color: #fff !important;
  }
  //一级菜单里里面的每个children点击时的类
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
