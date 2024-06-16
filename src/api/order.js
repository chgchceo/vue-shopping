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

// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 20,
    couponId: 0,
    isUsePoints: 0,
    payType: 10,
    ...obj

  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
