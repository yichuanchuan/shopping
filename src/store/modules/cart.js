const state={
  //购物车数据
  added:[
    //   {
    //   id: 47,
    //   name: '米饭',
    //   price: 2,
    //   num:1
    // }
    // {
    //   id: 1,
    //   name: '小米6',
    //   price: 2586,
    //   num:1
    // },
    // {
    //   id: 2,
    //   name: '华为P10Plus',
    //   price: 4528,
    //   num:1
    // },
  ]
};

const getters={

  //对视图返回的数据-对视图供货获取数据的方法

  //product组件需要的所有商品的数据
  shoplist:state=>state.shop_list,

  //等同于：

  // shoplist:function (state) {
  //   return state.shop_list
  // }


  //返回购物车组件需要的数据
  cartProducts:state=>state.added,


  //获取总数和总价在shopping_puchase中用
  // totalNum:(state,getters)=>{
  //   let totalnum=0;
  //   // console.log("1111111111111111");
  //   // console.log(getters);
  //   // forEach(): 用于调用数组的每个元素，并将元素传递给回调函数
  //   getters.cartProducts.forEach(item=>{//[{},{},{}]
  //     totalnum+=item.num;
  //     console.log(item)
  //     console.log(totalnum)
  //   });
  //   console.log("222")
  //   console.log(totalnum)
  //   return totalnum;
  //
  //
  // },
  totalPrice:(state,getters)=>{
    let totalprice=0;
    getters.cartProducts.forEach(item=>{
      totalprice+=item.cspecifications_commodityprice*item.num
    });
    return totalprice;
  },
  getNum (state) {
    // 购物车商品总数量
    let allNum1 = 0;
    for (let i = 0; i < state.added.length; i++) {
      let temp22 = state.added[i];
      console.log(allNum1)
      console.log(temp22)
      console.log(temp22.num)
      allNum1 += temp22.num;
      console.log(allNum1)
    }
    return allNum1;
  },

};

const actions={
  //异步操作
  //添加购物车  删除指定商品 清空购物车
  addToCart(ctx,product){
    ctx.commit("add",product)
  },
  clearAllCart(ctx){
    ctx.commit("clearAll")//通知mutation需要修改数据
  },
  //删除当前购物车信息
  delProduct(ctx,product){//product是页面scope.row 传递过来
    ctx.commit('del',product);
  },
  //小计subtotal
  subtotal(ctx) {
    ctx.commit("sub");
  },
  unshiftShoppingCart ({ commit }, data) {
    commit('unshiftShoppingCart', data);
  },

};

const mutations={
  //添加：购物车数据中添加一条数据  ----修改state.购物车的数据  push
  unshiftShoppingCart (state, data) {
    // 添加购物车
    // 用于在商品详情页点击添加购物车,后台添加成功后，更新vuex状态
    state.added=data.data;
    console.log(state.added)
  },
  //删除指定商品：state.购物车数据.splice()
  //清空购物车：sate.购物车数据=[]
  clearAll(state){
    state.added=[];
  },
  //删除指定购物车的商品
  del(state,product){
    state.added.map((item,index)=>{
      if(item.pid===product.pid){
        state.added.splice(index,1)
      }
    })
  },
};
//导出
export  default {
  state,
  mutations,
  actions,
  getters
}
