import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { MDBInput, MDBIcon, MDBValidationItem } from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

function PasswordInfo({ formValue, onChange, register, errors }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);
  const [showRPasswordInput, setShowRPasswordInput] = useState(false);

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickRPassword = () => setShowRPassword(!showRPassword);

  const onPasswordChange = (e) => {
    onChange(e);
    setShowRPasswordInput(true);
  };

  // validation
  const { watch } = useForm();

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 gap-1 ">
        <MDBIcon fas icon="lock me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.password ? errors.password.message : ""}
            invalid={!!errors.password}
            className={`${styles.iconParent}`}
          >
            <MDBInput
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              {...register("password", {
                required: { value: true, message: "Password is required." },
              })}
              onChange={onPasswordChange}
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
      {showRPasswordInput && (
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
                id="repeatPassword"
                type="email"
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
              <button
                onClick={handleClickRPassword}
                className={`${styles.icon}`}
              >
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
      )}
    </>
  );
}

export default PasswordInfo;
