<template>
    <div class="dindan-box1">
      <div class="dindan-box1-div1">
        <span class="dindan-box1-div1-s1">我的订单</span>
        <span class="dindan-box1-div1-s2">最近6个月的订单 2</span>
        <span class="dindan-box1-div1-s3">6个月前的订单 1</span>
      </div>
      <div class="dindan-box1-div2">
        <div class="dindan-box1-dem clear">
          <span >全部有效订单</span>
          <span>待付款</span>
          <span>待收货</span>
          <span>已完成</span>
          <span>待评价</span>
          <span>已取消</span>
        </div>
        <div class="dindan-box1-mag clear">
<!--          <span>商品</span>-->
<!--          <span>单价/元</span>-->
<!--          <span>数量</span>-->
<!--          <span>状态</span>-->
<!--          <span>实付款/元</span>-->
<!--          <span>订单状态及操作</span>-->
          <el-table
            style="width: 100%">
            <el-table-column
              prop="id"
              label="商品"
              align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="单价/元"
              width="95"
              align="center">
            </el-table-column>
            <el-table-column
              prop="price"
              label="数量"
              width="75"
              align="center">
            </el-table-column>
            <el-table-column
              label="状态"
              width="75"
              align="center">
            </el-table-column>
            <el-table-column
              label="实付款/元"
              width="109"
              align="center">
            </el-table-column>
            <el-table-column
              label="订单状态及操作"
              width="146"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "dindan"
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
  .dindan-box1{
    width: 1002px;
    height: 1000px;
    background: yellow;
    margin: 18px auto;
    border-top: 1px solid #dedede;
  }
  .dindan-box1-div1,.dindan-box1-div2{
    padding: 10px 51px;
    background: #00b3ee;
    text-align: left;
  }
  .dindan-box1-div1-s1{
    font-size: 24px;
    color: #3a3a3a;
  }
  .dindan-box1-div1-s2,.dindan-box1-div1-s3{
    font-size: 14px;
    color: #888;
  }
  .dindan-box1-div1-s2{
    margin-left: 535px;
  }
  .dindan-box1-div1-s3{
    margin-left:20px;
  }
  .dindan-box1-div1-s2:hover{
    color:#3a3a3a;
    /*bo/rder-bottom: 1px solid #3a3a3a;*/
  }
  .dindan-box1-div1-s3:hover{
    color:#3a3a3a;
    /*bord/er-bottom: 1px solid #3a3a3a;*/
  }

  .dindan-box1-dem span{
    display: inline-block;
    float: left;
    margin-right: 10px;
    padding: 5px 16px;
    font-size: 14px;
    background-color: #f2f2f2;
  }
  .dindan-box1-mag {
    margin:18px auto;
  }


</style>
