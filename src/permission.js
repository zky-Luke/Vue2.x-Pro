import Vue from 'vue'
import router from './router'
import History from './router/history'

function popstateHandle () {
  // console.log('监听了返回键')
  router.isBack = true
  let el = document.getElementById('app')
  if (el) el.setAttribute('transition-direction', 'back')
}

router.beforeEach((to, from, next) => {
  next()

  // 路由跳转动画
  if (to.meta.disAnimation) {
    Vue.prototype.$transition = null
  } else {
    Vue.prototype.$transition = 'fade-effect'
  }

  // 路由历史
  if (router.isBack) {
    History.pop()
    router.isBack = false
  } else {
    History.push(to.path)
  }

  // 返回键监听
  window.addEventListener('popstate', popstateHandle, false)
})
