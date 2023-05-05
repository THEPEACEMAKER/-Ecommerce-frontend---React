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
  MDBCardImage,
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
          <MDBCardBody>
            <h2 style={{ textAlign: "center" }}>Sign up</h2>

            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
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

export default Profile;
