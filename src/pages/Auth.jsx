import React, { useState } from 'react';
import { Container, Card, Form, Button, Tabs, Tab, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      const result = await login(email, password);
      
      // Redirect based on role
      if (result.role === 'admin') navigate('/admin');
      else if (result.role === 'consultant') navigate('/consultant-dashboard');
      else navigate('/');
    } catch (err) {
      console.error(err); // This uses the variable and fixes the warning
      setError("Failed to log in. Check your credentials.");
    }
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="modern-card p-4 shadow-sm border-0" style={{ maxWidth: '450px', width: '100%' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Tabs defaultActiveKey="login" className="mb-4 custom-tabs" justify>
          <Tab eventKey="login" title="Login">
            <Form className="mt-3" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} className="rounded-pill" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} className="rounded-pill" />
              </Form.Group>
              <Button type="submit" variant="primary" className="btn-pill w-100 py-2">Sign In</Button>
            </Form>
          </Tab>
          <Tab eventKey="signup" title="Register">
            <p className="text-center text-muted mt-3 small">Registration logic connects to Firestore to save roles.</p>
            {/* Sign up form goes here similarly */}
          </Tab>
        </Tabs>
      </Card>
    </Container>
  );
}