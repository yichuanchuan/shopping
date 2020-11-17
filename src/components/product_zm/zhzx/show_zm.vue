<template>
    <div class="show-box clear">
<!--      左边全部-->
      <div class="show-left_zm">

<!--        左边头像帐号-->
          <div class="show-1_zm">
          <img src="https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0420086000109338875.20190331113616.37731699676914087335772194728512.1000.A3A1482FB2A1568088CF2C051B4EDD37286A35EA9493C47EEECDCFB050C00E15.jpg" alt="头像">
          <p>{{name}}</p>
          <p>华为帐号：{{phone}}</p>
        </div>

<!--          左下列表-->
          <div class="show-2_zm">
          <ul>
<!--            <li>个人信息</li>-->
            <router-link to="/show_zm/inner1_zm"  tag="li">个人信息</router-link>
            <router-link to="/show_zm/inner2_zm"  tag="li">帐号安全</router-link>
            <router-link to="/show_zm/inner3_zm"  tag="li">实名认证</router-link>
            <router-link to="/show_zm/inner4_zm"  tag="li">隐私中心</router-link>

          </ul>
        </div>
      </div>

<!--      右边显示框-->
      <div class="show-right_zm">
        <router-view></router-view>
        1231232
        width: 720px;
        height: 620px;
        margin-left: 48px;

      </div>
    </div>
</template>

<script>
  // import grzx_zm from "../grzx_zm";
    export default {
        name: "show_zm",
      data(){
          return{
            name:"小白",
            phone:"88888888888"
          }
      }
      // components:{
      //   grzx_zm:grzx_zm
      //
      // }

    }
</script>

<style scoped>
  .clear::before,
  .clear::after {
    content: '';
    display: table;
  }
  .clear::after {
    clear: both;
  }
  .show-box{
    width: 960px;
    padding-top: 40px;
    /*background-color: #5e5e5e;*/
    margin: 0 auto;
  }
  .show-left_zm{
    float: left;
    width: 192px;
    /*background-color: #00b3ee;*/
  }
  .show-1_zm{
    width: 100%;
    height: 104px;
    /*background-color: bisque;*/
    margin-bottom: 25.6px;
  }
  .show-1_zm img{
    width: 57.5px;
    height: 57.5px;
    border-radius: 50%;
  }
  .show-1_zm p{
    width: 100%;
    height: 16px;
    margin-top: 6.4px;
    font-size: 12.8px;
    color: #000;

  }

  .show-2_zm ul li{
    list-style: none;
  }
  .show-2_zm li{
    padding: 12.8px 6.4px 12.8px 25.6px;
    border-radius: 6.4px;
    cursor: pointer;
    font-size: 12.8px;
    color: #333;
    height: 17.5px;
    line-height: 17.5px;
    text-align:left;
  }

  .show-right_zm{
    float: left;
    width: 720px;
    height: 620px;
    margin-left: 48px;
    /*background-color: yellow;*/
  }
</style>
