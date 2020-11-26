<template>
  <div class="in3_zm">
    <h1>领券列表</h1>
    <h1>领券总数{{this.$store.state.user_zm.count}}</h1>
    <h1>可抵扣金额{{this.$store.state.user_zm.jian}}</h1>


    <ul>
      <li v-for="(item,index) in ylList" :key="index" >
        <p>{{item.couName}}</p>
<!--        <h1>￥{{item.couJian}}</h1>-->
        <p>{{item.actName}}</p>
        <p>活动开始时间：{{item.actStartTime}}</p>
        <p>活动结束时间：{{item.actEndTime}}</p>
<!--        <button link-to >去使用</button>-->
        <router-link to="/myList" tag="button" class="mybut3" >去使用</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    // import {mapGetters} from "vuex";

    export default {
        name: "inner3_zm",
        data() {
            return {
              ylList:[]
            }
        },
        mounted() {
          console.log(this.$route.query.ylList)
          this.ylList = this.$route.query.ylList
        },
        computed:{
          // ...mapGetters(['show'])//优惠券领取数量总和
        }
    }
</script>

<style scoped>
  .in3_zm{
    width: 1020px;
    margin: 30px auto;
  }
  h1{
    margin: 20px;
  }
  li{
    float: left;
    width: 280px;
    /*border: 1px solid red;*/
    list-style: none;
    padding: 10px 20px;
    border-radius: 10px;

    /*background-color: #ffcc00;*/
    background-color: #cc0033;
    margin: 10px;
  }
  button{
    width: 20%;
    height: 30px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: #d5444b;
    border: none;
    margin: 5px 0px 5px 100px;
  }
  .mybut3:focus{
    outline:none;
  }
  .mybut3:hover{
    cursor: pointer;
    background-color:#dd0000;
    transition: all 1.5s;
  }
  p{
    margin: 5px auto;
    font-size: 15px;
    color: white;
    text-align: center;
  }



  .stamp {width: 387px;height: 140px;padding: 0 10px;position: relative;overflow: hidden;}
  .stamp:before {content: '';position: absolute;top:0;bottom:0;left:10px;right:10px;z-index: -1;}
  .stamp:after {content: '';position: absolute;left: 10px;top: 10px;right: 10px;bottom: 10px;box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);z-index: -2;}
  .stamp i{position: absolute;left: 20%;top: 45px;height: 190px;width: 390px;background-color: rgba(255,255,255,.15);transform: rotate(-30deg);}
  .stamp .par{float: left;padding: 16px 15px;width: 220px;border-right:2px dashed rgba(255,255,255,.3);text-align: left;}
  .stamp .par p{color:#fff;}
  .stamp .par span{font-size: 50px;color:#fff;margin-right: 5px;}
  .stamp .par .sign{font-size: 34px;}
  .stamp .par sub{position: relative;top:-5px;color:rgba(255,255,255,.8);}
  .stamp .copy{display: inline-block;padding:21px 14px;width:100px;vertical-align: text-bottom;font-size: 30px;color:rgb(255,255,255);}
  .stamp .copy p{font-size: 16px;margin-top: 15px;}
  .stamp01{background: #F39B00;background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 5px, #F39B00 5px);background-size: 15px 15px;background-position: 9px 3px;}
  .stamp01:before{background-color:#F39B00;}
  /*.stamp02：{background: #D24161;background: radial-gradient(transparent 0, transparent 5px, #D24161 5px);background-size: 15px 15px;background-position: 9px 3px;}*/
  /*.stamp02:before{background-color:#D24161;}*/
  /*.stamp03：{background: #7EAB1E;background: radial-gradient(transparent 0, transparent 5px, #7EAB1E 5px);background-size: 15px 15px;background-position: 9px 3px;}*/
  /*.stamp03:before{background-color:#7EAB1E;}*/
  /*.stamp03 .copy{padding: 10px 6px 10px 12px;font-size: 24px;}*/
  /*.stamp03 .copy p{font-size: 14px;margin-top: 5px;margin-bottom: 8px;}*/
  /*.stamp03 .copy a{background-color:#fff;color:#333;font-size: 14px;text-decoration:none;padding:5px 10px;border-radius:3px;display: block;}*/
  /*.stamp04{width: 390px;background: #50ADD3;background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 4px, #50ADD3 4px);background-size: 12px 8px;background-position: -5px 10px;}*/
  /*.stamp04:before{background-color:#50ADD3;left: 5px;right: 5px;}*/
  /*.stamp04 .copy{padding: 10px 6px 10px 12px;font-size: 24px;}*/
  /*.stamp04 .copy p{font-size: 14px;margin-top: 5px;margin-bottom: 8px;}*/
  /*.stamp04 .copy a{background-color:#fff;color:#333;font-size: 14px;text-decoration:none;padding:5px 10px;border-radius:3px;display: block;}*/

</style>
