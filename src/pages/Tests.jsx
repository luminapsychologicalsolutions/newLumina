import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, CalendarCheck } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Home() {
  const consultants = [
    { id: '1', name: 'Aparna VV', specialty: 'Consultant Psychologist', expertise: 'Family counseling' },
    { id: '2', name: 'Sarath Karanat', specialty: 'Consultant Psychologist', expertise: 'Depression & anxiety' },
  ];

  const pillars = [
    { icon: ShieldCheck, title: 'Private by design', text: 'Every session and message is confidential — no exceptions.' },
    { icon: Sparkles, title: 'Evidence-based care', text: 'Matched to licensed professionals using validated clinical tools.' },
    { icon: CalendarCheck, title: 'On your schedule', text: 'Book a consultation in minutes, from wherever you are.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="lw-section position-relative overflow-hidden" style={{ paddingTop: '9rem' }}>
        <div className="lw-glow" style={{ top: '-20%', left: '50%', width: '640px', height: '640px', transform: 'translateX(-50%)' }} />
        <Container className="position-relative text-center" style={{ maxWidth: '760px' }}>
          <Reveal>
            <span className="lw-eyebrow">Psychological care, reimagined</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="lw-display mt-3">A modern space for your mind.</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lw-lede mx-auto mt-3">
              Professional psychological solutions designed for the modern world — accessible, private, and evidence-based.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
              <Link to="/tests" className="lw-btn lw-btn-primary">
                Launch Tests <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="lw-btn lw-btn-ghost">
                Inquire Now
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="lw-section-tight">
        <Container>
          <Row className="g-4">
            {pillars.map((p, i) => (
              <Col md={4} key={p.title}>
                <Reveal delay={Math.min(i + 1, 3)}>
                  <div className="lw-card h-100 p-4">
                    <p.icon size={22} className="lw-accent mb-3" strokeWidth={1.75} />
                    <h5 className="mb-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>{p.title}</h5>
                    <p className="mb-0 small">{p.text}</p>
                  </div>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CONSULTANTS */}
      <section className="lw-section">
        <Container>
          <Reveal>
            <span className="lw-eyebrow">Our collective</span>
            <h2 className="lw-heading mt-2">Meet the professionals</h2>
            <p className="lw-lede">A network of certified psychologists, each specialized in different areas of care.</p>
          </Reveal>

          <Row className="g-4 mt-2">
            {consultants.map((c, i) => (
              <Col md={6} key={c.id}>
                <Reveal delay={Math.min(i + 1, 3)}>
                  <Card className="lw-card border-0 p-4 h-100">
                    <Card.Body className="p-0">
                      <span className="lw-badge mb-3">{c.specialty}</span>
                      <h5 className="mb-1" style={{ fontFamily: 'var(--font-display)' }}>{c.name}</h5>
                      <p className="mb-0 small">{c.expertise}</p>
                    </Card.Body>
                  </Card>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
