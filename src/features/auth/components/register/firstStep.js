/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MDBSpinner, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import styles from "./stylee.module.css";

const schema = yup.object().shape({
  uName: yup
    .string()
    .required("User Name is required.")
    .matches(/^[a-zA-Z][a-zA-Z0-9]*$/, "User Name must start with a letter."),
  email: yup
    .string()
    .required("Email is required.")
    .matches(
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*(\.\w+([-.]\w+)*)?$/,
      "Please enter a valid email address."
    ),
  fname: yup
    .string()
    .required("First Name is required.")
    .matches(/^[A-Za-z]+$/, "First Name must not contain numbers.")
    .min(3, "First Name must be at least 3 characters."),
  lname: yup
    .string()
    .required("Last Name is required.")
    .matches(/^[A-Za-z]+$/, "Last Name must not contain numbers.")
    .min(3, "Last Name must be at least 3 characters."),
});

function FirstStep(props) {
  const [formValue, setFormValue] = useState(props.form);
  const [show, setShow] = useState(false);

  const onImgChange = (e) => {
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
  };

  const onClick = (data) => {
    props.onClick({ ...formValue, ...data, index: 2 });
    // if you want it to load
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     props.onClick({ ...formValue, ...data, index: 2 });
    //     resolve();
    //   }, 300);
    // });
  };

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(onClick)} noValidate>
      <div className={`${styles.parent}`}>
        <img src={formValue.imagePath} className={`${styles.img}`} />

        <div
          className={show ? `${styles.wait} ${styles.visible}` : styles.wait}
        >
          <MDBSpinner grow size="sm"></MDBSpinner>
          <MDBSpinner grow size="sm"></MDBSpinner>
          <MDBSpinner grow size="sm"></MDBSpinner>
        </div>
        <label htmlFor="inputTag" className={`${styles.addImage}`}>
          <i className="fa fa-camera"></i>
          <input
            id="inputTag"
            type="file"
            name="image"
            onChange={onImgChange}
          />
        </label>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 gap-1">
        <MDBIcon fas icon="user me-3" size="lg" />

        <div className="d-flex gap-2">
          <div className="w-50">
            <FormControl isInvalid={!!errors.fname}>
              <FormLabel htmlFor="fname">First Name</FormLabel>
              <Input
                id="fname"
                type="text"
                name="fname"
                {...register("fname")}
              />
              <FormErrorMessage>{errors.fname?.message}</FormErrorMessage>
            </FormControl>
          </div>
          <div className="w-50">
            <FormControl isInvalid={!!errors.lname}>
              <FormLabel htmlFor="lname">Last Name</FormLabel>
              <Input
                id="lname"
                type="text"
                name="lname"
                required
                {...register("lname")}
              />
              <FormErrorMessage>{errors.lname?.message}</FormErrorMessage>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="at me-3" size="lg" />
        <div className="w-100">
          <FormControl isInvalid={!!errors.uName}>
            <FormLabel htmlFor="uName">User Name</FormLabel>
            <Input id="uName" type="text" name="uName" {...register("uName")} />
            <FormErrorMessage>{errors.uName?.message}</FormErrorMessage>
          </FormControl>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="envelope me-3" size="lg" />
        <div className="w-100">
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Your Email</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              required
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </div>
      </div>

      <div className="d-flex flex-row flex-row-reverse mb-4 w-100">
        <MDBBtn type="submit" className="mb-4" size="lg">
          {isSubmitting && (
            <MDBSpinner
              grow
              size="sm"
              role="status"
              tag="span"
              className="me-2"
            />
          )}
          Next
        </MDBBtn>
      </div>
    </form>
  );
}

export default FirstStep;
