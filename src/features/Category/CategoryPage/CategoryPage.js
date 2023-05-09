import { React, useEffect } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";
import styles from "./stylee.module.css";
import ProductCard from "../../layout/ProductCard/ProductCard";
import ProductCardSkeleton from "../../layout/ProductCard/ProductCardSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../categorySlice";

function CategoryPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.category.products);
  const status = useSelector((state) => state.category.status);
  const error = useSelector((state) => state.category.error);

  useEffect(() => {
    dispatch(fetchCategoryProducts(categoryId));
  }, [categoryId, dispatch]);

  return (
    <MDBContainer fluid className="my-5">
      <h1 className="">Electronics</h1>
      {/* TODO: set the category name dynamically */}
      <br />
      <MDBRow>
        {status === "loading" ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : status === "succeeded" && products.length ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          status === "succeeded" && (
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${styles.parent} m-5`}
            >
              {/* <img src={process.env.PUBLIC_URL + "assets/empty-state-cart.svg"} /> TODO: fix the img */}
              <h3>There are no products in this category yet</h3>
              <span className="text-muted">
                Check all the other Awesome products we have!
              </span>
              <Link
                to="/home"
                className={`{styles.color} btn btn-primary my-3`}
              >
                {" "}
                Home
              </Link>
            </div>
          )
        )}
        {status === "failed" && (
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.parent} m-5`}
          >
            {/* <img src={process.env.PUBLIC_URL + "assets/empty-state-cart.svg"} /> TODO: fix the img */}
            <h3>
              OPS, It looks like we have an error on this page, don't worry we
              will fix it soon enough
            </h3>
            <span className="text-muted">
              In the mean time, Why don't you check all the other Awesome
              products we have!
            </span>
            <Link to="/home" className={`{styles.color} btn btn-primary my-3`}>
              {" "}
              Home
            </Link>
          </div>
        )}
      </MDBRow>
    </MDBContainer>
  );
}

export default CategoryPage;
