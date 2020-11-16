<template>
  <div class="imgBox0">
    <div class="productShowBox"  id="productShowBox" @mouseover="mouseOver" @mouseleave="mouseLeave"
         @mousemove="mouseMove">
      <div class="imgBox" id="imgBox" >
<!--        <img :src="src" id="imgSmall">-->
<!--        <img src="../../assets/images/002.jpg" id="imgSmall">-->
      </div>
      <div class="cutBox" id="cutBox"></div>
    </div>
    <div id="imgBig">
<!--      <img :src="src" id="imgBig">-->
      <div class="imgShow" id="imgShow"></div>
    </div>
  </div>
</template>
<script>
    export default {
      name: "detailImg",
      data() {
        return {
          src: 'https://img.alicdn.com/imgextra/i4/880734502/O1CN01d4DCh21j7xhjfScue_!!880734502.jpg_430x430q90.jpg'
        }
      },
      methods: {
        mouseOver(e) {
          let imgBig = document.getElementById("imgBig");
          let cutBox = document.getElementById("cutBox");

          imgBig.style.display = "block"
          cutBox.style.display = "block"
        },
        mouseLeave() {
          let imgBig = document.getElementById("imgBig");
          let cutBox = document.getElementById("cutBox");
          cutBox.style.display = "none"
          imgBig.style.display = "none"

        },
        mouseMove(e) {
          let productShowBox = document.getElementById("productShowBox");
          let cutBox = document.getElementById("cutBox");
          let X = productShowBox.getBoundingClientRect().left;
          let Y = productShowBox.getBoundingClientRect().top;
          let imgBig = document.getElementById("imgBig");
          let imgSmall = document.getElementById("imgSmall");
          let imgShow = document.getElementById("imgShow");
          // console.log(X)
          // console.log(Y)
          // console.log(cutBox.style.top)
          cutBox.style.left = e.clientX-X-100+"px"
          cutBox.style.top = e.clientY-Y-100+"px"
          if(parseInt(cutBox.style.left)<=0){
            cutBox.style.left = "0px"
          }
          if(parseInt(cutBox.style.left)>=300){
            // console.log(cutBox.style.left)
            cutBox.style.left="300px";
          }
          if (parseInt(cutBox.style.top)<=0) {
            // console.log(cutBox.style.top)
            cutBox.style.top = "0px"
          }
          if (parseInt(cutBox.style.top)>=300) {
            cutBox.style.top = "300px"

          }

          // imgBig.style.left = -parseInt(cutBox.style.left)+"px"
          // imgBig.style.top = -parseInt(cutBox.style.top)+"px"
          imgShow.style.backgroundPosition = -parseInt(cutBox.style.left)+"px "+-parseInt(cutBox.style.top)+"px";
          // console.log(imgShow.style.backgroundPosition)

        }
      }
    }
</script>

<style scoped>
  .productShowBox {
    position: relative;
    width: 500px;
    height: 500px;
    margin-top: 10px;
  }
  /*原图*/
  .imgBox {
    background-image: url("../../assets/images/002.jpg");
    background-repeat:no-repeat;
    background-position:center;
    width: 500px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;

  }
  /*原图 img*/
  /*#imgSmall {*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/


  /*裁剪*/
  .cutBox {
    display: none;
    width: 200px;
    height: 200px;
    border: 1px solid #848282;
    position: absolute;
    z-index: 1;
    cursor: move;
    background-color: rgba(256,256,256,0.5);
  }
  /*展示div*/
  .imgShow {
    background-image: url("../../assets/images/002.jpg");
    background-repeat:no-repeat;
    background-position:0 0;
    transform: scale(2);
    /*display: none;*/
    transform-origin:0 0;
    width: 400px;
    height: 400px;




  }
  /*展示外框*/
  #imgBig {
    display: none;
    position: absolute;
    left: 620px;
    top: 9px;
    z-index: 999;
    width: 400px;
    height: 400px;
    overflow: hidden;
    border: 1px solid #848282;
  }
</style>
