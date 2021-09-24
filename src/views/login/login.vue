<template>
  <div class="Login">
    <login-panel></login-panel>
  </div>
</template>

<script>
import LoginPanel from './cpns/login-panel.vue'
export default {
  components: {
    LoginPanel
  }
}
</script>

<style scoped lang="less">
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
