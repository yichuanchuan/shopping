<template>
  <div>
    <el-table
      :data="cartProducts"
      empty-text="您的购物车空空如也......."
    >

      <el-table-column
        prop="name"
        label="名称"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        align="center">
      </el-table-column>

      <el-table-column
        prop="num"
        label="数量"
        align="center">
        <!--计数器-->
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.num"  :min="1" :max="10" label="描述文字"></el-input-number>
        </template>

      </el-table-column>

      <el-table-column
        label="操作"
        align="center">
        <template slot-scope="scope">
<!--          <el-button @click="delProduct(scope.row)" type="text" size="small">删除</el-button>-->
<!--          <el-popover placement="right">-->
<!--            <p>确定删除吗？</p>-->
<!--            <div style="text-align: right; margin: 10px 0 0">-->
<!--              <el-button-->
<!--                type="primary"-->
<!--                size="mini"-->
<!--                @click="delProduct(scope.row)"-->
<!--              >确定</el-button>-->
<!--            </div>-->
<!--            <i class="el-icon-error" slot="reference" style="font-size: 18px;"></i>-->
<!--          </el-popover>-->
          <el-popover
            placement="right"
            width="160"
            v-model="visible">
            <p>这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button type="primary" size="mini" @click="delProduct(scope.row)">确定</el-button>
            </div>
            <el-button slot="reference">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: "cart",
    data(){
      return {
      }
    },
    methods:{

      //删除当前购物车信息
      ...mapActions(['delProduct'])
    },
    computed:{
      //去获取cart.js中getters对象中的cartProducts属性
      ...mapGetters(['cartProducts'])
    }
  }
</script>

<style scoped>

</style>

<style>
  .el-table {
    width: 1200px;
    margin: auto;
  }
</style>

