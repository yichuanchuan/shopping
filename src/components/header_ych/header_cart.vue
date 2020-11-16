<template>
    <div class="cartbox">
      <div class="circular">
        <i class="el-icon-shopping-cart-2"></i>
      </div>
      <p>您的购物车是空的,赶紧选购吧~</p>
    </div>
</template>

<script>
    export default {
        name: "header_cart"
    }
</script>

<style scoped>
  .cartbox {
    margin-top: 45px;
  }
  .circular {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 50px;
    margin: 0 auto;
    color: gray;
    text-align: center;
    border-radius: 50%;
    background-color: rgb(243,243,243);
  }
  p {
    color: gray;
    text-align: center;
  }
</style>
