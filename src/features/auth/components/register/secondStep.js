import { useState } from "react";

import { MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

function SecondStep(props) {
  const [animate, setAnimate] = useState(false);
  const [showError, setshowError] = useState(false);

  const next = () => {
    if (
      Object.keys(props.form.errors).filter((el) =>
        ["address", "phone"].includes(el)
      ).length === 0 &&
      Object.keys(props.form.touched).length !== 0
    ) {
      props.onClick({ index: 3 });
    } else {
      console.log(props.form.touched.phone);
      if (!props.form.touched.phone) {
        setshowError(true);
        setTimeout(() => {
          setshowError(false);
        }, 1500);
      }
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 800);
    }
  };

  // const skip = () => {
  //   props.onClick({ index: 3 });
  // };

  const prev = () => {
    props.onClick({ index: 1 });
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center my-1">
      <div className="d-flex flex-row align-items-center mb-5 w-100">
        <MDBIcon fas icon="phone-alt me-3" size="lg" />
        <div className="w-100 position-relative">
          <MDBInput
            label="Phone"
            id="phone"
            type="text"
            value={props.form.values.phone}
            onChange={props.form.handleChange}
            className={`${
              props.form.touched.phone &&
              props.form.errors.phone &&
              styles.inputErr
            } `}
            onBlur={props.form.handleBlur}
          />
          {props.form.touched.phone && props.form.errors.phone && (
            <p className={`${styles.error} ${animate ? styles.animate : ""}`}>
              {props.form.errors.phone}
            </p>
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
            value={props.form.values.address}
            onChange={props.form.handleChange}
            className={`${
              props.form.touched.address &&
              props.form.errors.address &&
              styles.inputErr
            } `}
            onBlur={props.form.handleBlur}
          />
          {props.form.touched.address && props.form.errors.address && (
            <p className={`${styles.error} ${animate ? styles.animate : ""}`}>
              {props.form.errors.address}
            </p>
          )}
        </div>
      </div>

      <div
        className={`d-flex flex-row align-items-center mb-4 justify-content-between w-100 ${styles.bttn}`}
      >
        <MDBBtn type="button" className="mb-4" size="lg" onClick={prev}>
          prev
        </MDBBtn>

        <div className="d-flex align-items-center gap-2 bttn">
          {/* <button type="button" className="btn btn-link mb-4" onClick={skip}>
            Skip Address
          </button>}*/}

          <MDBBtn type="button" className="mb-4" size="lg" onClick={next}>
            Next
          </MDBBtn>
        </div>
      </div>

      {showError && (
        <div className="alert alert-danger">
          <p className={`m-0 ${animate ? styles.animate : ""}`}>
            fill All input by corect way
          </p>
        </div>
      )}
    </div>
  );
}

export default SecondStep;
