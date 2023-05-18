import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";
import { fetchOrders } from "./ordersSlice";
import {
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Orders() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const orders = useSelector((state) => state.orders.orders);
  const error = useSelector((state) => state.orders.error);

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
        {error ? (
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      No Orders In This Page Yet
                    </MDBTypography>
                  </MDBCardHeader>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
          orders.map((order) => <OrderDetails key={order.id} order={order} />)
        )}
      </section>
    </>
  );
}
