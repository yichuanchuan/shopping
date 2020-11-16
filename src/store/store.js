import Vue from 'vue'
import Vuex from 'vuex'

import  cart from './modules/cart'


Vue.use(Vuex);

export default new Vuex.Store({//导出Vuex.Store对象
  modules:{
    cart
  }
})
