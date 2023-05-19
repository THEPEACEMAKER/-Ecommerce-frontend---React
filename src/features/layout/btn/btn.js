import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";

import { MDBBtn } from "mdb-react-ui-kit";

import { addToCart } from "../../cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const dispatch = useDispatch();
  const { addStatus } = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const AddToCart = (product) => {
    if (isLoggedIn) {
      dispatch(
        addToCart({ product, quantity: props.quantity ? props.quantity : 1 })
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <MDBBtn
      className={`${styles.btnColor}`}
      rounded
      size="sm"
      disabled={props.el.quantity === 0}
      onClick={() => AddToCart(props.el)}
    >
      {addStatus === "loading" ? (
        <span className={`${styles.loader}`}></span>
      ) : (
        `Add to Cart`
      )}
    </MDBBtn>
  );
}
