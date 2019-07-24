<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/utils/tools'
export default {
  name: 'ChartPie',
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
      var nodes = []
      var links = []
      var constMaxDepth = 2
      var constMaxChildren = 7
      var constMinChildren = 4
      var constMaxRadius = 10
      var constMinRadius = 2

      function rangeRandom(min, max) {
        return Math.random() * (max - min) + min
      }

      function createRandomNode(depth) {
        var node = {
          name: 'NODE_' + nodes.length,
          value: rangeRandom(constMinRadius, constMaxRadius),
          // Custom properties
          id: nodes.length,
          depth: depth,
          category: depth === constMaxDepth ? 0 : 1
        }
        nodes.push(node)

        return node
      }

      function forceMockThreeData() {
        var depth = 0
        var rootNode = {
          name: 'ROOT',
          value: rangeRandom(constMinRadius, constMaxRadius),
          // Custom properties
          id: 0,
          depth: 0,
          category: 2
        }
        nodes.push(rootNode)

        function mock(parentNode, depth) {
          var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren))

          for (var i = 0; i < nChildren; i++) {
            var childNode = createRandomNode(depth)
            links.push({
              source: parentNode.id,
              target: childNode.id,
              weight: 1
            })
            if (depth < constMaxDepth) {
              mock(childNode, depth + 1)
            }
          }
        }

        mock(rootNode, 0)
      }

      forceMockThreeData()
      console.log(nodes)

      let option = {
        title: {
          text: 'Force',
          subtext: 'Force-directed tree',
          x: 'right',
          y: 'bottom'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} : {b}'
        },
        toolbox: {
          show: true,
          feature: {
            restore: { show: true },
            magicType: { show: true, type: ['force', 'chord'] },
            saveAsImage: { show: true }
          }
        },
        legend: {
          x: 'left',
          data: ['叶子节点', '非叶子节点', '根节点']
        },
        series: [
          {
            type: 'force',
            name: 'Force tree',
            ribbonType: false,
            categories: [
              {
                name: '叶子节点'
              },
              {
                name: '非叶子节点'
              },
              {
                name: '根节点'
              }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                nodeStyle: {
                  brushType: 'both',
                  borderColor: 'rgba(255,215,0,0.6)',
                  borderWidth: 1
                }
              }
            },
            minRadius: constMinRadius,
            maxRadius: constMaxRadius,
            coolDown: 0.995,
            steps: 10,
            nodes: nodes,
            links: links,
            steps: 1
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
