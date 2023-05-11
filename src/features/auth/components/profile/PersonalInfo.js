/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";

import {
  MDBSpinner,
  MDBInput,
  MDBIcon,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

function PersonalInfo({ formValue, onChange, register, errors }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`${styles.parent}`}>
        <img src={formValue.imagePath} className={`${styles.img}`} />

        <div
          className={show ? `${styles.wait} ${styles.visible}` : styles.wait}
        >
          <MDBSpinner grow size="sm"></MDBSpinner>
          <MDBSpinner grow size="sm"></MDBSpinner>
          <MDBSpinner grow size="sm"></MDBSpinner>
        </div>
        <label htmlFor="inputTag" className={`${styles.addImage}`}>
          <i className="fa fa-camera"></i>
          <input id="inputTag" type="file" name="image" onChange={onChange} />
        </label>
      </div>

      <hr className="w-50"></hr>
      <div className="d-flex flex-row align-items-center mb-4 gap-1">
        <MDBIcon fas icon="user me-3" size="lg" />

        <div className="d-flex gap-2">
          <div className="w-50">
            <MDBValidationItem
              feedback={errors.fname ? errors.fname.message : ""}
              invalid={!!errors.fname}
            >
              <MDBInput
                id="fname"
                type="text"
                name="fname"
                required
                {...register("fname", {
                  required: { value: true, message: "First Name is required." },
                })}
                onChange={onChange}
              />
            </MDBValidationItem>
          </div>
          <div className="w-50">
            <MDBValidationItem
              feedback={errors.lname ? errors.lname.message : ""}
              invalid={!!errors.lname}
            >
              <MDBInput
                id="lname"
                type="text"
                name="lname"
                required
                {...register("lname", {
                  required: { value: true, message: "Last Name is required." },
                })}
                onChange={onChange}
              />
            </MDBValidationItem>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="at me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.uName ? errors.uName.message : ""}
            invalid={!!errors.uName}
          >
            <MDBInput
              id="form3"
              type="text"
              name="uName"
              required
              {...register("uName", {
                required: { value: true, message: "User Name is required." },
              })}
              onChange={onChange}
            />
          </MDBValidationItem>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="envelope me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.email ? errors.email.message : ""}
            invalid={!!errors.email}
          >
            <MDBInput
              id="form4"
              type="email"
              name="email"
              required
              {...register("email", {
                required: { value: true, message: "Email is required." },
                pattern: {
                  value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*(\.\w+([-.]\w+)*)?$/,
                  message: "Please enter a valid email address.",
                },
              })}
              onChange={onChange}
            />
          </MDBValidationItem>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
