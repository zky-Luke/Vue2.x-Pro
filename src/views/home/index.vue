<template>
  <div class="home">
    <img @click="$router.push('/home/test')" src="../../assets/logo.png"><br>
    {{msg}}
    <van-button type="info" size="normal" class="text">信息按钮</van-button>
    <van-rate v-model="value" />
    <van-button loading type="danger" loading-text="加载中..." />
    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import { Button, Rate } from 'vant'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Frame',
      value: 3
    }
  },
  components: {
    [Button.name]: Button,
    [Rate.name]: Rate
  },

  created () {}
}
</script>

<style scoped lang="less">
.home{
  height: 100%;
  background-color: silver;
  font-size: 12px;
  img{
    width: 190px;
    height: 190px;
    margin: 50px 0 25px 0;
  }
}

</style>
