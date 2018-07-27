<template>
  <div class="jsdz">
    <div class="item" v-for="(it ,i) in data" :key="i">
      <div class="wrap">
        <span class="left">收货人：{{it.express_name}}</span>
        <span class="right">{{it.express_phone}}</span>
      </div>
      <div >收货地址：{{it.express_addr + it.express_addr_details}}
      </div>
      <a type="primary" @click="setmoren(it)">设为默认地址</a>
    </div>
    <div class="flex-botttom"><mt-button type="primary" size="large" @click.native="go">新建地址</mt-button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: []
    }
  },
  watch: {},
  created () {
    this.getList()
  },
  methods: {
    getList () {
      window.server.person_addr_details((data) => {
        this.data = data.list_out.filter(it => it)
      })
    },
    go () {
      this.$router.push('/page/xjdz')
    },
    setmoren (it) {

    }
  }
}
</script>
<style lang="less">
.jsdz {
  a{
    color: #26a2ff;
  }
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
