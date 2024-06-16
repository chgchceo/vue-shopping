
import { changeCount, delSelGoods, getCartList } from '@/api/cart'
import { Toast } from 'vant'
export default {

  namespaced: true,
  state () {
    return {

      cartList: []
    }
  },
  mutations: {

    setCartList (state, newList) {
      // isChecked
      newList.forEach(item => { item.isChecked = true })
      state.cartList = newList
      console.log(newList)
    },
    // 选中状态取反
    checkFn (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    AllCheckFn (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    changeSelCount (state, { goodsNum, goodsId }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = goodsNum
    }
  },
  actions: {

    async getCartListAction (context) {
      const res = await getCartList()
      context.commit('setCartList', res.data.list)
    },
    async changeCountAction (context, obj) {
      const { goodsNum, goodsId, goodsSkuId } = obj
      const res = await changeCount(goodsId, goodsNum, goodsSkuId)
      console.log(res)

      // 修改本地的数据
      context.commit('changeSelCount', { goodsId, goodsNum })
    },
    async delSelAction (context) {
      const cartIds = context.getters.selCartList.map(item => item.id)
      await delSelGoods(cartIds)

      // 删除成功，重新渲染数据
      Toast('删除成功')

      context.dispatch('getCartListAction')
    }

  },
  getters: {

    totalCount (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked === true)
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
