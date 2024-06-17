<template>
  <div>
    <!-- <div>地址列表</div>地址列表 -->
    <van-nav-bar   @click-left="onClickLeft" left-arrow title="地址列表"/>

    <div class="item" v-for="item in list" :key="item.address_id">

        <div class="title"><span>{{ item.name }}  {{  item.phone}}</span></div>

        <div  class="address">
            <div class="con">
<span>{{ item.region.province+item.region.city+item.region.region + item.detail }}</span>

            </div>

            <button class="edit">编辑</button>
        </div>

        <div class="line"></div>
    </div>
    <button class="btn" @click="$router.push('/addAddress')">新增地址</button>
  </div>
</template>

<script>
import { getAddressList } from '@/api/address'

export default {

  data () {
    return {

      list: []

    }
  },
  computed: {

  },
  async created () {
    const res = await getAddressList()
    console.log(res)

    this.list = res.data.list
  },
  methods: {

    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

.item{

    /* padding: 15px; */
    margin-top: 15px;
    color: gray;
}

.line{

    height: 1px;
    background-color: #e5e5e5;
}
.title{

    margin:0 15px;
}
.address{

    margin: 15px;
    display: flex;
    justify-content: space-between;
}
.con{

width:60vw;
}
.edit{

    width: 50px;
    height: 30px;
}
.btn{

    position: fixed;

    bottom: 5vw;
    height: 45px;
    width: 90vw;
    margin-left: 5vw;
    border: none;
    background-color: purple;
    border-radius: 20px;
    color: white;

}

</style>
