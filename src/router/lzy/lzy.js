import detail from "../../components/detail_lzy/detail";
import Order from "../../components/ConfirmOrder_hj/Order";
import shopping from "../../components/yan/shopping";
export default [
  {
    path: "/detail",
    name: detail,
    component: detail
  },
  {
    path: "/Order",
    name: Order,
    component: Order
  },
  {
    path: "/shopping",
    name: shopping,
    component: shopping
  }
]
