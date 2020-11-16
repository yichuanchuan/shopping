<template>
    <div class="bottomNav">
      <a href="#" class="bottom_a">
        <i class="el-icon-shopping-cart-2 bottom_text"></i>
        <div class="bottom_title"><span>购物车</span></div>
      </a>
      <a href="#" class="bottom_a">
        <i class="el-icon-service bottom_text"></i>
        <div class="bottom_title"><span>在线客服</span></div>
      </a>
      <a href="#" class="bottom_a">
        <i class="el-icon-top bottom_text"></i>
        <div class="bottom_title"><span>返回顶部</span></div>
      </a>
    </div>
</template>

<script>
    export default {
        name: "gdRouter"
    }
</script>

<style scoped lang="less">
  .bottomNav {
    width: 40px;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    &>a {
      display: block;
      width: 38px;
      height: 38px;
      line-height: 38px;
      margin: 3px auto;
      text-align: center;
      color: #b1b1b1;
      position: relative;
      &:nth-child(2) {
        font-size: 20px;
        margin-left: 2px;
      }
      &:last-child>.bottom_text {
        font-size: 36px;
      }
      &:hover {
        color: #777777;
      }
      &>.bottom_text {
        font-size: 30px;
      }
    }
  }
  .bottom_title {
    width: 60px;
    height: 24px;
    line-height: 24px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: -64px;
    display: none;
    &>span {
      font-size: 12px;
    }
  }
  .bottom_a:hover .bottom_title {
    display: block;
  }
</style>
