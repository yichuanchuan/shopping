import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import user from './modules/user'
import user_zm from "./modules/user_zm";


Vue.use(Vuex);

export default new Vuex.Store({//导出Vuex.Store对象
  modules:{
    cart,
    user,
    user_zm
  }
})
