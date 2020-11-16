/*import(进口、引进)*/

<template>

    <div class="app_mwidth">
      <div class="app_width">
        <cart></cart>
        <shopping_purchase></shopping_purchase>
        <shopping_footer></shopping_footer>
      </div>
    </div>


</template>


<script>
  import shopping_header from './shopping_header';
  import shopping_middle from './shopping_middle';
  import shopping_purchase from './shopping_purchase';
  import shopping_footer from './shopping_footer';
  import cart from './cart';

    export default {
      name: "shopping",
      components:{
        shopping_header,
        shopping_middle,
        shopping_purchase,
        shopping_footer,
        cart
      }
    }
</script>

<style scoped>
  .app_mwidth {
    background: #f5f5f5;
    min-width: 1200px;
  }
  .app_width {
    width: 1200px;
    margin: auto;
  }
</style>
