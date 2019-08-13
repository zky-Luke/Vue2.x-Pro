<template>
  <div class="demo">
      demodemodemodemo
      <div class="box" @click="$router.back()">==</div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Fram9888'
    }
  }
}
</script>

<style scoped lang="less">
.demo{
    height: 100%;
    background: gray;
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
