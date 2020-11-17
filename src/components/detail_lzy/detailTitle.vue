<template>
  <div>
    <h1>
      {{ shopList.cinformation_name }}
    </h1>
  </div>
</template>

<script>
    export default {
        name: "detailTitle",
      data() {
          return {
            shop_list: []
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
  h1 {
    color: #3a3a3a;
    font-size: 18px;
  }
</style>
