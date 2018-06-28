<template>
  <div class="cart">
      <div class="goods" v-for="(it,i) in data" :key="i">
          <input type="checkbox" v-model="it.checked">
          <img :src="it.img">
          <div class="right">
            <div>{{it.title}}</div>
            <div>
              <span>{{it.price}}</span>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        checked: true,
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2875653198,2481124055&fm=27&gp=0.jpg',
        title: '商品名称标题',
        price: '99.00'
      }]
    }
  },
  watch: {},
  created () {

  },
  methods: {
  }
}
</script>
<style lang="less">
.cart {
}
</style>
