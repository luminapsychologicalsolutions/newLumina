import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Mail, Clock, MessageCircle } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Contact() {
  const whatsappNumber = '918281944181';
  const message = 'hello, I would like to inquire about a consultation.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const email = 'luminapsychologicalsolutions@gmail.com';

  const options = [
    {
      icon: Mail,
      title: 'Email Us',
      text: 'For detailed inquiries and private documentation.',
      action: 'Start chat',
      href: `mailto:${email}`,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      text: 'Instant messaging for quick concierge support.',
      action: 'Start chat',
      href: whatsappLink,
      external: true,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      text: 'Monday to Friday (Virtual Office)',
      action: '9:00 AM – 6:00 PM',
    },
  ];

  return (
    <div className="lw-section">
      <Container>
        <Reveal>
          <div className="text-center mb-5">
            <span className="lw-eyebrow">Get in touch</span>
            <h2 className="lw-heading mt-2">Contact Us</h2>
            <p className="lw-lede mx-auto">We are here to support your journey with absolute discretion.</p>
          </div>
        </Reveal>

        <Row className="justify-content-center g-4">
          {options.map((o, i) => (
            <Col md={4} key={o.title}>
              <Reveal delay={Math.min(i + 1, 3)}>
                <div className="lw-card h-100 p-4 text-center d-flex flex-column">
                  <o.icon className="mx-auto mb-3 lw-accent" strokeWidth={1.5} />
                  <h5 className="mb-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>{o.title}</h5>
                  <p className="small mb-3">{o.text}</p>
                  {o.href ? (
                    <a
                      href={o.href}
                      target={o.external ? '_blank' : undefined}
                      rel={o.external ? 'noopener noreferrer' : undefined}
                      className="fw-bold mt-auto lw-accent"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {o.action}
                    </a>
                  ) : (
                    <p className="fw-bold mt-auto mb-0" style={{ color: 'var(--text)' }}>{o.action}</p>
                  )}
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
