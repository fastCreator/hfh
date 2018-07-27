<template>
  <div class="jfsc">
    <mt-header fixed :title="$route.meta.title">
        <mt-button slot="right" @click="()=>{isshowfl = true}">分类</mt-button>
        <mt-button slot="left" @click="getList(0)">所有</mt-button>
    </mt-header>
    <div class="toast" @click="()=>{isshowfl = false}" v-show="isshowfl">
        <div class="list">
          <div v-for="(it ,i) in fl" :key="i" @click="getList(it._id)">{{it.title}}</div>
        </div>
    </div>
    <div v-for="(it,i) in data" :key="i" class="goods"  @click="godetils(it)">
      <img :src="getImg(it.cover)[0]" class="left">
      <div class="right">
        <div>{{it.product_name}}</div>
        <div class="jf">积分：{{it.product_point}}<br/><span style="color:#ccc;font-size:12px;"> 赠送{{it.token_point}}通证积分</span></div>
      </div>
      <img class="cart" @click.stop.prevent="addcard(it)" src="../../assets/cart.png">
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      data: [],
      fl: [],
      isshowfl: false
    }
  },
  watch: {},
  created () {
    this.getList()
    this.getFl()
  },
  methods: {
    getFl () {
      window.server.category_inquire((data) => {
        this.fl = [{title: '全部', _id: 0}].concat(data)
      })
    },
    getImg (obj) {
      return Object.keys(obj).map(it => (window.apiconn.server_info.download_path + it))
    },
    getList (id = 0) {
      window.server.product_list_point(id, (data) => {
        this.data = data.list
      })
    },
    godetils (it) {
      window.sessionStorage.sdata = JSON.stringify(it)
      this.$router.push('/page/jfscd')
    },
    addcard (it) {
      window.server.to_cart_point(it._id, function () {
        Toast({
          message: '添加成功',
          position: 'bottom',
          duration: 3000
        })
      })
    }
  }
}
</script>
<style lang="less">
/*
 未选中颜色：#333
 选中颜色:#26a2ff
 大小48px图片
*/
.jfsc {
  .toast{
    position: fixed;
    top:0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    overflow: auto;
    left:0;
    right:0;
    z-index: 1000;
    .list{
      position: fixed;
      width:100px;
      right:0;
      top:0;
      bottom: 0;
      overflow: auto;
      text-align: center;
      background: #fff;
      div{
        border-bottom:1px solid #ccc;
        padding: 8px 0;
      }
    }
  }
  .goods {
    padding: 8px;
    position: relative;
    border-bottom: 1px solid #ccc;
    .left {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .right {
      font-size: 16px;
      display: inline-block;
      padding-left: 10px;
      width: calc(~"100% - 80px");
      vertical-align: top;
      box-sizing: border-box;
      padding-right: 24px;
      .jf {
        color: red;
        margin-top: 10px;
      }
    }
    .cart {
      width: 20px;
      position: absolute;
      right: 14px;
      top: 25px;
    }
  }
}
</style>
