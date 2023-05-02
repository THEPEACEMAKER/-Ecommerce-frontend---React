import { useState, useEffect, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./stylee.css";

import StepperComp from "./stepper";
import FirstStep from "./firstStep";
import ThirdStep from "./thirdStep";
import SecondStep from "./secondStep";

function Register() {
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    uName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repeatPassword: "",
  });

  const [index, setIndex] = useState(1);

  const onChange = (e) => {
    setFormValue({ ...formValue, ...e });
    setIndex(e.index);
    console.log({ ...formValue, ...e });
  };

  return (
    <div className="Register">
      <MDBContainer fluid>
        <MDBCard
          className="text-black w-75 m-auto"
          style={{ borderRadius: "25px" }}
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
                {index == 1 ? (
                  <FirstStep onClick={onChange} />
                ) : index == 2 ? (
                  <SecondStep onClick={onChange} />
                ) : (
                  <ThirdStep onClick={onChange} />
                )}
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center cover"
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
