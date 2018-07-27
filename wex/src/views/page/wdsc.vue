<template>
  <div class="wdsc">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">积分商城</mt-tab-item>
      <mt-tab-item id="2">定制商城</mt-tab-item>
    </mt-navbar>
      <mt-cell v-for="(it,i) in data" :key="i"  :title="it.title">
        <mt-button type="danger" @click="del(it)">删除</mt-button>
        <img slot="icon" :src="it.img" width="70" height="70"/>
      </mt-cell>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [],
      selected: '1'
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
  methods: {
    getList () {
      if (this.selected === '1') {
        window.server.collection_display_point((d) => {
          this.data = d.out_list.map(it => ({
            title: it.product_name,
            img: window.apiconn.server_info.download_path + Object.keys(it.cover)[0],
            _id: it._id
          }))
        })
      } else {
        window.server.collection_display_tailored((d) => {
          this.data = d.out_list.map(it => ({
            title: it.product_name,
            img: window.apiconn.server_info.download_path + Object.keys(it.cover)[0],
            _id: it._id
          }))
        })
      }
    },
    del (it) {
      if (this.selected === '1') {
        window.server.collection_delete_point(it._id, (d) => {
          this.data.splice(this.data.indexOf(it), 1)
        })
      } else {
        window.server.collection_delete_tailored(it._id, (d) => {
          this.data.splice(this.data.indexOf(it), 1)
        })
      }
    }
  }
}
</script>
<style lang="less">
.wdsc {
  padding-bottom: 62px;
  .mint-cell {
    border-bottom: 1px solid #ccc;
  }
  .flex-botttom{
    position: fixed;
    bottom: 0;
    padding: 10px;
    width:100%;
    box-sizing: border-box;
  }
}
</style>
