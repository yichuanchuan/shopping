<template>
    <div class="abc999">
      <h1><span class="el-icon-arrow-left"></span>我的收货地址</h1>
      <div>默认收货地址{{tableData[0]}}</div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="phone"
            label="电话"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>

<script>
    export default {
        name: "div2",
        data(){
          return {
            tableData: [{
              phone: '12345678911',
              name: '王小虎',
              address: '天津市普陀区金沙江路 1518 弄'
            }, {
              phone: '23568978998',
              name: '王1虎',
              address: '重庆市普陀区金沙江路 1517 弄'
            }, {
              phone: '56898888888',
              name: '王2虎',
              address: '北京市普陀区金沙江路 1519 弄'
            }, {
              phone: '999988555666',
              name: '王3虎',
              address: '广东深圳市普陀区金沙江路 1516 弄'
            }]
          }
    }
    }
</script>

<style scoped>
  .abc999{
    width: 800px;
    background: #d5444b;
    margin: 0 auto;
  }

</style>
