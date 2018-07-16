<template>
  <el-dialog :title="title" :visible="true" fullscreen>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="form.product_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.product_price"></el-input> 请输入整数
        </el-form-item>
        <el-form-item label="分润比例">
          <el-select v-model="form.bonus_percentage">
            <el-option :label="0.05" :value="0.05"></el-option>
            <el-option :label="0.10" :value="0.10"></el-option>
            <el-option :label="0.15" :value="0.15"></el-option>
            <el-option :label="0.20" :value="0.20"></el-option>
            <el-option :label="0.25" :value="0.25"></el-option>
            <el-option :label="0.30" :value="0.30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品限购">
          <el-input v-model="form.buying_limit"></el-input> 请输入整数
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="form.category_id" placeholder="请选择">
            <el-option v-for="item in options.spfl" :key="item._id" :label="item.title" :value="item._id">
            </el-option>
          </el-select>
          <el-button type="primary" style="margin-left:10px;" @click="add">添加</el-button>
          <el-button type="primary" @click="del">删除</el-button>
        </el-form-item>
        <el-form-item label="分红积分">
          <el-input v-model="form.bonus_point"></el-input>
        </el-form-item>
        <el-form-item label="运费设置">
          <el-input v-model="form.freight"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload :limit="1" :data="data1" :file-list="filescover" :action="action" :on-remove="removescover"  list-type="picture-card" :on-success="successcover" name="local_file">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-upload :action="action" :data="data1" :file-list="filesphotos" list-type="picture-card" :on-remove="removesphotos" :on-success="successphotos" name="local_file">
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
    status: {},
    data: {}
  },
  data () {
    return {
      data1: {
        proj: 'hfh2'
      },
      action: apiconn.server_info.upload_to + '?proj=hfh2',
      options: {
        spfl: []
      },
      filescover: [],
      filesphotos: [],
      form: {
        product_name: '',
        product_price: '',
        bonus_percentage: 0.05,
        buying_limit: 0,
        category_id: null,
        bonus_point: 0,
        freight: 0,
        cover: [],
        photos: []
      },
      title: this.status === 'add' ? '添加' : '编辑'
    }
  },
  created () {
    this.flashcategory()
    if (this.data) {
      this.form = this.data
      console.log(this.form)
      this.filescover = this.data.cover.map(it => ({url: apiconn.server_info.download_path + it}))
      // console.log(this.filescover)
      this.filesphotos = this.data.photos.map(it => ({url: apiconn.server_info.download_path + it}))
      console.log(this.filesphotos)
    }
  },
  methods: {
    flashcategory () {
      window.server.category_inquire((data) => {
        this.options.spfl = data
      })
    },
    successcover (response, file, fileList) {
      // apiconn.server_info.download_path +
      this.form.cover.push(response.fid)
    },
    successphotos (response, file, fileList) {
      this.form.photos.push(response.fid)
    },
    removescover (file, fileList) {
      let fid
      if (file.response) {
        fid = file.response.fid
      } else {
        fid = file.url.match(/fid=(f\d+)/)[1]
      }
      this.form.cover.splice(this.form.cover.indexOf(fid), 1)
    },
    removesphotos (file, fileList) {
      let fid
      if (file.response) {
        fid = file.response.fid
      } else {
        fid = file.url.match(/fid=(f\d+)/)[1]
      }
      this.form.photos.splice(this.form.photos.indexOf(fid), 1)
    },
    ok () {
      let obj = this.form
      if (this.status === 'add') {
        window.server.add_tailored(obj, (data) => {
          this.$emit('input', false)
        })
      } else {
        window.server.edit_tailored(obj, (data) => {
          this.$emit('input', false)
        })
      }
    },
    close () {
      this.$emit('input', false)
    },
    add () {
      this.$prompt('分类名称', '添加分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        window.server.category_add(value, () => {
          this.flashcategory()
        })
      })
    },
    del () {
      this.$prompt('分类名称', '删除分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        window.server.category_del(value, () => {
          this.flashcategory()
        })
      })
    }
  }
}
</script>
<style lang="less">
.navTop {
  ul {
    list-style-type: none;
  }
}
</style>
