<template>
    <div class="show-box clear">
<!--      左边全部-->
      <div class="show-left_zm">
<!--        左边头像帐号-->
          <div class="show-1_zm">
            <img @click="qudiv1"
                 :src="$store.state.user_zm.tc01" alt="头像">
            <h3>{{username}}</h3>
            <p>优品帐户：18583737726</p>
        </div>

<!--          左下列表-->
          <div class="show-2_zm">
          <ul>
            <li>个人信息</li>
            <router-link to="div2" tag="li" >收货信息</router-link>
            <router-link to="grzx_zm" tag="li" >去上一页</router-link>
          </ul>
        </div>
      </div>

<!--      右边显示框-->
      <div class="show-right_zm">
        <inner1_zm></inner1_zm>
      </div>
    </div>
</template>

<script>
    import Inner1_zm from "./inner1_zm";
    export default {
        name: "show_zm",
      components: {Inner1_zm},
      data(){
          return {
            username:""
          }

      },
      methods:{
        qudiv1(){
          this.$router.push("/div1");

        }
      },
      comments:{
        Inner1_zm,
      },
      //props:['username'],
      created() {
          //接收页面传过来的参数username
          // console.log(this.$route.query.username)
        this.username=this.$route.query.username
      }

    }
</script>

<style scoped>
  .clear::before,
  .clear::after {
    content: '';
    display: table;
  }
  .clear::after {
    clear: both;
  }
  .show-box{
    width: 960px;
    padding-top: 40px;
    /*background-color: #5e5e5e;*/
    margin: 0 auto;
  }
  .show-left_zm{
    float: left;
    width: 192px;
    /*background-color: #00b3ee;*/
  }
  .show-1_zm{
    width: 100%;
    height: 104px;
    /*background-color: bisque;*/
    margin-bottom: 25.6px;
  }
  .show-1_zm img{
    width: 57.5px;
    height: 57.5px;
    border-radius: 50%;
    margin-left: 70px;
  }
  .show-1_zm h3{
    text-align: center;
    margin: 15px auto;
  }
  .show-1_zm p{
    width: 100%;
    height: 16px;
    margin-top: 6.4px;
    font-size: 12.8px;
    color: #000;
    text-align: center;
  }

  .show-2_zm ul li{
    list-style: none;
  }
  .show-2_zm li{
    padding: 25.6px 6.4px 5px 25.6px;
    border-radius: 6.4px;
    cursor: pointer;
    font-size: 12.8px;
    color: #333;
    height: 17.5px;
    line-height: 17.5px;
    text-align:center;
  }

  .show-right_zm{
    float: left;
    width: 720px;
    height: 620px;
    margin-left: 48px;
    /*background-color: yellow;*/
  }
</style>
