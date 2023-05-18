import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";
import { fetchOrders } from "./ordersSlice";

export default function Orders() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const orders = useSelector((state) => state.orders.orders);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchOrders());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <>
      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        {orders.map((order) => (
          <OrderDetails key={order.id} order={order} />
        ))}
      </section>
    </>
  );
}
