<template>
    <div class="form-container">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName" class="input-width-200"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="form.passWord" type="password" class="input-width-200"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  export default {
    layout: 'empty',
    created() {
    },
    data() {
      return {
        form: {
          userName: '',
          passWord: ''
        },
        rules: {
          userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
      }
    },
    props: {},
    mounted() {
    },
    computed: {},
    methods: {
      login () {
        this.$refs.form.validate(valid => {
          if (valid) {
            if (this.form.userName === 'admin' && this.form.passWord === '123') {
              this.$router.push({name: 'after'})
            }
          }
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .form-container {
    margin: 10% auto;
    width: 20%;
  }
  .input-width-200 {
    width: 200px;
  }
</style>
