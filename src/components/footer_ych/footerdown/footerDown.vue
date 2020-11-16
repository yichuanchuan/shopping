<template>
  <div class="footer_down">
    <img src="../../../assets/images/logo.png" alt="">
    <div class="footer_content clear">
      <ul class="clear">
        <li><a href="#">同城集团</a></li>
        <li><a href="#">CBG官网</a></li>
        <li><a href="#">粉丝俱乐部</a></li>
        <li><a href="#">应用市场</a></li>
        <li><a href="#">终端云空间</a></li>
        <li><a href="#">开发者联盟</a></li>
        <li><a href="#">同城优品手机端</a></li>
        <li><a href="#">网站地图</a></li>
        <li><a href="#">其他导航</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
      <p>
        <a href="#">隐私声明</a>
        <a href="#">服务协议</a>
        <a href="#">COOKIES</a>
        <span>Copyright © 2012-2020 同城优品有限公司 版权所有</span>
        <a href="#">粤ICP备19015064号</a>
        <a href="#">粤公网安备 44190002003939号</a>
      </p>
      <p><span>增值电信业务经营许可证：粤B2-20190762|备案主体编号：44201919072182</span></p>
    </div>
    <img src="../../../assets/images/yyzz.png" alt="">
  </div>
</template>

<script>
    export default {
        name: "footerDown"
    }
</script>

<style scoped lang="less">
  .clear:before,
  .clear:after {
    display: table;
    content: "";
  }
  .clear:after {
    clear: both;
  }
  .footer_down {
    width: 1200px;
    margin: 0 auto;
    &>img:first-child {
      width: 82px;
      height: 20px;
      display: inline;
    }
    &>img:last-child {
      width: 70px;
      height: 24px;
    }
    &>img,
    &>.footer_content {
      float: left;
      &>ul {
        clear: both;
        &,
        &>li {
          list-style-type: none;
        }
        &>li {
          float: left;
          height: 14px;
          line-height: 14px;
          &:nth-child(n+2) {
            border-left: 1px solid rgb(230,230,230);
          }
          &>a {
            text-decoration: none;
            cursor: pointer;
            margin: 0 8px;
            color: #777;
            font-size: 12px;
            &:hover {
              color: red;
            }
          }
        }
      }
      &>p {
        &>a {
          font-size: 12px;
          color: #999898;
          text-decoration: none;
          padding: 0 3px;
          &:hover {
            color: red;
          }
          &:first-child {
            margin-left: 8px;
            padding: 0;
          }
          &:last-child {
            border-left: 1px solid rgb(230,230,230);
          }
        }
        &>span {
          font-size: 12px;
          color: #999898;
        }
        &:last-child>span {
          margin-left: 8px;
          font-size: 12px;
          color: #999898;
        }
      }
    }
    &>img:last-child {
      float: right;
    }
  }
</style>
