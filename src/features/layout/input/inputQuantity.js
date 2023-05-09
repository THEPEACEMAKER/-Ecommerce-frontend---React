import { useState } from "react";

import styles from "./style.module.css";

function InputQuantity(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    console.log(quantity);
  };

  const handelChange = (event) => {
    if (event.target.value > 1) {
      setQuantity(event.target.value);
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
