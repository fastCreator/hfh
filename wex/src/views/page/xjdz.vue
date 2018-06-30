<template>
  <div class="xjdz">
    <mt-field label="收货人姓名" placeholder="请输入收货人姓名" v-model="name"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="邮政编码" placeholder="请输入邮政编码" type="number" v-model="yb"></mt-field>
    <mt-field label="省市区" placeholder="xx省XX市xx区" v-model="location"></mt-field>
    <mt-field label="详细地址" placeholder="请输入详细地址" type="textarea" rows="4" v-modal="detils"></mt-field>
    <div class="flex-botttom"><mt-button type="primary" size="large" @click.native="go">保存</mt-button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      tel: null,
      yb: null,
      location: '',
      detils: ''
    }
  },
  watch: {},
  created () {},
  methods: {}
}
</script>
<style lang="less">
.xjdz {
  .mint-cell {
    border-bottom:1px solid #ccc;
  }
  .flex-botttom{
    position: fixed;
    bottom: 0;
    padding: 10px;
    width:100%;
    box-sizing: border-box;
  }
}
</style>
