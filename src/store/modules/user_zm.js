// import Vuex from 'vuex'
//
// Vue.use(Vuex);

const state = {
  count:0, //优惠券原始数量
  jian:0,  //优惠券金额
  tc01:require("../../../static/images/4-2-1.png")

}

const getters = {//取state的值，输出值

}
const actions = {//接收函数
  // youhui(ctx){
  //   ctx.commit('youhui')
  // }

}

const mutations = {//改变函数传递数据
  // youhui(state){
  //   state.count+=1;
  // },
  saveNum(state,num){
    state.count=num
  },
  jiaNum(state,num){
    state.jian+=num
  },
  gaisrc(state,src){
    // console.log(state.tc01)
    // console.log(11111111111111111);
    // console.log(src)
    state.tc01=src
    console.log(state.tc01)
  }


}

export default {
  state,
  actions,
  getters,
  mutations
}
