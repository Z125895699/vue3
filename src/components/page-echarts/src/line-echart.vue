<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

export default defineComponent({
  components: {
    BaseEchart
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    xLabels: {
      type: Array,
      required: true
    },
    values: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const options = computed(() => {
      return {
        title: {
          text: props.title
        },
        //鼠标悬浮
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'red'
            }
          }
        },
        legend: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: props.xLabels
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '分别销量',
            type: 'line',
            stack: '总量',
            //折线图的填充区域
            areaStyle: {},
            emphasis: {
              focus: 'series',
              label: {
                show: true
              }
            },
            data: props.values
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
