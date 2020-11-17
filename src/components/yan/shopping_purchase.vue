/*purchase（购买）*/


<template>
  <div class="purchase clear">
<!--    <div class="label clear">-->
<!--      <label>-->
<!--        <input type="checkbox">全选-->
<!--      </label>-->
<!--      <a href="#">删除</a>-->
<!--    </div>-->
    <div class="jieshuan">
      <router-link to="/Order">
        <a href="#">立即结算</a>
      </router-link>
    </div>
    <div class="zhongjia">
      <p>总价:{{totalPrice}}</p>
      <div>已选择
      <span>{{totalNum}}</span>件商品，优惠：<span>￥300元</span></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: "info",
    data(){
      return {
        // totalNum:5,
        // totalPrice:266
      }
    },
    methods:{
      // clearAllCart(){
      //
      // }
      ...mapActions(['clearAllCart'])
    },
    computed:{
      ...mapGetters(['totalNum','totalPrice'])
    }
  }
</script>

<style scoped>
  .clear:before,.clear:after {
    display: block;
    content: "";
  }

  .clear:after {
    clear: both;
  }
  .purchase {
    background: #fff;
    height: 60px;
    margin-top: 10px;
  }
  .label {
    float: left;
    line-height: 60px;
  }
  .label label {
    float: left;
    margin-left: 40px;
  }
  .label a {
    float: left;
    margin-left: 20px;
  }
  .label input {
    margin-right: 10px;
    cursor: pointer;
  }
  .jieshuan {
    float: right;
  }
  .jieshuan a {
    width: 180px;
    height: 60px;
    line-height: 60px;
    display: block;
    background: #ca151e;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .zhongjia {
    float: right;
    padding-right: 30px;
    margin-top: 7px;
    text-align: right;
  }
  .zhongjia p {
    color: #ca151e;
    font-size: 18px;
    font-weight: 700;
  }
  .zhongjia div {
    color: #a4a4a4
  }
</style>
