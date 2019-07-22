<template>
  <div>
    <h1>About</h1>
    <h2>
      <router-link :to="{name: 'home'}">home</router-link>
    </h2>
    <p v-for="(i,j) in menu" :key="j">{{i.key}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.menu
    }
  }
}
</script>

<style lang="less" scoped>
</style>