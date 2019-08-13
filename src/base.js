import Vue from 'vue'
let base = {}
base.install = function (Vue) {
  // 路由跳转动画
  Object.defineProperty(Vue.prototype, '$transition', {
    value: 'fade-effect',
    writable: true,
    configurable: true
  })
}
Vue.use(base)
export default base
