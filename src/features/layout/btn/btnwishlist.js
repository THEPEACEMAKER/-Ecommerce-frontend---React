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

export default function ButtonWishList(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);

  const AddToWishList = (product) => {
    api
      .post(`http://localhost:3001/wishlist/`, product)
      .then((res) => {
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };

  return <i onClick={AddToWishList} className="fa-regular fa-lg fa-heart"></i>;
}
