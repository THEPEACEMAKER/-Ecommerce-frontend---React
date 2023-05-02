import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./stylee.css";

function ThirdStep(props) {
  const [formValue, setFormValue] = useState({
    password: "",
    repeatPassword: "",
    index: 3,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickRPassword = () => setShowRPassword(!showRPassword);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const next = () => {
    props.onClick(formValue);
  };

  const prev = () => {
    props.onClick({ ...formValue, index: 2 });
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center my-1">
      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 icon-parent">
        <MDBIcon fas icon="lock me-3" size="lg" />
        <div className="w-100">
          <MDBInput
            label="Password"
            id="form3"
            type={showPassword ? "text" : "password"}
            name="password"
          />
        </div>
        <button onClick={handleClickPassword} className="icon">
          <i
            className={
              showPassword
                ? "fa-regular fa-eye-slash"
                : "fa-sharp fa-regular fa-eye"
            }
          ></i>
        </button>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 icon-parent">
        <MDBIcon fas icon="key me-3" size="lg" />
        <div className="w-100">
          <MDBInput
            label="Repeat your password"
            id="form4"
            type={showRPassword ? "text" : "password"}
            name="repeatPassword"
          />
        </div>
        <button onClick={handleClickRPassword} className="icon">
          <i
            className={
              showRPassword
                ? "fa-regular fa-eye-slash"
                : "fa-sharp fa-regular fa-eye"
            }
          ></i>
        </button>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 bttn">
        <MDBBtn className="mb-4" size="lg" onClick={prev}>
          prev
        </MDBBtn>

        <MDBBtn className="mb-4" size="lg" onClick={next}>
          Register
        </MDBBtn>
      </div>
    </div>
  );
}

export default ThirdStep;
