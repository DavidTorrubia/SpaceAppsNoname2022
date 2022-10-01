import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import "../style/Main.css";
import { Link } from "react-router-dom";
function HeaderNav(props) {
  return (
    <Navbar
      className="landing-bg"
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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="flex-end"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-end">
          <Nav>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Nav.Link>Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
