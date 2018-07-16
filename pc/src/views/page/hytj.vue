<template>
  <div class="jfsc">
    <div class="my-cell">
      <span>手机号</span>
      <el-input v-model="name"/>
      <el-button type="primary" @click="ordersearch">查询</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="_id" label="会员编号"></el-table-column>
      <el-table-column prop="express_name" label="会员手机号"></el-table-column>
      <el-table-column prop="tracking_number" label="昵称"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detilsvisiable: false,
      deitils: {},
      name: '',
      tableData: []
    }
  },
  created () {
    this.ordersearch()
  },
  methods: {
    ordersearch () {
      window.server.ordersearch(this.name, (data) => {
        this.tableData = data.list
      })
    }
  }
}
</script>
<style lang="less">
.jfsc {
  .el-dialog__footer {
    text-align: left;
    margin-left: 100px;
  }
  table{
    border-collapse: collapse;
  }
}
</style>
