import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ConsultantCard({ consultant }) {
  return (
    <Card className="modern-card p-4 h-100 text-center shadow-sm border-0">
      <Card.Img 
        variant="top" 
        src={consultant.img} 
        className="rounded-circle mx-auto mb-3" 
        style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{consultant.name}</Card.Title>
        <Card.Text className="text-muted small">{consultant.specialty}</Card.Text>
        <Button 
          as={Link} 
          to={`/consultant/${consultant.id}`} 
          variant="outline-primary" 
          className="btn-pill w-100 mt-auto"
        >
          View Profile <ArrowRight size={16} className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  );
}