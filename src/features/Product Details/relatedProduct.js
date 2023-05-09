import styles from "./style.module.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../api/api";

import InputQuantity from "../layout/input/inputQuantity";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
} from "../utils/apiStatusSlice.js";
import { useParams } from "react-router-dom";
import ProductCard from "../layout/ProductCard/ProductCard";

export default function RelatedProduct(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`category/${props.category}/products`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  }, [props.category]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.productDetails}>
      <Slider {...settings} className="w-100">
        {data && data.map((el) => <ProductCard product={el} />)}
      </Slider>
    </div>
  );
}
