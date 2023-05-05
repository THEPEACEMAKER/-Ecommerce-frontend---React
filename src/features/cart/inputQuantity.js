import { useState } from "react";

import styles from "./stylee.module.css";

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
    <div className="d-flex align-items-center ">
      <button onClick={handleDecrement}>
        <i className="fa-solid fa-2xl fa-caret-left"></i>
      </button>
      <input
        type="number"
        className="form-control"
        style={{ width: "46px", textAlign: "center" }}
        value={quantity}
        onChange={handelChange}
      />
      <button onClick={handleIncrement}>
        <i className="fa-solid  fa-2xl fa-caret-right"></i>
      </button>
    </div>
  );
}

export default InputQuantity;
