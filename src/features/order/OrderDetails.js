import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import OrderProduct from "./OrderProduct";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "./ordersSlice";
import { Link } from "react-router-dom";

export default function OrderDetails({ order }) {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const orders = useSelector((state) => state.orders.orders);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !hasFetched && !orders.length) {
      dispatch(fetchOrders())
        .then(() => {
          setHasFetched(true);
        })
        .catch((error) => {
          console.log("Failed to fetch orders:", error);
        });
    }
  }, [isLoggedIn, hasFetched, dispatch, orders.length]);

  if (!order) {
    order = orders.find((order) => order.id === Number(orderId));
  }

  return (
    <>
      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    {order
                      ? "Thanks for your Order."
                      : "No Order In This Page Yet"}
                  </MDBTypography>
                </MDBCardHeader>
                {order ? (
                  <Link to={`/orders/${order.id}`}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p
                          className="lead fw-normal mb-0"
                          style={{ color: "hsl(38, 69%, 59%)" }}
                        >
                          Receipt
                        </p>
                      </div>

                      <MDBCard className="shadow-0 border mb-4">
                        <MDBCardBody>
                          {
                            // products
                            order
                              ? order.products.map((product) => (
                                  <OrderProduct
                                    key={product.id}
                                    product={product}
                                  />
                                ))
                              : ""
                          }

                          <MDBRow className="align-items-center">
                            <MDBCol md="2">
                              <p className="text-muted mb-0 small">
                                Track Order
                              </p>
                            </MDBCol>
                            <MDBCol md="10">
                              <MDBProgress
                                style={{ height: "6px", borderRadius: "16px" }}
                              >
                                <MDBProgressBar
                                  style={{
                                    borderRadius: "16px",
                                    backgroundColor: "hsl(38, 69%, 59%)",
                                  }}
                                  width={
                                    order
                                      ? order.status === "PENDING"
                                        ? 33
                                        : order.status === "SHIPPED"
                                        ? 66
                                        : order.status === "DELIVERED"
                                        ? 99
                                        : 0
                                      : ""
                                  }
                                  valuemin={0}
                                  valuemax={100}
                                />
                              </MDBProgress>
                              <div className="d-flex justify-content-around mb-1">
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                  Pending
                                </p>
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                  Shipped
                                </p>
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                  Delivered
                                </p>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>

                      <div className="d-flex justify-content-between mb-5">
                        <p className="text-muted mb-0">
                          <span className="fw-bold me-4">Delivery Charges</span>{" "}
                          Free
                        </p>
                      </div>
                    </MDBCardBody>
                    <MDBCardFooter
                      className="border-0 px-4 py-5"
                      style={{
                        backgroundColor: "hsl(38, 69%, 59%)",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
                      <MDBTypography
                        tag="h5"
                        className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                      >
                        Total paid: <span className="h2 mb-0 ms-2">$1040</span>
                      </MDBTypography>
                    </MDBCardFooter>
                  </Link>
                ) : (
                  ""
                )}
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
