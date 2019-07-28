<template>
  <div ref="dom" class="charts chart-force"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/utils/tools'
export default {
  name: 'ChartForce',
  props: {
    value: Array,
    text: String,
    subtext: String
  },
  data() {
    return {
      dom: null
    }
  },
  methods: {
    resize() {
      this.dom.resize()
    }
  },
  mounted() {
    this.$nextTick(() => {
      const nal = {
        nodes: [
          {
            attributes: { modularity_class: 0 },
            category: 0,
            draggable: true,
            id: '0',
            itemStyle: null,
            name: 'Myriel',
            symbolSize: 10,
            value: 10,
            x: null,
            y: null
          }
        ],
        links: [
          {
            id: '0',
            lineStyle: { normal: {} },
            name: null,
            source: '1',
            target: '0'
          }
        ]
      }

      this.dom = echarts.init(this.$refs.dom)
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy() {
    off(window, 'resize', this.resize)
  }
}
</script>
