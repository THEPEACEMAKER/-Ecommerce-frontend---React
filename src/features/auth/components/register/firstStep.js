/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  MDBSpinner,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./stylee.css";

function FirstStep(props) {
  const [formValue, setFormValue] = useState(props.form);
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      setShow(true);

      reader.onload = () => {
        setFormValue({
          ...formValue,
          imagePath: reader.result,
          [e.target.name]: file,
        });
        setShow(false);
      };
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const onClick = (data) => {
    props.onClick({ ...formValue, index: 2 });
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
      onSubmit={handleSubmit(onClick)}
    >
      <div className="parent">
        <img src={formValue.imagePath} className="img" />

        <div className={show ? "wait visible" : "wait"}>
          <MDBSpinner grow size="sm"></MDBSpinner>
          <MDBSpinner grow size="sm"></MDBSpinner>
          <MDBSpinner grow size="sm"></MDBSpinner>
        </div>
        <label htmlFor="inputTag" className="add-image">
          <i className="fa fa-camera"></i>
          <input id="inputTag" type="file" name="image" onChange={onChange} />
        </label>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 gap-1">
        <MDBIcon fas icon="user me-3" size="lg" />

        <div className="d-flex gap-2">
          <div className="w-50">
            <MDBValidationItem
              feedback={errors.fname ? errors.fname.message : ""}
              invalid={!!errors.fname}
            >
              <MDBInput
                label="First Name"
                id="form1"
                type="text"
                name="fname"
                required
                value={formValue.fname}
                {...register("fname", {
                  required: { value: true, message: "First Name is required." },
                })}
                onChange={onChange}
              />
            </MDBValidationItem>
          </div>
          <div className="w-50">
            <MDBValidationItem
              feedback={errors.lname ? errors.lname.message : ""}
              invalid={!!errors.lname}
            >
              <MDBInput
                label="Last Name"
                id="form1"
                type="text"
                name="lname"
                required
                value={formValue.lname}
                {...register("lname", {
                  required: { value: true, message: "Last Name is required." },
                })}
                onChange={onChange}
              />
            </MDBValidationItem>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="at me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.uName ? errors.uName.message : ""}
            invalid={!!errors.uName}
          >
            <MDBInput
              label="User Name"
              id="form3"
              type="text"
              name="uName"
              required
              value={formValue.uName}
              {...register("uName", {
                required: { value: true, message: "User Name is required." },
              })}
              onChange={onChange}
            />
          </MDBValidationItem>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="envelope me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.email ? errors.email.message : ""}
            invalid={!!errors.email}
          >
            <MDBInput
              label="Your Email"
              id="form4"
              type="email"
              name="email"
              value={formValue.email}
              required
              {...register("email", {
                required: { value: true, message: "Email is required." },
                pattern: {
                  value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  message: "Please enter a valid email address.",
                },
              })}
              onChange={onChange}
            />
          </MDBValidationItem>
        </div>
      </div>

      <div className="d-flex flex-row flex-row-reverse mb-4 w-100">
        <MDBBtn type="submit" className="mb-4" size="lg">
          Next
        </MDBBtn>
      </div>
    </MDBValidation>
  );
}

export default FirstStep;
