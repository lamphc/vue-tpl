import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./plugins/moment"
import iView from 'iview'
import './index.less'
import '../node_modules/iview/dist/styles/iview.css'
import eventBus from '@/plugins/events'
import config from '@/config'

Vue.config.productionTip = false;

Vue.use(iView)
Vue.use(eventBus)

// 全局注册配置
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
