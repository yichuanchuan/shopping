<template>
  <form action="">
    <div class="middle_padding clear" v-for="item in arr">
      <label for="" class="checkbox">
        <input type="checkbox">
      </label>
      <div class="middle_left clear">
        <a href="#" class="middle_a"><img src="https://res.vmallres.com/pimages//product/6941487203314/428_428_7C0838B18CFE52544B5D3FF0E3EC806EA35766D4F7BC436Dmp.png" alt="加载失败"></a>
        <ul class="middle_ul clear">
          <li>
            <a href="#">
              {{item.commodity}}
            </a>
          </li>
          <li>{{item.price | showPrice}}</li>
          <li>
              <!--计数器-->
            <template>
              <el-input-number v-model="item.num" :min="1" :max="10" label="描述文字" style="width: 120px;"></el-input-number>
            </template>

          </li>
          <li>
            {{subtotal(item.price,item.num)}}
          </li>
          <li>删除</li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: "shopping_middle",
    data() {
      return {
        arr:[
          {
            commodity:"1356468519841321dwdwdawdawdw",
            price:300,
            num:1
          },
          {
            commodity:"13wdfsafwdsdw",
            price:520,
            num:1
          },
          {
            commodity:"?????????????????????",
            price:4250,
            num:1
          }
        ]
      };
    },
    methods: {
      subtotal(price,num){
        return "￥"+(price*num).toFixed(2);
      }
    },
    computed:{

    }
    ,
    filters:{
      showPrice(price){
        return "￥"+price.toFixed(2);
      }
    }
  }
</script>

<style scoped>
  .clear:before,.clear:after {
    display: block;
    content: "";
  }

  .clear:after {
    clear: both;
  }
  .middle_padding {
    background: #fff;
    padding-left: 40px;
    margin-top: 10px;
    padding-top: 20px;
  }
  .checkbox {
    float: left;
    margin: 43px 3px 0 0;
  }
  .middle_left {
    float: left;
  }
  .middle_a {
    width: 100px;
    height: 100px;
    margin-left: 20px;
    float: left;
  }
  .middle_a img {
    width: 100%;
    height: 100%;
  }
  .middle_ul {
    float: left;
  }
  .middle_ul {
    float: left;
  }
  .middle_ul li {
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin-left: 30px;
    text-align: center;
  }
  .middle_ul li:first-child {
    width: 450px;
    text-align: left;
    margin-left: 0;
  }
</style>
