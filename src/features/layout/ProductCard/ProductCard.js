import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import ButtonWishList from "../btn/btnwishlist";
import Button from "../btn/btn";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

function ProductCard({ product }) {
  return (
    <div className="p-2 ">
      <MDBCol md="12" lg="3" className={`mb-4 mb-lg-0 ${styles.product}`}>
        <MDBCard className="h-100 justify-content-">
          <div className="d-flex justify-content-between p-3 ">
            <Link to={`/product/${product.id}`}>
              <p className="lead mb-0">{product.name}</p>
            </Link>
            <div
              className="rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{ width: "35px", height: "35px" }}
            >
              <ButtonWishList />
            </div>
          </div>
          <MDBCardImage
            src={`https://res.cloudinary.com/ddk98mjzn/${product.image}`}
            position="top"
            alt={product.name}
            style={{ width: "80%", height: "100px", margin: "auto" }}
          />
          <MDBCardSubTitle className="m-3">
            <div className="d-flex justify-content-between">
              <p className="small">
                <Link
                  to={`/category/${product.category.id}`}
                  className="text-muted"
                >
                  {product.category.name}
                </Link>
              </p>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <h5 className="text-dark mb-0">$ {product.price}</h5>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="text-muted mb-0">
                Available: <span className="fw-bold">{product.quantity}</span>
              </p>
            </div>
            <Button el={product} />
          </MDBCardSubTitle>
        </MDBCard>
      </MDBCol>
    </div>
  );
}

export default ProductCard;
