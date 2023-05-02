import React from "react";
import { useForm } from "react-hook-form";
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
import api from "../../api/api";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api
      .get("/login")
      .then((res) => {
        const { token, user } = res.data;
        // Save token and user to local storage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        // redirect to Home page
        console.log("logged in");
      })
      .catch((err) => {
        console.log("logged in Error: " + err);
      });
  };

  return (
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
                  feedback={errors.email?.message}
                  invalid={!!errors.email}
                >
                  <MDBInput
                    wrapperClass={!errors.email ? "mb-4" : "mb-5"}
                    label="Email address"
                    id="emailInput"
                    type="email"
                    size="lg"
                    required
                    {...register("email", {
                      required: { value: true, message: "Email is required." },
                      pattern: {
                        value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                </MDBValidationItem>

                <MDBValidationItem
                  feedback={errors.password?.message}
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
                  <a href="#!" className="link-danger">
                    Register here
                  </a>
                </p>
              </MDBValidation>{" "}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
