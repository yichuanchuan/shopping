<template>
    <div class="success">
      <h3>订单提交成功，只差付款了~</h3>
      <p class="p1">收银台</p>
      <div class="p2"></div>
      <div class="pay clear">
        <div class="img1">
          <img src="https://res.vmallres.com/ips/pc/20201013/img/success_icon.png?20201013">
        </div>
        <div class="order">
          <p class="p3"><span>订单提交成功，只差付款了~</span><i>订单号：<em>11431257813</em></i></p>
          <p class="p3"><i>请您在<em>23小时59分59秒</em>内完成支付，否则订单将自动取消</i></p>
        </div>
        <div class="jine">订单金额：<span>￥{{totalprice}}</span></div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "success",
      computed: {
        ...mapGetters(['cartProducts','totalprice'])
      }
    }
</script>

<style scoped>
.success {
    width: 1200px;
    /*border: 1px solid grey;*/
    margin: 0 auto;
  }
h3 {
  text-align: center;
}
.p1 {
   font-size: 18px;
   margin-left: 10px;
}
.p2 {
    margin-top: 25px;
    border-bottom: 3px solid forestgreen;
  }
  .pay {
    margin-left: 30px;
    margin-top: 25px;
  }
  .clear {
    clear: both;
  }
  .img1 {
    float: left;
    margin-right: 25px;
  }
  .order {
    float: left;
  }
  .p3 span{
    color: forestgreen;
  }
  .p3 i{
    font-size: 12px;
  }
  .p3 i em {
    color: red;
  }
.jine {
  float: right;
  margin-right: 50px;
}
</style>
