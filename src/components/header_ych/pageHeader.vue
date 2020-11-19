<template>
  <div>
    <nav>
      <div class="myNav">
        <ul>
          <router-link to="/" tag="li">首页</router-link>
          <router-link to="/index" tag="li">商品</router-link>
          <router-link to="/" tag="li">粉丝俱乐部</router-link>
          <router-link to="/" tag="li">企业购</router-link>
          <router-link to="/" tag="li">Select Region</router-link>
          <router-link to="/" tag="li">公告</router-link>
          <router-link to="/" tag="li">
            更多精彩
            <i class="el-icon-arrow-down"></i>
            <div class="moreIfo">
              <ul>
                <router-link to="/" tag="li">合作伙伴</router-link>
                <router-link to="/" tag="li">应用市场</router-link>
                <router-link to="/" tag="li">云空间</router-link>
              </ul>
            </div>
          </router-link>
        </ul>
        <ul>
          <router-link to="/" tag="li">我的订单</router-link>
          <router-link to="/" tag="li">客户服务
            <i class="el-icon-arrow-down"></i>
            <div class="moreIfo2">
              <ul>
                <router-link to="/" tag="li">服务中心</router-link>
                <router-link to="/" tag="li">联系客户</router-link>
              </ul>
            </div>
          </router-link>
          <router-link to="/shopping" tag="li" >
            <div @click="addShoppingCart">
              <i class="el-icon-shopping-cart-2"></i> 购物车({{getNum}})
            </div>
            <div class="mycart">
              <header_cart></header_cart>
            </div>
          </router-link>
        </ul>
        <div>
          <ul v-if="!showName">
            <li @click="changelogin()">请登录</li>
            <li @click="changeRegister()">注册</li>
          </ul>
          <ul v-else>
            <router-link :to="{name:'grzx_zm',query:{name: userInfo.name}}" style="color: white; text-decoration: none">{{userInfo.name}}</router-link>
          </ul>
        </div>
      </div>
    </nav>
    <!--登录/注册 -->
    <div>
      <div class="login_box" v-show="loginBox">
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
          <h3 class="login-title">欢迎登录</h3>
          <el-form-item label="账号" prop="username">
            <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="closeLogin()">关闭</el-button>
            <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="register_box" v-show="registerBox">
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
            <el-button type="primary" v-on:click="closeRegister()">关闭</el-button>
            <el-button type="primary" v-on:click="onRegister('loginForm')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    import header_cart from "./header_cart";
    import register from "../user_ych/register/register";
    import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "pageHeader",
        data() {
          return {
            num: 0,
            showName: false,
            // loginBox: loginBox,
            registerBox: false,
            userInfo: {},
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
          ...mapActions(['consumerId','unshiftShoppingCart']),
          addShoppingCart(){
            console.log(this.getConsumerId[0]);

            this.$axios.post('http://139.196.200.142:8769/cart/cartList?consumerId='+this.getConsumerId[0])
              .then(res => {
                console.log(res.data);
                this.unshiftShoppingCart(res.data);
              })
          }
          ,
          changelogin() {
            this.$store.dispatch('confirm')
          },
          closeLogin() {
            this.$store.dispatch('loginBox');
          },
          changeRegister() {
            this.registerBox = true;
          },
          closeRegister() {
            this.registerBox = false;
          },
          onSubmit(formName) {
            this.$axios.post('http://139.196.200.142:8769/consumer/login?phone=' + this.form.username + '&password=' + this.form.password,)
              .then(res => {
                if(res.data.code == 200) {
                  console.log("登录成功")
                  // ...mapActions(['loginState'])
                  this.$store.dispatch('loginState')
                  this.$store.dispatch('loginBox')
                  this.showName = true;
                  this.userInfo.name = res.data.consumerName;
                  this.consumerId(res.data.consumerId);
                }else {
                  alert("请输入正确账号或密码")
                }
              })
          },
          fasong() {
            this.$axios.post('http://139.196.200.142:8769/sms/send?phone='+this.form.phone,)
              .then(res => {

              })
          },
          onRegister(formName) {
            this.$axios.post('http://139.196.200.142:8769/consumer/reg?name='+this.form.username+'&phone='+this.form.phone+'&password='+this.form.password+'&surePassword='+this.form.password2+'&captcha='+this.form.yzNumber)
              .then(res => {
                if(res.data.code = 200) {
                  console.log("注册成功")
                  this.registerBox = false;
                  alert("注册成功")
                }
              })

          }
        },
        components: {
          header_cart,register
        },

      computed: {
        ...mapGetters(["getNum","getConsumerId","loginBox"])
      },
      created() {

      }
    }
</script>

<style scoped lang="less">
  .login_box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100001;
    width: 100%;
    height: 100%;
    background-color: rgba(119, 119, 119, 0.38);
  }
  .register_box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100001;
    width: 100%;
    height: 100%;
    background-color: rgba(119, 119, 119, 0.38);
  }
  nav {
    width: 100%;
    background-color: rgb(46,40,40);
    &>.myNav {
      width: 1200px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
      &>ul,
      &>ul>li,
      &>div>ul>li {
        list-style-type: none;
      }
      &>ul>li,
      &>div>ul>li {
        float: left;
        color: rgb(175,175,175);
        font-size: 12px;
        padding: 0 20px;
        cursor: pointer;
      }
      &>ul>li:hover,
      &>div>ul>li:hover {
        color: white;
      }
      /*&>ul:nth-child(2)>li:first-child {*/
      /*  margin-left: 150px;*/
      /*}*/
      &>ul:nth-child(2),
      &>div {
        float: right;
      }
      &>ul:nth-child(2)>li:last-child {
        padding: 0 29px;
        background-color: rgb(66,66,66);
        position: relative;
        &>.mycart {
          width: 400px;
          height: 200px;
          background-color: white;
          border-radius: 0 0 8px 8px;
          position: absolute;
          top: 36px;
          right: 0;
          display: none;
          z-index: 100;
        }
        &:hover {
          &>.mycart {
            display: block;
          }
        }
      }
      &>ul:nth-child(2)>li:nth-child(4):hover,
      &>ul:nth-child(2)>li:last-child:hover {
        background-color: white;
        color: red;
      }
      &>ul:nth-child(2)>li:nth-child(2) {
        position: relative;
        &>.moreIfo2 {
          width: 100%;
          height: 80px;
          background-color: white;
          text-align: center;
          position: absolute;
          top: 36px;
          right: 0;
          z-index: 100;
          border-radius: 0 0 8px 8px;
          display: none;
          &>ul{
            list-style-type: none;
            color: gray;
          }
        }
        &:hover {
          i {
            transform: rotate(180deg);
          }
          &>.moreIfo2 {
            display: block;
            &>ul>li:hover {
              color: red;
            }
          }
        }

      }
      &>ul:first-child>li:nth-child(7) {
        position: relative;
        &>.moreIfo {
          width: 100%;
          height: 110px;
          text-align: center;
          background-color: white;
          position: absolute;
          top: 36px;
          right: 0;
          z-index: 100;
          border-radius: 0 0 8px 8px;
          display: none;
          &>ul{
            list-style-type: none;
            color: gray;
          }
        }
      }
      &>ul:first-child>li:nth-child(7):hover {
        background-color: white;
        color: red;
        &>i {
          transform: rotate(180deg);
        }
        &>.moreIfo {
          display: block;
          &>ul>li:hover {
            color: red;
          }
        }
      }
    }
  }
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 100px auto;
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
