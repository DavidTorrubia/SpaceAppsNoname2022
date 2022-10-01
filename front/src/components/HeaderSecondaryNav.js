import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import "../style/Main.css";
import { Link } from "react-router-dom";
function HeaderSecondaryNav() {
  return (
    <Navbar
      className="main-bg"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Link to="/home">
          <img
            className="logo"
            alt="logo"
            src="https://media.discordapp.net/attachments/1025696844916985917/1025750217154383882/logo-nasa-fondo-oscuro-removebg-preview.png"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Nav.Link>Log In</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="btn-outline-success-main">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default HeaderSecondaryNav;