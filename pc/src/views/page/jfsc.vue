<template>
  <div class="jfsc">
    <div class="my-cell">
      <span>手机号</span>
      <el-input/>
      <el-button type="primary">查询</el-button>
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
    <el-dialog title="编辑" :visible.sync="edit.dialogVisible" fullscreen>
      <el-form ref="form" :model="edit.form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="edit.form.spmc"></el-input>
        </el-form-item>
        <el-form-item label="商品编号">
          <el-input v-model="edit.form.spbh"></el-input>
        </el-form-item>
        <el-form-item label="积分兑换">
          <el-input v-model="edit.form.jfdh"></el-input>
        </el-form-item>
        <el-form-item label="商品限购">
          <el-input v-model="edit.form.spxg"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="edit.form.spfl" placeholder="请选择">
            <el-option v-for="item in edit.options.spfl" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" style="margin-left:10px;" @click="add">添加</el-button>
          <el-button type="primary" @click="del">删除</el-button>
        </el-form-item>
        <el-form-item label="通证积分">
          <el-input v-model="edit.form.tzjf"></el-input>
        </el-form-item>
        <el-form-item label="运费设置">
          <el-select v-model="edit.form.spfl" placeholder="请选择">
            <el-option v-for="item in edit.options.yfsz" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit.dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
