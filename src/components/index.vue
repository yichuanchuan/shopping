<template>
  <div class="home" >
    <searchMore :search-list="searchList"></searchMore>
    <div class="product-list" v-loading="state" element-loading-text="拼命加载中">
      <product v-for="item in productList" :product-list="item" :key="item.id"></product>
    </div>
  </div>
</template>

<script>
  import searchMore from "./search/searchMore"
  import product from "./product/product";
  export default {
    name: 'index',
    data () {
      return {
        searchList: [
          {sid:1,"typeName":"品牌:","subList":["全部","波司登","美特斯邦威","优衣库","匡威","森马","海澜之家"]},
          {sid:2,"typeName":"分类:","subList":["全部","衣服","裤子","鞋子","围巾","袜子","手套","球衣","帽子","衣服","裤子","鞋子","围巾","袜子","手套","球衣","帽子","衣服","裤子","鞋子","围巾","袜子","手套","球衣","帽子"]},
          {sid:3,"typeName":"尺码:","subList":["全部","XXL码","XL码","L码","S码","M码"]},
          {sid:4,"typeName":"排序:","subList":["全部","热门","最新","价格"]}
        ],
        productList: [
          {id:1,name:'茶叶',img:require('@/assets/images/1.jpg'),price:30,content:'太好了吧',hot:129,tag:['收藏⭐','加入购物车🛒']},
          {id:2,name:'串串',img:require('@/assets/images/2.jpg'),price:30,content:'很好用',hot:520,tag:['收藏⭐','加入购物车🛒']},
          {id:3,name:'澡堂',img:require('@/assets/images/3.jpg'),price:30,content:'一起来泡温泉',hot:353,tag:['收藏⭐','加入购物车🛒']},
          {id:4,name:'咖啡',img:require('@/assets/images/4.jpg'),price:30,content:'早上一杯咖啡',hot:13,tag:['收藏⭐','加入购物车🛒']},
          {id:5,name:'面包',img:require('@/assets/images/5.jpg'),price:30,content:'吃口面包吧',hot:5166,tag:['收藏⭐','加入购物车🛒']},
          {id:6,name:'客厅',img:require('@/assets/images/6.jpg'),price:30,content:'装修风格好',hot:932,tag:['收藏⭐','加入购物车🛒']}
        ],
        state:true
      }
    },
    components: {
      searchMore,product
    },
    created() {
      setTimeout(()=>{
        this.state = false
      },2000)
      // this.$axios.get('/api/HelloWorld.do')
      //   .then((resp)=>{
      //     this.productList = resp.data;
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    clear: both;
  }
  .product-list {
    width: 1200px;
    margin: 0 auto;
    height: 800px;
  }
</style>
