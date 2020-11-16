import vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/actions'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import state from './state/state'

import user from './modules/user'
vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  user
})
