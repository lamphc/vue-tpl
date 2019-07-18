import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import iView from 'iview'

// 初始化
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

// 路由事件
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()

})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
