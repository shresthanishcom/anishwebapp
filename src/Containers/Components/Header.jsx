import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Css/Nav.css";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home">Anish Shrestha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/photos">
                <Nav.Link>Photos</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Works" id="basic-nav-dropdown">
                <LinkContainer to="/career">
                  <NavDropdown.Item>Career</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/socialwork">
                  <NavDropdown.Item href="#action/3.2">
                    Social Works
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/career">
                  <NavDropdown.Item href="#action/3.3">Helps</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/goodworks">
                  <NavDropdown.Item href="#action/3.4">
                    Good Works
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
