/*purchase（购买）*/


<template>
  <div class="purchase clear">
    <!--    <div class="label clear">-->
    <!--      <label>-->
    <!--        <input type="checkbox">全选-->
    <!--      </label>-->
    <!--      <a href="#">删除</a>-->
    <!--    </div>-->
    <button class="jieshuan" @click="clickBill">
      <!--      <router-link to="/Order">-->
      <a href="#">立即结算</a>
      <!--      </router-link>-->
    </button>
    <div class="zhongjia">
      <p>总价:{{totalPrice}}</p>
      <div>已选择
        <span>{{getNum}}</span>件商品，优惠：<span>￥300元</span></div>
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
      ...mapActions(['clearAllCart']),
      clickBill(){
        // alert(this.cartProducts.length);
        if(this.cartProducts.length!=0){
          this.$router.push("/Order");
        }else {
          this.$router.push("/shoppingKong");
        }
      }
    },
    computed:{
      ...mapGetters(['getNum','totalPrice','cartProducts'])
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .clear:before,.clear:after {
    display: block;
    content: "";
  }

  .clear:after {
    clear: both;
  }
  .purchase {
    width: 1200px;
    margin: auto;
    background: #fff;
    height: 60px;
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
    border: none;
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
