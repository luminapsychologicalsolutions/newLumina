import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  // Replace with your actual WhatsApp Business number (Country Code + Number)
  const whatsappNumber = "918281944181"; 
  const message = "hello, I would like to inquire about a consultation.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const Email = "luminapsychologicalsolutions@gmail.com"

  return (
    <div style={{ backgroundColor: '#F0F4F8', minHeight: '80vh' }} className="py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#1B263B' }}>Contact Us</h2>
          <div style={{ width: '50px', height: '3px', background: '#C5A059', margin: '15px auto' }}></div>
          <p className="text-muted">We are here to support your journey with absolute discretion.</p>
        </div>

        <Row className="justify-content-center g-4">
          {/* Option 1: Email */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Mail className="mx-auto mb-3" style={{ color: '#5263deff' }} />
              <h5 className="fw-bold">Email Us</h5>
              <p className="text-muted small">For detailed inquiries and private documentation.</p>
              <a 
                href={`mailto:${Email}`} 
                className="text-decoration-none fw-bold mt-auto" 
                style={{ color: '#2C3E50', fontSize: '0.85rem' }}
              >
                start chat
              </a>
            </Card>
          </Col>

          {/* Option 2: WhatsApp (New) */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <MessageCircle className="mx-auto mb-3" style={{ color: '#33ef78ff' }} />
              <h5 className="fw-bold">WhatsApp</h5>
              <p className="text-muted small">Instant messaging for quick concierge support.</p>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-decoration-none fw-bold mt-auto" 
                style={{ color: '#2C3E50' }}
              >
                Start Chat
              </a>
            </Card>
          </Col>

          {/* Option 3: Office Hours */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4">
              <Clock className="mx-auto mb-3" style={{ color: '#C5A059' }} />
              <h5 className="fw-bold">Office Hours</h5>
              <p className="text-muted small">Monday to Friday (Virtual Office)</p>
              <p className="fw-bold mt-auto mb-0" style={{ color: '#2C3E50' }}>9:00 AM - 6:00 PM</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}