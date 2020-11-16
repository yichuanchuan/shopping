<template>
    <div class="detailText">
      <p class="details-text">
        {{ shop_list.cinformation_dsc }}
      </p>
      <div class="share-box">
        <div class="el-icon-share"></div>
        <div class="share">分享</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailText",
      data() {
          return{
            shop_list:[]
          }
      },
      created() {
        this.$axios.post("http://192.168.4.189:8765/cinformation/findById?id=1")
          .then(response=>{
            this.shop_list = response.data.data[0];
          })
      }
    }
</script>

<style scoped>
  .detailText {
    padding: 10px;
    height: 120px;
    /*background-color: #f6f4f4;*/
    position: relative;
  }
  .el-icon-share {
    font-size: 21px;
    color: #ca151d;
  }
  .share {
    font-size: 11px;
    color: #848282;
  }
  .share-box {
    position: absolute;
    right: 10px;
    bottom: 20px;
    cursor: pointer;
  }
  .share-box:hover .share {
    color: #ca151d;
  }
  .details-text {
    font-size: 13px;
    color: #848282;
  }
</style>
