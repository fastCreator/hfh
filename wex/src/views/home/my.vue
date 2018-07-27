<template>
  <div class="my">
    <mt-header fixed :title="$route.meta.title">
    </mt-header>
     <div class="header">
       <img :src="header">
       <div class="name">{{name}}</div>
     </div>
     <div class="content">
        <mt-cell title="我要分享" to="/page/share" is-link></mt-cell>
        <mt-cell title="我的粉丝" to="/page/fans" is-link></mt-cell>
        <mt-cell title="我要充值" to="/page/recharge" is-link></mt-cell>
        <mt-cell title="我的积分" to="/page/jf" is-link></mt-cell>
        <mt-cell title="账单明细" to="/page/zdmx" is-link></mt-cell>
        <mt-cell title="积分转增" to="/page/jfzz" is-link></mt-cell>
        <mt-cell title="我的收藏" to="/page/wdsc" is-link></mt-cell>
        <mt-cell title="寄送地址" to="/page/jsdz" is-link></mt-cell>
        <mt-cell title="我的电话" :value="tel"></mt-cell>
        <mt-cell title="帮助与客服" to="/page/bzykf" is-link></mt-cell>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      header: '',
      name: '',
      tel: ''
    }
  },
  created () {
    this.setInfo()
  },
  methods: {
    setInfo () {
      let info = window.apiconn.user_info
      this.header = window.apiconn.server_info.download_path + info.headFid
      this.name = info.nickname
      this.tel = info.phone_number
    }
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
