import api from "../../api/api";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./stylee.module.css";

import InputQuantity from "./inputQuantity";

import { MDBCard } from "mdb-react-ui-kit";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
  setproductInCart,
} from "../utils/apiStatusSlice.js";

function Cart() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);

  const [data, setData] = useState([]);
  const productInCart = useSelector((state) => state.apiStatus.productInCart);

  useEffect(() => {
    api
      .get("http://localhost:3001/cart")
      .then((res) => {
        setData(res.data);
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  }, []);

  const deletItem = (id) => {
    api
      .delete(`http://localhost:3001/cart/${id}`)
      .then((res) => {
        setData((data) => data.filter((item) => item.id != id));
        dispatch(setSuccess(res.data.message));
        dispatch(setproductInCart(productInCart - 1));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(clearSuccess());
      dispatch(clearError());
    };
  }, []);
  return (
    <div className={`${styles.body} container-fluid w-100`}>
      <div className="title">
        <h2 className="d-inline-block text-start">Cart</h2>
        <span> ({data.length} items)</span>
      </div>
      {data.length ? (
        <div
          className={`d-flex ${styles.parent} flex-column-reverse flex-md-row w-100 gap-3 position-relative`}
        >
          <div className={`${styles.leftSide} d-flex flex-column w-75`}>
            <div className="containerProduct d-flex flex-column gap-3">
              {data.map((el) => (
                <div
                  className={`${styles.product} d-flex gap-1 bg-light p-3 align-items-stretch justify-content-evenly ${styles.boxShadow}`}
                  key={el.id}
                >
                  <div
                    className={`${styles.productImage} d-flex w-25 align-items-center`}
                  >
                    <img
                      src="http://fakeimg.pl/300/"
                      className={`${styles.img}`}
                      alt=""
                    />
                  </div>

                  <div
                    className="d-flex w-75 gap-4
              "
                  >
                    <div className="productDetails d-flex flex-column justify-content-center ">
                      <span className="text-muted">{el.name}</span>
                      <p>{el.description}</p>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Order Within 24 hr
                      </span>
                      <p>Free delivery by Sat, May 6</p>
                      <span className="text-muted">Sold by Whirlpool</span>
                      <button
                        className="text-start"
                        onClick={() => deletItem(el.id)}
                      >
                        <i className="fa-solid fa-trash"></i>{" "}
                        <span> Remove</span>
                      </button>
                    </div>

                    <div
                      className={`py-3 d-flex flex-column justify-content-between align-items-center`}
                    >
                      <h3>{el.price}$</h3>
                      <InputQuantity quantity={el.quantity} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.rightSide} w-25`}>
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
                    Subtotal ({data.length} items)
                  </span>
                  <h4>
                    {" "}
                    {data.reduce((acc, el) => {
                      return el.price + acc;
                    }, 0)}
                    $
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">shipping</span>
                  <h4 className={`${styles.color}`}>Free</h4>
                </div>
              </div>
              <div className="d-flex gap-2 flex-column">
                <div className="d-flex justify-content-between align-items-center">
                  <span>Subtotal ({data.length} items) </span>
                  <h4>
                    {data.reduce((acc, el) => {
                      return el.price + acc;
                    }, 0)}
                    $
                  </h4>
                </div>
                <button className={`btn btn-primary ${styles.btnColor} w-100`}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MDBCard
          className="text-black w-75 m-auto "
          style={{ borderRadius: "25px" }}
        >
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.parent} m-5`}
          >
            <img src={process.env.PUBLIC_URL + "assets/empty-state-cart.svg"} />
            <h3>Your shopping cart looks empty</h3>
            <span className="text-muted">What are you waiting for?</span>
            <Link to="/home" className={`{styles.color} btn btn-primary my-3`}>
              {" "}
              START CHOPING
            </Link>
          </div>
        </MDBCard>
      )}
    </div>
  );
}

export default Cart;
