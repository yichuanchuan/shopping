// import Vuex from 'vuex'
//
// Vue.use(Vuex);

const state = {
  count:0, //优惠券原始数量
  // money:0 //优惠券金额
}

const getters = {//取state的值，输出值
  show(state){
    return state.count;
  },
  // quan25(state){
  //   return state.money
  // }
}
const actions = {//接收函数
  youhui(ctx){
    ctx.commit('youhui')
  },
  show(ctx,count) {
    ctx.commit("show",count)
  }

}

const mutations = {//改变函数传递数据
  youhui(state){
    state.count+=1;
  },
  show(state,count) {
    state.count = count
  },
  saveNum(state,num){
    state.count=num
  },
  // quan25(state,money) {
  //   state.money==25
  // }
}

export default {
  state,
  actions,
  getters,
  mutations
}
