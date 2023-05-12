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
import { Link, useParams } from "react-router-dom";
import ButtonWishList from "../layout/btn/btnwishlist";
import RelatedProduct from "./relatedProduct";
import { MDBCardImage, MDBRipple } from "mdb-react-ui-kit";

export default function Product() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);
  const params = useParams();
  const [data, setData] = useState();
  const [img, setImage] = useState(0);

  useEffect(() => {
    api
      .get(`/products/${params.id}/`)
      .then((res) => {
        setData(res.data);
        dispatch(setSuccess(res.data.message));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        console.log(err);
      });
  }, [params]);

  const changeImageOnClick = ($event) => {
    setImage(Number($event.target.id));
  };

  const arrowUp = () => {
    if (img == 0) {
      setImage(2);
    } else {
      setImage(img - 1);
    }
  };

  const arrowDown = () => {
    setImage(img + 1);
    if (img == 2) {
      setImage(0);
    }
  };

  return (
    <div className={`${styles.container}`}>
      {data && (
        <div className={`${styles.card}`}>
          <div className={`${styles.form} `}>
            <div className={`${styles.leftside}`}>
              <div className={`${styles.images}`}>
                <div className={`${styles.img_left}`}>
                  <i onClick={arrowUp} className={`fa fa-angle-up`}></i>
                  {data &&
                    data.images.map((el, i) => {
                      if (i < 3) {
                        return (
                          <span
                            className=""
                            key={i}
                            onClick={changeImageOnClick}
                          >
                            <img
                              src={`https://res.cloudinary.com/ddk98mjzn/${
                                el.image && el.image
                              }`}
                              alt="image"
                              id={i}
                            />
                          </span>
                        );
                      }
                    })}
                  <i onClick={arrowDown} className={`fa fa-angle-down`}></i>
                </div>
                <span>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={`https://res.cloudinary.com/ddk98mjzn/${
                        data.images.length && data.images[img].image
                      }`}
                      fluid
                      className="m-auto"
                    />
                    <div
                      className="mask"
                      style={{
                        backgroundColor: "rgba(251, 251, 251, 0.15)",
                      }}
                    ></div>
                  </MDBRipple>
                </span>
              </div>
            </div>
            <div className={`${styles.rightside}`}>
              <div className={`${styles.topdiv}`}>
                <span>
                  <i className={`fa fa-shopping-bag`}></i>
                </span>
                <Link
                  to={`/category/${data.category.id}`}
                  className="text-muted"
                >
                  {data.category.name}
                </Link>{" "}
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
                <InputQuantity quantity={1} id={data.id} />

                <Button el={data} />
              </div>
              <div className={`${styles.open_wish}`}>
                <div className={`${styles.wishlist}`}>
                  {/* <i className="fa-regular fa-lg fa-heart"></i> */}
                  <ButtonWishList product={data} />
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
          <div
            className="bg-black m-auto"
            style={{ height: "1px", opacity: ".2", width: "95%" }}
          ></div>
          <h2 className="mx-4 my-2 bol">Related Product :</h2>
          <RelatedProduct category={data.category.id} />
        </div>
      )}
    </div>
  );
}
