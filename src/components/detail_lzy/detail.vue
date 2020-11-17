<template>
  <div id="box">
    <el-row>
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple">
          <productNav></productNav>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="2">
        <div class="grid-content bg-purple">
          <detailImg></detailImg>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <detailContent></detailContent>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import productNav from "./nav";
  import detailImg from "./detailImg";
  import detailContent from "./detailContent";
    export default {
      name: "detail",
      components: {
        productNav,
        detailImg,
        detailContent
      },
      created() {
        console.log(this.$route.query.id)
      }
    }
</script>

<style scoped>
#box {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",
  "Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
