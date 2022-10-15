import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import UserDash from "./UserDash";
import { CRow, CContainer, CCol, CButton, CImage } from "@coreui/react";

import homebg from "../Assets/homebg.jpg";

function Login({}) {
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
                      <h1>🔐Login</h1>

                      <form className="row g-3 needs-validation">
                        {/* Email */}
                        <div className="col-md-8">
                          <label
                            htmlFor="validationCustom02"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            className="form-control"
                            name="email"
                            id="validationCustom02"
                            type="email"
                            autoComplete="off"
                            placeholder="name@example.com"
                            text="Must be 8-20 characters long."
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>

                        <div className="col-md-8">
                          <label
                            htmlFor="validationCustom05"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Example@123"
                            text="Must be min. 8 characters long."
                            id="validationCustom05"
                          />
                          <div className="invalid-feedback">
                            Please provide a Valid Password
                          </div>
                        </div>

                        <div className="col-12">
                          <CButton
                            className="btn"
                            type="submit"
                            color="info"
                            style={{
                              color: "white",
                              backgroundColor: "#FF735C",
                              border: "2px solid #FF735C",

                              cursor: "pointer",
                              marginBottom: "10px",
                              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                            }}
                            size="lg"
                          >
                            Login
                          </CButton>
                        </div>
                      </form>
                      <Link to="/register">
                        <p style={{ textDecoration: "none" }}>
                          Didn't have an Account ?
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
export default Login;
