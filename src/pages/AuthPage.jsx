import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container fluid className="p-0" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
            <Row className="g-0" style={{ minHeight: '100vh' }}>

                {/* LEFT — Branding */}
                <Col
                    md={6}
                    className="d-none d-md-flex flex-column align-items-center justify-content-center position-relative overflow-hidden"
                    style={{ background: 'var(--bg-elevated)' }}
                >
                    <div className="lw-glow" style={{ top: '30%', left: '50%', width: '480px', height: '480px', transform: 'translate(-50%,-50%)' }} />
                    <div className="text-center px-5 position-relative">
                        <h1 className="lw-display mb-3" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}>Lumina</h1>
                        <p className="lw-lede mx-auto mb-4">
                            A modern space for your mind. Access your private dashboard, connect with consultants, and track your progress.
                        </p>
                        <Link to="/" className="lw-btn lw-btn-ghost">&larr; Back to Home</Link>
                    </div>
                </Col>

                {/* RIGHT — Form */}
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>

                        <div className="d-md-none mb-4">
                            <Link to="/" className="lw-muted small">&larr; Back to Home</Link>
                        </div>

                        <h2 className="lw-heading mb-4">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>

                        {isLogin ? <LoginForm /> : <SignupForm />}

                        <div className="text-center mt-4">
                            <button
                                className="lw-muted small border-0 bg-transparent"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin
                                    ? "Don't have an account? Sign up"
                                    : 'Already have an account? Sign in'}
                            </button>
                        </div>

                    </div>
                </Col>

            </Row>
        </Container>
    );
}
