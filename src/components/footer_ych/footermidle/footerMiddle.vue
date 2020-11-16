<template>
  <div class="footer_middle clear">
    <div class="service-1 clear">
      <div class="six">
        <p>购物相关</p>
        <ul>
          <li><a href="#">购物指南</a></li>
          <li><a href="#">支付方式</a></li>
          <li><a href="#">配送方式</a></li>
          <li><a href="#">常见问题</a></li>
        </ul>
      </div>
      <div class="six">
        <p>保修与退换货</p>
        <ul>
          <li><a href="#">保修政策</a></li>
          <li><a href="#">退换货政策</a></li>
          <li><a href="#">退换货流程</a></li>
          <li><a href="#">保修状态查询</a></li>
          <li><a href="#">配件防伪查询</a></li>
        </ul>
      </div>
      <div class="six">
        <p>维修与技术支持</p>
        <ul>
          <li><a href="#">服务店</a></li>
          <li><a href="#">预约维修</a></li>
          <li><a href="#">手机寄修</a></li>
          <li><a href="#">备件价格查询</a></li>
          <li><a href="#">上门服务</a></li>
        </ul>
      </div>
      <div class="six">
        <p>特色服务</p>
        <ul>
          <li><a href="#">防伪查询</a></li>
          <li><a href="#">补购保障</a></li>
          <li><a href="#">以旧换新</a></li>
          <li><a href="#">礼品包装</a></li>
        </ul>
      </div>
      <div class="six">
        <p>关于我们</p>
        <ul>
          <li><a href="#">公司介绍</a></li>
          <li><a href="#">同城优品简介</a></li>
          <li><a href="#">零售店</a></li>
          <li><a href="#">商家中心</a></li>
          <li><a href="#">意见反馈</a></li>
        </ul>
      </div>
      <div class="six">
        <p>友情链接</p>
        <ul>
          <li><a href="#">同城优品集团</a></li>
          <li><a href="#">粉丝俱乐部</a></li>
          <li><a href="#">云服务</a></li>
          <li><a href="#">同城优品官网</a></li>
          <li><a href="#">CBG官网</a></li>
        </ul>
      </div>
    </div>

    <div class="service-2">
      <h2>5201314</h2>
      <p>7x24小时客服热线(仅收市话费)</p>
      <div class="kfBtn">
        <i class="el-icon-s-custom"></i>
        在线客服
      </div>
      <img src="../../../assets/images/vx.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "footerMiddle",
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
  .footer_middle {
    width: 1200px;
    margin: 30px auto;
    padding-bottom: 30px;
    border-bottom: 1px solid rgb(230,230,230);
    &>.service-1 {
      float: left;
      width: 900px;
      &>.six {
          width: 150px;
          float: left;
        &>p {
          font-size: 14px;
          margin-bottom: 6px;
        }
        &>ul>li {
          margin-bottom: 5px;
          &>a {
            text-decoration: none;
            color: #777;
            font-size: 12px;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
    &>.service-2 {
      float: left;
      width: 290px;
      text-align: center;
      border-left: 1px solid rgb(230,230,230);
      color: rgb(51,51,51);
      &>p {
        font-size: 14px;
        margin: 5px 0;
      }
      &>div {
        width: 170px;
        height: 34px;
        line-height: 34px;
        background-color: rgb(51,51,51);
        margin: 12px auto;
        color: white;
        cursor: pointer;
        border-radius: 30px;
        &:hover {
          background-color: rgb(119,119,119);
        }
      }
      &>img {
        width: 200px;
        height: 35px;
        background-size: 100%;
        cursor: pointer;
      }
    }
  }
  ul,li {
    list-style-type: none;
  }
</style>
