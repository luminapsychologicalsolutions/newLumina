import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, CalendarCheck } from 'lucide-react';
import Reveal from '../components/Reveal';

// eslint-disable-next-line react-refresh/only-export-components
export const consultantsData = [
  {
    id: '1',
    name: "Aparna V. V.",
    specialty: "Consultant Psychologist",
    designation: "Consultant Psychologist & Faculty",
    experience: "10+ Years",
    workingNow: "Department of Psychology, University of Calicut",
    expertise: "Family and couple counselling, Queer-affirmative practice, Sex therapy",
    bio: "I’m Aparna V. V., Consultant Psychologist and faculty at the Department of Psychology, University of Calicut. With over a decade of experience in the field, I specialize in family and couple counselling, queer-affirmative practice, and sex therapy. My approach focuses on creating a safe, respectful, and non-judgmental space where individuals and couples can explore their concerns openly and work towards meaningful change and well-being.",
    achievements: [
      "Faculty at Department of Psychology, University of Calicut",
      "Over a decade of experience in clinical counseling",
      "Specialist in family/couple counselling and sex therapy",
      "Certified Queer-affirmative Practitioner"
    ],
    img: "/images/1.jpeg"
  },
  {
    id: '4',
    name: "Ananya P",
    specialty: "Licensed Clinical Psychologist",
    designation: "Licensed Clinical Psychologist",
    experience: "3+ Years",
    workingNow: "Lumina Wellbeing",
    expertise: "CBT, DBT, SFBT, Behavioral Therapy, Parent Management Training, Couple Therapy",
    bio: "I’m Ananya P, a Licensed Clinical Psychologist registered under the Rehabilitation Council of India (RCI), with an M.Phil in Clinical Psychology from the Institute of Mental Health and Neurosciences (IMHANS). Over the past few years, I have worked with individuals from diverse backgrounds, offering empathetic, client-centered care. My approach focuses on creating a safe and supportive space while designing tailored interventions to help individuals navigate their concerns with clarity and confidence. I am trained in multiple therapeutic approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Solution-Focused Brief Therapy (SFBT), Behavioral Therapy, Parent Management Training (PMT), and Couple Therapy, integrating these to support overall well-being.",
    achievements: [
      "Licensed Clinical Psychologist registered under RCI",
      "M.Phil in Clinical Psychology from IMHANS",
      "Expertise in client-centered and integrative therapies (CBT, DBT, SFBT)",
      "Trained in Parent Management Training (PMT) and Couple Therapy"
    ],
    img: "/images/4.jpeg"
  },
  {
    id: '12',
    name: "Dr. Anirudh B",
    specialty: "Consultant Psychiatrist",
    designation: "Consultant Psychiatrist",
    experience: "5+ Years",
    workingNow: "Lumina Wellbeing Clinic",
    expertise: "Community and child psychiatry, Psychiatric diagnostics",
    bio: "I’m Dr. Anirudh B, Consultant Psychiatrist with a focus on community and child psychiatry. With an MD in Psychiatry and training across diverse clinical settings, I have been actively involved in patient care, academic learning, and community mental health initiatives. My approach focuses on delivering compassionate, evidence-based care while working towards bridging gaps in mental health access.",
    achievements: [
      "MD in Psychiatry with elite clinical training",
      "Deeply involved in academic learning & patient care",
      "Active leader in community mental health initiatives",
      "Specialist in Child and Adolescent Psychiatry"
    ],
    img: "/images/Anirudh.jpeg"
  },
  {
    id: '3',
    name: "Abhinav N. R.",
    specialty: "Consultant Psychologist",
    designation: "Consultant Psychologist",
    experience: "5+ Years",
    workingNow: "Lumina Research Division",
    expertise: "Anxiety, Depression, Adjustment concerns, Sports Psychology",
    bio: "I’m Abhinav N. R., Consultant Psychologist. I work with anxiety, depression, adjustment concerns, sports persons and athletes, helping individuals navigate challenges and perform at their best. With experience in both academic and applied settings, I bring together research and practice in my current role as a Researcher.",
    achievements: [
      "Clinical experience across anxiety, depression and mood concerns",
      "Mental Coach for sports persons and elite athletes",
      "Active Academic Researcher bridging research and clinical practice"
    ],
    img: "/images/3.jpeg"
  },
  {
    id: '13',
    name: "Sijo Jose",
    specialty: "Consultant Psychologist",
    designation: "Consultant Psychologist & Scientific Advisor",
    experience: "11+ Years",
    workingNow: "Lumina Wellbeing",
    expertise: "Depression, Anxiety, Skill development training, Real-world interventions",
    bio: "I’m Sijo Jose, Consultant Psychologist, Independent Researcher, and Trainer. My work focuses on applying psychological insights in practical, real-world settings through training, research, and intervention. I have previously served as the Developer and Director of the SP Skill Development Program at the Institute of Mind and Behaviour, and as a Trainer for CSR initiatives under IIT Madras and the Government of India. I have also worked as a responder at Believers Medical Centre, Konni. Currently, I work as a Consultant Psychologist and Scientific Advisor at Lumina Wellbeing, integrating research with practice to promote mental health and well-being.",
    achievements: [
      "Developer & Director of SP Skill Development Program",
      "Trainer for elite CSR initiatives (IIT Madras & Govt of India)",
      "Scientific Advisor and Consultant Psychologist at Lumina Wellbeing",
      "Former clinical responder at Believers Medical Centre"
    ],
    img: "/images/13.jpeg"
  },
  {
    id: '2',
    name: "Sarath Kaaranat",
    specialty: "Consultant Psychologist",
    designation: "Consultant Psychologist",
    experience: "6+ Years",
    workingNow: "Lumina Mental Health Services",
    expertise: "Psychological counselling, Teaching and training, Strength-based therapy",
    bio: "I’m Sarath Kaaranat, Consultant Psychologist with experience in psychological counselling, teaching, and training. I completed my Master’s in Psychology from the University of Mysore and have worked as an Assistant Professor at St. Joseph’s Autonomous College, Devagiri, and as a Consultant Psychologist at Mahatma Gandhi University, Kottayam. My approach to counselling is perspective-oriented and strength-based, focusing on understanding individuals beyond labels and diagnoses. I strive to create a non-judgmental, empathetic space that helps clients gain deeper insight and navigate their concerns with clarity.",
    achievements: [
      "Master's in Psychology from the University of Mysore",
      "Former Assistant Professor at St. Joseph's Autonomous College, Devagiri",
      "Former Consultant Psychologist at Mahatma Gandhi University, Kottayam",
      "Expert in perspective-oriented and strength-based therapy"
    ],
    img: "/images/2.jpeg"
  }
];

export default function Home() {
  const consultants = consultantsData;

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

      {/* EXPERTS / CONSULTANTS */}
      <section className="lw-section">
        <Container>
          <Reveal>
            <span className="lw-eyebrow">Our collective</span>
            <h2 className="lw-heading mt-2">Meet the professionals</h2>
            <p className="lw-lede">A network of certified psychologists, each specialized in different areas of care.</p>
          </Reveal>

          <Row className="g-4 mt-2">
            {consultants.map((c, i) => (
              <Col md={6} lg={4} key={c.id}>
                <Reveal delay={Math.min(i + 1, 3)}>
                  <Card className="lw-card border-0 p-4 h-100 d-flex flex-column text-center">
                    <Card.Img
                      variant="top"
                      src={c.img}
                      className="rounded-circle mx-auto mb-3 shadow-sm"
                      style={{ width: '110px', height: '110px', objectFit: 'cover', border: '4px solid var(--border)' }}
                    />
                    <Card.Body className="p-0 d-flex flex-column flex-grow-1">
                      <span className="lw-badge mb-2">{c.specialty}</span>
                      <h5 className="mb-1" style={{ fontFamily: 'var(--font-display)' }}>{c.name}</h5>
                      <p className="mb-3 small lw-muted flex-grow-1">{c.expertise}</p>
                      <Button
                        as={Link}
                        to={`/consultant/${c.id}`}
                        className="lw-btn lw-btn-ghost w-100 mt-auto text-decoration-none"
                        style={{ fontSize: '0.85rem' }}
                      >
                        View Full Profile
                      </Button>
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
