<template>
  <div class="jfsc">
    <div class="my-cell">
      <span>商品名称</span>
      <el-input/>
      <el-button type="primary">查询</el-button>
    </div>
    <el-tabs v-model="activeName2" type="card" @tab-click="tabClick">
      <el-tab-pane label="所有" name="first"></el-tab-pane>
      <el-tab-pane label="待处理" name="second"></el-tab-pane>
      <el-tab-pane label="已完成" name="third"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="bh" label="编号"></el-table-column>
      <el-table-column prop="spmc" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="frbl" label="分润比例"></el-table-column>
      <el-table-column prop="fhjf" label="分红积分"></el-table-column>
      <el-table-column prop="yfsz" label="运费设置"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="sj(scope.row)" type="text" size="small">上架</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      edit: {
        dialogVisible: true,
        options: {
          yfsz: [],
          spfl: []
        },
        form: {
          spmc: '',
          spbh: '',
          jfdh: 0,
          spxg: 0,
          spfl: '',
          tzjf: '',
          yfsz: '',
          spxq: ''
        }
      }
    }
  },
  methods: {
    tabClick () {}
  }
}
</script>
<style lang="less">
.jfsc {
  .el-dialog__footer {
    text-align: left;
    margin-left: 100px;
  }
}
</style>
