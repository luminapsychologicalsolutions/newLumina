import React from 'react';
import { Container } from 'react-bootstrap';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="lw-footer">
      <Container className="text-center">
        <h6 className="lw-eyebrow mb-3" style={{ letterSpacing: '0.3em' }}>
          Lumina<span style={{ fontWeight: 400, opacity: 0.6 }}>Wellbeing</span>
        </h6>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://www.instagram.com/luminawellbeing_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/luminapsychologicalsolutions/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a href="mailto:luminapsychologicalsolutions@gmail.com" aria-label="Email">
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>

        <p className="lw-muted mb-0" style={{ fontSize: '0.78rem' }}>
          &copy; {new Date().getFullYear()} LuminaWellbeing. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
