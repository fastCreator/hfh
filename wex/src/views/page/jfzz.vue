<template>
  <div class="jfzz">
     <mt-cell title="可用积分转赠（最大可1230）" value="100"></mt-cell>
     <mt-cell title="手机号" value="1500123456"></mt-cell>
     <div class="btns">
        <mt-button type="primary" @click.native="go">生成二维码</mt-button>
        <mt-button type="primary">确定</mt-button>
     </div>
     <div class="bz">
      <span class="left">备注</span>
      <span class="right">填写好可用积分转赠，可生成二维码</span>
    </div>
     <div class="bz">
      <span class="left">备注</span>
      <span class="right">个人转赠积分页面，生成二维码，对方微信扫描得到积分<br/>
我的里面生成二维码，个人扫描，到转赠积分页面，已经填好商家电话，这时候个人填积分，可以转赠，收款二维码不限商家</span>
    </div>
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
  methods: {
    go () {
      this.$router.push('/page/scewm')
    }
  }
}
</script>
<style lang="less">
.jfzz {
  .mint-cell{
    border-bottom: 1px solid #ccc;
  }
  .btns{
    text-align: center;
    .mint-button{
      width:40%;
      margin: 10px 3%;
    }
  }
}
</style>
