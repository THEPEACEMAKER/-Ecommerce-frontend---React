import { useState } from "react";

import styles from "./stylee.module.css";
import { Center } from "@chakra-ui/react";

function Cart() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className={`${styles.body} container-fluid`}>
      <div className={`d-flex ${styles.parent} w-100`}>
        <div className="leftSide d-flex flex-column w-75  gap-2">
          <div className="title">
            <h2 className="d-inline-block">Cart</h2>
            <span> (5 items)</span>
          </div>
          <div className="containerProduct w-100">
            <div className="product d-flex gap-3 bg-light p-3 align-items-stretch w-100">
              <div className="productImage d-flex align-items-center">
                <img
                  src="http://fakeimg.pl/300/"
                  className={`${styles.img}`}
                  alt=""
                />
              </div>
              <div className="productDetails d-flex flex-column justify-content-center">
                <span className="text-muted">hp</span>
                <p className="fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  eligendi corporis neque, saepe voluptatem doloribus odit sint
                  maxime quaerat necessitatibus quasi voluptatum architecto.
                  Accusamus provident deleniti deserunt? Quos, ullam odit.
                </p>
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  Order Within 24 hr
                </span>
                <p>Free delivery by Sat, May 6</p>
                <span className="text-muted">Sold by Whirlpool</span>
                <button className="text-start">
                  <i className="fa-solid fa-trash"></i> <span> Remove</span>
                </button>
              </div>
              <div
                className={`py-3 d-flex flex-column justify-content-between align-items-center`}
              >
                <h3>1000$</h3>
                <div className="d-flex align-items-center ">
                  <button>
                    <i class="fa-solid fa-2xl fa-caret-left"></i>
                  </button>
                  <input
                    type="number"
                    className="form-control"
                    style={{ width: "46px", textAlign: Center }}
                  />
                  <button>
                    <i class="fa-solid  fa-2xl fa-caret-right"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide w-25"></div>
      </div>
    </div>
  );
}

export default Cart;
