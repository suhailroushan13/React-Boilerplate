import React from "react";
import DashNavbar from "./DashNavbar";
import { CCol, CContainer, CRow } from "@coreui/react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

function UserDash() {
  return (
    <>
      <DashNavbar />
      <CContainer style={{ marginTop: "5%" }}>
        <CRow>
          <CCol
            xs={{ cols: "auto", row: "auto" }}
            sm={{ cols: "auto", row: "auto" }}
            md={{ cols: "auto", row: "auto" }}
          >
            <h1 className="display-6"> 📝 User Dashboard </h1>
            <CTable>
              <CTableHead>
                <CTableRow color="dark">
                  <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Task Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Deadline</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="default">
                  <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
}

export default UserDash;
