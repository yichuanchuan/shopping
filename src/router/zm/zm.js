/* jshint esversion: 6 */
import grzx_zm from "../../components/product_zm/grzx_zm";
import show_zm from "../../components/product_zm/zhzx/show_zm";
import inner1_zm from "../../components/product_zm/zhzx/inner1_zm";
import inner2_zm from "../../components/product_zm/zhzx/inner2_zm";
import inner3_zm from "../../components/product_zm/zhzx/inner3_zm";
import inner4_zm from "../../components/product_zm/zhzx/inner4_zm";
import myList from "../../components/index/myList/myList"


export default [
  {
    path: '/grzx_zm',
    name: 'grzx_zm',
    component: grzx_zm
  },
  {
    path: '/inner2_zm',
    name: '/inner2_zm',
    component: inner2_zm
  },
  {
    path: '/inner3_zm',
    name: '/inner3_zm',
    component: inner3_zm
  },
  {
    path: '/show_zm',
    name: 'show_zm',
    component: show_zm
  },
  {
    path: '/myList',
    name: 'myList',
    component: myList
  }


]
