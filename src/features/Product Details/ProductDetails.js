import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../api/api";

import Button from "../layout/btn/btn";
import InputQuantity from "../layout/input/inputQuantity";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
} from "../utils/apiStatusSlice.js";
import { useParams } from "react-router-dom";

export default function Product() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);
  const params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`http://localhost:3001/wishlist/${params.id}`)
      .then((res) => {
        setData(res.data);
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  }, []);

  const el = {};
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.form} `}>
          <div className={`${styles.leftside}`}>
            <div className={`${styles.images}`}>
              <div className={`${styles.img_left}`}>
                <i className={`fa fa-angle-up`}></i>
                <span>
                  <img src="https://i.imgur.com/Rq0nf6K.jpg.jpg" />
                </span>
                <span>
                  <img src="https://i.imgur.com/Rq0nf6K.jpg.jpg" />
                </span>
                <span>
                  <img src="https://i.imgur.com/Rq0nf6K.jpg.jpg" />
                </span>
                <i className={`fa fa-angle-down`}></i>
              </div>
              <span>
                <img src="https://i.imgur.com/Rq0nf6K.jpg.jpg" />
              </span>
            </div>
          </div>
          <div className={`${styles.rightside}`}>
            <div className={`${styles.topdiv}`}>
              <span>
                <i className={`fa fa-shopping-bag`}></i>
              </span>
              {data.category}
            </div>

            <h3>{data.name}</h3>
            <h4>$ {data.price}</h4>
            <div className={`${styles.designer}`}>
              <h5>Made By : </h5>
              <span>Mademoiselle Tambour</span>
            </div>
            <div className={`${styles.description}`}>
              <h4>Description</h4>
              <p>{data.description}</p>
            </div>
            <div className={`${styles.designer}`}>
              <h5>Quantity : </h5>
              <span>{data.quantity}</span>
            </div>

            <div className={`${styles.options}`}>
              <InputQuantity quantity={2} />

              <Button el={el} />
            </div>
            <div className={`${styles.open_wish}`}>
              <div className={`${styles.wishlist}`}>
                <i className="fa-regular fa-lg fa-heart"></i>
                <p>Add to Wishlist</p>
              </div>
            </div>

            <div className={`${styles.share}`}>
              <h4>Share</h4>
              <div className={`${styles.social}`}>
                <i className={`fa-brands fa-facebook`}></i>
                <i className={`fa-brands fa-twitter`}></i>
                <i className={`fa-brands fa-pinterest`}></i>
                <i className={`fa-brands fa-google-plus`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
