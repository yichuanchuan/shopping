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
          <detailImg :shopList="shopList"></detailImg>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <detailContent :shopList="shopList"></detailContent>
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
      data() {
        return {
          shopList:{}
        }
      },
      components: {
        productNav,
        detailImg,
        detailContent
      },

      created() {
        this.$axios.post("http://139.196.200.142:80/cityshop-api-shop/cinformation/findById?id="+this.$route.query.cinformation_id)
        .then(response=> {
          this.shopList = response.data.data[0];
          console.log(response.data.data[0])
        })
      }
    }
</script>

<style scoped>
#box {
  padding-bottom: 30px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",
  "Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
