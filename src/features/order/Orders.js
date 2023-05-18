import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import OrderDetails from "./OrderDetails";

export default function Orders() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      api
        .get("/orders/")
        .then((response) => {
          setOrders(response.data.orders);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [isLoggedIn]);
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
