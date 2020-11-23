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
          <router-link to="/inner2_zm" tag="button" class="box1-r-btn" >优惠券</router-link>
        </div>
        <div class="box1-r-4">
          <p class="box1-r-p1" >5</p>
<!--          <p class="box1-r-p2">收藏夹</p>-->
          <router-link to="/shopping" tag="button" class="box1-r-btn" >购物车</router-link>
        </div>
        <div class="box1-r-4">
          <p class="box1-r-p1" >10</p>
<!--          <p class="box1-r-p2">关注店铺</p>-->
          <router-link to="/myList" tag="button" class="box1-r-btn" >收藏商品</router-link>
        </div>
        <div class="box1-r-4">
          <p class="box1-r-p1" >1</p>
<!--          <p class="box1-r-p2">足迹</p>-->
          <router-link to="myList" tag="button" class="box1-r-btn">收藏店铺</router-link>
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
        <div class="bos2-daifk_zm clear">
          <div>
            <img src="https://res.vmallres.com/pimages///product/6972453166975/100_100_A0F7A47E35110F7E695A3232D32344F0BBBF144D04917AAEmp.png">
          </div>
          <div>
            <img src="https://res.vmallres.com/pimages///product/6901443288229/100_100_2E27B7DF01ACE78E64E0BD8D14A2172A4FD97705AD4517C2mp.png">
          </div>
          <div>共4件商品</div>
          <div class="box2-dindan-div1-a">待付款</div>
          <div>2299.00</div>
          <span>
            <button>去支付</button>
            <p></p>
            <p class="bos2-daifk-p2">订单详情</p>
          </span>
        </div>
        <div class="bos2-daifk_zm clear">
          <div>
            <img src="https://res.vmallres.com/pimages///product/6972453167842/100_100_A6CB87E309E01302E19000B9D7C64DA7CD964BD814268A2Bmp.png">
          </div>
          <div>
<!--            <img src="https://res.vmallres.com/pimages///product/6901443415830/100_100_3FEB0BF538D41FDC1B5E8EC86F1732B42C21B76E453EF914mp.png">-->
          </div>
          <div>共4件商品</div>
          <div class="box2-dindan-div1-a">待付款</div>
          <div>2199.00</div>
          <span>
            <button>去支付</button>
            <p></p>
            <p class="bos2-daifk-p2">订单详情</p>
          </span>
        </div>
        <div class="bos2-daifk_zm clear">
          <div>
            <img src="https://res.vmallres.com/pimages///product/6901443415830/100_100_3FEB0BF538D41FDC1B5E8EC86F1732B42C21B76E453EF914mp.png">
          </div>
          <div>
<!--            <img src="https://res.vmallres.com/pimages///product/6901443288229/100_100_2E27B7DF01ACE78E64E0BD8D14A2172A4FD97705AD4517C2mp.png">-->
          </div>
          <div>共4件商品</div>
          <div class="box2-dindan-div1-a">待付款</div>
          <div>5299.00</div>
          <span>
            <button>去支付</button>
            <p></p>
            <p class="bos2-daifk-p2">订单详情</p>
          </span>
        </div>
<!--        最近浏览-->
        <div class="box2-zjln_zm">
            <p class="box2-zjln-p1">最近浏览</p>
            <div class="box2-zjln-div clear">
                <div class="box2-div1_zm">
                    <img src="https://res.vmallres.com/pimages//product/GB3201070001701/428_428_1537522318471mp.png">
                    <p class="box2-zjln-p2">华为音乐会员卡</p>
                    <p class="box2-zjln-p3">￥9.9</p>
                </div>
                <div class="box2-div1_zm">
                    <img src="https://res.vmallres.com/pimages//product/6901443366811/428_428_1A94F32EAC64912C1749ACBD3DD14CCB199B7D281392108Fmp.png">
                    <p class="box2-zjln-p2">荣耀笔记本</p>
                    <p class="box2-zjln-p3">￥3599</p>
                </div>
                <div class="box2-div1_zm">
                    <img src="https://res.vmallres.com/pimages//product/6972453162526/428_428_7E78427DAD528145F81C899480925B4A833C3793651A5B90mp.png">
                    <p class="box2-zjln-p2">荣耀手机</p>
                    <p class="box2-zjln-p3">￥2899</p>
                 </div>
              <div class="box2-div1_zm">
                    <img src="https://res.vmallres.com/pimages//product/6901443405527/428_428_772464C5DDD7E81F2856E4BBF9185B7AF208606FA7888348mp.png">
                    <p class="box2-zjln-p2">华为mata</p>
                    <p class="box2-zjln-p3">￥3999</p>
              </div>
              <div class="box2-div1_zm">
                <img src="https://res.vmallres.com/pimages//product/GB3201070001701/428_428_1537522318471mp.png">
                <p class="box2-zjln-p2">华为音乐会员卡</p>
                <p class="box2-zjln-p3">￥9.9</p>
              </div>
              <div class="box2-div1_zm">
                <img src="https://res.vmallres.com/pimages//product/GB3201070001701/428_428_1537522318471mp.png">
                <p class="box2-zjln-p2">华为音乐会员卡</p>
                <p class="box2-zjln-p3">￥9.9</p>
              </div>
            </div>
        </div>
<!--        为你推荐-->
        <div class="box2-wntj_zm">
            <p class="box2-zjln-p1">为你推荐</p>
            <img src="https://res.vmallres.com/pimages//pages/dynamicMsg/33497146150614179433.png" alt="图片">
            <img src="https://res.vmallres.com/pimages//pages/dynamicMsg/25540246150614204552.jpg" alt="图片">
            <img src="https://res.vmallres.com/pimages//pages/dynamicMsg/24581246150614218542.jpg" alt="图片">
        </div>
      </div>
<!--      中部右-->
      <div class="box3">
<!--        以旧换新-->
        <img src="https://res.vmallres.com/pimages//sale/2019-03/mz5DM9gBNMu8TbtnVO4W.png" class="yjhx_zm">
<!--        我的服务-->
        <div class="fu_zm clear" >
          <p id="fu-p1-_zm">我的服务</p>
          <div>
            <img src="https://res.vmallres.com/pimages//pages/personal/EdqwkeSVDX9w3FKPzSK2.png">
            <i>以旧换新</i>
          </div>
          <div>
            <img src="https://res.vmallres.com/pimages//pages/personal/P1cNbD7mbD6wMLXlk0xj.png">
            <i>补购保障</i>
          </div>
          <div>
            <img src="https://res.vmallres.com/pimages//pages/personal/RZtjrUWV85tNwaoYsSpm.png">
            <i>联系客服</i>
          </div>
        </div>
<!--        新人见面礼-->
        <img src="https://res.vmallres.com/pimages//sale/2019-03/VUTCWxITsS0jb0wNXhJD.png" class="yjhx_zm">
<!--        华为移动生活-->
        <div class="box3-ydsh_zm">
          <p>华为移动生活</p>
            <img src="https://res.vmallres.com/pimages//sale/2019-03/vEp2ksvV2h9hMP3KUrrw.png" alt="图片">
          <img src="https://res.vmallres.com/pimages//sale/2019-03/c61UkfLNFMM6XdeYDjLX.png" alt="图片">
          <img src="https://res.vmallres.com/pimages//sale/2019-03/dMqovywLqjDjAfUFbqr1.png" alt="图片">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import show_zm from "./zhzx/show_zm";
  import inner2_zm from "./zhzx/inner2_zm";
  import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "grzx_zm",
        data() {
            return {
                username: ""
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
        mounted() {
            this.username = this.$route.query.name;
          // this.phone = this.$route.query.phone;
          // console.log(this.phone);
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
    left: -16px;
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
    left: -66px;
  }
  .box2-dindan-div1-3{
    position: absolute;
    top: -16px;
    left: -116px;
  }
  .box2-dindan-div1-4{
    position: absolute;
    top: -16px;
    left: -166px;
  }
  .box2-dindan-div1-5{
    position: absolute;
    top: -16px;
    left: -216px;
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
    height: 116px;
    cursor: pointer;
  }







</style>
