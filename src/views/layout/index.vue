<template>
  <div>
    <router-view />

    <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

  <style>
</style>
