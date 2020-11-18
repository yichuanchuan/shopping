<template>
  <div class="kong">
    <div class="center">
      <p>您的购物车什么都没有</p>
      <router-link to="/index">
        <el-button type="danger">在逛逛</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shoppingKong"
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .kong{
    background: #f5f5f5;
    width: 100%;
    height: 300px;
    margin: 50px 0;
    position: relative;
  }
  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .center p {
    font-size: 32px;
    font-weight: bold;
    padding: 10px;
  }
</style>
