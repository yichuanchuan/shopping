<template>
  <div>
    <h1>个人信息</h1>
    <el-form  label-width="80px"  :model="form">
      <el-form-item label="修改头像" prop="namesrc">
        <img width="32" height="32"  v-model="form.namesrc" src="https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0420086000109338875.20190331113616.37731699676914087335772194728512.1000.A3A1482FB2A1568088CF2C051B4EDD37286A35EA9493C47EEECDCFB050C00E15.jpg">
        <el-i style="margin-left: 570px" @click="open">＞</el-i>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" placeholder="请输入手机号" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.region" placeholder="请选择性别" style="width: 640px">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
          <el-option label="保密" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地区">
          <el-select v-model="form.region1" placeholder="请选择省份" style="width: 310px" >
            <el-option label="四川" value="1"></el-option>
            <el-option label="重庆" value="2"></el-option>
            <el-option label="广东" value="3"></el-option>
          </el-select>

          <el-select v-model="form.region2" placeholder="请选择城市" style="width: 310px">
            <el-option label="成都" value="1"></el-option>
            <el-option label="江津" value="2"></el-option>
            <el-option label="广州" value="3"></el-option>
          </el-select>

      </el-form-item>
      <el-form-item label="真实姓名" prop="name2">
        <el-input type="text" placeholder="请输入真实姓名" v-model="form.username2"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker  type="year" placeholder="选择年" v-model="form.year" style="width: 205px"></el-date-picker>
        <el-date-picker  type="month" placeholder="选择月" v-model="form.month" style="width: 205px"></el-date-picker>
        <el-date-picker type="date" placeholder="日期" v-model="form.date" style="width: 205px"> </el-date-picker>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input type="password" placeholder="请确认密码" v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')">更新并保存</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
    export default {
        name: "inner1_zm",
      data(){
          return{
            form:{
              phone:"",
              username:"",
              password:"",
              password2:""
            }
        }
      },
      methods: {
        open(){


        }
        // onSubmit(formName) {
        //   console.log('submit!');
        //   let that=this;
        //   console.log(this);
        // }
      }
    }
</script>

<style scoped>

</style>
