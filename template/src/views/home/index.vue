<template>
  <div class="index-wrapper">
    <Header></Header>
    <div class="flex-box">
      <div class="flex-box-left">
        <Menu theme="dark" active-name="1" class="menu" width="auto">
          <MenuGroup title="内容管理">
            <MenuItem name="1" to="/">
              <Icon type="md-document" />首页
            </MenuItem>
            <MenuItem name="2" to="/login">
              <Icon type="md-chatbubbles" />登录
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="统计分析">
            <MenuItem name="3">
              <Icon type="md-heart" />用户留存
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-leaf" />流失用户
            </MenuItem>
          </MenuGroup>
        </Menu>
      </div>
      <div class="flex-box-content">
        <div class="home">
          <img @click="tx" alt="Vue logo" src="../../assets/img/logo.png" />
          <div>
            <Ec style="height:300px"></Ec>
          </div>
          <h1>
            <p v-for="(i,j) in menu" :key="j">{{i.key}}</p>
          </h1>
          <Ic :end="end" count-class="count-text"></Ic>
          <HelloWorld v-bind.sync="more" />
          <Bc></Bc>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Ec from '@/components/charts/force-tree'
import HelloWorld from '@/components/HelloWorld.vue'
import Bc from '@/components/broChild'
import Ic from '@/components/count-to'
import { getHeroes, getHeroesById, createHero } from '@/api/data.js'
export default {
  name: 'home',
  components: {
    Header,
    HelloWorld,
    Bc,
    Ic,
    Ec
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
    getHeroes().then(res => {
      console.log(res)
    })
    getHeroesById(8)
    createHero({
      name: 'kexin'
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
@left-width: 260px;
.index-wrapper {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  .flex-box {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-flow: row wrap;
    &-left {
      order: 0;
      width: @left-width;
      height: 100%;
      border-right: 1px solid #dfd6d6;
      .menu {
        height: 100%;
      }
    }
    &-content {
      width: calc(100% - @left-width);
      .home {
        text-align: center;
        .count-text {
          font-size: 60px;
        }
      }
    }
  }
}
</style>