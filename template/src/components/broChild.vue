<template>
  <div>
    <p @click="tx">tx</p>
  </div>
</template>

<script>
export default {
  methods: {
    tx() {
      console.log('go')

      this.$bus.$emit('tx', 100)
    }
  }
}
</script>

<style lang="less" scoped>
</style>