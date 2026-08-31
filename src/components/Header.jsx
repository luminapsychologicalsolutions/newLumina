import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar expand="lg" className="lw-navbar py-2 sticky-top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center lw-brand">
          <img
            src="/images/logo.png"
            alt="LuminaWellbeing"
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            className="me-2"
          />
          <span>Lumina<span className="lw-brand-light">Wellbeing</span></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-lg-4 align-items-lg-center py-3 py-lg-0">
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/tests" className={isActive('/tests') ? 'active' : ''}>Tests</Nav.Link>

            <Button as={Link} to="/auth" className="lw-btn lw-btn-primary ms-lg-2 mt-2 mt-lg-0">
              Login / Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
