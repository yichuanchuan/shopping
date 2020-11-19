<template>
  <div>
    <h1>领到的优惠券列表</h1>
    <h1>领券总数{{show}}</h1>


    <ul>
      <li v-for="(item,index) in ylList" :key="index">
        <p>{{item.couName}}</p>
<!--        <h1>￥{{item.couJian}}</h1>-->
        <p>{{item.actName}}</p>
        <p>活动开始时间：{{item.actStartTime}}</p>
        <p>活动结束时间：{{item.actEndTime}}</p>
        <button >去使用</button>
      </li>
    </ul>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "inner3_zm",
        data() {
            return {
              ylList:[]
            }
        },
        mounted() {
          console.log(this.$route.query.ylList)
          this.ylList = this.$route.query.ylList
        },
        computed:{
          ...mapGetters(['show'])//优惠券领取数量总和
        }
    }
</script>

<style scoped>
  li{
    float: left;
    width: 300px;
    border: 1px solid red;
    list-style: none;
    margin: 10px;
    padding: 10px;
  }
  button{
    height: 30px;
    padding: 0 15px;
    border-radius: 5px;
    background-color: #d5444b;
    outline:none;
  }

</style>
