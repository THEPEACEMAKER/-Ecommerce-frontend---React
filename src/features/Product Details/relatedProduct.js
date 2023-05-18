import styles from "./style.module.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBRow } from "mdb-react-ui-kit";

import ProductCard from "../layout/ProductCard/ProductCard";
import { fetchCategoryProducts } from "../Category/CategoryPage/categorySlice";
import ProductCardSkeleton from "../layout/ProductCard/ProductCardSkeleton";

export default function RelatedProduct({ categoryId }) {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.category);

  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchCategoryProducts({ categoryId, pageSize, page }));
  }, [categoryId, dispatch]);

  useEffect(() => {
    if (status === "failed") {
      console.log("relatedProduct Error:", error);
    }
  }, [status, error]);

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
      {status === "loading" ? (
        <MDBRow>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </MDBRow>
      ) : (
        <Slider {...settings} className="w-100">
          {products &&
            products.map((el, i) => <ProductCard product={el} key={i} />)}
        </Slider>
      )}
    </div>
  );
}
