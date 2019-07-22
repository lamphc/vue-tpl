<template>
  <div class="flex-box">
    <div class="flex-box-left">1</div>
    <div class="flex-box-content" v-for="(i,j) in 100" :key="j">{{i}}</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.flex-box {
  display: flex;
  width: 960px;
  margin: 0 auto;
  flex-flow: row wrap;
  &-left {
    order: 10;
  }
  &-content {
    padding: 0 20px;
    border: 1px solid #fd18;
  }
}
</style>