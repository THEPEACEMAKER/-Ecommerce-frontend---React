import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "./productSlice";

import Button from "../layout/btn/btn";
import DetailsInputQuantity from "../layout/input/DetailsInputQuantity";

import { Link, useParams } from "react-router-dom";
import ButtonWishList from "../layout/btn/btnwishlist";
import RelatedProduct from "./relatedProduct";
import { MDBCardImage, MDBRipple } from "mdb-react-ui-kit";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);
  const [img, setImage] = useState(0);

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

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

  const totalPrice = ($event) => {
    setQuantity($event.quantity);
  };

  return (
    <div className={`${styles.container}`}>
      {product && (
        <div className={`${styles.card}`} data-aos="zoom-in">
          <div className={`${styles.form} `}>
            <div className={`${styles.leftside}`}>
              <div className={`${styles.images}`}>
                <div className={`${styles.img_left}`}>
                  <i onClick={arrowUp} className={`fa fa-angle-up`}></i>
                  {product &&
                    product.images.map((el, i) => {
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
                              className={styles.smallImg}
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
                        product.images.length && product.images[img].image
                      }`}
                      fluid
                      className="m-auto "
                      style={{ maxHeight: "600px" }}
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
                  to={`/category/${product.category.id}`}
                  className="text-muted"
                >
                  {product.category.name}
                </Link>{" "}
              </div>

              <h3>{product.name}</h3>
              <h4>$ {product.price}</h4>
              <div className={`${styles.designer}`}>
                <h5>Made By : </h5>
                <span>Mademoiselle Tambour</span>
              </div>
              <div className={`${styles.description}`}>
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
              <div className={`${styles.designer}`}>
                <h5>Quantity : </h5>
                <span>{product.quantity}</span>
              </div>

              <div className={`${styles.options}`}>
                <DetailsInputQuantity
                  quantity={1}
                  id={product.id}
                  onClick={totalPrice}
                />

                <Button el={product} quantity={quantity} />
              </div>
              <div className={`${styles.open_wish}`}>
                <div className={`${styles.wishlist}`}>
                  {/* <i className="fa-regular fa-lg fa-heart"></i> */}
                  <ButtonWishList product={product} />
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
          <RelatedProduct categoryId={product.category.id} />
        </div>
      )}
    </div>
  );
}
