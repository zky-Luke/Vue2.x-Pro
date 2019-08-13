<template>
  <div class="home">
    <img @click="$router.push('/home/test')" src="../../assets/logo.png"><br>
    {{msg}}
    <transition :name="$transition" mode="in-out">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Frame'
    }
  },
  computed: {},

  created () {}
}
</script>

<style scoped lang="less">
.home{
  height: 100%;
  background-color: silver;
  img{
    width: 380px;
    height: 380px;
    margin: 100px 0 50px 0;
  }
}

</style>
