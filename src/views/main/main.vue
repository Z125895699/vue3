<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :isCollapse="isCollapse" ref="navmenuRef"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header
            @foldChange="foldChange"
            @selfMessageChange="selfMessageChange"
          ></nav-header>
        </el-header>
        <el-main class="page-content">
          <!-- main的第二层路由占位-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import navMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-header'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  components: {
    navMenu,
    navHeader
  },
  setup() {
    const isCollapse = ref(false)
    const foldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }

    const router = useRouter()
    const store = useStore()

    const navmenuRef = ref<InstanceType<typeof navMenu>>()

    const selfMessageChange = () => {
      router.push({
        path: store.state.login.userMenus[3].children[0].url
      })
      console.log(store.state.login.userMenus[3].children[0].url)
    }
    return {
      isCollapse,
      foldChange,
      selfMessageChange
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
