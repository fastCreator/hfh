<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data () {
    return {
      ruleForm2: {
        username: '',
        pass: ''
      },
      rules2: {
        username: [
          { trigger: 'blur', required: true, message: '年龄不能为空' }
        ],
        pass: [
          { trigger: 'blur', required: true, message: '年龄不能为空' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    submitForm (formName) {
      console.log(this.$server)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$server.login('xwjc2018', 'aa', function (data) { })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
