<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

import { convertData } from '../utils/convert-data'
import { data } from '../utils/data'

export default defineComponent({
  components: {
    BaseEchart
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    mapData: {
      required: true
    }
  },
  setup(props) {
    const options = computed(() => {
      return {
        backgroundColor: '#fff',
        title: {
          text: '全国销量统计',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params: any) {
            // console.log(params.value[2])
            return params.value[2]
              ? `${params.name}:${params.value[2]}`
              : `${params.name}`
            // return `${params.name}:${params.value[2]} ?? ''`
            // return params.name + ' : ' + params.value[2]
          }
        },

        //视觉映射组件
        visualMap: {
          min: 0,
          max: 100,
          left: -5,
          bottom: -5,
          // calculable: true,
          text: ['高', '低'],
          //选中范围内的视觉元素
          inRange: {
            // symbolSize: [30, 100],
            color: [
              'rgb(70, 240, 252)',
              'rgb(250, 220, 46)',
              'rgb(245, 38, 186)'
            ]
          },
          textStyle: {
            color: 'red'
          }
        },
        //geo方式地理坐标系组件
        geo: {
          map: 'china',
          roam: 'scale', //是否允许缩放
          //选中状态下的标签样式
          emphasis: {
            areaColor: '#f4cccc',
            borderColor: 'rgb(9, 54, 95)', //省市边界线
            itemStyle: {
              areaColor: '#f4cccc'
            }
          }
        },
        series: [
          {
            name: '销量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 12,
            emphasis: {
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          },
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            tooltip: {
              show: true
            }
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
