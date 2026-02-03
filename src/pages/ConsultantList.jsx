import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ConsultantCard from '../components/ConstultantCard.jsx';
import { consultantsData } from '../data';

export default function ConsultantsList() {
  return (
    <Container className="py-5">
      <div className="mb-5">
        <h2 className="fw-bold">Our Medical Team</h2>
        <p className="text-muted">Browse our full directory of certified consultants.</p>
      </div>
      <Row>
        {consultantsData.map(c => (
          <Col md={4} lg={3} key={c.id} className="mb-4">
            <ConsultantCard consultant={c} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}