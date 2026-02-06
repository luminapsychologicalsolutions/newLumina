import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Activity, Brain, UserCheck } from 'lucide-react';

export default function Tests() {
  const testList = [
    { 
      title: "Depression Scale", 
      path: "/tests/depression-test.html", 
      icon: <Activity size={32} strokeWidth={1} />,
      desc: "Assessment for mood and energy levels."
    },
    { 
      title: "Anxiety Index", 
      path: "/tests/AnxietyTest.html", 
      icon: <Brain size={32} strokeWidth={1} />,
      desc: "Screening for generalized stress and tension."
    },
    { 
      title: "Personality Profile", 
      path: "/tests/Personality.html", 
      icon: <UserCheck size={32} strokeWidth={1} />,
      desc: "Deep analysis of behavioral and trait patterns."
    }
  ];

  return (
    <Container className="py-5 mt-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase" style={{ letterSpacing: '6px', color: '#1A1A1A' }}>Diagnostic Suite</h2>
        <div style={{ width: '40px', height: '1px', background: '#999', margin: '20px auto' }}></div>
        <p className="text-muted small text-uppercase" style={{ letterSpacing: '2px' }}>Private Assessments</p>
      </div>

      <Row className="justify-content-center g-4">
        {testList.map((test, index) => (
          <Col md={4} key={index}>
            <Card className="border-0 p-4 h-100 text-center shadow-sm bg-white">
              <div className="mb-4" style={{ color: '#1A1A1A' }}>{test.icon}</div>
              <h6 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px' }}>{test.title}</h6>
              <p className="text-muted small mb-4" style={{ lineHeight: '1.8' }}>{test.desc}</p>
              
              {/* This links directly to your HTML files in the public folder */}
              <a 
                href={test.path} 
                className="btn btn-dark w-100 rounded-0 py-2 text-uppercase"
                style={{ fontSize: '0.7rem', letterSpacing: '2px', backgroundColor: '#1A1A1A' }}
              >
                Launch Test
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}