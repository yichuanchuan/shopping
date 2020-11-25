<template>
    <div class="detailText">
      <p class="details-text">
        {{ shopList.cinformation_dsc }}

      </p>
      <div class="share-box" @click="show3 = !show3">
        <div class="el-icon-share"></div>
        <div class="share">分享</div>
      </div>
      <div class="shareBox">
        <el-collapse-transition>
          <div v-show="show3" >
            <div class="iconBox">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pengyouquan"></use>
              </svg>
            </div>
            <div class="iconBox">
              <svg class="icon icon2" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
            </div>
            <div class="iconBox">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
</template>
<script>
    import '../../assets/font_ob5ar8qt83l/iconfont'
    export default {
        name: "detailText",
      data() {
          return{
            post:this.post,
            show3: false
          }
      },
      props: {
        shopList :{
          type: Object
          }
      }
    }
</script>


<style scoped>
  @import "../../assets/font_ob5ar8qt83l/iconfont.css";
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 28px;

  }
  .detailText {
    padding: 10px;
    height: 120px;
    /*background-color: #f6f4f4;*/
    position: relative;
  }
  .el-icon-share {
    font-size: 21px;
    color: #ca151d;
  }
  .share {
    font-size: 11px;
    color: #848282;
  }
  .share-box {
    position: absolute;
    right: 14px;
    bottom: 20px;
    cursor: pointer;
  }
  .share-box:hover .share {
    color: #ca151d;
  }
  .details-text {
    font-size: 13px;
    color: #848282;
  }
  .shareBox {
    float: right;
    margin-top: 45px;
  }
  .iconBox {
    margin-bottom: 3px;

  }
  .icon2 {

  }

</style>
