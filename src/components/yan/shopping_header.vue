<template>
  <div id="header" class="clear">
    <!--label隐性的写法-->
    <label class="checkbox">
      <input type="checkbox">全选
    </label>
    <ul class="header_ul clear">
      <li>商品</li>
      <li>单价</li>
      <li>数量</li>
      <li>小计</li>
      <li>操作</li>
    </ul>
  </div>
</template>

<script>
  export default {
      name: "shopping_header"
  }
</script>

<style scoped>


  .clear:before,.clear:after {
    display: block;
    content: "";
  }

  .clear:after {
    clear: both;
  }
  #header {
    background: #fff;
    line-height: 40px;
    padding-left: 40px;
    color: #a4a4a4;
  }
  .checkbox {
    width: 150px;
    float: left;
  }

  .header_ul {
    float: left;
  }
  .header_ul li {
    float: left;
    width: 100px;
    margin-left: 29px;
    text-align: center;
  }
  .header_ul li:first-child {
    width: 450px;
    text-align: left;
    margin-left: 0;
  }
</style>
