import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";

import {
  decrementCartProduct,
  incrementCartProduct,
} from "../../cart/cartSlice";

function InputQuantity({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) => state.cart.products.find((p) => p.id === id).quantity
  );

  const handleIncrement = () => {
    dispatch(incrementCartProduct(id));
  };

  const handleDecrement = () => {
    dispatch(decrementCartProduct(id));
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
