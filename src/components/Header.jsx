import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <Navbar expand="lg" className="glass-nav sticky-top py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary d-flex align-items-center">
          <Heart className="me-2" fill="#557A95" /> LuminaWellbeing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Button as={Link} to="/login" variant="primary" className="btn-pill px-4 shadow-sm">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}