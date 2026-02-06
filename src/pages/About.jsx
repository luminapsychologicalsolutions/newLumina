import React from 'react';
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center position-relative" 
      style={{ minHeight: '80vh', overflow: 'hidden' }}
    >
      {/* Background Logo Text - Large and Transparent */}
      <div 
        className="position-absolute w-100 text-center select-none"
        style={{ 
          fontSize: '15vw', 
          fontWeight: '900', 
          color: '#000', 
          opacity: '0.03', // Subtle transparency
          letterSpacing: '20px',
          zIndex: 0,
          pointerEvents: 'none',
          textTransform: 'uppercase'
        }}
      >
        Lumina Wellbeing
      </div>

      {/* Main Content Layer */}
      <div className="position-relative text-center" style={{ zIndex: 1, maxWidth: '600px' }}>
        <h6 
          className="text-muted text-uppercase mb-4" 
          style={{ letterSpacing: '8px', fontSize: '0.75rem' }}
        >
          Our Identity
        </h6>
        
        <h2 
          className="fw-bold mb-4" 
          style={{ letterSpacing: '4px', color: '#1A1A1A' }}
        >
          Lumina<span style={{ fontWeight: '300', color: '#999' }}>Wellbeing</span>
        </h2>

        <div className="text-muted" style={{ lineHeight: '2', letterSpacing: '1px' }}>
          <p className="mb-4">
            We are a private collective of psychological practitioners dedicated to 
            the art of emotional clarity and personal resilience.
          </p>
          <p>
            We understand that choosing the right therapist can feel overwhelming. That’s why we offer evidence-based, scientifically designed mental health services tailored to your unique needs. We assess the nature and severity of your concerns and connect you with the right professional who can truly help. Our goal is to make professional psychological support accessible and effective—no matter where you are in the world 
          </p>
        </div>

        <div 
          className="mt-5 mx-auto" 
          style={{ width: '40px', height: '1px', background: '#ddd' }}
        ></div>
      </div>
    </Container>
  );
}