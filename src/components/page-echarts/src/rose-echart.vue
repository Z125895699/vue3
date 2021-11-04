<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
export default defineComponent({
  components: {
    BaseEchart
  },
  props: {
    roseData: {
      required: true
    }
  },
  setup(props) {
    const options = computed(() => {
      return {
        // legend: {
        //   top: 'bottom'
        // },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '类别数据',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            //设置玫瑰图
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.roseData
          }
        ]
      }
    })
    return {
      options
    }
  }
})
</script>

<style scoped></style>
