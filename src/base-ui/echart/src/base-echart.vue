<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: '100%', height: '360px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watchEffect, ref } from 'vue'

import useEchart from '../hooks/useEchart'

export default defineComponent({
  props: {
    options: {
      required: true
    }
  },
  setup(props) {
    const echartDivRef = ref<HTMLElement>()

    onMounted(() => {
      const { setOptions } = useEchart(echartDivRef.value!)

      watchEffect(() => {
        setOptions(props.options as any)
      })
    })
    return {
      echartDivRef
    }
  }
})
</script>

<style scoped></style>
