import Vue from 'vue'
import Router from 'vue-router'
import lzy from './lzy/lzy'
import ych from './ych/ych'
import yxk from './yxk/yxk'
import zm from './zm/zm'
import hj from './hj/hj'

Vue.use(Router)

export default new Router({
  routes: [
    ...lzy,
    ...ych,
    ...yxk,
    ...zm,
    ...hj
  ]
})
