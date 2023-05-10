import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularCategories } from "./popularCategoriesSlice";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

function PopularCategories() {
  const dispatch = useDispatch();
  const { popularCategories, status, error } = useSelector(
    (state) => state.popularCategories
  );

  useEffect(() => {
    dispatch(fetchPopularCategories());
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product Listing</strong>
      </h4>

      <MDBRow>
        {popularCategories.map((category) => (
          <MDBCol key={category.id} md="6" lg="3" className="mb-4">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <img
                src={category.image}
                fluid="true"
                className={`w-100 ${styles.categoryImg}`}
                alt={category.name}
              />

              <Link to={`/category/${category.id}`}>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex align-items-end h-100">
                    <h5 className="m-0 w-100">
                      <span
                        className={`badge bg-light p-3 m-0 text-dark w-100 border border-dark ${styles.title}`}
                      >
                        {category.name}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
                <div className="d-flex align-items-end h-100">
                  <h5 className="m-0 w-100">
                    <span
                      className={`badge bg-light p-3 m-0 text-dark w-100 border border-dark ${styles.title}`}
                    >
                      {category.name}
                    </span>
                  </h5>
                </div>
              </Link>
            </MDBRipple>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default PopularCategories;
