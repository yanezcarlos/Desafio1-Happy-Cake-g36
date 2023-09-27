import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./BarraNav.css";

const BarraNav = () => {
  return (
    <div>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="ancla" to="/">
              🏠 Home
            </Link>
            <Link className="ancla" to="/contacto">
              📒 Contacto
            </Link>
          </Nav>
          <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNav;
