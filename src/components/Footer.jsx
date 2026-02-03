import React from 'react';
import { Container } from 'react-bootstrap';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto py-4 bg-white border-top">
      <Container className="text-center">
        {/* New Midnight Theme Logo */}
        <h6 
          className="fw-bold mb-3" 
          style={{ 
            letterSpacing: '5px', 
            color: '#1A1A1A', // Midnight Black
            fontSize: '0.9rem',
            textTransform: 'uppercase'
          }}
        >
          Lumina<span style={{ fontWeight: '300', color: '#6C757D' }}>Wellbeing</span>
        </h6>

        {/* Ultra-Simple Social Media Icons */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="#" style={{ color: '#1A1A1A' }} aria-label="Instagram">
            <Instagram size={18} strokeWidth={1} />
          </a>
          <a href="#" style={{ color: '#1A1A1A' }} aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={1} />
          </a>
          <a href="mailto:hello@mindease.com" style={{ color: '#1A1A1A' }} aria-label="Email">
            <Mail size={18} strokeWidth={1} />
          </a>
        </div>

        
      </Container>
    </footer>
  );
}