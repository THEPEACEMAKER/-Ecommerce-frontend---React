import { useState } from "react";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

import StepperComp from "./stepper";
import FirstStep from "./firstStep";
import ThirdStep from "./thirdStep";
import SecondStep from "./secondStep";

function Register() {
  const [formValue, setFormValue] = useState({
    image: "",
    imagePath:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    fname: "",
    lname: "",
    uName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repeatPassword: "",
    index: "",
  });

  const [index, setIndex] = useState(1);

  const onChange = (e) => {
    setFormValue({ ...formValue, ...e });
    setIndex(e.index);
    console.log({ ...formValue, ...e });
  };

  return (
    <div className={`${styles.body}`}>
      <MDBContainer fluid>
        <MDBCard
          className="text-black w-75 m-auto"
          style={{ borderRadius: "25px", maxWidth: "1100px" }}
        >
          <MDBCardBody>
            <h2 style={{ textAlign: "center" }}>Sign up</h2>
            <StepperComp index={index} />

            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                {index === 1 ? (
                  <FirstStep onClick={onChange} form={formValue} />
                ) : index === 2 ? (
                  <SecondStep onClick={onChange} form={formValue} />
                ) : (
                  <ThirdStep onClick={onChange} form={formValue} />
                )}

                <p className="small fw-bold mt-2 pt-1 mb-2">
                  I have an account?
                  <Link to="/login" className="link-danger">
                    Login Here
                  </Link>
                </p>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className={`order-1 order-lg-2 d-flex align-items-center ${styles.cover}`}
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
