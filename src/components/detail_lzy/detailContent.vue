<template>
  <div class="detailContent">
    <detailTitle></detailTitle>
    <detailPrice></detailPrice>
    <detailText></detailText>
    <detailBtn></detailBtn>
  </div>
</template>

<script>
  import detailTitle from "./detailTitle";
  import detailPrice from "./detailPrice";
  import detailText from "./detailText";
  import detailBtn from "./detailBtn";
    export default {
        name: "detailContent",
      components: {
        detailTitle,
        detailPrice,
        detailText,
        detailBtn
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
