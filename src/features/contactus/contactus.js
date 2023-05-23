import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./styles.module.css";
import api from "../../api/api";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export const Contactus = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [resError, setResError] = useState([]);
  const [loading, setLoding] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name Must be 30 Char or Less")
        .min(3, "Name Must be 3 Char or More")
        .matches(/^[A-Za-z][A-Za-z" "]+$/, "Name must not contain numbers.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required"),
      phone: Yup.string()
        .matches(/^01[0-9]{9}$/, "Invalid phone number")
        .required("Phone number is required"),
      subject: Yup.string()
        .max(20, "Subject Must be 20 Char or Less")
        .min(2, "Subject Must be 3 Char or More")
        .required("Subject is required"),
      message: Yup.string().max(265, "Message must be 265 Char or less"),
    }),

    onSubmit: (values) => {
      setLoding(true);

      console.log(values);
      api
        .post("auth/contactus/", values, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setLoding(false);
          toggleShow();
        })
        .catch((err) => {
          setLoding(false);
          console.log(err);

          setResError([]);
          // console.log(err.originalError.response.data);
          for (let na of Object.values(err.originalError.response.data)) {
            setResError((data) => [...data, na[0]]);
          }
        });
    },
  });

  return (
    <div className={styles.body}>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span>Contact Us</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="bg-light p-3">
              <div id="success"></div>
              <form onSubmit={formik.handleSubmit}>
                <div className="control-group mb-3">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.name &&
                      formik.errors.name &&
                      styles.inputErr
                    } form-control`}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className={`text-danger`}>{formik.errors.name}</p>
                  )}
                </div>

                <div className="control-group mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.email &&
                      formik.errors.email &&
                      styles.inputErr
                    } form-control`}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className={`text-danger`}>{formik.errors.email}</p>
                  )}
                </div>

                <div className="control-group mb-3">
                  <input
                    type="string"
                    id="phone"
                    placeholder="Your Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.phone &&
                      formik.errors.phone &&
                      styles.inputErr
                    } form-control`}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className={`text-danger`}>{formik.errors.phone}</p>
                  )}
                </div>

                <div className="control-group mb-3">
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.subject &&
                      formik.errors.subject &&
                      styles.inputErr
                    } form-control`}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className={`text-danger`}>{formik.errors.subject}</p>
                  )}
                </div>

                <div className="control-group mb-3">
                  <textarea
                    rows="8"
                    id="message"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    className={`${
                      formik.touched.message &&
                      formik.errors.message &&
                      styles.inputErr
                    } form-control`}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <p className={`text-danger`}>{formik.errors.message}</p>
                  )}
                </div>

                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5  d-flex flex-column justify-content-between">
            <div className="bg-light p-3 mb-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: "250px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                data-aos="zoom-in"
              ></iframe>
            </div>
            <div className="bg-light p-3 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mx-1"></i> 123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mx-1"></i>
                info@example.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mx-1"></i> +012 345
                67890
              </p>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className={styles.loading}>
          <div class={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Congratulation</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody className="d-flex flex-column align-items-center gap-4">
                <div class={styles.pulse}></div>

                <p>Congratulation Your Message is send</p>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn
                  color="secondary"
                  onClick={() => {
                    toggleShow();
                  }}
                >
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>{" "}
    </div>
  );
};
