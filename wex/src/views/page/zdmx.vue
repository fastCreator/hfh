<template>
  <div class="zdmx">
     <mt-cell v-for="(it ,i) in data" :key="i" :title="it.type" :value="it.jf" :label="it.time"></mt-cell>
     <div class="bz">
      <span class="left">备注</span>
      <span class="right">所有积分进出记录也在这边</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          type: '积分',
          time: '2016-09-12',
          jf: '+60'
        },
        {
          type: '积分',
          time: '2016-09-12',
          jf: '+60'
        },
        {
          type: '积分',
          time: '2016-09-12',
          jf: '+60'
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
      window.server.details_show((d) => {
        console.log(d)
      })
    }
  }
}
</script>
<style lang="less">
.zdmx {
  .mint-cell{
    border-bottom: 1px solid #ccc;
  }
}
</style>
