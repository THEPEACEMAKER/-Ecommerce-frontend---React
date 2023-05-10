import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import api from "../../api/api";

import {
  MDBBadge,
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
} from "../utils/apiStatusSlice.js";

import styles from "./stylee.module.css";
import Button from "../layout/btn/btn";

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);

  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/user/wishlist")
      .then((res) => {
        setData(res.data[0].product_details.results);
        dispatch(setSuccess(res.data.message));
        console.log(res);
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  }, []);

  const deletItem = (id) => {
    console.log(id);
    api
      .delete(`/wishlist/product/${id}/`)
      .then((res) => {
        setData((data) => data.filter((item) => item.id != id));
        dispatch(setSuccess(res.data.message));
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
    <div className={styles.body}>
      <div
        className={`${styles.whichlistTitle} d-flex mb-5 flex-column align-items-center`}
      >
        <i className="fa-regular fa-xl fa-heart my-4"></i>
        <h1>My wishlist</h1>
      </div>

      <MDBContainer
        fluid
        className="text-black w-100 m-auto "
        style={{ borderRadius: "25px" }}
      >
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
            {data.length ? (
              <div className={`${styles.whishListTable}`}>
                {data.map((el, i) => (
                  <MDBCard
                    key={el.id}
                    className="shadow-0 border rounded-3 mb-3"
                  >
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol
                          md="12"
                          lg="3"
                          className="mb-4 mb-lg-0 d-flex align-items-center"
                        >
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <MDBCardImage
                              src={`https://res.cloudinary.com/ddk98mjzn/${el.image}`}
                              fluid
                              className=""
                              style={{ width: "300px", height: "160px" }}
                            />
                            <Link to={`/product/${el.id}`}>
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.15)",
                                }}
                              ></div>
                            </Link>
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          className="d-flex justify-content-between flex-column"
                        >
                          <Link to={`/product/${el.id}`}>
                            <h5>{el.name}</h5>
                          </Link>
                          <span>Quantity {el.quantity}</span>

                          <div className="mt-1 mb-0 text-muted small">
                            <MDBBadge
                              pill
                              color={
                                el.quantity === 0
                                  ? "danger"
                                  : el.quantity < 11
                                  ? "warning"
                                  : "success"
                              }
                            >
                              {el.quantity === 0
                                ? "Out of Stock"
                                : el.quantity < 11
                                ? "limited"
                                : "InStock"}
                            </MDBBadge>
                          </div>
                          <p className=" mb-4 mb-md-0">{el.description}</p>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >
                          <div className="d-flex flex-row align-items-center justify-content-between mb-1">
                            <h4 className="mb-1 me-1">${el.price}</h4>
                            {/* <span className="text-danger">
                              <s>$20.99</s>
                            </span> */}
                            <button>
                              <i
                                className="fa-solid fa-trash text-secondary"
                                onClick={() => deletItem(el.id)}
                              ></i>
                            </button>
                          </div>
                          <h6 className="text-success">Free shipping</h6>
                          <div className="d-flex flex-column mt-4 gap-2 w-100">
                            <Link to={`/product/${el.id}`} className="w-100">
                              <MDBBtn
                                outline
                                color="primary"
                                size="sm"
                                className="w-100"
                              >
                                Details
                              </MDBBtn>{" "}
                            </Link>
                            <Button el={el} />
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                ))}
              </div>
            ) : (
              <MDBCard>
                <div
                  className={`d-flex flex-column justify-content-center align-items-center ${styles.parent} m-5`}
                >
                  <img
                    src={process.env.PUBLIC_URL + "assets/empty-state-cart.svg"}
                  />
                  <h3>Your Wishlist looks empty</h3>
                  <span className="text-muted">What are you waiting for?</span>
                  <Link
                    to="/home"
                    className={`{styles.color} btn btn-primary my-3`}
                  >
                    START CHOPING
                  </Link>
                </div>
              </MDBCard>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
