/* jshint esversion: 6 */
import grzx_zm from "../../components/product_zm/grzx_zm";
import dindan from "../../components/product_zm/dindan";
import show_zm from "../../components/product_zm/zhzx/show_zm";
import inner1_zm from "../../components/product_zm/zhzx/inner1_zm";
import inner2_zm from "../../components/product_zm/zhzx/inner2_zm";
import inner3_zm from "../../components/product_zm/zhzx/inner3_zm";
import inner4_zm from "../../components/product_zm/zhzx/inner4_zm";


export default [
  {
    path: '/grzx_zm',
    name: 'grzx_zm',
    component: grzx_zm
  },
  {
    path: '/dindan',
    name: 'dindan',
    component: dindan
  },
  {
    path: '/show_zm',
    name: 'show_zm',
    component: show_zm,
    children:[
      {
        path: '/show_zm/inner1_zm',
        name: '/show_zm/inner1_zm',
        component: inner1_zm
      },
      {
        path: '/show_zm/inner2_zm',
        name: '/show_zm/inner2_zm',
        component: inner2_zm
      },
      {
        path: '/show_zm/inner3_zm',
        name: '/show_zm/inner3_zm',
        component: inner3_zm
      },
      {
        path: '/show_zm/inner4_zm',
        name: '/show_zm/inner4_zm',
        component: inner4_zm
      }
    ]
  }


]
