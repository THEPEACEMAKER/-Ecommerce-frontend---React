import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./stylee.css";

function SecondStep(props) {
  const [oldformValue] = useState(props.form);

  const [formValue, setFormValue] = useState(props.form);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const next = () => {
    props.onClick({ ...formValue, index: 3 });
  };

  const skip = () => {
    props.onClick({ ...oldformValue, index: 3 });
  };

  const prev = () => {
    props.onClick({ ...formValue, index: 1 });
  };

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <MDBValidation
      className="w-100 d-flex flex-column align-items-center my-1"
      onSubmit={handleSubmit(next)}
    >
      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="phone-alt me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.phone ? errors.phone.message : ""}
            invalid={!!errors.phone}
          >
            <MDBInput
              label="Phone"
              id="form1"
              type="text"
              name="phone"
              value={formValue.phone}
              required
              {...register("phone", {
                required: { value: true, message: "Phone is required." },
              })}
              onChange={onChange}
            />
          </MDBValidationItem>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 w-100 gap-1">
        <MDBIcon fas icon="location-arrow me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.address ? errors.address.message : ""}
            invalid={!!errors.address}
          >
            <MDBInput
              label="Address"
              id="form1"
              type="text"
              name="address"
              value={formValue.address}
              required
              {...register("address", {
                required: { value: true, message: "Address is required." },
              })}
              onChange={onChange}
            />
          </MDBValidationItem>
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

          <MDBBtn type="submit" className="mb-4" size="lg">
            Next
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
}

export default SecondStep;
