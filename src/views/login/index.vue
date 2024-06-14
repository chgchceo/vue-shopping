<template>
  <div>
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />

    <div class="box">
      <h2>手机号登录</h2>
      <p>未注册的手机号登录后将自动注册</p>

      <input class="phone" v-model="phone" placeholder="请输入手机号码" type="text" />

      <div class="code">
        <input v-model="imgNum" placeholder="请输入图形验证码" class="inp" type="text" />
        <img @click="getPicCode" v-show="picUrl" :src="picUrl" alt="" />
      </div>

      <div class="code">
        <input v-model="smsNum" placeholder="请输入短信验证码" class="inp" type="text" />
        <button @click="getCodeNum" class="codeNum">{{ second === totalSecond ? '获取验证码' : second + '秒后重新发送' }}</button>
      </div>

      <button @click="loginFn" class="login">登录</button>
    </div>
  </div>
</template>

<script>
import { getPicCode, getMsgCode, codeLogin } from '@/api/login'
export default {
  name: 'loginIndex',
  data () {
    return {
      phone: '',
      imgNum: '',
      smsNum: '',
      picUrl: '',
      picKey: '',
      totalSecond: 6, // 倒计时最大秒数
      second: 6, // 当前的秒数
      timer: null
    }
  },
  created () {
    this.getPicCode()
  },
  methods: {
    async loginFn () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.smsNum)) {
        this.$toast('请输入正确的短信验证码')
        return
      }

      console.log(this.phone, this.smsNum)
      const res = await codeLogin(this.phone, this.smsNum)

      this.$store.commit('user/setUserInfo', res.data)
      this.$toast('登录成功')
      this.$router.back()
    },
    async getPicCode () {
      const { data } = await getPicCode()
      this.picUrl = data.base64
      this.picKey = data.key
    },
    // 手机号，图形验证码验证
    validFn () {
      const regex = /^1[3-9]\d{9}$/
      if (!regex.test(this.phone)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^.{4}$/.test(this.imgNum)) {
        this.$toast('请输入的图形验证码')
        return false
      }
      return true
    },
    // 获取短信验证码
    async getCodeNum () {
      if (!this.validFn()) {
        return
      }
      console.log(this.timer)
      console.log(this.second)
      if (!this.timer && this.totalSecond === this.second) {
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            this.second = this.totalSecond
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)

        // 发送请求
        const res = await getMsgCode(this.imgNum, this.picKey, this.phone)

        this.$toast('短信验证码发送成功')
        console.log(res)
      }
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
