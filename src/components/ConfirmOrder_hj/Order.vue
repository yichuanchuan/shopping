<template>
  <div class="body">
    <div class="header">
      <p>首页 <span>></span> 购物车 <span>></span>确认订单</p>
    </div>

    <div class="content1">
      <p>收货地址</p>
      <div v-for="(item,index) in form2" class="box" :key="index" @click="changeAddress(index)">
         <span class="span1">{{item.name}}</span>
         <span class="span2">{{item.tel}}</span>
         <p class="p3">{{item.address}}</p>
         <div class="btn">
           <button type="text" @click="updateAddress(index)">修改</button>
           <button type="text" @click="delAddress(index)">删除</button>
         </div>
      </div>
      <!--添加收货地址弹框-->
      <div>
        <el-button type="text" @click="dialogFormVisible = true" class="addAdress">+新增收货地址</el-button>
        <el-dialog title="-添加地址-" :visible.sync="dialogFormVisible" class="title">
          <el-form :model="form">
            <el-form-item label="收货人：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" :label-width="formLabelWidth">
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
            <el-button type="primary" @click="saveAddress" class="btn2">保存并使用</el-button>
          </div>
        </el-dialog>
      </div>

      <!--修改收货地址的弹框-->
      <div>
        <el-dialog title="-修改地址-" :visible.sync="dialogFormVisible1" class="title">
          <el-form :model="form1">
            <el-form-item label="收货人：" :label-width="formLabelWidth">
              <el-input v-model="form1.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：" :label-width="formLabelWidth">
              <el-input v-model="form1.tel" placeholder="请输入11位手机号码"></el-input>
            </el-form-item>
            <el-form-item label="备选号码：" :label-width="formLabelWidth">
              <el-input v-model="form1.tel" placeholder="固定电话或其他手机号码"></el-input>
            </el-form-item>
            <el-form-item label="收货地址：" :label-width="formLabelWidth">
              <el-input v-model="form1.address" placeholder="请输入详细的收货地址"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false" class="btn1">取消</el-button>
            <el-button type="primary" @click="bcupdataAddress" class="btn2">保存并使用</el-button>
          </div>
        </el-dialog>
      </div>
    </div>

    <div class="content2">
      <el-table
        :data="cartProducts"
        style="width: 1180px;padding-left: 25px"
        width="142">
<!--        <el-table-column>-->
<!--          <template slot-scope="scope">-->
<!--            <img :src="scope.row.src" style="margin-left: 25px">-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column
          prop="cinformation_name"
          label="名称"
          width="400">
        </el-table-column>

        <el-table-column
          prop="num"
          label="数量"
          width="200">
        </el-table-column>

        <el-table-column
          prop="cspecifications_commodityprice"
          label="单价"
          width="200">
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
      <span>应付总额: ￥{{totalPrice}}</span>
      <div class="Address">
        <p>收货人：{{form3.name}}</p>
        <p>收货人电话：{{form3.tel}}</p>
        <p>收货地址：{{form3.address}}</p>
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
        dialogFormVisible: false,
        dialogFormVisible1: false,
        //修改数据的下标变量
        myIndex:'',
        //存入输入的信息，初始为空
        form: {
          name: '',
          tel:'',
          address:''
        },
        form1:{
          name: '',
          tel:'',
          address:''
        },
        //点击保存按钮存入输入的地址信息
        form2: [
          { name: 'aaaa',
            tel:1121212,
            address: 'adsadasdasdas'
          }
        ],
        form3: {

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
      //添加地址
      saveAddress(){
        this.dialogFormVisible=false;
        // this.form2.name = this.form.name
        // this.form2.tel = this.form.tel
        // this.form2.address = this.form.address
        let s = {name:this.form.name,tel: this.form.tel , address: this.form.address}
        this.form2.push(s)
        this.form.name=""
        this.form.tel=""
        this.form.address=""
      },
      //删除地址
      delAddress(obj){
        this.form2.splice(obj,1)
      },
      //修改地址
      bcupdataAddress(){
        let obj = this.myIndex
        for (let i = 0 ; i <= this.form2.length ; i++){
          if ( i == obj ){
            this.form2[i].name = this.form1.name;
            this.form2[i].tel = this.form1.tel;
            this.form2[i].address = this.form1.address;
          }
        }
        this.dialogFormVisible1=false;
        this.form1.name = ''
        this.form1.tel = ''
        this.form1.address = ''
      },
      updateAddress(obj){
        this.dialogFormVisible1=true;
        this.myIndex = obj
      },
      changeAddress(obj){
        this.form3 = this.form2[obj]

      },
      submitOrder (){
        //this.$axios.post("http://139.196.200.142:8769/cart/deleteAllCart?uid=1")
        this.$axios.post("http://139.196.200.142:8769/cart/deleteAllCart?uid=1")
        .then(res=>{
          console.log(res.data);
        })
      },
    },
    computed: {
      ...mapGetters(['cartProducts','totalPrice',"getConsumerId"]),
    },
    created() {
      console.log(this.$route.query.shopList)
    }
  }
</script>

<style scoped>
  .body {
    background-color: gainsboro;
  }
  .header {
    width: 100%;
    height: 40px;
    background-color: white;
  }
  .header p {
    margin-left: 260px;
  }
  .header span {
    color: grey;
  }
  .content1 {
    width: 1180px;
    /*height: 200px;*/
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
  .addAdress {
    width: 250px;
    height: 120px;
    text-align: center;
    color: black;
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
    height: 120px;
    border: 1px solid lightgrey;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
  }
  .box:hover {
    border: 1px solid red;
  }
  .box:active {
    border: 2px dashed red;
  }
  .box .span1 {
     font-size: 14px;
     margin-left: 15px;
    line-height: 25px;
  }
  .box .span2 {
    font-size: 14px;
    line-height: 25px;
    margin-right: 10px;
  }
  .box .p3 {
    font-size: 14px;
    margin-left: 15px;
    color: dimgrey;
  }
  .box .btn {
    margin-left: 145px;
  }
  .btn button {
    margin-left: 10px;
    border: none;
    outline: none;
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
    margin-left: 35px;
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
    margin-left: 990px;
    color:#ca151e;
    font-size: 20px;
    font-weight: 600;
  }
  i {
    color: red;
    font-size: 24px;
    font-weight: bold;
  }
  .btn3 {
    width: 120px;
    height: 45px;
    background-color: #ca151e;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 1030px;
    margin-top: 20px;
  }
  .Address {
    width: 300px;
    height: 70px;
    border: 1px solid lightgrey;
    background-color: #ffe2ea;
    font-size: 14px;
    margin-left: 848px;
    margin-top: 20px;
  }

</style>
