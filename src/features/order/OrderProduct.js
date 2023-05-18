import { MDBCardImage, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

export default function OrderProduct({ product }) {
  return (
    <>
      <MDBRow key={product.id} className="justify-content-between">
        <MDBCol md="2">
          <MDBCardImage
            src={product.images.length && product.images[0]}
            fluid
            alt={product.name}
          />
        </MDBCol>
        <MDBCol
          md="2"
          className="text-center d-flex justify-content-center align-items-center"
        >
          <p className="text-muted mb-0">{product.name}</p>
        </MDBCol>

        <MDBCol
          md="2"
          className="text-center d-flex justify-content-center align-items-center"
        >
          <p className="text-muted mb-0 small">Qty: {product.quantity}</p>
        </MDBCol>
        <MDBCol
          md="2"
          className="text-center d-flex justify-content-center align-items-center"
        >
          <p className="text-muted mb-0 small">
            {product.quantity} X ${product.price}
          </p>
        </MDBCol>
      </MDBRow>
      <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: 1 }} />
    </>
  );
}
