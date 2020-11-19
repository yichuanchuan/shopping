<template>
  <div>
    <h1>所有优惠券列表</h1>
<!--    {{// myList}}-->
    <router-link tag="h1" :to="{path:'inner3_zm', query:{ylList:ylList}}" >已领优惠券数量{{show}}</router-link>
    <ul>
      <li v-for="(item,index) in myList" :key="index">
        <p>{{item.couName}}</p>
<!--        <h1>￥{{item.couJian}}</h1>-->
        <p>{{item.actName}}</p>
        <p>活动开始时间：{{item.actStartTime}}</p>
        <p>活动结束时间：{{item.actEndTime}}</p>
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
              myList: [],
              ylList: [],
              show:""
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
              console.log(this.ylList)
              this.show = this.ylList.length
              this.commit("show",this.show)
            }
        },
        computed:{
            // ...mapGetters(['show'])//优惠券领取数量总和
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
