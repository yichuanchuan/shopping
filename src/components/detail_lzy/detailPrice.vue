<template>
    <div class="detailPrice">
      <div class="detailPrice1">
        <span class="Price">价格：</span>
        <span class="num-ico">￥</span>
        <span class="num">
          {{ shopList.cspecifications_commodityprice }}
        </span>
      </div>
      <div class="detailPrice1">
      <span class="Price">促销价格：</span>
      <span class="num-ico">￥</span>
      <span class="num">
        {{ shopList.cspecifications_promotionprice }}
      </span>
    </div>
      <div class="detailPrice1">
        <discounts></discounts>
      </div>
    </div>
</template>

<script>
  import discounts from "./discounts";
    export default {
        name: "detailPrice",
      components: {
        discounts
      },
      data() {
          return {
            // commodityPrice:[],
            // promotionPrice:[]

          }
      },
      props: {
        shopList: {
          type: Object
        }
      }
    }
</script>

<style scoped>
  .detailPrice {
    height: 150px;
    padding: 10px;
    /*background-color: #e7e1e1;*/
    background-image: url("../../assets/images/001.png");
}
  .detailPrice1 {
    margin: 20px 0;
  }
  .Price {
    color: #848282;
    font-size: 12px;
    margin-right: 10px;
  }
  .num {
    font-size: 25px;
    font-weight: 700;
    color: #ca141d;
  }
  .num-ico {
    color: #ca141d;
  }
</style>
