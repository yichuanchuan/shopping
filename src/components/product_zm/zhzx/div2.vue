<template>
  <div id="headImg">
    <div id="myPhoto">
      <div class="viewPhoto" @click="monidianji">
<!--        <i class="el-icon-plus"></i>-->
        <img :src=$store.state.user_zm.tc01 alt="" id="portrait" style="width: 200px;height: 200px" />
      </div>
      <p>提示：请选择本地图片上传，支持各种图片格式</p>
      <div class="listBox">
        <input type="file" id="saveImage" name="myphoto">
      </div>
<!--      <div class="save">-->
<!--        <el-button type="danger" size="small" @click="imageSubmit">上传头像</el-button>-->
<!--        <div style="margin-bottom:70px;padding-top: 30px"><span>{{uploadDate}}</span></div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "div2",
        data(){
            return {
              imageSave:"",//图片路径
              uploadDate:"",//上传时间
            }
        },
        methods:{
            monidianji(){
              document.getElementById('saveImage').click()
            },
            //实时显示该图片在页面 预览
            yulan(){
                document.getElementById('saveImage').onchange = function () {
                    var imgFile = this.files[0];
                    var fr = new FileReader();
                    fr.onload = function () {
                      document.getElementById('portrait').src = fr.result;
                      console.log(fr.result)
                    };
                    fr.readAsDataURL(imgFile);
                    console.log(imgFile)
                    console.log(imgFile.name)

                }
            }

        },
      mounted(){
        this.yulan();//预览图片
      },
    }
</script>

<style scoped>
  #headImg{
    margin-left: 50px;
  .viewPhoto{
    border: 1px rgba(99, 199, 210, 0.79) dashed;
    width: 200px;
    height: 200px;
  }
  #saveImage{
    display: none;
  }
  .save{
    margin: 30px auto;
  }
  .viewPhoto{
    position: relative;
    float: left;
    margin-right: 10%;
  }
  .el-icon-plus{
    font-size: 50px;
    color: rgba(99, 199, 210, 0.79);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    text-align: center;
  }
  }

</style>
