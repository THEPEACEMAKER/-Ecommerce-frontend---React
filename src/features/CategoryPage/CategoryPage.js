import { React, useState, useEffect } from "react";
import api from "../../api/api";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import styles from "./stylee.module.css";
import ProductCard from "../layout/ProductCard/ProductCard";

function CategoryPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:3001/category")
      .then((res) => {
        setProducts(res.data);
        console.log("products: ", products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MDBContainer fluid className="my-5">
      <h1 className="">Electronics</h1>
      {/* TODO: set the category name dynamically */}
      <br />
      <MDBRow>
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.parent} m-5`}
          >
            {/* <img src={process.env.PUBLIC_URL + "assets/empty-state-cart.svg"} /> TODO: fix the img */}
            <h3>There are no products in this category yet</h3>
            <span className="text-muted">
              Check all the other Awesome products we have!
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
