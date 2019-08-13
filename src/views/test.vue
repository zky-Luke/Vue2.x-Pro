<template>
  <div class="test">
      <div class="box" @click="$router.push('/home/test/demo')">==</div>
    {{msg}}
    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Fram222222'
    }
  },
  mounted () {
    console.log('$transition', this.$transition)
  },
  beforeDestroy () {
    console.log('beforeDestroy', this.$transition)
  }
}
</script>

<style scoped lang="less">
.test{
  height: 100%;
  background: red;
  .fs;
  .box{
      position: absolute;
      top: 300px;
      z-index: 999;
      .wh-l(100px, 100px);
      font-size: 60px;
      background: blue;
      color: #FFF;
  }
  img{
    width: 380px;
    height: 380px;
    margin: 100px 0 50px 0;
  }
}
</style>
