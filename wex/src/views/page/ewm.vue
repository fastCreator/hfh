<template>
  <div class="share">
    <div class="title">付积分二维码</div>
    <qrcode value="Hello, World!" :options="{ size: 240 }"></qrcode>
    <div class="title">收积分二维码</div>
    <qrcode value="Hello, World!" :options="{ size: 240 }"></qrcode>
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
  methods: {}
}
</script>
<style lang="less">
.share {
  text-align: center;
  .title {
    margin: 10px 0;
    font-size: 16px;
  }
}
</style>
