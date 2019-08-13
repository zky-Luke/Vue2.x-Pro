import Vue from 'vue'
import store from './store/index'
// 系统错误捕获
const errorHandler = (error, vm, info) => {
  Vue.nextTick(() => {
    store.dispatch('addErrorLog', {
      error: error.message,
      info: info,
      url: window.location.href
    })
    console.error('抛出全局异常')
    console.error(error, info)
  })
}
Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error) => errorHandler(error, this)
