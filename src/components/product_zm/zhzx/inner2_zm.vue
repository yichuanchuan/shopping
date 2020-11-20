<template>
  <div class="in2_zm">
    <h1>优惠券列表</h1>
<!--    {{// myList}}-->
    <router-link tag="h1" :to="{path:'inner3_zm', query:{ylList:ylList}}" >已领优惠券数量{{show}}</router-link>
<!--    <h1>优惠券金额{{money}}</h1>-->
    <ul>
      <li v-for="(item,index) in myList" :key="index">
        <p>{{item.couName}}</p>
<!--        <h1>￥{{item.couJian}}</h1>-->
        <p>{{item.actName}}</p>
        <p>活动开始时间：{{item.actStartTime}}</p>
        <p>活动结束时间：{{item.actEndTime}}</p>
<!--        <p>{{// item.couId}}</p>-->
        <button @click="youhui(index)">领取</button>
      </li>
    </ul>
  </div>
</template>

<script>
    import inner3_zm from "./inner3_zm";
    import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "inner2_zm",
        data(){
            return {
              // count:0,
              myList: [
              ],
              ylList: [],
              show:"",
              money:"",
              a:[],
              b:"",
              c:""

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
            ...mapActions(['youhui']), //点击优惠券事件
            youhui(obj){
              this.ylList.push(this.myList[obj])
              // console.log(this.ylList)
              this.show=this.ylList.length
              this.$store.commit("saveNum",this.show)
              console.log(this.ylList)

              this.couId=this.myList[obj].couId
              this.a.push(this.myList[obj].couId)


              // this.msg=this.myList[obj].couId.length
              this.$store.commit("quan25",this.couId)
            }
        },
        computed:{
            ...mapGetters(['show'])//优惠券领取数量总和
          // ...mapGetters(['money'])//优惠券领取数量总和
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
    background-color: #E6A23C;
    margin: 10px;
  }
  button{
    width: 20%;
    height: 30px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: #d5444b;
    outline:none;
    margin: 5px 0px 5px 100px;
  }
  p{
    margin: 5px auto;
    font-size: 15px;
    color: white;
    text-align: center;
  }



</style>
