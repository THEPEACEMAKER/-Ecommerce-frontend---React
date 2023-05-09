import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

export default function OrderDetails() {
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
                    Thanks for your Order,{" "}
                    <span style={{ color: "hsl(38, 69%, 59%)" }}>Adel</span>!
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "hsl(38, 69%, 59%)" }}
                    >
                      Receipt
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>

                  <MDBCard className="shadow-0 border mb-4">
                    <MDBCardBody>
                      <MDBRow className="justify-content-between">
                        <MDBCol md="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">Samsung Galaxy</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Qty: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">$499</p>
                        </MDBCol>
                      </MDBRow>

                      <hr
                        className="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                      />
                      <MDBRow className="justify-content-between">
                        <MDBCol md="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0">iPad</p>
                        </MDBCol>

                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">Qty: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted mb-0 small">$399</p>
                        </MDBCol>
                      </MDBRow>
                      <hr
                        className="mb-4"
                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                      />
                      <MDBRow className="align-items-center">
                        <MDBCol md="2">
                          <p className="text-muted mb-0 small">Track Order</p>
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
                              width={33}
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

                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> $898.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Invoice Number : 788152</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> $19.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Invoice Date : 22 Dec,2019
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 18%</span> 123
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">
                      Recepits Voucher : 18KU-62IIK
                    </p>
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
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
