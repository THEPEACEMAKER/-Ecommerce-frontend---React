import React, { useState } from "react";
import {
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./stylee.css";

function SecondStep(props) {
  const [formValue, setFormValue] = useState({
    phone: "",
    address: "",
    index: 3,
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const next = () => {
    props.onClick(formValue);
  };

  const skip = () => {
    props.onClick(formValue);
  };

  const prev = () => {
    props.onClick({ ...formValue, index: 1 });
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center my-1">
      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="phone-alt me-3" size="lg" />
        <div className="w-100">
          <MDBInput
            label="Phone"
            id="form1"
            type="text"
            name="phone"
            value={formValue.phone}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="location-arrow me-3" size="lg" />
        <div className="w-100">
          <MDBInput
            label="Address"
            id="form1"
            type="text"
            name="address"
            value={formValue.address}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 justify-content-between w-100 bttn">
        <MDBBtn className="mb-4" size="lg" onClick={prev}>
          prev
        </MDBBtn>

        <div className="d-flex align-items-center gap-2 bttn">
          <button type="button" className="btn btn-link mb-4" onClick={skip}>
            Skip
          </button>

          <MDBBtn className="mb-4" size="lg" onClick={next}>
            Next
          </MDBBtn>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
