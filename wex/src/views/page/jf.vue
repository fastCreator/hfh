<template>
  <div class="jf">
    <div class="c1">
      <div class="item">
        <div class="fs">111</div>
        <div>可用积分</div>
      </div>
      <div class="item">
        <div class="fs">111</div>
        <div>分红积分</div>
      </div>
      <div class="item">
        <div class="fs">111</div>
        <div>通证积分</div>
      </div>
    </div>
    <div class="c1 c2">
      <div class="item">
        <div class="fs">通证积分</div>
        <div>51111</div>
      </div>
      <div class="item">
        <div class="fs">兑换</div>
        <div>
          <mt-button size="small" type="primary">确定</mt-button>
        </div>
      </div>
      <div class="item">
        <div class="fs">可用积分</div>
        <div>1111</div>
      </div>
    </div>
    <div class="bz">
      <span class="left">备注</span>
      <span class="right">通证积分超5w的时候可以兑换可用积分 1可用积分=100通证积分； 分红积分按每天1%释放到可用积分； 可用积分来源：现金消费、充值、推荐会员的 现金消费（如果系统没有做好，可用“二级分销” 更简单）；
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  watch: {},
  created () {},
  methods: {}
}
</script>
<style lang="less">
.jf {
  .c1 {
    border: 1px solid #ccc;
    .item {
      font-size: 18px;
      padding: 20px 0;
      display: inline-block;
      width: 33.333%;
      box-sizing: border-box;
      text-align: center;
      .fs {
        margin-bottom: 10px;
      }
    }
  }
  .c2 {
    margin-top: 20px;
  }
  .bz {
    margin-top: 20px;
  }
}
</style>
