import { useEffect, useState } from "react";
import api from "../../api/api";
import styles from "./stylee.module.css";

function CheckoutButton({ cartId }) {
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const handleCheckout = () => {
    console.log("handleCheckout");
  };

  return (
    <button
      className={`btn btn-primary ${styles.btnColor} w-100`}
      onClick={handleCheckout}
    >
      CHECKOUT
    </button>
  );
}

export default CheckoutButton;
