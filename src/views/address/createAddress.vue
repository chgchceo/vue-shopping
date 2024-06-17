<template>
  <div>
    <van-nav-bar
      @click-left="$router.go(-1)"
      left-arrow
      title="新增地址"
    ></van-nav-bar>
    <div class="body">
      <div class="name">姓名 <input type="text" name="" id="" /></div>

      <div class="region">城市</div>

      <div>详细地址</div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>

    <button class="done" @click="doneButt">确定</button>
  </div>
</template>

<script>
import { addAddressFn } from '@/api/address'

export default {
  methods: {
    async doneButt () {
      await addAddressFn()
      this.$toast.success('success')
    }
  }
}
</script>

<style>

.body{

    padding: 20px;

}
.region{

    margin: 15px 0;
}
.done {
  position: fixed;
  width: 90vw;
  height: 45px;
  margin-left: 5vw;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 20px;
  bottom: 5vw;
}
</style>
