import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3 fw-medium">
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/consultants" className={isActive('/consultants') ? 'active' : ''}>Consultants</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/tests" className={isActive('/tests') ? 'active' : ''}>Tests</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

