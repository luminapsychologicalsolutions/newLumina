import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShieldCheck, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col lg={6}>
          <h1 className="display-4 fw-bold text-primary mb-4">Our Mission</h1>
          <p className="lead">We believe that mental wellness should be accessible, modern, and free from stigma.</p>
          <p>Lumina Wellbeing was created to bridge the gap between traditional clinical therapy and the modern digital world. We provide a warm, safe, and interesting environment for your personal growth.</p>
        </Col>
        <Col lg={6}>
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600" className="img-fluid rounded-5 shadow" alt="About Us" />
        </Col>
      </Row>
      
      <Row className="text-center g-4">
        <Col md={4}>
          <div className="p-4 modern-card shadow-sm h-100">
            <ShieldCheck size={40} className="text-primary mb-3" />
            <h5>100% Private</h5>
            <p className="small text-muted">Your data and sessions are encrypted and secure.</p>
          </div>
        </Col>
        <Col md={4}>
          <Users size={40} className="text-primary mb-3" />
          <h5>Expert Team</h5>
          <p className="small text-muted">Every consultant is vetted and licensed.</p>
        </Col>
        <Col md={4}>
          <Heart size={40} className="text-primary mb-3" />
          <h5>Patient Centered</h5>
          <p className="small text-muted">We tailor our approach to your unique journey.</p>
        </Col>
      </Row>
    </Container>
  );
}