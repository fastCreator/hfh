<template>
  <div class="bzykf">
    <div class="logo"><img src="../../assets/logo.png"></div>
    <div class="tel">
      <span>联系电话</span>
      <span>{{tel}}</span>
    </div>
    <div class="bz">
      <span class="left">备注</span>
      <span class="right">名词的解释，具体等金主提供</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tel: '15368459865'
    }
  },
  watch: {},
  created () {},
  methods: {}
}
</script>
<style lang="less">
.bzykf {
  .logo {
    text-align: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .tel{
    padding: 10px;
    span{
      margin-right: 20px;
    }
  }
}
</style>
