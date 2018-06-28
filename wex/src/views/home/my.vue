<template>
  <div class="my">
     <div class="header">
       <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942989250,3371488751&fm=27&gp=0.jpg">
       <div class="name">张珊三</div>
     </div>
     <div class="content">
        <mt-cell title="标题1" value="描述信息1"></mt-cell>
        <mt-cell title="标题2" value="描述信息2"></mt-cell>
        <mt-cell title="标题2" value="描述信息3"></mt-cell>
     </div>
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
  .mint-cell:last-child{
    background-image:none;
  }
}
</style>
