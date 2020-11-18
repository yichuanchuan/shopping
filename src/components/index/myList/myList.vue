<template>
  <div id="myList" class="myList">
    <ul class="clear">
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="{path:'detail',query: {cinformation_id:item.cinformation_id}}">
          <img :src="item.cinformation_homepicture" alt />
          <h2>{{item.cinformation_name}}</h2>
          <p>
            <span>{{item.cspecifications_promotionprice}}元</span>
            <span
              v-show="item.cspecifications_commodityprice"
              class="del"
            >{{item.cspecifications_commodityprice}}元</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "myList",
    data() {
      return {
        list: [
          // {id:1,name:'茶叶',img:require('@/assets/images/1.jpg'),price:30,content:'太好了吧',hot:129,tag:['收藏⭐','加入购物车🛒']},
          // {id:2,name:'串串',img:require('@/assets/images/2.jpg'),price:30,content:'很好用',hot:520,tag:['收藏⭐','加入购物车🛒']},
          // {id:3,name:'澡堂',img:require('@/assets/images/3.jpg'),price:30,content:'一起来泡温泉',hot:353,tag:['收藏⭐','加入购物车🛒']},
          // {id:4,name:'咖啡',img:require('@/assets/images/4.jpg'),price:30,content:'早上一杯咖啡',hot:13,tag:['收藏⭐','加入购物车🛒']},
          // {id:5,name:'面包',img:require('@/assets/images/5.jpg'),price:30,content:'吃口面包吧',hot:5166,tag:['收藏⭐','加入购物车🛒']},
          // {id:6,name:'客厅',img:require('@/assets/images/6.jpg'),price:30,content:'装修风格好',hot:932,tag:['收藏⭐','加入购物车🛒']},
        ]
      };
    },
    created() {
      this.$axios.post("http://192.168.4.189:8765/cinformation/findPicture?page=1&limit=8")
      .then(res=> {
        console.log(res.data.data.list)
        this.list = res.data.data.list
      })
    }
  };
</script>
<style scoped>
  .clear:after,
  .clear:before {
    content: "";
    display: table;
  }
  .clear:after {
    clear: both;
  }
  .myList {
    width: 1200px;
    margin: 20px auto;
  }
  .myList ul li {
    list-style-type: none;
    z-index: 1;
    float: left;
    width: 286px;
    height: 280px;
    padding: 10px 0;
    margin: 0 0 14.5px 13.7px;
    background-color: white;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    position: relative;
  }
  a {
    text-decoration: none;
  }
  .myList ul li:hover {
    z-index: 2;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
  }
  .myList ul li img {
    display: block;
    width: 160px;
    height: 160px;
    background: url(../../../assets/images/1.jpg) no-repeat 50%;
    margin: 0 auto;
  }
  .myList ul li h2 {
    margin: 25px 10px 0;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .myList ul li h3 {
    margin: 5px 10px;
    height: 18px;
    font-size: 12px;
    font-weight: 400;
    color: #b0b0b0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .myList ul li p {
    margin: 10px 10px 10px;
    text-align: center;
    color: #ff6700;
  }
  .myList ul li p .del {
    margin-left: 0.5em;
    color: #b0b0b0;
    text-decoration: line-through;
  }
  .myList #more {
    text-align: center;
    line-height: 280px;
  }
  .myList #more a {
    font-size: 18px;
    color: #333;
  }
  .myList #more a:hover {
    color: #ff6700;
  }
  .myList ul li .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
  }
  .myList ul li:hover .delete {
    display: block
  }
  .myList ul li .delete:hover {
    color: #ff6700;
  }
</style>
