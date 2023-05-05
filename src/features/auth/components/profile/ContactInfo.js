import { MDBInput, MDBIcon, MDBValidationItem } from "mdb-react-ui-kit";

function ContactInfo({ formValue, onChange, register, errors }) {
  return (
    <>
      <div className="d-flex flex-row align-items-center mb-4 w-100">
        <MDBIcon fas icon="phone-alt me-3" size="lg" />
        <div className="w-100">
          <MDBValidationItem
            feedback={errors.phone ? errors.phone.message : ""}
            invalid={!!errors.phone}
          >
            <MDBInput
              label="Phone"
              id="phone"
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
              id="address"
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
    </>
  );
}

export default ContactInfo;
