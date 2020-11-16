<template>
  <div>
    <h1>
      {{ shop_list.cinformation_name }}
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
      created() {
          this.$axios.post("http://192.168.4.189:8765/cinformation/findById?id=1")
            .then(response=> {
            this.shop_list = response.data.data[0];
          })
      }
    }
</script>

<style scoped>
  h1 {
    color: #3a3a3a;
    font-size: 18px;
  }
</style>
