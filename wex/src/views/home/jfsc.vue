<template>
  <div class="jfsc">
    <div v-for="(it,i) in data" :key="i" class="goods">
      <img :src="it.img" class="left">
      <div class="right">
        <div>{{it.title}}</div>
        <div class="jf">积分：{{it.jf}} 赠送{{it.jf}}通证积分</div>
      </div>
      <img class="cart" src="../../assets/cart.png" @click="godetils">
    </div>
    <div class="bz">
      <span class="left">备注</span>
      <span class="right">通证积分5w的时候可以兑换可用积分1可用积分=100通证积分</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2875653198,2481124055&fm=27&gp=0.jpg',
          title: '商品名称1',
          jf: 88
        },
        {
          img:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2875653198,2481124055&fm=27&gp=0.jpg',
          title: '商品名称1',
          jf: 88
        }
      ]
    }
  },
  watch: {},
  created () {},
  methods: {
    godetils () {
      this.$router.push('/page/jfscd')
    }
  }
}
</script>
<style lang="less">
/*
 未选中颜色：#333
 选中颜色:#26a2ff
 大小48px图片
*/
.jfsc {
  .goods {
    padding: 8px;
    position: relative;
    border-bottom: 1px solid #ccc;
    .left {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .right {
      font-size: 16px;
      display: inline-block;
      padding-left: 10px;
      width: calc(~"100% - 80px");
      vertical-align: top;
      box-sizing: border-box;
      padding-right: 24px;
      .jf {
        color: red;
        margin-top: 10px;
      }
    }
    .cart {
      width: 28px;
      position: absolute;
      right: 14px;
      top: 25px;
    }
  }
}
</style>
