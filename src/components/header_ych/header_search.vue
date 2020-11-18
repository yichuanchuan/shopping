<template>
    <div class="header_search">
      <img src="../../assets/images/logo2.png" alt="" class="search_logo">
      <ul>
        <router-link to="/" tag="li">服装专区</router-link>
        <router-link to="/" tag="li">数码专区</router-link>
        <router-link to="/" tag="li">小吃系列</router-link>
        <router-link to="/" tag="li">智能家居</router-link>
        <router-link to="/" tag="li">电子产品</router-link>
      </ul>
      <div class="search_input">
        <input type="search" placeholder="请输入您想要的商品">
        <button class="search_button"><i class="el-icon-search"></i></button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "header_search"
    }
</script>

<style scoped lang="less">
  .header_search {
    width: 1200px;
    height: 40px;
    line-height: 40px;
    margin: 18px auto;
    clear: both;
    &>ul,
    &>.search_logo {
      float: left;
    }
    &>.search_logo {
      width: 205px;
      height: 36px;
    }
    &>ul>li {
      list-style-type: none;
      float: left;
      margin: 0 18px;
      font-size: 15px;
      color: #323232;
      cursor: pointer;


    }
    &>.search_input{
      float: right;
      position: relative;
      &>input {
        width: 205px;
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        padding: 0 15px;
        background-color: rgb(240,240,240);
        border: none;
        font-size: 12px;
        &:focus {
          outline: none;
        }
      }
      &>.search_button {
        position: absolute;
        top: 12px;
        right: 10px;
        border: none;
        &>i {
          font-size: 18px;
          color: #777;
        }
      }
    }

  }
</style>
