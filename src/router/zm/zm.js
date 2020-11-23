/* jshint esversion: 6 */
import grzx_zm from "../../components/product_zm/grzx_zm";
import show_zm from "../../components/product_zm/zhzx/show_zm";
import inner1_zm from "../../components/product_zm/zhzx/inner1_zm";
import inner2_zm from "../../components/product_zm/zhzx/inner2_zm";
import inner3_zm from "../../components/product_zm/zhzx/inner3_zm";
import myList from "../../components/index/myList/myList"
import div1 from "../../components/product_zm/cheshi/div1"
import div2 from "../../components/product_zm/cheshi/div2"



export default [
  {
    path: '/grzx_zm',
    name: 'grzx_zm',
    component: grzx_zm
  },
  {
    path: '/inner1_zm',
    name: '/inner1_zm',
    component: inner1_zm
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
  },
  {
    path: '/div1',
    name: 'div1',
    component: div1
  },
  {
    path: '/div2',
    name: 'div2',
    component: div2
  }


]
