import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
  const simpleBlue = "#436488ff"; // Use this for the Heading
  const heroSubtext = "#000000ff"; // Compatible grey-blue for subtext

  // Reuse the exported consultantsData array
  const consultants = consultantsData;

  return (
    <div className="animate-fade-in-up" style={{ backgroundColor: 'transparent' }}>
      {/* Refined Hero Section with Compatible Gradient */}
      <section className="py-5 text-center" style={{
        background: 'linear-gradient(180deg, rgba(226, 232, 240, 0.55) 0%, rgba(248, 250, 252, 0.55) 100%)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
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
      <section className="py-5 bg-transparent">
        <Container>
          <h2 className="text-center fw-bold mb-2" style={{ color: simpleBlue }}>Meet Our Experts</h2>
          <p className="text-center text-muted small mb-5">Swipe to explore our collective</p>

          <div className="experts-scroll-container">
            {consultants.map(c => (
              <div key={c.id} className="expert-card-wrapper">
                <Card className="immersive-card p-4 h-100 text-center border-0 shadow-sm" style={{ backgroundColor: '#EDF2F7', borderRadius: '24px' }}>
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
                      className="mt-auto fw-bold text-uppercase mb-3"
                      style={{
                        color: '#000000',
                        fontSize: '0.65rem',
                        letterSpacing: '0.5px',
                        lineHeight: '1.4'
                      }}
                    >
                      {c.expertise}
                    </p>

                    <Button
                      as={Link}
                      to={`/consultant/${c.id}`}
                      className="rounded-pill w-100 border-0 text-white"
                      style={{ backgroundColor: simpleBlue, fontWeight: '600', fontSize: '0.8rem', padding: '8px 16px' }}
                    >
                      View Full Details
                    </Button>
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