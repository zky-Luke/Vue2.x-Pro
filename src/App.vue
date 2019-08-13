<template>
  <div id="app">
    <transition :name="$transition" mode="in-out">
      <!-- <keep-alive :include="['home']" ></keep-alive> -->
        <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import VConsole from 'vconsole'
// import { lStorage } from '@/utils/storage.js'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    key () {
      // 由于路由组件的复用问题, 相同路由切换, 是不会出现动画效果的, 比如从 /article/1 切换到 /article/2
      return this.$route.path.replace(/\//g, '_')
    }
  },
  mounted () {
    console.dir(Vue)
    this.$api.test().then(res => {
      console.log(JSON.parse(res))
    })
    // vConsole调试
    if (process.env.NODE_ENV !== 'production') {
      try {
        let vc = new VConsole()
        Vue.use({ vc })
      } catch (error) {}
    }
  }
}
</script>

<style lang="less">
  @import './styles/animation.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
