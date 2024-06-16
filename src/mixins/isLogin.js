export default {

  data () {
    return {

    }
  },
  methods: {

    isLogin () {
      // 判断用户是否登录，没有登录，弹框
      const token = this.$store.getters.token
      if (!token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '需要登录才能进行此操作哦'
        })
          .then(() => {
            // on confirm
            const backUrl = this.$route.fullPath
            this.$router.replace(`/login?backUrl=${backUrl}`)
          })
          .catch(() => {
            // on cancel
          })

        this.showPannel = false

        return false
      }
      return true
    }
  }
}
