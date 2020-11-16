<template>
  <div class="myFooter">
    <footerUp></footerUp>
    <footerMiddle></footerMiddle>
    <footerDown></footerDown>
  </div>
</template>

<script>
    import footerUp from "./footerup/footerUp";
    import footerMiddle from "./footermidle/footerMiddle";
    import footerDown from "./footerdown/footerDown";
    export default {
        name: "pageFooter",
        components: {
          footerUp,footerMiddle,footerDown
        }
    }
</script>

<style scoped>
  .myFooter {
    width: 100%;
    height: 400px;
    background-color: rgb(249,249,249);
  }
</style>
