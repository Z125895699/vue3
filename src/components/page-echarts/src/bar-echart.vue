<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { computed } from 'vue'
import * as echarts from 'echarts'
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
        xAxis: {
          data: props.xLabels,
          axisLabel: {
            inside: false,
            color: 'black'
          },
          //刻度
          axisTick: {
            show: false
          },
          //轴线
          axisLine: {
            show: false
            // symbol: 'arrow'
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            //设置渐变色
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'red' }, //0%处的颜色为红色
                { offset: 1, color: 'blue' }
              ])
            },
            //鼠标悬停的高亮
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
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
