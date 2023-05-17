import { useEffect, useState } from "react";
import api from "../../api/api";
import styles from "./stylee.module.css";

function CheckoutButton({ cartId }) {
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const handleCheckout = () => {
    api
      .post("/payment/", { cartid: cartId })
      .then((res) => {
        setCheckoutUrl(res.data.sessionId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (checkoutUrl) {
      // Redirect the user to the Stripe checkout page
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  //   success -> redirect to http://localhost:3000/?/success=true -> order/:orderId
  //   cancel -> redirect to http://localhost:3000/?/canceled=true -> cancel or error

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
