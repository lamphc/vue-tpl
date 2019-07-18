import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import iView from 'iview'
import './index.less'
import '../node_modules/iview/dist/styles/iview.css'

Vue.config.productionTip = false;

Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
