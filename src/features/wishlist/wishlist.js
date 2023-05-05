import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import api from "../../api/api";

import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBCard,
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
      .get("/wishlist")
      .then((res) => {
        setData(res.data);
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  }, []);

  const deletItem = (id) => {
    api
      .delete(`/wishlist/${id}`)
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
        className={`${styles.whichlistTitle} d-flex flex-column align-items-center`}
      >
        <i className="fa-regular fa-xl fa-heart my-4"></i>
        <h1>My wishlist</h1>
      </div>

      <MDBContainer fluid>
        <MDBCard
          className="text-black w-75 m-auto "
          style={{ borderRadius: "25px" }}
        >
          {data.length ? (
            <div className={`${styles.whishListTable}`}>
              <MDBTable align="middle">
                <MDBTableHead>
                  <tr>
                    <th
                      className="fw-bolder text-center"
                      scope="col"
                      colSpan="2"
                    >
                      Product Name
                    </th>
                    <th className="fw-bolder text-center" scope="col">
                      Unit Price
                    </th>
                    <th className="fw-bolder text-center" scope="col">
                      Stock Status
                    </th>
                    <th className="fw-bolder text-center" scope="col">
                      Actions
                    </th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {data.map((el, i) => (
                    <tr key={el.id}>
                      <td className="text-center">
                        <button>
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deletItem(el.id)}
                          ></i>
                        </button>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={el.img}
                            alt=""
                            style={{ width: "45px", height: "45px" }}
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{el.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <p className="fw-normal mb-1">{el.price} $</p>
                      </td>
                      <td className="text-center">
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
                      </td>
                      <td className="text-center">
                        <Button el={el} />
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          ) : (
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
                {" "}
                START CHOPING
              </Link>
            </div>
          )}
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
