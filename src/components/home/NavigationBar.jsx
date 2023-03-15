import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey={1} as={Link} to="/" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                as={Link}
                to="allcategory"
                className="navLink"
              >
                All Category
              </Nav.Link>
              <Nav.Link
                eventKey={3}
                as={Link}
                to="allmanufacturer"
                className="navLink"
              >
                All Manufacturer
              </Nav.Link>
              <Nav.Link
                eventKey={4}
                as={Link}
                to="allstore"
                className="navLink"
              >
                All Store
              </Nav.Link>
              <Nav.Link
                eventKey={5}
                as={Link}
                to="campaign"
                className="navLink"
              >
                Campaign
              </Nav.Link>
              <Nav.Link eventKey={6} as={Link} to="contact" className="navLink">
                Contact
              </Nav.Link>
              <NavDropdown
                title="Policy Center"
                id="collasible-nav-dropdown"
                className="navLink"
              >
                <NavDropdown.Item eventKey={7} as={Link} to="requirements-info">
                  Guest Account Info
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={8} as={Link} to="/secure/profile">
                  Feedback & Review
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Seller Center"
                id="collasible-nav-dropdown"
                className="navLink"
              >
                <NavDropdown.Item
                  href="http://52.199.215.23:3001/"
                  target="_blank"
                >
                  Vendor Registration
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={9} as={Link} to="/secure/profile">
                  Store Manager
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default NavigationBar;
