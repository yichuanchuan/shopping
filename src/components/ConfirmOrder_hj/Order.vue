<template>
  <div class="body">
    <div class="header">
      <img :src="src" width="70px" height="35px">
      <h2>确认订单</h2>
    </div>

    <div class="content1">
      <p>收货地址</p>
      <div class="box">


      </div>
      <div>
        <el-button type="text" @click="dialogFormVisible = true">+新增收货地址</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" class="title">
          <el-form :model="form">
            <el-form-item label="收货人：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" :label-width="formLabelWidth" placeholder="请输入11位手机号码">
              <el-input v-model="form.tel" placeholder="请输入11位手机号码"></el-input>
            </el-form-item>
            <el-form-item label="备选号码：" :label-width="formLabelWidth">
              <el-input v-model="form.tel" placeholder="固定电话或其他手机号码"></el-input>
            </el-form-item>
            <el-form-item label="收货地址：" :label-width="formLabelWidth">
              <el-input v-model="form.address" placeholder="请输入详细的收货地址"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false" class="btn1">取消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false" class="btn2">保存并使用</el-button>
          </div>
        </el-dialog>
      </div>
    </div>

    <div class="content2">
      <el-table
        :data="cartProducts"
        style="width: 1180px"
        width="142">
<!--        <el-table-column>-->
<!--          <template slot-scope="scope">-->
<!--            <img :src="scope.row.src" style="margin-left: 25px">-->
<!--          </template>-->
<!--        </el-table-column>-->

        <el-table-column
          prop="cinformation_name"
          label="名称"
          width="500">
        </el-table-column>

        <el-table-column
          prop="num"
          label="数量"
          width="200">
        </el-table-column>

        <el-table-column
          prop="cspecifications_commodityprice"
          label="单价"
          width="200"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="section-shipment clear">
      <p class="title">配送方式</p>
      <p class="shipment">包邮(商品由同城优品选择合作快递)</p>
    </div>
    <div class="section-shipment clear">
      <p class="title">发票</p>
      <p class="shipment">电子发票</p>
      <p class="shipment">个人</p>
      <p class="shipment">商品详细</p>
    </div>
    <div class="content3">
      <span>应付总额:{{totalPrice}}</span>
      <div class="Adress">
        <p>配送至：四川省 成都市 高新区 天府二街 云华路333号</p>
        <p>张三 123456789</p>
      </div>
      <button class="btn3" @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>
<script>
  import src from "@/assets/logo1.png"
  import {mapActions} from "vuex"
  import {mapGetters} from "vuex"
  export default {
    name: "Order",
    data(){
      return {
        src:src,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
         //tableData:[{
        //   src:'./static/img/1.png',
        //   desc:"HUAWEI P40 Pro 5G 全网通 8GB+128GB(零度白)",
        //   count:1,
        //   price:"￥5988.00",
        // },
        //   {
        //     src:'./static/img/2.png',
        //     desc:"HUAWEI P40 Pro 霞影纱·星钻保护壳（樱花粉)",
        //     count:1,
        //     price:"￥599.00"
        //   },

       // ]
      }
    },
    methods: {
      ...mapActions([]),
      submitOrder (){
        this.$axios.post("http://192.168.4.186:8769/cart/deleteAllCart?uid="+this.getConsumerId[0])
        .then(res=>{
          console.log(res.data)
        })
      }
    },
    computed: {
      ...mapGetters(['cartProducts','totalPrice',"getConsumerId"]),
    }
  }
</script>

<style scoped>
  .body {
    background-color: gainsboro;
  }
  .header {
    width: 100%;
    height: 70px;
    /*border: 1px solid grey;*/
    background-color: white;
  }
  img {
    float: left;
    margin: 0px 20px 0 250px;
  }
  h2 {
    float: left;
  }
  .content1 {
    width: 1180px;
    height: 200px;
    margin: 25px auto;
    /*border: 1px solid grey;*/
    background-color: white;
  }
  .content1 p {
    margin-left: 30px;
    padding-top: 20px;
  }
  .content1 button {
    margin-left: 30px;
    border: 1px solid grey;
    outline: none;
    margin-top: 20px;
  }
  .title {
    text-align: center;
  }
  .btn1 {
    width: 120px;
    height: 40px;
    color: black;
    text-align: center;
  }
  .btn2 {
    width: 120px;
    height: 40px;
    color: white;
    background-color: #ff1a1e;
    text-align: center;
    outline: none;
    border: none;
  }
  .box {
    width: 250px;
    height: 100px;
    border: 2px dashed grey;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .content2 {
    width:1180px;
    margin: 25px auto;
  }
  .content2 el-table {
    margin-top: 0px;
  }
  .section-shipment {
    width: 1180px;
    height: 50px;
    margin: 0px auto;
    padding-top: 20px;
    background-color: white;
  }
  .section-shipment .title {
    font-size: 16px;
    float: left;
    margin-left: 25px;
  }
  .section-shipment .shipment {
    float: left;
    font-size: 16px;
    color: orange;
    margin-left: 80px;
  }
  .clear {
    clear: both;
  }
  .content3 {
    width: 1180px;
    height: 200px;
    background-color: white;
    /*border: 1px solid grey;*/
    margin: 0 auto;
  }
  .content3 span {
    margin-left: 950px;
  }
  i {
    color: red;
    font-size: 24px;
    font-weight: bold;
  }
  .btn3 {
    width: 120px;
    height: 45px;
    background-color: #ff0530;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 1030px;
    margin-top: 20px;
  }
  .Adress {
    width: 300px;
    height: 60px;
    border: 1px solid lightgrey;
    background-color: #ffe2ea;
    font-size: 12px;
    margin-left: 848px;
    margin-top: 20px;
  }

</style>
