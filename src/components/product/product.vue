<template>
  <div class="pl-item">
    <div class="img-div">
      <router-link :to="{path:'/productDetail',query:{id:productList.id}}">
        <img :src="productList.img" alt="">
      </router-link>
    </div>
    <div class="pl-text">
      <p class="" v-text="productList.content"></p>
      <span v-text="productList.name"></span>
      <span v-text="productList.price" class="price"></span>
    </div>
    <div class="clear">
      <div class="left">
        <span>🍟</span>
        {{productList.hot}}
      </div>
      <div class="right">
        <span v-text="productList.tag[0]"></span>
        <el-badge :value="num" class="item">
          <el-button size="small" v-text="productList.tag[1]" @click="addCart(productList)"></el-button>
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex'
    export default {
        name: "product",
        data() {
          return {
            num: ""
          }
        },
        props: ['productList'],
        methods: {
          // ...mapActions([
          //   "addCart"
          // ]),
          addCart(productList) {
            this.$store.dispatch("addCart",productList);
            // console.log(this.$store.state.cart.added[0].num)
            this.num ++
          }
        }
    }
</script>

<style scoped lang="less">
/*产品列表成员*/
  .pl-item {
    width: 23%;
    height: 360px;
    float: left;
    margin: 1%;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 250px;
  }
  .clear {
    width: 100%;
    clear: both;
  }
  .price {
    display: inline-block;
    float: right;
    margin-right: 20px;
  }
  .left {
    float: left;
    font-size: 13px;
    color: gray;
  }
  .right {
    float: right;
    font-size: 14px;
    margin-right: 20px;
    &>span {
      display: inline-block;
      margin: 0 5px;
      color: white;
      height: 25px;
      line-height: 25px;
      border-radius: 3px;
      cursor: pointer;
      &:first-child {
        width: 50px;
        background-color: darkorange;
      }
      &:nth-child(2) {
        width: 92px;
        background-color: dodgerblue;
      }
    }
  }
</style>
