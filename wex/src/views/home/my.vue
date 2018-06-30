<template>
  <div class="my">
     <div class="header">
       <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942989250,3371488751&fm=27&gp=0.jpg">
       <div class="name">张珊三</div>
     </div>
     <div class="content">
        <mt-cell title="我要分享" to="/page/share" is-link></mt-cell>
        <mt-cell title="我的粉丝" to="/page/fans" is-link></mt-cell>
        <mt-cell title="我要充值" to="/page/recharge" is-link></mt-cell>
        <mt-cell title="我的积分" to="/page/jf" is-link></mt-cell>
        <mt-cell title="账单明细" to="/page/zdmx" is-link></mt-cell>
        <mt-cell title="积分转增" to="/page/jfzz" is-link></mt-cell>
        <mt-cell title="我的收藏" to="/page/wdsc" is-link></mt-cell>
        <mt-cell title="寄送地址" to="/a" is-link></mt-cell>
        <mt-cell title="我的电话" value="1580123456"></mt-cell>
        <mt-cell title="帮助与客服" to="/a" is-link></mt-cell>
     </div>
     <div class="bz"><span class="left">备注</span><span class="right">昵称是读取微信昵称的，没提供修改的
</span></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
  }
}
</script>

<style lang="less">
.my {
  .header{
    width:100%;
    padding: 40px 0;
    text-align: center;
    font-size: 14px;
    background: url('../../assets/login_bk.jpg');
    color: #fff;
    .name{
      margin-top: 6px;
    }
    img{
      width:80px;
      height:80px;
      border-radius: 80px;
    }
  }
  .mint-cell{
    border-bottom: 1px solid #ccc;
  }
  .mint-cell{
    background-image:none;
  }
}
</style>
