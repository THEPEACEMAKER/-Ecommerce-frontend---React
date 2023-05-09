import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdb-react-ui-kit";

function ProductCard({ product }) {
  return (
    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
      <MDBCard>
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">Today's Combo Offer</p>
          <div
            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: "35px", height: "35px" }}
          >
            <p className="text-white mb-0 small">heart</p>
            {/* TODO: set a heart icon */}
          </div>
        </div>
        <MDBCardImage src={product.image} position="top" alt={product.name} />
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted">
                {product.category.name}
              </a>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{product.name}</h5>
            <h5 className="text-dark mb-0">${product.price}</h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              Available: <span className="fw-bold">{product.quantity}</span>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProductCard;
