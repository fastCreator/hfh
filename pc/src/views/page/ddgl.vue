<template>
  <div class="jfsc">
    <div class="my-cell">
      <span>商品名称</span>
      <el-input v-model="name"/>
      <el-button type="primary" @click="ordersearch">查询</el-button>
    </div>
    <el-radio-group @input="orderClassify" style="margin-bottom: 30px;">
          <el-radio-button label="所有">所有</el-radio-button>
          <el-radio-button label="待处理">待处理</el-radio-button>
          <el-radio-button label="已完成">已完成</el-radio-button>
    </el-radio-group>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="_id" label="编号"></el-table-column>
      <el-table-column prop="express_name" label="商品名称"></el-table-column>
      <el-table-column prop="tracking_number" label="金额积分"></el-table-column>
      <el-table-column prop="order_state" label="状态"></el-table-column>
      <el-table-column prop="person_id" label="快递单号"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="detils(scope.row._id)" type="text" size="small">详情</el-button>
          <el-button @click="chexiao(scope.row._id)" type="text" size="small" v-if="scope.row.order_state ==='派送中'||scope.row.order_state ==='已下单'">撤销</el-button>
          <el-button @click="wancheng(scope.row._id)" type="text" size="small" v-if="scope.row.order_state ==='已完成'">完成</el-button>
          <el-button @click="paisong(scope.row._id)" type="text" size="small" v-if="scope.row.order_state ==='已下单'">派送</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="详情" :visible.sync="detilsvisiable">
      <table  border="1" align="center" border-collapse="collapse">
        <tr>
          <td>.</td>
          <td>买家</td>
          <td>收件方</td>
        </tr>
        <tr>
          <td>昵称</td>
          <td>{{deitils.buyer}}</td>
          <td>{{deitils.express_name}}</td>
        </tr>
        <tr>
          <td>手机号</td>
          <td>{{deitils.buyer_phone}}</td>
          <td>{{deitils.express_phone}}</td>
        </tr>
        <tr>
          <td>地址</td>
          <td>.</td>
          <td>{{deitils.express_addr}}</td>
        </tr>
      </table>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detilsvisiable: false,
      deitils: {},
      name: '',
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
  created () {
    this.ordersearch()
  },
  methods: {
    chexiao (id) {
      window.server.p_order_cancel(id, () => {
        this.ordersearch()
      })
    },
    wancheng (id) {
      window.server.p_order_finish(id, () => {
        this.ordersearch()
      })
    },
    paisong (id) {
      this.$prompt('派送订单号', '派送', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        window.server.p_order_finish(id, value, () => {
          this.ordersearch()
        })
      })
    },
    orderClassify (v) {
      window.server.orderclassify(v, (data) => {
        this.tableData = data.list
      })
    },
    ordersearch () {
      window.server.ordersearch(this.name, (data) => {
        this.tableData = data.list
      })
    },
    tabClick () {

    },
    detils (id) {
      window.server.orderDetails(id, (d) => {
        console.log(d)
        this.deitils = d
        this.detilsvisiable = true
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
