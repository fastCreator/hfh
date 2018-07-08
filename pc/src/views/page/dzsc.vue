<template>
  <div class="jfsc">
    <div class="my-cell">
      <span>商品名称</span>
      <el-input v-model="name"/>
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="addShop">添加</el-button>
    </div>
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
    <page-dzsc v-bind="pageDzsc" v-if="pageDzsc.value" v-model="pageDzsc.value"></page-dzsc>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      tableData: [],
      pageDzsc: {
        status: 'add',
        value: false
      }
    }
  },
  created () {
    window.server.tailored_good(this.name, (data) => {
      console.log(data)
    })
  },
  methods: {
    addShop () {
      this.pageDzsc.value = true
      this.pageDzsc.status = 'add'
    },
    handlePictureCardPreview () {},
    handleRemove () {},
    sj () {},
    add () {
      this.$prompt('分类名称', '添加分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      })
    },
    del () {
      this.$prompt('分类名称', '删除分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      })
    }
  }
}
</script>
<style lang="less">
.jfsc {
  .el-dialog__footer{
    text-align: left;
    margin-left: 100px;
  }
}
</style>
