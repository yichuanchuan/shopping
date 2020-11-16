<template>
  <div>
<!--    <indexBanner></indexBanner>-->
    <template>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgSrc" :key="item.id">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <myList></myList>
  </div>
</template>

<script>
    import myList from "./myList/myList";
    export default {
        name: "myIndex",
        components: {
        myList
        },
      data() {
        return {
          imgSrc: [
            {id:1,img:require('@/assets/images/1.jpg')},
            {id:2,img:require('@/assets/images/2.jpg')},
            {id:3,img:require('@/assets/images/3.jpg')},
            {id:4,img:require('@/assets/images/4.jpg')},
            {id:5,img:require('@/assets/images/5.jpg')},
            {id:6,img:require('@/assets/images/6.jpg')},
          ]
        }
      }
    }
</script>

<style scoped>
.indexBox {
  width: 800px;
  height: 800px;
  background-color: red;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
