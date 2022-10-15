import React, { useState } from "react";

import {
  CRow,
  CContainer,
  CCol,
  CButton,
  CImage,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CFormFeedback,
  CInputGroup,
  CInputGroupText,
  
} from "@coreui/react";

import { Link } from "react-router-dom";
import homebg from "../Assets/homebg.jpg";

import Navbar from "./Navbar";

function Register() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Navbar />
      <CContainer style={{ marginTop: "5%" }}>
        <CRow>
          <CCol
            // style={{ border: "4px solid red" }}

            sm={{ cols: "auto", row: "auto" }}
            md={{ cols: "auto", row: "auto" }}
            xs={{ span: true, order: "last" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="card mb-4 mx-4">
                    <div className="card-body p-4">
                      <h1>Register</h1>

                      {/* <form
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
                        <div className="col-md-6">
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
                            First name
                          </label>
                          <input
                            className="form-control"
                            name="firstname"
                            id="validationCustom01"
                            required
                            type="text"
                            autoComplete="off"
                            validated={validated}
                            onSubmit={handleSubmit}
                            // onChange={onChangeHandler}
                            placeholder="John"
                            aria-describedby="exampleFormControlInputHelpInline"
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>

                        {/* LastName */}
                      <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
                        <CCol md={4}>
                          <CFormInput
                            type="text"
                            defaultValue="Mark"
                            feedbackValid="Looks good!"
                            id="validationCustom01"
                            label="First name"
                            required
                          />
                        </CCol>
                        <CCol md={4}>
                          <CFormInput
                            type="text"
                            defaultValue="Otto"
                            feedbackValid="Looks good!"
                            id="validationCustom02"
                            label="First name"
                            required
                          />
                        </CCol>
                        <CCol md={4}>
                          <CFormLabel htmlFor="validationCustomUsername">
                            Username
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput
                              type="text"
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please choose a username."
                              id="validationCustomUsername"
                              required
                            />
                          </CInputGroup>
                        </CCol>
                        <CCol md={6}>
                          <CFormInput
                            type="text"
                            aria-describedby="validationCustom03Feedback"
                            feedbackInvalid="Please provide a valid city."
                            id="validationCustom03"
                            label="City"
                            required
                          />
                        </CCol>
                        <CCol md={3}>
                          <CFormSelect
                            aria-describedby="validationCustom04Feedback"
                            feedbackInvalid="Please select a valid state."
                            id="validationCustom04"
                            label="State"
                            required
                          >
                            <option disabled>Choose...</option>
                            <option>...</option>
                          </CFormSelect>
                        </CCol>
                        <CCol md={3}>
                          <CFormInput
                            type="text"
                            aria-describedby="validationCustom05Feedback"
                            feedbackInvalid="Please provide a valid zip."
                            id="validationCustom05"
                            label="Zip"
                            required
                          />
                        </CCol>
                        <CCol xs={12}>
                          <CFormCheck
                            type="checkbox"
                            id="invalidCheck"
                            label="Agree to terms and conditions"
                            required
                          />
                          <CFormFeedback invalid>
                            You must agree before submitting.
                          </CFormFeedback>
                        </CCol>
                        <CCol xs={12}>
                          <CButton color="primary" type="submit">
                            Submit form
                          </CButton>
                        </CCol>
                      </CForm>

                      <Link to="/login">
                        <p style={{ textDecoration: "none" }}>
                          Already Have an Account ?
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
          <CCol
            // style={{ border: "4px solid red" }}

            sm={{ cols: "auto", row: "auto" }}
            md={{ cols: "auto", row: "auto" }}
            xs={{ span: true, order: "last" }}
          >
            <CImage className="home2" fluid src={homebg} />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
}

export default Register;
