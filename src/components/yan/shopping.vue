/*import(进口、引进)*/

<template>

  <div class="app_mwidth">
    <div class="app_width">
      <div class="shopping">购物车</div>
      <cart></cart>
      <shopping_purchase></shopping_purchase>
    </div>
  </div>


</template>


<script>
  // import shopping_header from './shopping_header';
  // import shopping_middle from './shopping_middle';
  import shopping_purchase from './shopping_purchase';
  // import shopping_footer from './shopping_footer';
  import cart from './cart';

  export default {
    name: "shopping",
    components:{
      // shopping_header,
      // shopping_middle,
      shopping_purchase,
      // shopping_footer,
      cart
    }
  }
</script>

<style scoped>
  .shopping {
    font-weight: bold;
    font-size: 32px;
    padding: 0 20px 20px;
    text-align: center;
  }

  .app_mwidth {
    background: #f5f5f5;
    min-width: 1200px;
    min-height:400px;
    position: relative;

  }
  .app_width {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
