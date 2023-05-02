import { useState, useEffect, useRef } from "react";
import {
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import "./stylee.css";

function FirstStep(props) {
  const [formValue, setFormValue] = useState({
    iamge: "",
    fname: "",
    lname: "",
    uName: "",
    email: "",
    index: 2,
  });

  const onChange = (e) => {
    if (e.target.name == "image") {
      // setFormValue({ ...formValue, [e.target.name]: e.target.file[0] });
      console.log(e.file);
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const onClick = () => {
    props.onClick(formValue);
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center my-1">
      <div className="parent">
        <img src="https://fakeimg.pl/300/" className="img" />
        <label htmlFor="inputTag" className="add-image">
          <i className="fa fa-camera"></i>
          <input id="inputTag" type="file" name="image" onChange={onChange} />
        </label>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 gap-2">
        <div className="w-50">
          <MDBInput
            label="First Name"
            id="form1"
            type="text"
            name="fname"
            onChange={onChange}
            value={formValue.fname}
          />
        </div>
        <div className="w-50">
          <MDBInput
            label="Last Name"
            id="form2"
            type="text"
            name="lname"
            onChange={onChange}
            value={formValue.lname}
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="user me-3" size="lg" />
        <div className="w-100">
          <MDBInput
            label="User Name"
            id="form3"
            type="text"
            name="uName"
            onChange={onChange}
            value={formValue.uName}
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="envelope me-3" size="lg" />
        <div className="w-100">
          <MDBInput
            label="Your Email"
            id="form4"
            type="email"
            name="email"
            onChange={onChange}
            value={formValue.email}
          />
        </div>
      </div>

      <div className="d-flex flex-row flex-row-reverse mb-4 w-100">
        <MDBBtn className="mb-4" size="lg" onClick={onClick}>
          Next
        </MDBBtn>
      </div>
    </div>
  );
}

export default FirstStep;
