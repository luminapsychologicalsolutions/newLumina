import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Activity, Brain, UserCheck } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Tests() {
  const testList = [
    { 
      title: "Depression Scale", 
      path: "/tests/depression-test.html", 
      icon: <Activity size={32} strokeWidth={1.5} className="lw-accent" />,
      desc: "Assessment for mood, energy levels, and emotional well-being."
    },
    { 
      title: "Anxiety Index", 
      path: "/tests/AnxietyTest.html", 
      icon: <Brain size={32} strokeWidth={1.5} className="lw-accent" />,
      desc: "Screening for generalized stress, worry, and tension."
    },
    { 
      title: "Personality Profile", 
      path: "/tests/Personality.html", 
      icon: <UserCheck size={32} strokeWidth={1.5} className="lw-accent" />,
      desc: "Deep analysis of behavioral patterns and psychological traits."
    }
  ];

  return (
    <div className="lw-section animate-fade-in-up">
      <Container className="py-4">
        <Reveal>
          <div className="text-center mb-5">
            <span className="lw-eyebrow">Diagnostic Suite</span>
            <h2 className="lw-heading mt-2">Private Assessments</h2>
            <p className="lw-lede mx-auto">Evidence-based clinical screeners designed to offer clarity and guidance.</p>
          </div>
        </Reveal>

        <Row className="justify-content-center g-4">
          {testList.map((test, index) => (
            <Col md={4} key={index}>
              <Reveal delay={index + 1}>
                <Card className="lw-card border-0 p-4 h-100 text-center d-flex flex-column">
                  <div className="mb-3 mx-auto">{test.icon}</div>
                  <h5 className="mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{test.title}</h5>
                  <p className="small mb-4 flex-grow-1">{test.desc}</p>
                  
                  <a 
                    href={test.path} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lw-btn lw-btn-primary w-100 mt-auto text-decoration-none"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Launch Test
                  </a>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

