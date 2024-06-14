import request from '@/utils/request'

// 商品列表
export const getProList = ({ categoryId, goodsName, page, sortType, sortPrice }) => {
  return request.get('/goods/list', {

    params: {

      categoryId,
      goodsName,
      page,
      sortType,
      sortPrice
    }
  })
}
// 商品详情接口
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}
// 商品评论接口
export const getProComments = ({ goodsId, limit }) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
