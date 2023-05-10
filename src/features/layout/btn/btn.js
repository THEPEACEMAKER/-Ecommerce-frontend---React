import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../../api/api";

import { MDBBtn } from "mdb-react-ui-kit";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
  setproductInCart,
} from "../../utils/apiStatusSlice.js";

export default function Button(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);

  const [loading, setLoding] = useState(false);
  const productInCart = useSelector((state) => state.apiStatus.productInCart);

  const AddToCart = (product) => {
    setLoding(true);
    api
      .post(`/cart/`, { product: product.id })
      .then((res) => {
        dispatch(setSuccess(res.data.message));
        dispatch(setproductInCart(productInCart + 1));
        setLoding(false);
      })
      .catch((err) => {
        dispatch(setError(err.message));
        setLoding(false);
      });
  };

  return (
    <MDBBtn
      className={`${styles.btnColor}`}
      rounded
      size="sm"
      disabled={props.el.quantity === 0}
      onClick={() => AddToCart(props.el)}
    >
      {loading ? <span className={`${styles.loader}`}></span> : `Add to Cart`}
    </MDBBtn>
  );
}
