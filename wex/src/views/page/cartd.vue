<template>
  <div class="cardd">
    <div class="c1">
      <div class="wrap">
        <div class="left">收货人:{{data.name}}</div>
        <div class="right">{{data.tel}}</div>
      </div>
      <div>收货地址{{data.localtion}}</div>
    </div>
    <div class="c2">
      <img class="left" :src="data.img">
      <div class="right">
        <div>{{data.title}}</div>
        <div>
          <span class="price">￥{{data.price}}</span>
          <span class="num">*{{data.num}}</span>
        </div>
      </div>
    </div>
    <div class="c3 wrap">
      <div class="left">配送方式</div>
      <div class="right">快递免邮</div>
    </div>
    <div class="c3 wrap">
      <div class="left">商品积分</div>
      <div class="right">99分红积分</div>
    </div>
    <div class="flex-bottom">
          <span class="price">合计金额:￥100.00</span>
          <mt-button type="primary" size="small" @click="buy">立即支付</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        name: '',
        tel: '13568459754',
        localtion: '湖南省桂香市',
        img:
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2875653198,2481124055&fm=27&gp=0.jpg',
        title: '这是商品1',
        num: 10,
        price: 100.0
      }
    }
  },
  watch: {},
  created () {
    this.getData()
  },
  methods: {
    getData () {
      let id = JSON.parse(window.sessionStorage.data)._id
      window.server.p_order_details(id, (data) => {
        console.log(data)
      })
    },
    buy () {

    }
  }
}
</script>
<style lang="less">
.cardd {
  .c1 {
    border: 1px solid #ccc;
    padding: 0 10px;
    & > div {
      line-height: 34px;
    }
  }
  .c2 {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin-top: 10px;
    .left {
      display: inline-block;
      width: 80px;
      height: 80px;
      vertical-align: middle;
    }
    .right {
      display: inline-block;
      width: calc(~"100% - 120px");
      vertical-align: middle;
      padding-left: 10px;
      & > div {
        margin-top: 12px;
      }
      .price {
        color: red;
        padding-right: 6px;
      }
      .num {
        float: right;
      }
    }
  }
  .c3{
    border-bottom: 1px solid #ccc;
    padding: 8px;
  }
  .flex-bottom {
    text-align: right;
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    background: #f1efef;
    border-top:1px solid #ccc;
    padding:6px;
    box-sizing: border-box;
    .price{
      margin-right: 10px;
      font-size: 16px;
    }
  }
}
</style>
