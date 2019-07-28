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

// const LG = 'login';

// 路由事件
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 路由守卫
  // const token = localStorage.getItem('tkx')
  // if (!token) {
  //   next({ name: LG })
  // } else if (to.name === LG && token) {
  //   next({ name: 'home' })
  // } else if (to.name === LG && !token) {
  //   next()
  // } else {
  next()
  // }

})

router.afterEach(to => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
