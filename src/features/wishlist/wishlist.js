import { useState, useDispatch, useEffect } from "react";
import api from "../../api/api";

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBCard,
} from "mdb-react-ui-kit";

import Alert from "react-bootstrap/Alert";

import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
} from "../utils/apiStatusSlice.js";

import "./stylee.css";

export default function App() {
  // const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/wishlist")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        // dispatch(setError(err.message));
        console.log(err);
      });
  }, []);

  const deletItem = (id) => {
    api
      .delete(`/wishlist/${id}`)
      .then((res) => {
        setData((data) => data.filter((item) => item.id != id));
      })
      .catch((err) => {
        // dispatch(setError(err.message));
        console.log(err);
      });
  };

  const AddToCart = (product) => {
    console.log(product);
    api
      .post(`/wishlist/`, product)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // dispatch(setError(err.message));
        console.log(err);
      });
  };

  return (
    <div className="body">
      <Alert key={"success"} variant={"success"}>
        This is a {"success"} alert with you like.
      </Alert>
      <div className="whichlist-title d-flex flex-column align-items-center">
        <i className="fa-regular fa-xl fa-heart my-4"></i>
        <h1>My wishlist</h1>
      </div>

      <MDBContainer fluid>
        <MDBCard
          className="text-black w-75 m-auto "
          style={{ borderRadius: "25px" }}
        >
          <div className="whish-list-table">
            <MDBTable align="middle">
              <MDBTableHead>
                <tr>
                  <th className="fw-bolder text-center" scope="col" colSpan="2">
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
                          el.quantity == 0
                            ? "danger"
                            : el.quantity < 11
                            ? "warning"
                            : "success"
                        }
                      >
                        {el.quantity == 0
                          ? "Out of Stock"
                          : el.quantity < 11
                          ? "limited"
                          : "InStock"}
                      </MDBBadge>
                    </td>
                    <td className="text-center">
                      <MDBBtn
                        color="success"
                        rounded
                        size="sm"
                        disabled={el.quantity == 0}
                        onClick={() => AddToCart(el)}
                      >
                        Add to Cart
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
