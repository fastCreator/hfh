<template>
  <div class="jsdz">
    <div class="item" v-for="(it ,i) in data" :key="i">
      <div class="wrap">
        <span class="left">收货人：{{it.name}}</span>
        <span class="right">{{it.tel}}</span>
      </div>
      <div >收货地址：{{it.location}}</div>
    </div>
    <div class="flex-botttom"><mt-button type="primary" size="large" @click.native="go">新建地址</mt-button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          name: '张三',
          tel: '15801234567',
          location: '福建省福州市台江区达道路123号'
        },
        {
          name: '张三',
          tel: '15801234567',
          location: '福建省福州市台江区达道路123号'
        }
      ]
    }
  },
  watch: {},
  created () {},
  methods: {
    go () {
      this.$router.push('/page/xjdz')
    }
  }
}
</script>
<style lang="less">
.jsdz {
  .item{
    padding: 8px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    line-height: 24px;
    margin-top: 10px;
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
