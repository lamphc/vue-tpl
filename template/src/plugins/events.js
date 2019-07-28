// 全局事件中心模块
const eventBus = {
  install(Vue) {
    Vue.prototype.$bus = new Vue()
  }
}

export default eventBus