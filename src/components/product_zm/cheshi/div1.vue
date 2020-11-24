<template>
    <div>
<!--        <h1>我是页面1-->
<!--          <h1>one {{this.$store.state.user_zm.one}}</h1>-->
<!--          <h2>count {{this.$store.state.user_zm.count}}</h2>-->
<!--          <button @click="myone">count+</button>-->
<!--        </h1>-->
        <div class="abc888">
            <h3>上传头像</h3>
<!--          <img :src="mysrc" alt="图片">-->
            <div class="abc888-div1" >
              <img :src="$store.state.user_zm.tc01" alt="图片" :style="{transform:'scale('+multiples+')'}">
            </div>

            <div >
                <el-progress :percentage="percentage" :color="customColor" class="abc888-div1-el" ></el-progress>
                <div class="btn-div">
                    <el-button-group>
                      <el-button icon="el-icon-minus" @click="decrease"></el-button>
                      <el-button icon="el-icon-plus" @click="increase"></el-button>
                    </el-button-group>
                </div>

                    <p>支持的图片格式：jpg、jpeg、png。</p>
                    <p>华为产品的用户都可以看到您的头像。</p>
                    <p>如果图片包含不适当的内容，它将被默认图片替换。</p>

<!--              <el-button type="primary" class="btn-2">上传图片</el-button>-->
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false">
                <i slot="default" class="el-icon-plus" >上传图片</i>
                <div slot="file" slot-scope="{file}" >
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <i class="el-icon-zoom-in"></i>
                        </span>
            <!--        <span-->
            <!--          v-if="!disabled"-->
            <!--          class="el-upload-list__item-delete"-->
            <!--          @click="handleDownload(file)"-->
            <!--        >-->
            <!--          <i class="el-icon-download"></i>-->
            <!--        </span>-->
            <!--        <span-->
            <!--          v-if="!disabled"-->
            <!--          class="el-upload-list__item-delete"-->
            <!--          @click="handleRemove(file)"-->
            <!--        >-->
            <!--          <i class="el-icon-delete"></i>-->
            <!--        </span>-->
                    </span>
                </div>
              </el-upload>
<!--              <el-dialog :visible.sync="dialogVisible">-->
<!--                <img width="100%" :src="dialogImageUrl" alt="">-->
<!--              </el-dialog>-->
<!--              <el-button  type="primary">提交头像</el-button>-->
              <button @click="tijianimg">提交头像</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "div1",
        data(){
            return {
              percentage:0,
              customColor: '#409eff',
              // tc01:require('../../../../static/images/4-2-1.png'),
              multiples: 1,
              // mysrc:require('../../../../static/images/4-2-1.png'),
              // mysrc:"blob:http://localhost:8080/adfd2248-2e5a-4c0b-97ea-d17090ddcd6d"

              dialogImageUrl: '',
              dialogVisible: false,
              disabled: false
            }

        },

      methods:{
        increase() {
          this.percentage += 10;
          if (this.percentage > 90) {
            this.percentage=100;
          }

          this.multiples += 0.25;
          if(this.multiples>3.5){
            this.multiples=3.5
          }
        },
        decrease() {
          this.percentage -= 10;
          if (this.percentage < 10) {
            this.percentage = 0;
          }

          this.multiples -= 0.25;
          if(this.multiples<1){
            this.multiples=1
          }
        },
        // handleRemove(file) {
        //   console.log(file);
        // },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          console.log(file.url+".png");

          this.$store.state.user_zm.tc01=file.url
          console.log(this.$store.state.user_zm.tc01)
          this.dialogVisible = false;
        },
        // handleDownload(file) {
        //   console.log(file);
        // }
        tijianimg(){
          this.$router.push("/show_zm");
          this.src=this.$store.state.user_zm.tc01;
          console.log(this.src)
          this.$store.commit("gaisrc",this.src);
          // this.$router.push({path: "/show_zm", query: {tc01:this.$store.state.user_zm.tc01}});
        }
      },

      computed:{

      }
    }
</script>

<style scoped>

  .abc888{
    width: 500px;
    padding: 32px;
    margin: 0 auto;
    /*border: 2px solid green;*/
  }
  .abc888-div1{
    width: 160px;
    height: 160px;
    border-radius: 80px;
    overflow: hidden;
    margin-left: 160px;
    margin-bottom: 10px;
  }
  .abc888 img{
    width: 160px;
    height: 160px;
  }
  .abc888-div1-el{
    width: 180px;
    margin-left: 165px;
    margin-bottom: 10px;
  }
  .btn-div{
    margin-left: 175px;
    margin-bottom: 10px;
  }
  .abc888 p{
    width: 100%;
    text-align: center;
    /*margin-bottom: 10px;*/
  }
  .btn-2{
    margin-top: 10px;
    margin-left: 136px;
  }

</style>
