<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { ElForm } from 'element-plus'
import rules from '../config/account-config'
import localcache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localcache.getCache('name') ?? '',
      password: localcache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepword: boolean) => {
      //验证登录逻辑通过  validate校验表单 如果表单验证都通过 返回valid
      formRef.value?.validate((valid) => {
        if (valid) {
          //1、判断是否需要记住密码
          if (isKeepword) {
            //本地缓存
            localcache.setCache('name', account.name)
            localcache.setCache('password', account.password)
          } else {
            localcache.deleteCache('name')
            localcache.deleteCache('password')
          }
        }
        //2、开始进行登录验证 网络请求
        store.dispatch('login/accountLoginAction', { ...account })
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
