<template>
  <div class="wdsc">
    <mt-cell title="商品名称">
      <mt-button type="danger">删除</mt-button>
      <img slot="icon" src="../../assets/logo.png" width="70" height="70">
    </mt-cell>
    <div class="bz">
      <span class="left">备注</span>
      <span class="right">收藏的商品可以删除的</span>
    </div>
    <div class="flex-botttom"><mt-button type="primary" size="large">primary</mt-button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {}
    }
  },
  watch: {},
  created () {},
  methods: {}
}
</script>
<style lang="less">
.wdsc {
  padding-bottom: 62px;
  .mint-cell {
    border-bottom: 1px solid #ccc;
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
