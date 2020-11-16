<template>
  <div>
    <p class="in1_p_zm">个人信息</p>
    <p>
      <img src="" alt="图片">
      <span>头像</span>
    </p>
    <p>
      <span>昵称</span>
      <input></input>
      <i></i>
    </p>
    <p>
      <span>华为号</span>
      <input></input>
      <i></i>
    </p>
    <p>
      <span>性别</span>
      <input></input>
    </p>
    <p>
      <span>地区</span>
      <select>
        <option>四川</option>
      </select>
      <select>
        <option>成都</option>
      </select>
    </p>
    <p>
      <span>姓名</span>
      <input></input>
    </p>
    <p>
      <span>生日</span>
      <select>
        <option></option>
      </select>
      <select>
        <option></option>
      </select>
      <select>
        <option></option>
      </select>
    </p>
    <form>
      <h1>获取数据表单</h1>
      电话：<input text="phone"></input>
      <button @click="fasong">提交</button>
    </form>




  </div>
</template>

<script>
    export default {
        name: "inner1_zm",
      methods:{
        fasong(){
          this.$axios.get('http://192.168.4.186:8769/sms/send?phone='.this.form.phone)
            .then(res=>{
              console.log(res.data)
            })
        }

      }
    }
</script>

<style scoped>

</style>
