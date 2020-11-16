<template>
    <div>
      <span class="discounts">店铺满400减50</span>
      <span class="discounts">店铺满200减25</span>
      <span class="discounts el-icon-arrow-right"></span>
    </div>
</template>

<script>
    export default {
        name: "discounts"
    }
</script>

<style scoped>
  .discounts {
    display: inline-block;
    width: 100px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid #ca141d;
    color: #ca141d;
    font-size: 12px;
    cursor: pointer;
  }
  .el-icon-arrow-right {
    width: 20px;
  }
</style>
