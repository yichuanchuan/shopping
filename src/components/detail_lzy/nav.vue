<template>
    <div>
<!--          <el-menu :default-active="activeIndex" class="el-menu-demo"-->
<!--                   mode="horizontal" active-text-color="#ca151d">-->
<!--            <el-menu-item index="1">首页</el-menu-item>-->
<!--            <el-menu-item index="2">商品详情</el-menu-item>-->
<!--          </el-menu>-->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item to='/'>首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">商品详情</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">零食</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
      name: "productNav",
      data() {
        return {
          // activeIndex: '2'
        };
      },
    }
</script>
<style>
  .el-breadcrumb__inner a:hover,
  .el-breadcrumb__inner.is-link:hover {
    color: #ca151d;
    cursor: pointer;
  }
</style>
<style scoped>

</style>
