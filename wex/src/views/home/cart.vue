<template>
  <div class="cart">
    <mt-header fixed :title="$route.meta.title">
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">积分商城</mt-tab-item>
      <mt-tab-item id="2">定制商城</mt-tab-item>
    </mt-navbar>
    <div class="goods" v-for="(it,i) in data" :key="i">
      <el-checkbox :value="it.checked" @input="(v)=>{it.checked=v;$set(data,i,it)}"></el-checkbox>
      <img :src="it.img">
      <div class="right">
        <div>{{it.title}}</div>
        <div>
          <span class="price">{{selected?'积分':'￥'}}{{it.price}}</span>
          <el-input-number :value="it.num" @input="numbs($event,it,i)" :min="1" size="small"></el-input-number>
        </div>
      </div>
    </div>
    <div class="flex-bottom">
      <el-checkbox @input="ckAll" :value="isckAll">全选</el-checkbox>
      <span class="right">
        <span class="allPrice">合计:￥{{allPrice}}</span>
        <mt-button type="primary" size="small" @click="gocartd">结算</mt-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '1',
      data: []
    }
  },
  watch: {
    selected: {
      handler () {
        this.getList()
      },
      immediate: true
    }
  },
  created () {

  },
  computed: {
    allPrice () {
      return this.data
        .reduce((a, b) => a - 0 + ((b.checked ? (b.price - 0) * b.num : 0) - 0), 0)
        .toFixed(2)
    },
    isckAll () {
      for (let i = 0; i < this.data.length; i++) {
        if (!this.data[i].checked) return false
      }
      return true
    }
  },
  methods: {
    numbs (num, it, i) {
      it.num = num
      this.$set(this.data, i, it)
      if (this.selected === '1') {
        window.server.p_cart_number_edit_point(it._id, it.num)
      } else {
        window.server.p_cart_number_edit_tailored(it._id, it.num)
      }
    },
    getList () {
      if (this.selected === '1') {
        window.server.cart_details_point((data) => {
          this.data = data.cart_list
          this.data.forEach(it => {
            Object.assign(it, {
              checked: true,
              img: window.apiconn.server_info.download_path + Object.keys(it.cover)[0],
              title: it.product_name,
              price: it.product_point,
              num: it.product_number,
              _id: it._id
            })
          })
        })
      } else {
        window.server.cart_details_tailored((data) => {
          this.data = data.cart_list
          this.data.forEach(it => {
            Object.assign(it, {
              checked: true,
              img: window.apiconn.server_info.download_path + Object.keys(it.cover)[0],
              title: it.product_name,
              price: it.product_price,
              num: it.product_number,
              _id: it._id
            })
          })
        })
      }
    },
    gocartd (it) {
      this.$router.push('/page/cartd')
      window.sessionStorage.data = JSON.stringify(it)
    },
    ckAll (v) {
      this.data.forEach((it, i) => {
        it.checked = v
        this.$set(this.data, i, it)
      })
    }
  }
}
</script>
<style lang="less">
.cart {
  padding-bottom: 50px;
  .goods {
    border-bottom: 1px solid #ccc;
    padding: 10px 4px;
    box-sizing: border-box;
    .el-checkbox {
      vertical-align: middle;
      margin: 0 6px;
    }
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
      vertical-align: middle;
    }
    .right {
      display: inline-block;
      width: calc(~"100% - 120px");
      vertical-align: middle;
      padding-left: 10px;
      & > div {
        margin-top: 12px;
      }
      .price {
        color: red;
        padding-right: 6px;
        line-height: 34px;
      }
      .el-input-number--small {
        width: 130px;
        line-height: 30px;
        float: right;
        margin-right: 8px;
      }
    }
  }
  .flex-bottom {
    position: fixed;
    z-index:1000;
    bottom: 54px;
    left: 0;
    width: 100%;
    background: #f1efef;
    border-top: 1px solid #ccc;
    padding: 6px;
    box-sizing: border-box;
    .el-checkbox {
      line-height: 32px;
    }
    .allPrice {
      padding-right: 10px;
      font-size: 14px;
    }
    .right {
      float: right;
    }
  }
}
</style>
