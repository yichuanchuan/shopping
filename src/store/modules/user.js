const state = {
  loginBox: false,
  useName:[],
  isLogin:false
}

const actions = {
 consumerId(ctx,product) {
   ctx.commit('consumerId',product)
 },
  loginState(ctx,product) {
   ctx.commit('loginState')
  },
  confirm(ctx) {
   ctx.commit('confirm')
  },
  loginBox(ctx) {
    ctx.commit('loginBox')
  }
}

const getters = {
  getLoginBox:state=> state.loginBox,
  getConsumerId(state) {
    return state.useName
  },
  loginState(state) {
    return state.isLogin
  },
  loginBox(state) {
    return state.loginBox
  }

}

const mutations = {
  openLogin(state) {
    state.loginbox = true;
    console.log(state.loginbox)
  },
  consumerId(state,product) {
      state.useName.push(product)
  },
  loginState(state) {
    state.isLogin = true;
  },
  confirm(state) {
    state.loginBox = true;
  },
  loginBox(state){
    state.loginBox = false;
  }


}

export default {
  state,
  actions,
  getters,
  mutations
}
