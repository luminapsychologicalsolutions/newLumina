import React from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { consultantsData } from '../data';

export default function ConsultantCarousel() {
  return (
    <Carousel indicators={false} className="py-4">
      {consultantsData.map(c => (
        <Carousel.Item key={c.id}>
          <div className="modern-card bg-white p-5 mx-auto" style={{ maxWidth: '800px' }}>
            <Row className="align-items-center">
              <Col md={4} className="text-center">
                <img src={c.img} className="rounded-circle shadow mb-3" width="150" alt={c.name} />
              </Col>
              <Col md={8}>
                <h3 className="fw-bold">{c.name}</h3>
                <h6 className="text-primary mb-3">{c.specialty}</h6>
                <p className="text-muted small">{c.bio}</p>
                <Button as={Link} to="/consultants" variant="outline-primary" className="btn-pill mt-2">
                  View All Experts
                </Button>
              </Col>
            </Row>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}