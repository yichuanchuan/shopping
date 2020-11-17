<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">注册界面</h3>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" placeholder="请输入手机号" v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input type="password" placeholder="请确认密码" v-model="form.password2"/>
      </el-form-item>
      <el-form-item label="验证码" prop="yzNumber">
        <el-input type="text" style='width: 120px' placeholder="请输入验证码" v-model="form.yzNumber"/>
        <el-button type="primary" v-on:click="fasong">发送验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style='width: 200px' v-on:click="onSubmit('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="温馨提示"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" ref="q">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        form: {
          username: '',
          password: '',
          dialogVisible: true
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      fasong() {
        console.log(this.form.phone)
        this.$axios.post('http://192.168.4.186:8769/sms/send?phone='+this.form.phone,)
          .then(res => {
            console.log(res.data)
          })
      },
      onSubmit(formName) {

        this.$axios.post('http://192.168.4.186:8769/consumer/reg?name=cww&phone=19130856380&password=212689&surePassword=212689&captcha=9826',)
          .then(res => {
            console.log(res.data)
          })

      },
      handleClose() {
        console.log(111)
      }

    }
  }
</script>

<style scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    background-color: white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>

