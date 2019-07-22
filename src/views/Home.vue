<template>
  <div class="home">
    <img @click="tx" alt="Vue logo" src="../assets/img/logo.png" />
    <h1>
      <router-link :to="{name: 'about'}">关于</router-link>
      <p v-for="(i,j) in menu" :key="j">{{i.key}}</p>
    </h1>
    <Ic :end="end" count-class="count-text"></Ic>
    <p>{{time | moment('datetime')}}</p>
    <HelloWorld v-bind.sync="more" />
    <Bc></Bc>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Bc from '../components/broChild'
import Ic from '../components/count-to'
import { getData } from '../api/data.js'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Bc,
    Ic
  },
  computed: {
    menu() {
      return this.$store.state.menu
    }
  },
  data() {
    return {
      time: '2019-07-17T02:44:20.000Z',
      more: {
        msg: 'Welcome to Your Vue.js App',
        num: 10
      },
      end: 1000000
    }
  },
  created() {
    this.$bus.$on('tx', d => console.log(d))
    getData().then(res => {
      console.log(res)
    })
    console.log('====================================')
    // console.log(this.$store.state.app.list)
    console.log('====================================')
    // this.$store.dispatch('setMenu', [{ key: 2000 }, { key: 10000 }])
  },
  methods: {
    tx() {
      this.$emit('tx', Math.random() * 100000)
      this.$store.dispatch('setMenu', [{ key: Math.random() * 100000 + 2000 }, { key: Math.random() * 100000 + 10000 }])
    }
  }
}
</script>
<style lang="less">
.home {
  width: 960px;
  margin: 0 auto;
  text-align: center;
  .count-text {
    font-size: 50px;
  }
}
</style>
