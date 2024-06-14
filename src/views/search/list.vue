
<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="search"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div @click="getProType1" class="sort-item">综合</div>
      <div @click="getProType2" class="sort-item">销量</div>
      <div @click="getProType3" class="sort-item">价格</div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/product'
export default {
  name: 'SearchIndex',
  components: {
    GoodsItem
  },
  created () {
    this.getProductList({
      categoryId: this.$route.query.categoryId,
      goodsName: this.search,
      page: 1
    })
  },
  data () {
    return {

      proList: [],
      sortPrice: '0'
    }
  },
  computed: {

    search () {
      return this.$route.query.search
    }
  },
  methods: {

    async getProductList (obj) {
      const res = await getProList(obj)
      this.proList = res.data.list.data
    },
    getProType1 () {
      this.getProductList({
        goodsName: this.search,
        page: 1,
        sortType: 'all'
      })
    },
    getProType2 () {
      this.getProductList({
        goodsName: this.search,
        page: 1,
        sortType: 'sales'
      })
    },
    getProType3 () {
      this.getProductList({
        goodsName: this.search,
        page: 1,
        sortType: 'price',
        sortPrice: this.sortPrice
      })
      if (this.sortPrice === '1') {
        this.sortPrice = '0'
      } else {
        this.sortPrice = '1'
      }
    }
  }
}
</script>

  <style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
