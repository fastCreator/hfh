<template>
  <div class="share">
    <div class="title">邀请好友，即可获得通证积分</div>
    <qrcode value="Hello, World!" :options="{ size: 240 }"></qrcode>
    <div class="bz">
      <span class="left">备注</span>
      <span class="right">通证积分5w的时候可以兑换可用积分1可用积分=100通证积分</span>
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
  .bz {
    margin-top: 20px;
  }
}
</style>
