<template>
  <div class="jfscd">
      <img class="img" :src="data.img">
      <div class="title">{{data.title}}</div>
      <div class="wrap">
          <div class="left">￥{{data.bonus_point}}</div>
          <div class="right">
            <mt-button type="primary" size="small" @click="collection">收藏</mt-button>
          </div>
      </div>
      <div class="info">促销  购买送{{data.bonus_point}}积分</div>
      <div class="info">限购  最多购买{{data.buying_limit}}件</div>
      <img class="detils" v-for="(it,i) in data.detils" :src="it" :key="i">
      <div class="flex_button wrap">
          <div class="left">￥{{data.bonus_point}} 赠送{{data.bonus_point}}分红积分</div>
          <div class="right">
            <mt-button class="one" type="primary" size="small" @click="addShop">加入购物车</mt-button>
            <mt-button type="primary" size="small">立即购买</mt-button>
          </div>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      data: {
        img: '',
        title: '',
        jf: 88,
        detils: []
      }
    }
  },
  watch: {},
  created () {
    this.data = JSON.parse(window.sessionStorage.sdata)
    this.data.img = this.getImg(this.data.cover)[0]
    this.data.title = this.data.product_name
    this.data.jf = this.data.product_point
    this.data.detils = this.getImg(this.data.photos)
  },
  methods: {
    collection () {
      window.server.product_collection_tailored(this.data._id, function () {
        Toast({
          message: '收藏成功',
          position: 'bottom',
          duration: 3000
        })
      })
    },
    addShop () {
      window.server.to_cart_tailored(this.data._id, function () {
        Toast({
          message: '添加成功',
          position: 'bottom',
          duration: 3000
        })
      })
    },
    getImg (obj) {
      return Object.keys(obj).map(it => (window.apiconn.server_info.download_path + it))
    },
    godetils () {
      this.$router.push('/page/jfscd')
    }
  }
}
</script>
<style lang="less">
.jfscd {
  padding: 8px;
  padding-bottom: 46px;
  .img {
    width: 100%;
  }
  .wrap {
    padding: 6px;
    .left {
      color: red;
      font-size: 20px;
    }
  }
  .info {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
  .detils {
    width: 100%;
  }
  .flex_button {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #f1efef;
    border-top: 1px solid #ccc;
    left: 0;
    padding: 6px;
    box-sizing: border-box;
    .left {
      font-size: 14px;
      line-height: 30px;
    }
    .one {
      margin-right: 6px;
    }
    .mint-button--small {
      font-size: 12px;
      padding: 4px;
    }
  }
}
</style>
