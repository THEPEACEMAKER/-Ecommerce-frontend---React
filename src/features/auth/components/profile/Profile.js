import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../../../api/api";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  setError,
  clearError,
  setSuccess,
  clearSuccess,
} from "../../../utils/apiStatusSlice.js";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBValidation,
} from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import PasswordInfo from "./PasswordInfo";

function Profile() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.apiStatus.error);
  const success = useSelector((state) => state.apiStatus.success);

  const [formValue, setFormValue] = useState({
    image: "", // ?
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
  });

  useEffect(() => {
    api
      .get("http://localhost:3001/profile")
      .then((res) => {
        reset(res.data);
        setFormValue({ ...formValue, imagePath: res.data.imagePath });
        // setData(res.data);
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  }, []);

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

  const onSubmit = (e) => {
    // on submit
    setFormValue({ ...formValue, ...e });
  };

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (errors) {
    }
  }, [errors]);

  return (
    <div className={`${styles.body}`}>
      <MDBContainer fluid>
        <MDBCard
          className="text-black w-75 m-auto"
          style={{ borderRadius: "25px" }}
        >
          <MDBCardBody className="py-1">
            <div className="w-50 m-auto border">
              <h2 className="my-3 mb-2" style={{ textAlign: "center" }}>
                Profile
              </h2>
              <p style={{ textAlign: "center" }}>
                Edit your profile information
              </p>
              <hr />

              <MDBRow className="w-100 m-auto">
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center w-100 px-4"
                >
                  {/*  */}
                  <MDBValidation
                    className="w-100 d-flex flex-column align-items-center my-1"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <PersonalInfo
                      formValue={formValue}
                      onChange={onChange}
                      register={register}
                      errors={errors}
                    />
                    <ContactInfo
                      formValue={formValue}
                      onChange={onChange}
                      register={register}
                      errors={errors}
                    />
                    <PasswordInfo
                      formValue={formValue}
                      onChange={onChange}
                      register={register}
                      errors={errors}
                    />

                    <div className="d-flex flex-row flex-row-reverse mb-4 w-100">
                      <MDBBtn type="submit" className="mb-4" size="lg">
                        Edit
                      </MDBBtn>
                    </div>
                  </MDBValidation>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Profile;
