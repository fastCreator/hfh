<template>
  <div class="share">
    <div class="title">扫一扫</div>
    <div class="title">100积分</div>
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
