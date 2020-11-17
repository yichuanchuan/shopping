<template>
  <div class="detailContent">
    <detailTitle :shopList="shopList"></detailTitle>
    <detailPrice :shopList="shopList"></detailPrice>
    <detailText :shopList="shopList"></detailText>
    <detailBtn :shopList="shopList"></detailBtn>
  </div>
</template>

<script>
  import detailTitle from "./detailTitle";
  import detailPrice from "./detailPrice";
  import detailText from "./detailText";
  import detailBtn from "./detailBtn";
    export default {
        name: "detailContent",
      data() {
          return {
            shopList:{}
          }
      },
      components: {
        detailTitle,
        detailPrice,
        detailText,
        detailBtn
      },
      created() {
          let that = this;
          this.$axios.post("http://192.168.4.189:8765/cinformation/findById?id=1")
        .then(response=> {
          that.shopList = response.data.data[0];
          console.log(response.data.data[0])
        })
      }
    }
</script>

<style scoped>
  .detailContent {
    width: 500px;
    height: 500px;
    margin-top: 10px;
    /*background-color: #5656ee;*/
  }
</style>
