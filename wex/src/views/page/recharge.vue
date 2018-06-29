<template>
  <div class="recharge">
    <mt-field label="充值金额" placeholder="请输入充值金额" type="number" v-model="price"></mt-field>
    <mt-radio title="充值方式" v-model="value" :options="options">
    </mt-radio>
    <mt-button type="primary" size="large">确定</mt-button>
    <div class="bz">
      <span class="left">备注</span>
      <span class="right">1元=1积分，即可用积分</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      price: null,
      value: 'wx',
      options: [
        {
          label: '微信支付',
          value: 'wx'
        }
      ]
    }
  },
  watch: {},
  created () {},
  methods: {}
}
</script>
<style lang="less">
.recharge {
  padding: 8px;
  .mt-button{
    margin:10px 0;
  }
}
</style>
