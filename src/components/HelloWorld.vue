<template>
  <div class="hello">
    <button @click="demo1">测试</button>
    <button @click="demo2"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    demo1 () {
      let num = 1;
      this.$store.dispatch("zm_demo1",num)
    },
    demo2() {
      let num = 1;
      this.$store.dispatch("demo2",num)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 80px;
  height: 40px;
  line-height: 40px;
  background-color: pink;
}
</style>
