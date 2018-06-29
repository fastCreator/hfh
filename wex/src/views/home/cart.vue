<template>
  <div class="cart">
    <div class="goods" v-for="(it,i) in data" :key="i">
      <el-checkbox v-model="it.checked"></el-checkbox>
      <img :src="it.img">
      <div class="right">
        <div>{{it.title}}</div>
        <div>
          <span class="price">￥{{it.price}}</span>
          <el-input-number v-model="it.num" :min="1" size="small"></el-input-number>
        </div>
      </div>
    </div>
    <div class="flex-bottom">
      <el-checkbox @input="ckAll" :value="isckAll">全选</el-checkbox>
      <span class="right">
        <span class="allPrice">合计:￥{{allPrice}}</span>
        <mt-button type="primary" size="small" @click="gocartd">结算</mt-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          checked: true,
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2875653198,2481124055&fm=27&gp=0.jpg',
          title: '商品名称标题',
          price: '99.00',
          num: 1
        }
      ]
    }
  },
  watch: {},
  created () {},
  computed: {
    allPrice () {
      return this.data
        .reduce((a, b) => a + ((b.checked ? b.price * b.num : 0) - 0), 0)
        .toFixed(2)
    },
    isckAll () {
      for (let i = 0; i < this.data.length; i++) {
        if (!this.data[i].checked) return false
      }
      return true
    }
  },
  methods: {
    gocartd () {
      this.$router.push('/page/cartd')
    },
    ckAll (v) {
      this.data.forEach(it => {
        it.checked = v
      })
    }
  }
}
</script>
<style lang="less">
.cart {
  .goods {
    border-bottom: 1px solid #ccc;
    padding: 10px 4px;
    box-sizing: border-box;
    .el-checkbox {
      vertical-align: middle;
      margin: 0 6px;
    }
    img {
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
        line-height: 34px;
      }
      .el-input-number--small {
        width: 130px;
        line-height: 30px;
        float: right;
        margin-right: 8px;
      }
    }
  }
  .flex-bottom {
    position: fixed;
    bottom: 54px;
    left: 0;
    width: 100%;
    background: #f1efef;
    border-top: 1px solid #ccc;
    padding: 6px;
    box-sizing: border-box;
    .el-checkbox {
      line-height: 32px;
    }
    .allPrice {
      padding-right: 10px;
      font-size: 14px;
    }
    .right {
      float: right;
    }
  }
}
</style>
