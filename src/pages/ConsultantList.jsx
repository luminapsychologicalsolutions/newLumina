import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { consultantsData } from '../data';

export default function ConsultantsList() {
  const [shuffledConsultants, setShuffledConsultants] = useState([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm to ensure uniform random distribution (no priority)
    const array = [...consultantsData];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledConsultants(array);
  }, []);

  return (
    <Container className="py-5 animate-fade-in-up" style={{ maxWidth: '1100px' }}>
      <div className="mb-5 text-center text-md-start">
        <h1 className="fw-bold display-5" style={{ color: '#436488ff', letterSpacing: '-0.5px' }}>Our Consultants</h1>
        <p className="text-muted lead">Meet our team of certified specialists dedicated to your mental well-being.</p>
      </div>
      
      <Row className="g-4">
        {shuffledConsultants.map((c, index) => (
          <Col md={6} key={c.id}>
            <div 
              className="immersive-card d-flex flex-column flex-sm-row align-items-center p-4 shadow-sm h-100" 
              style={{ 
                borderRadius: '28px', 
                border: '1px solid rgba(255, 255, 255, 0.45)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(248, 250, 252, 0.65) 100%)',
                animationDelay: `${index * 0.05}s`
              }}
            >
              {/* Photo */}
              <img 
                src={c.img} 
                alt={c.name} 
                className="rounded-circle mb-3 mb-sm-0 me-sm-4 shadow-sm" 
                style={{ 
                  width: '110px', 
                  height: '110px', 
                  objectFit: 'cover', 
                  border: '4px solid #FFFFFF',
                  flexShrink: 0
                }}
              />
              
              {/* Details & Button */}
              <div className="d-flex flex-column align-items-center align-items-sm-start w-100 h-100">
                <h3 className="fw-bold mb-1 text-dark text-center text-sm-start" style={{ letterSpacing: '-0.3px', fontSize: '1.4rem' }}>
                  {c.name}
                </h3>
                <h6 className="fw-bold text-center text-sm-start mb-2" style={{ color: '#557A95', fontSize: '0.95rem' }}>
                  {c.designation}
                </h6>
                <div className="mb-3">
                  <span className="text-muted small fw-semibold" style={{ fontSize: '0.8rem' }}>
                    {c.specialty}
                  </span>
                </div>
                
                <Button 
                  as={Link} 
                  to={`/consultant/${c.id}`} 
                  className="btn-pill px-4 py-2 border-0 text-white shadow-sm mt-auto"
                  style={{ 
                    backgroundColor: '#436488ff',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    letterSpacing: '0.5px'
                  }}
                >
                  View Full Details &rarr;
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}