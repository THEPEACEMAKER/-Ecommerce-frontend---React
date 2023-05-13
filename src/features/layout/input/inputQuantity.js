import { useState } from "react";

import styles from "./style.module.css";
import api from "../../../api/api";
import { useSelector, useDispatch } from "react-redux";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
  setproductInCart,
} from "../../utils/apiStatusSlice.js";

function InputQuantity(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);
  const productInCart = useSelector((state) => state.apiStatus.productInCart);

  const [quantity, setQuantity] = useState(props.quantity);

  console.log(props);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    props.cart
      ? api
          .put("/cart/", { action: "INCREASE", product: props.id })
          .then((res) => {
            dispatch(setproductInCart(productInCart + 1));
            props.onClick({
              total_price: res.data.product.total_price,
              quantity: quantity + 1,
            });
          })
          .catch((err) => {
            console.log(err);
          })
      : props.onClick({
          quantity: quantity + 1,
        });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);

      props.cart
        ? api
            .put("/cart/", { action: "DECREASE", product: props.id })
            .then((res) => {
              dispatch(setproductInCart(productInCart - 1));
              props.onClick({
                total_price: res.data.product.total_price,
                quantity: quantity - 1,
              });
            })
            .catch((err) => {
              console.log(err);
            })
        : props.onClick({
            quantity: quantity - 1,
          });
    }
  };

  return (
    <div className={`${styles.quantity}`}>
      <i onClick={handleDecrement} className={`fa fa-minus`}></i>
      <span className={`${styles.qty}`}>{quantity}</span>
      <i onClick={handleIncrement} className={`fa fa-plus`}></i>
    </div>
  );
}

export default InputQuantity;
