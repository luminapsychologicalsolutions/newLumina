import React from 'react';
import { Container } from 'react-bootstrap';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center position-relative lw-section animate-fade-in-up"
      style={{ minHeight: '80vh', overflow: 'hidden' }}
    >
      {/* Faint background wordmark */}
      <div
        className="position-absolute w-100 text-center"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '15vw',
          fontWeight: 600,
          color: 'var(--text)',
          opacity: 0.035,
          letterSpacing: '0.05em',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          textTransform: 'uppercase',
        }}
      >
        Lumina Wellbeing
      </div>

      <div className="position-relative text-center" style={{ zIndex: 1, maxWidth: '620px' }}>
        <Reveal>
          <span className="lw-eyebrow">Our identity</span>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="lw-heading mt-3">
            Lumina<span className="lw-brand-light">Wellbeing</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-4" style={{ lineHeight: 2 }}>
            <p className="mb-4">
              We are a private collective of psychological practitioners dedicated to the art of emotional
              clarity and personal resilience.
            </p>
            <p>
              We understand that choosing the right therapist can feel overwhelming. That's why we offer
              evidence-based, scientifically designed mental health services tailored to your unique needs.
              We assess the nature and severity of your concerns and connect you with the right professional
              who can truly help — no matter where you are in the world.
            </p>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-5 mx-auto" style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
        </Reveal>
      </div>
    </Container>
  );
}
