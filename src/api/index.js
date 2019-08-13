import Vue from 'vue'
import apiList from './interface' // 倒入所有接口

const install = Vue => {
  if (install.installed) { return }
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    // 注意哦，此处挂载在 Vue 原型的 $api 对象上
    $api: {
      get () {
        return apiList
      }
    }
  })
}

Vue.use(install)
export default install
