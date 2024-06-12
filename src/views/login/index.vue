<template>
  <div>
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />

    <div class="box">
      <h2>手机号登录</h2>
      <p>未注册的手机号登录后将自动注册</p>

      <input class="phone" v-model="phone" placeholder="请输入手机号码" type="text" />

      <div class="code">
        <input v-model="imgNum" placeholder="请输入图形验证码" class="inp" type="text" />
        <img src="@/assets/logo.png" alt="" />
      </div>

      <div class="code">
        <input v-model="smsNum" placeholder="请输入短信验证码" class="inp" type="text" />
        <button class="codeNum">获取验证码</button>
      </div>

      <button @click="loginFn" class="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginIndex',
  data () {
    return {
      phone: '',
      imgNum: '',
      smsNum: ''
    }
  },
  methods: {
    loginFn () {
      console.log(this.phone, this.imgNum, this.smsNum)
      this.$router.back()
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 30px 20px 10px;
  font-weight: normal;
}

p {
  margin: 0 20px 10px;
  color: lightgray;
  font-size: 14px;
}

.phone {
  width: 90%;
  margin: 20px;
  height: 35px;
  border: none;
}

img {
  width: 100px;
  height: 30px;
  vertical-align: middle;
}

.code {
  height: 55px;
  margin: 10px 20px;
}

.inp {
    margin-right: 30px;
    height: 35px;
    border: none;
  }

  .codeNum{

    border: none;
    background-color: #fff;
    color: orange;
  }

  .login{

    margin: 20px;
    width: 90%;
    height: 40px;
    border: none;
    border-radius: 20px;
    background-color: orange;
    color: white;
  }
</style>
