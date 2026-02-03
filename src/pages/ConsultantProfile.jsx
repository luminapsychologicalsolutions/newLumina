import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ArrowLeft, Calendar, Star, Shield, Award } from 'lucide-react';
import { consultantsData } from '../data'; // Ensure this path is correct

export default function ConsultantProfile() {
  const { id } = useParams();
  
  // Find the consultant in our data file based on the URL ID
  const consultant = consultantsData.find(c => c.id === id);

  if (!consultant) {
    return (
      <Container className="py-5 text-center">
        <h2>Consultant not found</h2>
        <Button as={Link} to="/consultants" variant="primary" className="btn-pill mt-3">
          Back to Directory
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Link to="/consultants" className="text-decoration-none d-flex align-items-center mb-4 text-muted">
        <ArrowLeft size={18} className="me-2" /> Back to Consultants
      </Link>
      
      <Card className="modern-card p-4 p-md-5 shadow-sm border-0">
        <Row className="align-items-center">
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <img 
              src={consultant.img} 
              alt={consultant.name} 
              className="rounded-circle shadow-lg mb-3" 
              style={{ width: '220px', height: '220px', objectFit: 'cover' }} 
            />
            <div className="d-flex justify-content-center gap-2 mb-3">
              <Star className="text-warning" fill="currentColor" size={20} />
              <span className="fw-bold">4.9 (120 Reviews)</span>
            </div>
          </Col>
          
          <Col lg={8} className="ps-lg-5">
            <Badge bg="soft-sage" className="mb-2 px-3 py-2 rounded-pill text-dark" style={{backgroundColor: '#D2E3C8'}}>
              Verified Specialist
            </Badge>
            <h1 className="fw-bold mb-2">{consultant.name}</h1>
            <h5 className="text-primary mb-4">{consultant.specialty}</h5>
            
            <div className="mb-4">
              <h6 className="fw-bold mb-2">About</h6>
              <p className="text-muted leading-relaxed">
                {consultant.bio} With over a decade of clinical experience, {consultant.name} specializes 
                in helping individuals achieve emotional balance and resilience using evidence-based practices.
              </p>
            </div>

            <Row className="mb-4 g-3">
              <Col sm={4}>
                <div className="p-3 bg-light rounded-4 text-center">
                  <Shield size={20} className="text-primary mb-2" />
                  <div className="small fw-bold">Confidential</div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="p-3 bg-light rounded-4 text-center">
                  <Award size={20} className="text-primary mb-2" />
                  <div className="small fw-bold">Certified</div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="p-3 bg-light rounded-4 text-center">
                  <Calendar size={20} className="text-primary mb-2" />
                  <div className="small fw-bold">Flexible</div>
                </div>
              </Col>
            </Row>

            <Button size="lg" className="btn-pill px-5 shadow w-100 w-md-auto">
              Book Appointment Now
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}