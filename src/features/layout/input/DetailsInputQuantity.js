import styles from "./style.module.css";
import { useState } from "react";

function DetailsInputQuantity(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    props.onClick({
      quantity: quantity + 1,
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      props.onClick({
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

export default DetailsInputQuantity;
