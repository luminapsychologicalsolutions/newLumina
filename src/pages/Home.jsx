import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  
  const simpleBlue = "#436488ff"; // Use this for the Heading
  const heroSubtext = "#000000ff"; // Compatible grey-blue for subtext
  const consultants = [
    { id: '1', name: "Aparna VV", specialty: "Consultant Psychologist", expertise: "Family counseling, Couple counseling, Queer affirmative therapy ", img: "/images/1.jpeg" },
    { id: '2', name: "Sarath Karanat", specialty: "Consultant Psychologist", expertise: "Adjustmental issues, Depression and anxiety, Relationsshsip issues ", img: "/images/2.jpeg" },
    { id: '3', name: "Abhinav N R", specialty: "Consultant Psychologist", expertise: "Anxiety, Depression, Adjustment disorder , Sports Psychology ", img: "/images/3.jpeg" },
    { id: '4', name: "Ananya P", specialty: "Consultant Psychologist", expertise: "Psychotherapy for clinical disorders, Couple therapy", img: "/images/4.jpeg" },
    { id: '5', name: "Riyas Rumi", specialty: "Career counselor", expertise: "Career Aptitude testing, Career counseling ", img: "/images/5.jpeg" },
    { id: '6', name: "Denna Mariya", specialty: "Consultant Psychologist", expertise: "Behavioural issues (Children), Adjustmental disorder", img: "/images/6.jpeg" },
    { id: '7', name: "Anjima CT", specialty: "Consultant Psychologist", expertise: "ADHD, Behavioural issues (Children), Adjustmental disorder", img: "/images/7.jpeg" },
    { id: '8', name: "Mohasin V", specialty: "Sports & Counselling Psychologist ", expertise: "Performance & Well Being of Athletes, Counselling for General Stressors", img: "/images/8.jpeg" },
    { id: '9', name: "Adhila Haroon", specialty: "Consultant Psychologist", expertise: "Trauma informed care, Anxiety.", img: "/images/9.jpeg" },
    { id: '10', name: "Avinash AC", specialty: "Consultant Psychologist", expertise: "Anxiety, Couple counseling, Behavioral counselling, Educational counselling", img: "/images/10.jpeg" },
    { id: '11', name: "Ajmal CP", specialty: "Consultant Psychologist", expertise: "Existential counseling, Couple counseling.", img: "/images/11.jpeg" },
    { id: '12', name: "Dr Vivek", specialty: "Consultant psychiatrist", expertise: "Psychatric problems", img: "/images/12.jpeg" },
    { id: '13', name: "Mr. Sijo Jose", specialty: "Consultant Psychologist", expertise: "Depression, Anxiety", img: "/images/13.jpeg" }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      {/* Refined Hero Section with Compatible Gradient */}
      <section className="py-5 text-center" style={{ 
        background: 'linear-gradient(180deg, #E2E8F0 0%, #F8FAFC 100%)',
        borderBottom: '1px solid #E2E8F0' 
      }}>
        <Container className="py-5">
          <h1 className="display-3 fw-bold mb-4" style={{ color: simpleBlue, letterSpacing: '-1px' }}>
            A Modern Space for Your Mind.
          </h1>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '650px', color: heroSubtext, fontWeight: '400' }}>
            Professional psychological solutions designed for the modern world. 
            Accessible, private, and evidence-based care.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button as={Link} to="/tests" size="lg" className="rounded-pill px-5 border-0 shadow" style={{ backgroundColor: simpleBlue }}>
              Launch Tests
            </Button>
            <Button as={Link} to="/contact" variant="outline-primary" size="lg" className="rounded-pill px-5" style={{ color: simpleBlue, borderColor: simpleBlue }}>
              Inquire Now
            </Button>
          </div>
        </Container>
      </section>

      {/* Experts Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-2" style={{ color: simpleBlue }}>Meet Our Experts</h2>
          <p className="text-center text-muted small mb-5">Swipe to explore our collective</p>
          
          <div className="experts-scroll-container">
            {consultants.map(c => (
              <div key={c.id} className="expert-card-wrapper">
                <Card className="p-4 h-100 text-center border-0 shadow-sm" style={{ backgroundColor: '#EDF2F7', borderRadius: '24px' }}>
                  <Card.Img 
                    variant="top" 
                    src={c.img} 
                    className="rounded-circle mx-auto mb-3 shadow-sm" 
                    style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #FFFFFF' }} 
                  />
                  <Card.Body className="p-0 d-flex flex-column">
                    <h5 className="fw-bold mb-1" style={{ color: '#2D3748', fontSize: '1.1rem' }}>{c.name}</h5>
                    <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>{c.specialty}</p>
                    
                    {/* Expertise: Black text, No background */}
                    <p 
                      className="mt-auto fw-bold text-uppercase" 
                      style={{ 
                        color: '#000000', 
                        fontSize: '0.65rem', 
                        letterSpacing: '0.5px',
                        lineHeight: '1.4'
                      }}
                    >
                      {c.expertise}
                    </p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}