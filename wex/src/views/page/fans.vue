<template>
  <div class="fans">
    <div class="item" v-for="(it ,i) in data" :key="i">
      <img :src="it.img">
      <div class="tel">{{it.tel}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        },
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        },
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        },
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        },
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        },
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        },
        {
          img:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=648586898,2226520495&fm=27&gp=0.jpg',
          tel: '张珊珊'
        }
      ]
    }
  },
  watch: {},
  created () {
    this.getList()
  },
  methods: {
    getList () {
      window.server.fansShow((d) => {
        console.log(d)
      })
    }
  }
}
</script>
<style lang="less">
.fans {
  .item {
    display: inline-block;
    width: 33.333%;
    box-sizing: border-box;
    text-align: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 70px;
    }
    .tel{
      margin: 4px 0 12px;
    }
  }
}
</style>
