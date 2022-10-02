import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import "../style/Main.css";
import { useState } from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";

function HeaderSecondaryNav() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?value=${searchText}`);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

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
            <form className="d-flex" onSubmit={() => {handleSubmit()}}>
              <input
                  id="search"
                  type="text"
                  value={searchText}
                  onChange={handleChange}
                  className="me-2 form-control"
                  placeholder="What are you looking for?"
                />
                <Link to={`/search?value=${searchText}`}>
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </Link>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default HeaderSecondaryNav;
