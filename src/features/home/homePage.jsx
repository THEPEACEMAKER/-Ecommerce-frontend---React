import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import PopularCategories from "../Category/PopularCategories/PopularCategories";

import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function Home() {
  return (
    <div className={`${styles.body}`}>
      {" "}
      <div className={`container-fluid py-5`}>
        <div className="d-flex gap-2 align-items-center">
          {
            // Carousel
          }
          <Carousel className="align-self-stretch">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "assets/carousel-1.jpg"}
                alt="First slide"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "assets/carousel-2.jpg"}
                alt="Second slide"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "assets/carousel-3.jpg"}
                alt="Third slide"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
          {
            // ofers top
          }
          <div className="col-md-4 ">
            <div
              className={`${styles.productOffer}`}
              style={{ height: "185px" }}
            >
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "assets/offer-1.jpg"}
                alt=""
              />
              <div className={styles.offerText}>
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a className="btn btn-primary">Shop Now</a>
              </div>
            </div>
            <div
              className={`${styles.productOffer} mt-2`}
              style={{ height: "185px" }}
            >
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "assets/offer-2.jpg"}
                alt=""
              />
              <div className={styles.offerText}>
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>

        {
          // penifits
        }

        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <h1 className="fa fa-check text-primary m-0 mx-3"></h1>
                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <h1 className="fa fa-shipping-fast text-primary m-0 mx-2"></h1>
                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <h1 className="fas fa-exchange-alt text-primary m-0 mx-3"></h1>
                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <h1 className="fa fa-phone-volume text-primary m-0 mx-3"></h1>
                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>

        {
          // Categories
        }

        <div className="container-fluid pt-5">
          <h2
            className={`${styles.sectionTitle} position-relative text-uppercase mx-xl-5 mb-4`}
          >
            <span className="p-3 ps-0">Categories</span>
          </h2>

          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-4 col-sm-6  bg-light">
              <a className="text-decoration-none">
                <div className="cat-item d-flex align-items-center">
                  <div
                    className="overflow-hidden"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "assets/cat-1.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="flex-fill mx-3">
                    <h6>Category Name</h6>
                    <small className="text-body">100 Products</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {
          // FEATURED PRODUCTS<
        }

        <div className="container-fluid pt-5">
          <h2
            className={`${styles.sectionTitle} position-relative text-uppercase mx-xl-5 mb-4`}
          >
            <span className="p-3 ps-0">FEATURED PRODUCTS</span>
          </h2>
          <div class="row px-xl-5">
            {
              // here
            }
          </div>
        </div>

        {
          // offers
        }

        <div className="container-fluid pt-5 pb-3">
          <div className="row px-xl-5">
            <div className="col-md-6">
              <div
                className={`${styles.productOffer}`}
                style={{ height: "300px" }}
              >
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "assets/offer-1.jpg"}
                  alt=""
                />
                <div className={styles.offerText}>
                  <h6 className="text-white text-uppercase">Save 20%</h6>
                  <h3 className="text-white mb-3">Special Offer</h3>
                  <a className="btn btn-primary">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`${styles.productOffer}`}
                style={{ height: "300px" }}
              >
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "assets/offer-2.jpg"}
                  alt=""
                />
                <div className={styles.offerText}>
                  <h6 className="text-white text-uppercase">Save 20%</h6>
                  <h3 className="text-white mb-3">Special Offer</h3>
                  <a className="btn btn-primary">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          // RECENT PRODUCTS
        }

        <div className="container-fluid pt-5">
          <h2
            className={`${styles.sectionTitle} position-relative text-uppercase mx-xl-5 mb-4`}
          >
            <span className="p-3 ps-0">RECENT PRODUCTS</span>
          </h2>
          <div class="row px-xl-5">
            {
              // here
            }
          </div>
        </div>

        {
          // vendor
        }
        <Swiper spaceBetween={50} slidesPerView={4}>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-1.jpg"}
                alt=""
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-2.jpg"}
                alt="image1"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-3.jpg"}
                alt="image2"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-4.jpg"}
                alt="image3"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-5.jpg"}
                alt="image4"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-6.jpg"}
                alt="image5"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4 ">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-7.jpg"}
                alt="image6"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-light p-4">
              <img
                src={process.env.PUBLIC_URL + "assets/vendor-8.jpg"}
                alt="image7"
                className="m-auto"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
