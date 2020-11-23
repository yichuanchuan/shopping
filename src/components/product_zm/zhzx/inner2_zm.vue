<template>
  <div class="in2_zm">
    <h1>可领优惠券列表</h1>
<!--    {{// myList}}-->
    <router-link tag="h1" :to="{path:'inner3_zm', query:{ylList:ylList}}" >已领优惠券数量 {{this.$store.state.user_zm.count}} 张</router-link>
    <h1>优惠券金额{{this.$store.state.user_zm.jian}}</h1>
    <ul>
      <li v-for="(item,index) in myList" :key="index">
        <p>{{item.couName}}</p>
<!--        <h1>￥{{item.couJian}}</h1>-->
        <p>{{item.actName}}</p>
        <p>活动开始时间：{{item.actStartTime}}</p>
        <p>活动结束时间：{{item.actEndTime}}</p>
<!--        <p>{{// item.couId}}</p>-->
        <button @click="youhui(index)" class="mybut">领取</button>
      </li>
    </ul>
  </div>
</template>

<script>
    import inner3_zm from "./inner3_zm";
    import {mapActions} from 'vuex';
    export default {
        name: "inner2_zm",
        data(){
            return {
              // count:0,
              myList: [
              ],
              ylList: [],
              yllistcouJian:[],
              show:"",
            }
        },
        created() {
            // 请求优惠券后台接口，此次axios请求有参数，需要加请求头
            this.$axios({
                params: {
                  page: 0,
                  limit: 5
                },
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                url: 'http://139.196.200.142:80/cityshop-api-coupon/activity/actList'
              //本地服务器不需要http://
              //云服务器添加http://
              })
            .then(res=>{
                //请求优惠券返回数据
                this.myList = res.data.data.list
                // console.log(this.myList)

            })
                .catch((e) => {
                  console.log('获取数据失败');
                });
        },
        components:{
           inner3_zm:inner3_zm
        },
        methods:{
            // ...mapActions(['youhui']), //点击优惠券事件
            youhui(obj){
              this.ylList.push(this.myList[obj])
              this.show=this.ylList.length
              this.$store.commit("saveNum",this.show)
              console.log(this.ylList)


              this.ylList[obj].couJian
              console.log(this.ylList[obj].couJian)
              this.$store.commit("jiaNum",this.ylList[obj].couJian)
              // this.couId=this.myList[obj].couId
            }
        },
        computed:{

        }

    }
</script>

<style scoped>
  .in2_zm{
    width: 1020px;
    margin: 30px auto;
  }
  h1{
    margin: 20px;
  }
  li{
    float: left;
    width: 280px;
    /*border: 1px solid red;*/
    list-style: none;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #0099CC;
    margin: 10px;
  }
  button{
    width: 20%;
    height: 30px;
    padding: 0 5px;
    border-radius: 5px;
    /*background-color: #d5444b;*/
    border: none;
    margin: 5px 0px 5px 100px;
  }
  .mybut:focus{
    outline:none;
  }
  .mybut:hover{
    cursor: pointer;
    background-color:#bbbbbb;
    transition: all 1.5s;
  }
  p{
    margin: 5px auto;
    font-size: 15px;
    color: white;
    text-align: center;
  }



</style>
