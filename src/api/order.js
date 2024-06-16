import request from '@/utils/request'

// 订单确认
// mode,cart  ,buyNow结算模式（buyNow立即购买 cart购物车）

export const checkOutOrder = (mode, obj) => {
  return request.get('/checkout/order', {

    params: {

      mode,
      delivery: 10,
      shopId: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}
