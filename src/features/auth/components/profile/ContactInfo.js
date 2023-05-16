import { useState } from "react";

import { MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

function SecondStep({ formik }) {
  return (
    <div className="w-100 d-flex flex-column align-items-center my-1">
      <div className="d-flex flex-row align-items-center mb-5 w-100">
        <MDBIcon fas icon="phone-alt me-3" size="lg" />
        <div className="w-100 position-relative">
          <MDBInput
            label="Phone"
            id="phone"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className={`${
              formik.touched.phone && formik.errors.phone && styles.inputErr
            } `}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className={`${styles.error} `}>{formik.errors.phone}</p>
          )}
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-5 w-100 gap-1">
        <MDBIcon fas icon="location-arrow me-3" size="lg" />
        <div className="w-100 position-relative">
          <MDBInput
            label="Address"
            id="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            className={`${
              formik.touched.address && formik.errors.address && styles.inputErr
            } `}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <p className={`${styles.error} `}>{formik.errors.address}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
