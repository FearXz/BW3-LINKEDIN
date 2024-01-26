import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router";

function MyNavBar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmitSearchBar = (e) => {
    e.preventDefault();
    navigate("/jobs/" + inputValue);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3 py-0 mt-1 pt-1">
      <Container>
        <div className="d-flex flex-nowrap align-items-center col-sm-3">
          <Navbar.Brand href="/" className="p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#0A66C2"
              className="mercado-match"
              width="41"
              height="41"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Navbar.Brand>

          {/* <Form onSubmit={handleSubmitSearchBar} className="d-flex me-auto"> */}
          <form onSubmit={handleSubmitSearchBar} className="col-sm-12">
            <InputGroup>
              <InputGroup.Text className="bg-gray-200 bg-opacity-75 border-end-0 p-1 px-2">
                <i className="bi bi-search text-gray-700"></i>
              </InputGroup.Text>
              <Form.Control
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="search"
                placeholder="Cerca per qualifica, competenza, .."
                className=" bg-gray-200 bg-opacity-75 fs-7 border-start-0 py-0 px-0"
                aria-label="Search"
              />
            </InputGroup>
          </form>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end">
          <Nav className="my-2 my-lg-0 flex-row  flex-wrap" /* style={{ maxHeight: "100px" }} */ navbarScroll>
            <div className="text-center">
              <Nav.Link href="/" className="  py-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match mx-4"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                </svg>{" "}
                <p className="fs-7 mb-0">Home</p>
              </Nav.Link>
            </div>
            <Nav.Link href="#" className=" text-center py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match mx-4"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>{" "}
              <p className="fs-7 mb-0">Rete</p>
            </Nav.Link>
            <Nav.Link href="/jobs" className=" text-center py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match mx-4"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>{" "}
              <p className="fs-7 mb-0">Lavoro</p>
            </Nav.Link>
            <Nav.Link href="#" className=" text-center py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match mx-4"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <p className="fs-7 mb-0">Messaggistica</p>
            </Nav.Link>
            <Nav.Link href="#" className=" text-center py-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match mx-4"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <p className="fs-7 mb-0">Notifiche</p>
            </Nav.Link>

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-person-circle fs-5"></i>{" "}
                  <span className="d-flex align-items-center fs-7">
                    Tu <i className="bi bi-chevron-down fs-8 ms-1"></i>
                  </span>
                </div>
              }
              id="navbarScrollingDropdown"
              className="custom-dropdown"
            >
              <div className="mx-2">
                <NavDropdown.Item
                  href="/profile"
                  className=" btn btn-outline-blue-500  fs-7 fw-semibold text-center border border-blue-500 border-2 rounded-pill py-0 my-2 px-0"
                >
                  Visualizza profilo
                </NavDropdown.Item>
              </div>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="text-gray-700 fs-7 fw-semibold">
                <i className="bi bi-gem text-orange-300 bg-yellow-100 rounded px-1 me-1"></i>
                Prova Premium per 0 EUR
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile" className="text-gray-700 fs-7">
                Impostazioni e privacy
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile" className="text-gray-700 fs-7">
                Guida
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile" className="text-gray-700 fs-7">
                Lingua
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="text-gray-700 fs-7">
                Esci
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  <i className="bi bi-grid-3x3-gap-fill text-gray-700 fs-5"></i>
                  <span className="d-flex align-items-center fs-7">
                    Per le aziende <i className="bi bi-chevron-down fs-8 ms-1"></i>
                  </span>
                </div>
              }
              id="navbarScrollingDropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item href="#" className="text-gray-700 fs-7">
                Assumi su LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-gray-700 fs-7">
                Vendi su LinkedIn
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#" className="text-gray-700 fs-7">
                Fai pubblicità su LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
