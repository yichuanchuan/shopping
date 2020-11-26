<template>
  <div>
<!--    上部-->
    <div class="box1 clear" >
      <div class="box1-left">
        <img @click="qudiv1"
             :src="$store.state.user_zm.tc01" alt="图片">
        <div class="box1-left-r">
          <router-link to="inner1_zm"  tag="p"  class="min-zm">欢迎您：{{username}}！</router-link>
          <p class="jindu-zm">
            <el-progress :percentage="20" color="blue"></el-progress>
          </p>
<!--          <button class="btn1_zm">会员权益</button>-->
          <button class="btn2_zm" @click="zhanghao()">重置帐号</button>
        </div>
      </div>
      <div class="box1-reight">
        <div class="box1-r-4">
          <router-link tag="p" to="inner3_zm" class="box1-r-p1" >{{this.$store.state.user_zm.count}}</router-link>
          <!--          <p class="box1-r-p2">优惠券</p>-->
          <router-link to="/inner2_zm" tag="button" class="box1-r-btn el-icon-discount" >优惠券</router-link>
        </div>
        <div class="box1-r-4">
          <p class="box1-r-p1" >5</p>
<!--          <p class="box1-r-p2">收藏夹</p>-->
          <router-link to="/shopping" tag="button" class="box1-r-btn el-icon-shopping-cart-full" >购物车</router-link>
        </div>
        <div class="box1-r-4">
          <p class="box1-r-p1" >10</p>
<!--          <p class="box1-r-p2">关注店铺</p>-->
          <router-link to="/myList" tag="button" class="box1-r-btn el-icon-s-claim" >收藏商品</router-link>
        </div>
        <div class="box1-r-4">
          <p class="box1-r-p1" >1</p>
<!--          <p class="box1-r-p2">足迹</p>-->
          <router-link to="myList" tag="button" class="box1-r-btn el-icon-star-off">收藏店铺</router-link>
        </div>
      </div>
    </div>
<!--    中部-->
    <div class="box2-show">
<!--      中部左-->
      <div class="box2">
<!--        我的订单-->
        <p>
<!--          <router-link to="/HelloWorld" active-class="myactive" tag="li">HelloWorld</router-link>-->
          <span class="title_zm1">我的订单</span>
          <span class="title_zm2">
            <router-link to="/Order" tag="a">全部订单<i class="el-icon-caret-right"></i></router-link>

        </span>
        </p>
        <div class="box2-dindan clear">
          <span>
            <div class="box2-dindan-div1">
              <img src="https://res8.vmallres.com/20201021/images/echannel/icon/icon02.svg" class="box2-dindan-div1-1">
              <em class="em1">2</em>
            </div>
            <a >待付款</a>
          </span>
          <span>
             <div class="box2-dindan-div1">
                <img src="https://res8.vmallres.com/20201021/images/echannel/icon/icon02.svg" class="box2-dindan-div1-2">
                <em class="em1">1</em>
             </div>
            <a>待收货</a>
          </span>
          <span>
            <div class="box2-dindan-div1">
              <img src="https://res8.vmallres.com/20201021/images/echannel/icon/icon02.svg" class="box2-dindan-div1-3">
              <em class="em1">3</em>
            </div>
            <a>待评价</a>
          </span>
          <span>
            <div class="box2-dindan-div1">
              <img src="https://res8.vmallres.com/20201021/images/echannel/icon/icon02.svg" class="box2-dindan-div1-4">
              <em class="em1">1</em>
            </div>
            <a>退换货</a>
          </span>
          <span id="box2-dindan-5">
            <div class="box2-dindan-div1">
              <img src="https://res8.vmallres.com/20201021/images/echannel/icon/icon02.svg" class="box2-dindan-div1-5">
<!--              <em class="em1"></em>-->
            </div>
            <a>已完成</a>
          </span>
        </div>
        <div id="myList" class="myList">
          <ul class="clear">
            <li v-for="(item, index) in list" :key="index">
              <router-link :to="{path:'detail',query: {cinformation_id:item.cinformation_id}}">
                <img :src="item.cinformation_homepicture" alt />
                <span class="span-1">{{item.cinformation_name}}</span>
<!--                <p>-->
                  <span class="span-2">{{item.cspecifications_promotionprice}}元</span>
                  <span
                    v-show="item.cspecifications_commodityprice"
                    class="del span-3"
                  >{{item.cspecifications_commodityprice}}元</span>
<!--                </p>-->
                <button>去购买</button>
              </router-link>
            </li>
          </ul>
        </div>
<!--        为你推荐-->
        <div class="box2-wntj_zm">
            <p class="box2-zjln-p1">为你推荐</p>
<!--            <img src="https://res.vmallres.com/pimages//pages/dynamicMsg/33497146150614179433.png" alt="图片">-->
<!--            <img src="https://res.vmallres.com/pimages//pages/dynamicMsg/25540246150614204552.jpg" alt="图片">-->
            <img src="https://res.vmallres.com/pimages//pages/dynamicMsg/24581246150614218542.jpg" alt="图片">
        </div>
      </div>
<!--      中部右-->
      <div class="box3">

        <router-link to="myList"  tag="img"  :src="tc02" class="yjhx_zm"></router-link>

<!--        我的服务-->
        <div class="fu_zm clear" >
          <p id="fu-p1-_zm">我的服务</p>
          <div>
            <a href="tencent://message/?Menu=yes&uin=1274816963&Site=80fans&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45">
              <img src="https://res.vmallres.com/pimages//pages/personal/EdqwkeSVDX9w3FKPzSK2.png" width="80"/>
              <i>订单投诉</i>
            </a>
<!--            <img src="https://res.vmallres.com/pimages//pages/personal/EdqwkeSVDX9w3FKPzSK2.png">-->
<!--            <i>订单投诉</i>-->
          </div>
          <div>
            <a href="tencent://message/?Menu=yes&uin=1274816963&Site=80fans&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45">
              <img src="https://res.vmallres.com/pimages//pages/personal/P1cNbD7mbD6wMLXlk0xj.png" width="80"/>
              <i>品质投诉</i>
            </a>
<!--            <img src="https://res.vmallres.com/pimages//pages/personal/P1cNbD7mbD6wMLXlk0xj.png">-->
<!--            <i>品质投诉</i>-->
          </div>
          <div>
            <a href="tencent://message/?Menu=yes&uin=1274816963&Site=80fans&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a545b1714f9d45">
              <img src="https://res.vmallres.com/pimages//pages/personal/RZtjrUWV85tNwaoYsSpm.png" width="80"/>
              <i>联系客服</i>
            </a>
          </div>

        </div>
<!--        新人见面礼-->
        <router-link to="inner2_zm"  tag="img"  :src="tc03" class="yjhx_zm"></router-link>
<!--        华为移动生活-->
        <div class="box3-ydsh_zm">
          <p>优品移动生活</p>
          <img :src="tc05" alt="图片">
<!--          <img src="https://res.vmallres.com/pimages//sale/2019-03/dMqovywLqjDjAfUFbqr1.png" alt="图片">-->
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import show_zm from "./show_zm";
  import inner2_zm from "./inner2_zm";
  import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "grzx_zm",
        data() {
            return {
                username: "",
                tc02:require("../../../static/images/20201126111946.png"),
                tc03:require("../../../static/images/20201126141654.png"),
                tc05:require("../../../static/images/20201126152912.png"),
                list: [
                ]
            }
        },
      components:{
        show_zm:show_zm,
        inner2_zm:inner2_zm
      },
        methods: {
          zhanghao(ojb) {
            //跳转到帐号中心网页,并传递参数
            // this.$router.push("/show_zm");
            this.$router.push({path: "/show_zm", query: {username:this.username}});
          },
          qudiv1(){
            this.$router.push("/div1")
          }
        },
        mounted(){
            this.username = this.$route.query.name;
        },
      created() {
        this.$axios({
          method: 'post',
          url: 'http://139.196.200.142:80/cityshop-api-shop/cinformation/findPicture',
          params: {
            page: 0,
            limit: 5
          }
        })
          .then(res => {
            console.log(res.data)
            this.list = res.data.data.list
            for (let i = 0; i < this.list.length; i++) {
              this.list[i].cinformation_homepicture = require('@/assets/img/00' + (i + 1) + '.jpg')
            }
          })
      },
      computed:{
          ...mapGetters(['show'])
      }
    }
</script>

<style scoped>
  .clear::before,
  .clear::after {
    content: '';
    display: table;
  }
  .clear::after {
    clear: both;
  }
  .myList {
    /*width: 622px;*/
  }
  .myList ul li {
    list-style-type: none;
    float: left;
    width: 100%px;
    /*height: 170px;*/
    /*height: 280px;*/
    padding: 10px 0;
    margin: 0 0 14.5px 13.7px;
    background-color: white;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    position: relative;
  }
  a {
    text-decoration: none;
  }
  .myList ul li:hover {
    z-index: 2;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
  }
  .myList ul li img {
    float: left;
    display: block;
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  .span-1{
    width: 150px;

  }
  .myList ul li span{
    padding-top: 25px;
    float: left;
    display: block;
    /*height: 150px;*/
    margin: 10px 20px;
    /*padding-top: 65px;*/
  }
  .myList ul li button {
    width: 50px;
    padding: 5px;
    margin: 10px;
    color: #fff;
    background: #cf0a2c;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
  }
  .myList ul li h3 {
    margin: 5px 10px;
    height: 18px;
    font-size: 12px;
    font-weight: 400;
    color: #b0b0b0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .myList ul li p {
    margin: 10px 10px 10px;
    text-align: center;
    color: #ff6700;
  }
  .myList ul li p .del {
    margin-left: 0.5em;
    color: #b0b0b0;
    text-decoration: line-through;
  }
  .myList #more {
    text-align: center;
    line-height: 150px;
  }

  .myList #more a {
    font-size: 18px;
    color: #333;
  }
  .myList #more a:hover {
    color: #ff6700;
  }
  .myList ul li .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
  }
  .myList ul li:hover .delete {
    display: block
  }
  .myList ul li .delete:hover {
    color: #ff6700;
  }
  a{
    text-decoration:none;
    color: #3a3a3a;
  }
  .box1{
    width: 1002px;
    height: 175px;
    /*background: #fff;*/
    margin: 18px auto;
  }
  .box1-left{
    float: left;
    width: 374px;
    height: 175px;
    margin-left: 50px;
    cursor: pointer;
  }
  .box1-left img{
    float: left;
    width: 100px;
    height: 100px;
    margin-top: 37.5px;
    cursor: pointer;
    border-radius: 50%;
  }
  .box1-left-r{
    float: left;
    margin-left: 39px;
    margin-top: 37.5px;
    cursor: pointer;
  }
  .min-zm{
    font-size: 14px;
    color: #333;
    cursor: pointer;

  }
  .jindu-zm{
    margin-top: 8px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .btn1_zm,.btn2_zm{
    width: 82px;
    height: 26px;
    margin-right: 12px;
    border-radius: 5px;
    text-align: center;
    font-size: 13px;
    border: none;
    cursor: pointer;
  }
  .btn1_zm:hover{
    background: #333;
    border-color: #333;

  }
  .btn2_zm:hover{
    border-color: #333;
    outline: none;
  }

  .btn1_zm{
    color: #fde4b3;
    background: #595454;
  }
  .btn2_zm{
    color: #fff;
    background: #cf0a2c;
    outline: none;
    cursor: pointer;
  }
  .box1-reight{
    float: left;
    width: 576px;
    height: 175px;
  }
  .box1-r-4{
    float: left;
    width: 144px;
    height: 85px;
    margin-top: 37.5px;
  }
  .box1-r-p1{
    font-style: italic;
    font-size: 28px;
    color: #0099CC;
    width:100%;
    padding-left: 20px;
    line-height: 32px;
    cursor: pointer;
  }
  .box1-r-p2{
    font-size: 12px;
    color: #3a3a3a;
    width:100%;
    padding-left: 15px;
    line-height: 15px;
    margin-top: 10px;
    margin-bottom: 11px;
  }
  .box1-r-btn{
    width:64px;
    height: 30px;
    font-size: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    color: #666;
    margin-top: 15px;
    cursor: pointer;
    outline: none;
  }
  .box1-r-btn:hover{
    border-color:#999 ;
  }

  .box2-show{
    width: 1002px;
    margin: 18px auto;
  }

  .box2{
    float: left;
    width: 636px;
    margin: 0 auto;
    margin-right: 14px;
    /*background-color: #00b3ee;*/
  }
  .title_zm1{
    width:73px;
    font-size: 16px;
    color: #777;
  }
  .title_zm2{
    width: 73px;
    height: 16px;
    margin: 17px 13px 0px 440px;
  }
  .title_zm2 a {
    font-size: 14px;
    list-style: none;

    text-decoration: none;
    cursor: pointer;
  }
  .title_zm2 a:hover{
    color: #ca141d;
  }
  .box2-dindan{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 38px;
  }
  .box2-dindan a{
    font-size:10px;
  }
  .box2-dindan span{
    float: left;
    width: 50.2px;
    margin-right: 77px;
    cursor: pointer;
  }
  #box2-dindan-5{
    margin-right:0px;

  }
  .box2-dindan-div1-a{
    color: #d0021b;
  }
  .box2-dindan span:hover a{
    color: #ca141d;
  }
  .bos2-daifk-p2:hover{
    color: #d0021b;
    cursor: pointer;
  }
  .box2-dindan-div1{
    position: relative;
    overflow: hidden;
    width: 50px;
    height: 50px;
  }
  .box2-dindan-div1-1{
    position: absolute;
    top: -16px;
    left: -22px;
  }
  .em1{
    position: absolute;
    top: 4px;
    right: 0;
    min-width: 8px;
    height: 18px;
    line-height: 18px;
    border-radius: 10px;
    padding: 0 5px;
    text-align: center;
    color: #fff;
    background: #ca141d;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
  .box2-dindan-div1-2{
    position: absolute;
    top: -16px;
    left: -72px;
  }
  .box2-dindan-div1-3{
    position: absolute;
    top: -16px;
    left: -122px;
  }
  .box2-dindan-div1-4{
    position: absolute;
    top: -16px;
    left: -172px;
  }
  .box2-dindan-div1-5{
    position: absolute;
    top: -16px;
    left: -222px;
  }

  .bos2-daifk_zm{
    border-top: 1px solid #f6f6f6;;
    width: 600px;
    height: 90px;
    border-top: 1px solid #f6f6f6;;
    padding: 15px 18px;
    font-size: 14px;
    display: table;
    margin-bottom: 18px;
  }
  .bos2-daifk_zm img{
      width: 80px;
      height: 80px;
    margin-top: 5px;
    margin-right: 20px;
    cursor: pointer;
  }
  .bos2-daifk_zm div {
    float: left;
    width: 100px;
    height: 90px;
    text-align: center;
    line-height: 90px;
  }
  .bos2-daifk_zm button{
    font-size: 13px;
    color: #fff;
    background: #cf0a2c;
    border-radius: 5px;
    margin-top: 18px;
    margin-bottom: 8px;
    width: 72px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    outline: none;
    cursor: pointer;
    border-width: 0px;
  }
  .bos2-daifk_zm span{
    margin: 0 auto;
  }

  .box2-zjln_zm{
    width: 636px;
    /*background-color: yellow;*/
    border-radius: 10px;
  }
  .box2-div1_zm{
    float: left;
    width: 159px;
    height: 220px;
    padding-top: 25px;
    cursor: pointer;
  }
  .box2-zjln-div{
    border-top: 1px solid rgb(246, 246, 246);
    height: 220px;
    overflow: hidden;
  }
  .box2-zjln_zm img{
    width: 110px;
    height: 110px;
    margin-bottom: 25px;
  }
  .box2-zjln-p1{
    padding-left: 14px;
    font-size: 16px;
    color: #303133;
    line-height: 54px;
    height: 54px;
    text-align: left;
  }
  .box2-zjln-p2{
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #3a3a3a;
    line-height: 20px;
    text-align: center;
  }
  .box2-zjln-p3{
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #cf0a2c;
    line-height: 20px;
    text-align: center;
  }
  .box2-wntj_zm{
    width: 636px;
    /*padding: 18px;*/
  }
  .box2-wntj_zm img{
    width: 600px;
    height: 166px;
    margin: 0px 18px 18px 18px;
    border-radius: 10px;
  }


  .box3{
    float: left;
    width: 350px;
    margin: 18px 0;

  }
  .yjhx_zm{
    width: 350px;
    border-radius: 15px;
    cursor: pointer;
  }
  .fu_zm{
    margin: 18px  0;
    /*background-color: yellow;*/
    border-radius: 10px;
  }
  .fu_zm div{
    float: left;
    width: 77px;
    font-size: 12px;
    margin-left:14px ;
    margin-bottom: 8px;
    cursor: pointer;
  }
  .fu_zm p{
    height: 54px;
    font-size: 16px;
    color: #303133;
    line-height: 54px;
    text-align: left;
    padding-left: 14px;

  }
  .fu_zm img{
    width: 40px;
    height: 40px;
    margin: 8px 18.5px;
  }
  .fu_zm i{
    font-style:normal;
    padding-left: 15px;
  }

  .box3-ydsh_zm{
    width: 368px;
    padding: 18px;
  }
  .box3-ydsh_zm p{
    width: 100%;
    height: 54px;
    text-align: left;
    line-height: 54px;
    font-size: 16px;
    color: #303133;
  }
  .box3-ydsh_zm img{
    width: 312px;
    height: 200px;
    cursor: pointer;
  }







</style>
