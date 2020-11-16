<template>
  <div>
    <nav>
      <div class="myNav">
        <ul>
          <router-link to="/" tag="li">首页</router-link>
          <router-link to="/index" tag="li">商品</router-link>
          <router-link to="" tag="li">粉丝俱乐部</router-link>
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
          <li @click="changelogin">请登录</li>
          <li @click="changeRegister">注册</li>
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
          <router-link to="/" tag="li"><i class="el-icon-shopping-cart-2"></i> 购物车 <span>({{num}})</span>
            <div class="mycart">
              <header_cart></header_cart>
            </div>
          </router-link>
        </ul>
      </div>
    </nav>
    <div id="login_box" ref="login">
      <div class="loginBox">
        <login class="loginForm"></login>
      </div>
    </div>
    <div id="register_box" ref="register">
      <div class="registerBox">
        <register class="registerForm"></register>
      </div>
    </div>
  </div>
</template>

<script>
    import login from "./login/login";
    import header_cart from "./header_cart";
    import register from "./register/register";
    export default {
        name: "pageHeader",
        data() {
          return {
            num: 0
          }
        },
        methods: {
          changelogin() {
            // console.log(122312)
            this.$refs.login.style.display = "block"
          },
          changeRegister() {
            this.$refs.register.style.display = "block"
          }
        },
        components: {
          header_cart,login,register
        }
    }
</script>

<style scoped lang="less">
  #login_box {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10001;
    background-color: rgba(92, 90, 90, 0.36);
    display: none;
    &>.loginBox {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: rgba(83, 83, 83, 0.36);
      text-align: center;
    }
  }
  #register_box {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10001;
    background-color: rgba(92, 90, 90, 0.36);
    display: none;
    &>.registerBox {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      margin-top: -200px;
      background-color: rgba(83, 83, 83, 0.36);
      text-align: center;
    }
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
      &>ul>li {
        list-style-type: none;
      }
      &>ul>li {
        float: left;
        color: rgb(175,175,175);
        font-size: 12px;
        padding: 0 20px;
        cursor: pointer;
      }
      &>ul>li:hover {
        color: white;
      }
      /*&>ul:nth-child(2)>li:first-child {*/
      /*  margin-left: 150px;*/
      /*}*/
      &>ul:nth-child(2) {
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
      &>ul:nth-child(2)>li:nth-child(4) {
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
</style>
