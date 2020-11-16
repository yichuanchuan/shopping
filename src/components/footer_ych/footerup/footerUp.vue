<template>
  <div class="footerBox">
    <ul>
      <router-link to="/" tag="li">
          <img src="@/assets/images/bg1.png" alt="">
      </router-link>
      <router-link to="/" tag="li">
          <img src="@/assets/images/bg1.png" alt="" class="two">
      </router-link>
      <router-link to="/" tag="li">
          <img src="@/assets/images/bg1.png" alt="" class="three">
      </router-link>
      <router-link to="/" tag="li">
          <img src="@/assets/images/bg1.png" alt="" class="four">
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "footerUp",
    }
</script>

<style scoped lang="less">
  .footerBox {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    clear: both;
    &>ul {
      clear: both;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-flow:row wrap;
      border-bottom: 1px solid rgb(230,230,230);
      &>li {
        float: left;
        width: 250px;
        height: 80px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        &>img {
          position: absolute;
          top: 0;
        }
      }
    }
  }
  .two {
    left: -300px;
  }
  .three {
    left: -600px;
  }
  .four {
    left: -920px;
  }


</style>
