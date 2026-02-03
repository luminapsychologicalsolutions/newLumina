import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const consultants = [
    { id: '1', name: "Dr. Alisha Reed", specialty: "Trauma & Anxiety", img: "https://i.pravatar.cc/150?u=1" },
    { id: '2', name: "Marcus Thorne", specialty: "CBT & Depression", img: "https://i.pravatar.cc/150?u=2" },
    { id: '3', name: "Elena Rossi", specialty: "Family Therapy", img: "https://i.pravatar.cc/150?u=3" }
  ];

  return (
    <>
      <section className="py-5 bg-white">
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-4">A Modern Space for <span className="text-primary">Your Mind.</span></h1>
          <p className="lead text-muted mb-4 mx-auto" style={{maxWidth: '700px'}}>Connect with licensed psychologists from the comfort of your home. Secure, supportive, and compassionate.</p>
          <Button size="lg" className="btn-pill px-5 shadow">Get Started Now</Button>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Meet Our Experts</h2>
          <Row>
            {consultants.map(c => (
              <Col md={4} key={c.id} className="mb-4">
                <Card className="modern-card p-4 h-100 text-center shadow-sm">
                  <Card.Img variant="top" src={c.img} className="rounded-circle mx-auto mb-3" style={{width: '120px'}} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{c.name}</Card.Title>
                    <Card.Text className="text-muted small">{c.specialty}</Card.Text>
                    <Button as={Link} to={`/consultant/${c.id}`} variant="outline-primary" className="btn-pill w-100">
                      View Profile <ArrowRight size={16} />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}