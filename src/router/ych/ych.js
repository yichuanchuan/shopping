import index from "../../components/index";
import myIndex from "../../components/index/myIndex";
import grzx_zm from "../../components/product_zm/grzx_zm";
import detail from "../../components/detail_lzy/detail";

export default [
  {
    path: "/",
    name: myIndex,
    component: myIndex
  },
  {
    path: "/index",
    name: index,
    component: index
  },
  {
    path: "/grzx_zm",
    name: grzx_zm,
    component: grzx_zm
  },
  {
    path: "/detail",
    name: detail,
    component: detail
  }
]
