const state = {
  loginBox: false
}

const actions = {

}

const getters = {
  getLoginBox:state=> state.loginBox
}

const mutations = {
  openLogin(state) {
    state.loginbox = true;
    console.log(state.loginbox)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
