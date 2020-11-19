<template>
    <div class="detailBtn">
      <div class="detailBtn-content">
        <div class="count">
          <span class="num-text">选择数量：</span>
          <el-input-number
            v-model="num" controls-position="right" :min="1" :max="10" @change="handleChange"
            style="width: 80px; height: 40px; border-radius: 0px;"
          ></el-input-number>
        </div>
        <div class="allBtn">
          <button :plain="true" @click="open2" class="detailBtn-cart">加入购物车</button>
<!--          <router-link :to="{path:'/Order',query:{cinformation_id:cinformation_id}}">-->
            <button class="detailBtn-confirm" @click="open123">确认购买</button>
<!--          </router-link>-->
        </div>
      </div>
      <el-row type="flex" class="row-bg">
        <div class="house-box house-box1">
          <span class="el-icon-house"></span>
          <span class="house">店铺</span>
        </div>
        <div class="house-box">
          <div class="el-icon-service"></div>
          <span class="round">客服</span>
        </div>
        <div class="house-box">
          <div class="el-icon-chat-dot-round"></div>
          <span class="cart-2">消息</span>
        </div>
        <div class="house-box">
          <div class="el-icon-edit"></div>
          <span class="cart-2">反馈</span>
        </div>
        <div class="house-box">
          <router-link to="/shopping" tag="span">
            <el-badge :value='0' class="item">
              <div class="el-icon-shopping-cart-2"></div>
            </el-badge>
            <span class="cart-2">购物车</span>
          </router-link>
        </div>
      </el-row>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
    export default {
        name: "detailBtn",
        data() {
          return {
            num: 1,
            num1: 0,
          }
        },
      methods: {
        open123() {

          if (this.loginState == false) {
            this.$store.dispatch('confirm');
          }else {
            this.$router.push({
              path:'/Order',
              query: {
                shopList:this.shopList
              }
            })
          }
        },
        handleChange(value) {

        },

        open2() {
          // 购物车计数器
         let shopCart = document.getElementsByTagName('sup')[0];
          this.num1 += this.num
          shopCart.innerHTML = this.num1.toString();
          shopCart.style.display = 'inline-block';
          this.$message({
            message: '加入购物车成功',
            type: 'success'
          });
          let useName = this.getConsumerId[0].toString();
          let shopNum = this.shopList.cbinformation_id.toString();
          this.$axios.post('http://139.196.200.142:8769/cart/addCart',{
            'uid':useName,
            'pid':shopNum,
            'num':this.num
          }, {headers:{'Content-Type': 'application/json'}}).then(res=> {
            console.log(res.data)
          });

        }
      },
      props: {
        shopList: {
          type: Object
        }
      },
      computed: {
        ...mapGetters(['getConsumerId']),
        ...mapGetters(['loginState'])
      },
      created() {
        console.log(this.shopList)
      }

    }
</script>
<style>
  .el-badge__content {
    display: none;
    background-color: #ca151d;
  }
</style>
<style>
  .el-input__inner{
    border-radius: 0px;/* 这些起作用 */
    /*border: 1px solid #eceef2;*/
    outline: none;
  }
</style>
<style scoped>
  .detailBtn {
    padding: 10px;
    height: 144px;
    /*background-color: #f8e8e8;*/
    position: relative;
  }
  .el-icon-house,
  .el-icon-service,
  .el-icon-shopping-cart-2,
  .el-icon-chat-dot-round,
  .el-icon-edit{
    font-size: 21px;
    color: #ca151d;
    font-weight: 500;

  }
  .house,
  .round,
  .cart-2 {
    font-size: 11px;
    color: #848282;
  }
  .house-box {
    margin-left: 20px;
    cursor: pointer;
  }
  .house-box1 {
    margin-left: 0px;
  }
  .house-box:hover .house,
  .house-box:hover .round,
  .house-box:hover .cart-2{
    color: #ca151d;
  }
  .row-bg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .allBtn {
    position: absolute;
    top: 48%;
    left: 94px;


  }
  .detailBtn-cart,
  .detailBtn-confirm{
    border: none;
    outline: none;
    width: 150px;
    height: 40px;
    color: white;
    cursor: pointer;
    /*font-weight: 600;*/
    font-size: 17px;
    letter-spacing: 1px;
  }
  .detailBtn-cart {
    background-color: #fc600c;
  }
  .detailBtn-cart:hover {
    background-color: #fd803d;
  }
  .detailBtn-confirm {
    margin-left: 4px;
     background-color: #ca151d;
  }
  .detailBtn-confirm:hover {
    background-color: #d5444b;
  }
  .detailBtn-content {
    margin: 10px 0px;
  }
  .num-text {
    font-size: 12px;
    color: #848282;
  }
  .count {

  }

</style>
