import React from "react";
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CButton,
  CNavLink,
  CAvatar,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from "@coreui/react";
import logo from "../Assets/logo.png";

function DashNavbar() {
  return (
    <>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          />
          <COffcanvas id="offcanvasNavbar" placement="down" portal={false}>
            <COffcanvasHeader>
              <COffcanvasTitle>
                <p className="fs-3  text-decoration-none">
                  <span role="img" aria-label="alarm">
                    ⏰
                  </span>
                  Tasky App
                </p>
              </COffcanvasTitle>
              <CCloseButton className="text-reset" />
            </COffcanvasHeader>
            <COffcanvasBody>
              <CNavbarNav>
                <CNavItem>
                  <CNavLink href="/" active>
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="home">
                        🏠
                      </span>
                      Home
                    </p>
                  </CNavLink>
                </CNavItem>

                <CNavItem>
                  <CNavLink href="/dashboard">
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="lock">
                        📄
                      </span>
                      Dashboard
                    </p>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/policy">
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="paper">
                        📰
                      </span>
                      Privacy Policy
                    </p>
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/help">
                    <p className="fs-4  text-decoration-none">
                      <span role="img" aria-label="help">
                        💁
                      </span>
                      Help
                    </p>
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </COffcanvasBody>
          </COffcanvas>
          <CDropdown>
            <CDropdownToggle color="white">
              <CAvatar src={logo} color="white" size="lg"></CAvatar>
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem component="button">Account</CDropdownItem>
              <CDropdownItem component="button">Edit Settings</CDropdownItem>
              <CDropdownItem component="button">Help</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem component="button">
                <CButton
                  style={{
                    color: "black",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                  }}
                  type="button"
                  class="btn"
                >
                  LogOut
                </CButton>
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CContainer>
      </CNavbar>
    </>
  );
}

export default DashNavbar;
