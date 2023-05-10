import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../../api/api";

import { MDBBtn } from "mdb-react-ui-kit";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
  setproductInCart,
} from "../../utils/apiStatusSlice.js";

export default function ButtonWishList({ product }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);
  const [ClassBtn, setClassBtn] = useState(false);

  const AddToWishList = () => {
    setClassBtn(!ClassBtn);

    const data = new FormData();
    data.append("product", product.id);

    api
      .post(`/wishlist`, { product: product.id })
      .then((res) => {
        dispatch(setSuccess(res.data.message));
        console.log(res);
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  };

  return (
    <div
      onClick={AddToWishList}
      className={`${styles.button} ${ClassBtn && styles.active} ${
        ClassBtn && styles.animate
      }`}
    >
      <svg width="35px" height="25px" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            className={`${styles.heartStroke}`}
            d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z"
            fill="#0090E3"
          />
          <path
            className={`${styles.heartFull}`}
            d="M13.0185191,4.25291223 L12.9746137,4.25291223 C10.1097846,4.25291223 8.67188189,6.6128289 8.5182129,8.92335198 C8.39747298,10.6740809 8.73225185,12.8528876 14.0777375,18.4782704 C14.7127154,19.1080239 15.5654911,19.4695694 16.4596069,19.4880952 C17.3247917,19.4700909 18.1444718,19.0969678 18.7262246,18.4563177 C19.3189478,17.9074999 24.5052763,12.5894551 24.3570955,8.98921012 C24.2363556,6.42623084 22.123407,4.25291223 19.7525139,4.25291223 C18.5053576,4.22947431 17.3125171,4.76253118 16.4980242,5.70727948 C15.6177331,4.73767759 14.354699,4.20555668 13.04596,4.25291223 L13.0185191,4.25291223 Z"
            fill="#0090E3"
          />
          <path
            className={`${styles.heartLines}`}
            d="M26,4 L30.6852129,0.251829715"
            stroke="#0090E3"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            className={`${styles.heartLines}`}
            d="M2.314788,4 L7.00000086,0.251829715"
            stroke="#0090E3"
            stroke-width="2"
            stroke-linecap="round"
            transform="matrix(-1 0 0 1 10.314788 1)"
          />
          <path
            className={`${styles.heartLines}`}
            d="M27,12 L33,12"
            stroke="#0090E3"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            className={`${styles.heartLines}`}
            d="M0,12 L6,12"
            stroke="#0090E3"
            stroke-width="2"
            stroke-linecap="round"
            transform="matrix(-1 0 0 1 7 1)"
          />
          <path
            className={`${styles.heartLines}`}
            d="M24,19 L28.6852129,22.7481703"
            stroke="#0090E3"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            className={`${styles.heartLines}`}
            d="M4.314788,19 L9.00000086,22.7481703"
            stroke="#0090E3"
            stroke-width="2"
            stroke-linecap="round"
            transform="matrix(-1 0 0 1 14.314788 1)"
          />
        </g>
      </svg>
    </div>
  );
}
