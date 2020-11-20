<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="500px">
        <el-carousel-item v-for="(item,index) in imgSrc" :key="index">
              <img :src="item.img"/>
        </el-carousel-item>
      </el-carousel>
    </div>
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
            {id:1,img:"https://img.alicdn.com/tfs/TB1_1OLxQL0gK0jSZFtXXXQCXXa-1130-500.jpg_q100.jpg_.webp"},
            {id:2,img:"https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"},
            {id:3,img:"https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000004434/O1CN01b8Woiy1icon6D05AU_!!6000000004434-0-octopus.jpg"},
            {id:5,img:"https://img.alicdn.com/tps/TB1JVu7LVXXXXacXFXXXXXXXXXX-1130-500.jpg_q100.jpg_.webp"}
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
