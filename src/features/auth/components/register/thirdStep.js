import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import api from "../../../../api/api";

import styles from "./stylee.module.css";

function ThirdStep(props) {
  const [formValue, setFormValue] = useState(props.form);

  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickRPassword = () => setShowRPassword(!showRPassword);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const registertien = () => {
    console.log("data: ", formValue);
    props.onClick(formValue);

    const formData = new FormData();
    // formData.append("fname", formValue.fname); // TODO: add to backend
    // formData.append("lname", formValue.lname); // TODO: add to backend
    formData.append("phone", formValue.phone);
    formData.append("address", formValue.address);
    formData.append("image", formValue.image);
    formData.append("username", formValue.uName);
    formData.append("email", formValue.email);
    formData.append("password", formValue.password);
    formData.append("confirm_password", formValue.password); // TODO: fix rpassword to repeatPassword

    for (let entry of formData.entries()) {
      console.log("formData", entry);
    }

    api
      .post("/auth/register/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Registration success: ", res);
        // redirect to login page
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err); // TODO: log the error messages
      });
  };

  const prev = () => {
    props.onClick({ ...formValue, index: 2 });
  };

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <MDBValidation
      className="w-100 d-flex flex-column align-items-center my-1"
      onSubmit={handleSubmit(registertien)}
    >
      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 gap-1 ">
        <MDBIcon fas icon="lock me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.password ? errors.password.message : ""}
            invalid={!!errors.password}
            className={`${styles.iconParent}`}
          >
            <MDBInput
              label="Password"
              id="form3"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formValue.password}
              {...register("password", {
                required: { value: true, message: "Password is required." },
              })}
              onChange={onChange}
            />
            <button onClick={handleClickPassword} className={`${styles.icon}`}>
              <i
                className={
                  showPassword
                    ? "fa-regular fa-eye-slash"
                    : "fa-sharp fa-regular fa-eye"
                }
              ></i>
            </button>
          </MDBValidationItem>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100">
        <MDBIcon fas icon="key me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.rpassword ? errors.rpassword.message : ""}
            invalid={!!errors.rpassword}
            className={`${styles.iconParent}`}
          >
            <MDBInput
              label="Repeat your password"
              id="form4"
              type={showRPassword ? "text" : "password"}
              name="repeatPassword"
              required
              {...register("rpassword", {
                required: {
                  value: true,
                  message: "Repeat Password is required.",
                },
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              onChange={onChange}
            />
            <button onClick={handleClickRPassword} className={`${styles.icon}`}>
              <i
                className={
                  showRPassword
                    ? "fa-regular fa-eye-slash"
                    : "fa-sharp fa-regular fa-eye"
                }
              ></i>
            </button>
          </MDBValidationItem>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 bttn">
        <MDBBtn className="mb-4" size="lg" onClick={prev}>
          prev
        </MDBBtn>

        <MDBBtn type="submit" className="mb-4" size="lg">
          Register
        </MDBBtn>
      </div>
    </MDBValidation>
  );
}

export default ThirdStep;
