const state = {
  loginBox: false,
  useName:[]
}

const actions = {
 consumerId(ctx,product) {
   ctx.commit('consumerId',product)
 },
}

const getters = {
  getLoginBox:state=> state.loginBox,
  getConsumerId(state) {
    return state.useName
  }

}

const mutations = {
  openLogin(state) {
    state.loginbox = true;
    console.log(state.loginbox)
  },
  consumerId(state,product) {
      state.useName.push(product)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
