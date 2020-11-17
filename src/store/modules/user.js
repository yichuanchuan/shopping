const state = {
  loginbox: false
}

const actions = {

}

const getters = {
  getLoginBox:state=> state.loginbox
}

const mutations = {
  openLogin(ctx) {
    ctx.loginbox = true;
    console.log(state.loginbox)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
