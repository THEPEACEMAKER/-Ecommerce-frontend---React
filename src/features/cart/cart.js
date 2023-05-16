import api from "../../api/api";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartProduct, fetchCart } from "./cartSlice";
import { Link } from "react-router-dom";

import styles from "./stylee.module.css";

import InputQuantity from "../layout/input/inputQuantity";

import { MDBCard, MDBCardImage, MDBRipple } from "mdb-react-ui-kit";
import Sticky from "react-stickynode";

import CheckoutButton from "./CheckoutButton";

function Cart() {
  const dispatch = useDispatch();
  const { products, cartId, fetchStatus, deleteStatus, error } = useSelector(
    (state) => state.cart
  );
  const productInCart = useSelector((state) => state.apiStatus.productInCart);

  const componentRef = useRef(null);
  const [height, setHeight] = useState();
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    if (componentRef.current) {
      setHeight(componentRef.current.clientHeight);
    }
    setTotalSum(
      products.reduce((acc, el) => {
        return el.price * el.quantity + acc;
      }, 0)
    );
  }, [products]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const deleteItem = (id) => {
    dispatch(deleteCartProduct(id));
  };

  const totalPrice = ($event) => {
    setTotalSum($event.total_price);
  };

  return (
    <div
      className={`${styles.body} container-fluid w-100 sticky-outer`}
      ref={componentRef}
    >
      <div className="title">
        <h2 className="d-inline-block text-start mb-4">Shopping Cart</h2>
        <span> ({productInCart} items)</span>
      </div>

      {products.length ? (
        <div
          className={`d-flex ${styles.parent} flex-column flex-md-row w-100 gap-3 position-relative`}
        >
          <div className={`${styles.leftSide} d-flex flex-column`}>
            <div className="containerProduct d-flex flex-column gap-3">
              {products.map((el) => (
                <div
                  className={`${styles.product} d-flex gap-4 bg-light p-4 align-items-stretch justify-content-evenly ${styles.boxShadow}`}
                  key={el.id}
                >
                  <div
                    className={`${styles.productImage} d-flex w-25 align-items-center justify-content-center`}
                  >
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={el.images.length && el.images[0]}
                        fluid
                        className={`${styles.img}`}
                      />
                      <Link to={`/product/${el.id}`}>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </Link>
                    </MDBRipple>
                  </div>

                  <div
                    className="d-flex gap-4 flex-column flex-md-row 
              "
                  >
                    <div className="productDetails d-flex flex-column justify-content-center ">
                      <Link to={`/product/${el.id}`}>
                        <span className="text-muted">{el.name}</span>
                      </Link>
                      <p>{el.description}</p>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Order Within 24 hr
                      </span>
                      <p>Free delivery by Sat, May 6</p>
                      <span className="text-muted">Sold by Whirlpool</span>
                      <div>
                        <button
                          className="text-start d-inline"
                          onClick={() => deleteItem(el.id)}
                        >
                          <i className="fa-solid fa-trash"></i>{" "}
                          <span> Remove</span>
                        </button>
                      </div>
                    </div>

                    <div
                      className={`py-3 d-flex  flex-md-column flex-row justify-content-between align-items-center`}
                    >
                      <h3>$ {el.price}</h3>
                      <InputQuantity
                        quantity={el.quantity}
                        id={el.id}
                        onClick={totalPrice}
                        cart={true}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Sticky enabled={true} top={50} bottomBoundary={height + 130}>
            <div
              className={`${styles.rightSide} `}
              style={{
                minWidth: "28vw",
                willChange: "transform",
                transition: "transform 0.3s ease-out",
              }}
            >
              <div
                className={`d-flex flex-column gap-2 bg-light p-3 w-100 ${styles.boxShadow}`}
              >
                <h3>Order Summary</h3>
                <div className="d-flex">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <button className={`btn btn-primary ${styles.btnColor} `}>
                    Apply
                  </button>
                </div>
                <div className="d-flex gap-2 flex-column border-bottom border-secondary">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">
                      Subtotal ({productInCart} items)
                    </span>
                    <h4>$ {totalSum}</h4>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">shipping</span>
                    <h4 className={`${styles.color}`}>Free</h4>
                  </div>
                </div>
                <div className="d-flex gap-2 flex-column">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Subtotal ({productInCart} items) </span>
                    <h4>$ {totalSum}</h4>
                  </div>
                  <CheckoutButton cartId={cartId}></CheckoutButton>
                </div>
              </div>
            </div>
          </Sticky>
        </div>
      ) : (
        <MDBCard
          className="text-black w-75 m-auto "
          style={{ borderRadius: "25px" }}
        >
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.parent} m-5`}
          >
            <img
              src={process.env.PUBLIC_URL + "assets/empty-state-cart.svg"}
              alt="empty cart"
            />
            <h3>Your shopping cart looks empty</h3>
            <span className="text-muted">What are you waiting for?</span>
            <Link to="/home" className={`{styles.color} btn btn-primary my-3`}>
              START CHOPING
            </Link>
          </div>
        </MDBCard>
      )}
    </div>
  );
}

export default Cart;
