<template>
  <div class="jfsc">
    <div class="my-cell">
      <span>商品名称</span>
      <el-input v-model="name"/>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="addShop">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="_id" label="编号"></el-table-column>
      <el-table-column prop="product_name" label="商品名称"></el-table-column>
      <el-table-column prop="product_price" label="价格"></el-table-column>
      <el-table-column prop="bonus_percentage" label="分润比例"></el-table-column>
      <el-table-column prop="bonus_point" label="分红积分"></el-table-column>
      <el-table-column prop="freight" label="运费设置"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="sj(scope.row)" type="text" size="small">{{scope.row.sale_state === '上架'?'下架':'上架'}}</el-button>
          <el-button type="text" size="small" @click="edit(scope)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page-dzsc v-bind="pageDzsc" v-if="pageDzsc.value" :value="pageDzsc.value" @input="inputfalse" ></page-dzsc>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      tableData: [],
      pageDzsc: {
        data: null,
        status: 'add',
        value: false
      }
    }
  },
  created () {
    this.search()
  },
  methods: {
    inputfalse () {
      this.search()
      this.pageDzsc.value = false
    },
    search () {
      window.server.search_tailored(this.name, (data) => {
        this.tableData = data.list
      })
    },
    edit (obj) {
      this.pageDzsc.value = true
      this.pageDzsc.status = 'edit'
      this.pageDzsc.data = obj.row
    },
    addShop () {
      this.pageDzsc.value = true
      this.pageDzsc.status = 'add'
      this.pageDzsc.data = null
    },
    handlePictureCardPreview () { },
    handleRemove () { },
    sj (row) {
      window.server.onoffsale_tailored(row.sale_state === '上架' ? '下架' : '上架', row._id, () => {
        this.search()
      })
      console.log(row)
      //
    },
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
  .el-dialog__footer {
    text-align: left;
    margin-left: 100px;
  }
}
</style>
