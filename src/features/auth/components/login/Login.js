import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Alert, AlertIcon } from "@chakra-ui/react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import api from "../../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
} from "../../../utils/apiStatusSlice.js";
import { login } from "../../authSlice";

import styles from "./stylee.module.css";

function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit: ", data);
    api
      .post("/api/token/", data)
      .then((res) => {
        console.log("res:", res);
        const { access, refresh } = res.data;
        dispatch(login({ access, refresh }));
        dispatch(clearError());
        dispatch(setSuccess("Logged In Successfully"));
        // redirect to Home page
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((err) => {
        dispatch(clearSuccess());
        dispatch(setError(err.message));
      });
  };

  useEffect(() => {
    return () => {
      dispatch(clearSuccess());
      dispatch(clearError());
    };
  }, []);

  return (
    <div className={`${styles.body}`}>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>
                <MDBValidation
                  className="text-center"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <MDBValidationItem
                    feedback={errors.username ? errors.username?.message : ""}
                    invalid={!!errors.username}
                  >
                    <MDBInput
                      wrapperClass={!errors.username ? "mb-4" : "mb-5"}
                      label="Username"
                      id="usernameInput"
                      type="username"
                      size="lg"
                      required
                      {...register("username", {
                        required: {
                          value: true,
                          message: "username is required.",
                        },
                      })}
                    />
                  </MDBValidationItem>

                  <MDBValidationItem
                    feedback={errors.password ? errors.password?.message : ""}
                    invalid={!!errors.password}
                  >
                    <MDBInput
                      wrapperClass={!errors.password ? "mb-4" : "mb-5"}
                      label="Password"
                      id="passwordInput"
                      type="password"
                      size="lg"
                      required
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required.",
                        },
                      })}
                    />
                  </MDBValidationItem>

                  <MDBBtn
                    className="mt-2 mb-4 px-5 mx-auto"
                    color="dark"
                    size="lg"
                    type="submit"
                  >
                    Login
                  </MDBBtn>

                  <p className="small fw-bold mt-2 pt-1 mb-2">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-danger">
                      Register Here
                    </Link>
                  </p>
                </MDBValidation>{" "}
                {error || success ? (
                  <div className="w-max m-auto">
                    <Alert status={error ? "error" : "success"}>
                      <AlertIcon />
                      {error ? error : success}
                    </Alert>
                  </div>
                ) : null}
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
