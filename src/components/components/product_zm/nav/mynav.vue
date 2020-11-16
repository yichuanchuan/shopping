<template>
  <nav>
    <ul>

      <router-link to="/grzx_zm" active-class="myactive" tag="li">个人中心</router-link>

      <router-link to="/dindan" active-class="myactive" tag="li">我的订单</router-link>

      <router-link to="/show_zm" active-class="myactive" tag="li">帐号中心</router-link>

    </ul>
  </nav>
</template>

<script>
    export default {
        name: "mynav"
    }
</script>

<style scoped>

  li{
    width: 80px;
    height: 50px;
    border: 1px solid black;
  }

</style>
