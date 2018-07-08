<template>
  <el-dialog :title="title" :visible="true" fullscreen>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.spmc"></el-input>
        </el-form-item>
        <el-form-item label="商品编号">
          <el-input v-model="form.spbh"></el-input>
        </el-form-item>
        <el-form-item label="积分兑换">
          <el-input v-model="form.jfdh"></el-input>
        </el-form-item>
        <el-form-item label="商品限购">
          <el-input v-model="form.spxg"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="form.spfl" placeholder="请选择">
            <el-option v-for="item in options.spfl" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" style="margin-left:10px;" @click="add">添加</el-button>
          <el-button type="primary" @click="del">删除</el-button>
        </el-form-item>
        <el-form-item label="通证积分">
          <el-input v-model="form.tzjf"></el-input>
        </el-form-item>
        <el-form-item label="运费设置">
          <el-select v-model="form.spfl" placeholder="请选择">
            <el-option v-for="item in options.yfsz" :key="item.value" :label="item.label" :value="item.value">
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
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'page-dzsc',
  props: {
    status: {}
  },
  data () {
    return {
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
      },
      title: this.status === 'add' ? '添加' : '编辑'
    }
  },
  created () {
  },
  methods: {
    ok () {

    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="less">
.navTop{
  ul{
    list-style-type: none;
  }
}
</style>
