<template>
  <div class="jfscd">
      <img class="img" :src="data.img">
      <div class="title">{{data.title}}</div>
      <div class="wrap">
          <div class="left">积分：88</div>
          <div class="right">
            <mt-button type="primary" size="small">收藏</mt-button>
          </div>
      </div>
      <div class="info">优惠  赠送88通证积分</div>
      <div class="info">限购  最多兑换5件</div>
      <img class="detils" v-for="(it,i) in data.detils" :src="it" :key="i">
      <div class="flex_button wrap">
          <div class="left">积分：88 赠送88通证积分</div>
          <div class="right">
            <mt-button class="one" type="primary" size="small">加入购物车</mt-button>
            <mt-button type="primary" size="small">立即购买</mt-button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2875653198,2481124055&fm=27&gp=0.jpg',
        title: '商品名称商品名称商品名称商品名1',
        jf: 88,
        detils: ['https://img.alicdn.com/imgextra/i4/1731961317/TB2EyQUnQOWBuNjSsppXXXPgpXa_!!1731961317.jpg', 'https://img.alicdn.com/imgextra/i1/1731961317/TB2mTglnMmTBuNjy1XbXXaMrVXa_!!1731961317.jpg']
      }
    }
  },
  watch: {},
  created () {

  },
  methods: {
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
    border-top:1px solid #ccc;
    left: 0;
    padding:6px;
    box-sizing: border-box;
    .left {
      font-size: 14px;
      line-height: 30px;
    }
    .one{
      margin-right:6px;
    }
    .mint-button--small{
      font-size: 12px;
      padding: 4px;
    }
  }
}
</style>
