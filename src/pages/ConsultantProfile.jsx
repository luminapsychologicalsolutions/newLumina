import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ArrowLeft, Star, Shield, Award, Briefcase, MapPin, CheckCircle, Clock } from 'lucide-react';
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

  // Parse expertise string into an array
  const expertiseTags = consultant.expertise 
    ? consultant.expertise.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    : [];

  return (
    <Container className="py-5 animate-fade-in-up">
      <Link to="/consultants" className="text-decoration-none d-flex align-items-center mb-4 text-muted hover-opacity">
        <ArrowLeft size={18} className="me-2" /> Back to Consultants
      </Link>
      
      <Card className="modern-card p-4 p-md-5 shadow-sm border-0 mb-5">
        <Row className="g-4 align-items-start">
          {/* Profile Left Sidebar */}
          <Col lg={4} className="text-center pe-lg-4 border-lg-end" style={{ borderRight: '1px solid #E2E8F0' }}>
            <div className="position-relative d-inline-block mb-3">
              <img 
                src={consultant.img} 
                alt={consultant.name} 
                className="rounded-circle shadow-lg" 
                style={{ width: '220px', height: '220px', objectFit: 'cover', border: '5px solid #fff' }} 
              />
              <Badge 
                bg="primary" 
                className="position-absolute bottom-0 end-0 px-3 py-2 rounded-pill shadow-sm"
                style={{ fontSize: '0.85rem', backgroundColor: '#557A95' }}
              >
                {consultant.experience} Exp
              </Badge>
            </div>
            
            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
              <Star className="text-warning" fill="currentColor" size={20} />
              <span className="fw-bold">4.9 (120 Reviews)</span>
            </div>

            {/* Quick Stats Box */}
            <div className="p-3 bg-light rounded-4 text-start mb-4">
              <div className="d-flex align-items-start mb-3">
                <Briefcase size={18} className="text-primary me-2 flex-shrink-0 mt-1" style={{ color: '#557A95' }} />
                <div>
                  <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Role & Specialty</small>
                  <span className="fw-bold small">{consultant.specialty}</span>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <MapPin size={18} className="text-primary me-2 flex-shrink-0 mt-1" style={{ color: '#557A95' }} />
                <div>
                  <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Current Affiliation</small>
                  <span className="fw-bold small">{consultant.workingNow}</span>
                </div>
              </div>
            </div>

            <Row className="g-2 text-center">
              <Col xs={4}>
                <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column align-items-center justify-content-center">
                  <Shield size={18} className="text-success mb-1" />
                  <div className="fw-bold" style={{ fontSize: '0.65rem' }}>100% Private</div>
                </div>
              </Col>
              <Col xs={4}>
                <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column align-items-center justify-content-center">
                  <Award size={18} className="text-success mb-1" />
                  <div className="fw-bold" style={{ fontSize: '0.65rem' }}>Certified</div>
                </div>
              </Col>
              <Col xs={4}>
                <div className="p-2 bg-light rounded-3 h-100 d-flex flex-column align-items-center justify-content-center">
                  <Clock size={18} className="text-success mb-1" />
                  <div className="fw-bold" style={{ fontSize: '0.65rem' }}>Flexible</div>
                </div>
              </Col>
            </Row>
          </Col>
          
          {/* Profile Right Details */}
          <Col lg={8} className="ps-lg-4">
            <div className="mb-2">
              <Badge className="px-3 py-2 rounded-pill text-dark" style={{ backgroundColor: '#D2E3C8', fontSize: '0.8rem' }}>
                Verified Expert Consultant
              </Badge>
            </div>
            
            <h1 className="fw-bold text-dark mb-1">{consultant.name}</h1>
            <h4 className="mb-3" style={{ color: '#557A95' }}>{consultant.designation}</h4>
            
            <hr className="my-4 text-muted opacity-25" />

            {/* About / Bio Section */}
            <div className="mb-4">
              <h5 className="fw-bold text-dark mb-3">About the Consultant</h5>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {consultant.bio}
              </p>
            </div>

            {/* Specialties & Expertise */}
            {expertiseTags.length > 0 && (
              <div className="mb-4">
                <h5 className="fw-bold text-dark mb-3">Core Expertise & Focus</h5>
                <div className="d-flex flex-wrap gap-2">
                  {expertiseTags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      bg="light" 
                      className="border text-dark px-3 py-2 rounded-pill"
                      style={{ fontSize: '0.85rem', fontWeight: '500' }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Section */}
            {consultant.achievements && consultant.achievements.length > 0 && (
              <div className="mb-4">
                <h5 className="fw-bold text-dark mb-3">Professional Achievements & Credentials</h5>
                <ul className="list-unstyled ps-0">
                  {consultant.achievements.map((achievement, idx) => (
                    <li key={idx} className="d-flex align-items-start mb-2 text-muted">
                      <CheckCircle size={18} className="text-success me-2 mt-1 flex-shrink-0" />
                      <span className="small">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-5 d-flex flex-column flex-md-row gap-3">
              <Button size="lg" className="btn-pill px-5 shadow flex-grow-1 border-0" style={{ backgroundColor: '#557A95' }}>
                Book Appointment Now
              </Button>
              <Button as={Link} to="/contact" size="lg" variant="outline-secondary" className="btn-pill px-4">
                Inquire Details
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}