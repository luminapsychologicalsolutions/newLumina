import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-5 mt-3">
        <h1 className="fw-bold">Get In Touch</h1>
        <p className="text-muted mx-auto" style={{maxWidth: '500px'}}>
          Have questions about our services? Our team is here to support you on your mental wellness journey.
        </p>
      </div>

      <Row className="justify-content-center">
        <Col lg={10}>
          <Row className="g-5">
            {/* Contact Info Column */}
            <Col md={5}>
              <div className="h-100 d-flex flex-column justify-content-center">
                <div className="mb-4 d-flex align-items-start gap-3">
                  <div className="p-3 rounded-4 bg-white shadow-sm">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email Us</h6>
                    <p className="text-muted small">support@mindease.com</p>
                  </div>
                </div>

                <div className="mb-4 d-flex align-items-start gap-3">
                  <div className="p-3 rounded-4 bg-white shadow-sm">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Call Us</h6>
                    <p className="text-muted small">+1 (555) 000-1234</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-3 rounded-4 bg-white shadow-sm">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Visit Us</h6>
                    <p className="text-muted small">123 Wellness Way, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Form Column */}
            <Col md={7}>
              <Card className="modern-card p-4 p-md-5 border-0 shadow-sm">
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold">First Name</Form.Label>
                        <Form.Control type="text" placeholder="John" className="rounded-pill p-3 border-light bg-light" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold">Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Doe" className="rounded-pill p-3 border-light bg-light" required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="john@example.com" className="rounded-pill p-3 border-light bg-light" required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-bold">How can we help?</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type your message here..." className="rounded-4 p-3 border-light bg-light" required />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="btn-pill w-100 py-3 shadow d-flex align-items-center justify-content-center gap-2">
                    <MessageSquare size={18} /> Send Message
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}