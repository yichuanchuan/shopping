<template>
    <div id="app" class="clear">
      <!--广告区域-->
      <div id="myBanner">
        <a href="www.baidu.com">
          <img src="~@/assets/images/dbbanner.jpg" alt="" class="img111">
        </a>
        <div class="bannerClose" @click="closeBanner">X</div>
      </div>
      <!--顶部导航-->
      <pageHeader></pageHeader>
      <!--顶部搜索区域-->
      <header_search></header_search>
      <!--路由展示界面-->
      <router-view/>
      <!--页面固定图标区域-->
      <gdRouter class="bottomBanner"></gdRouter>
      <!--底部导航-->
      <pageFooter></pageFooter>
    </div>
</template>

<script>
import pageHeader from "./components/header_ych/pageHeader";
import pageFooter from "./components/footer_ych/pageFooter";
import gdRouter from "./components/gdRouter/gdRouter";
import header_search from "./components/header_ych/header_search";
export default {
  name: 'App',
  components: {
    pageHeader,pageFooter,header_search,gdRouter
  },
  methods: {
    closeBanner() {
      document.getElementById("myBanner").style.display = 'none';
    }
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.clear:before,
.clear:after {
  display: table;
  content: "";
}
.clear:after {
  clear: both;
}
#app {
  position: relative;
}
#myBanner {
  position: relative;
}
.img111 {
  width: 100%;
  height: 100%;
}
.bannerClose {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  background-color: rgb(204,204,204);
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  top: 5px;
  right: 220px;
  z-index: 200;
}
.bottomBanner {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
}
</style>
