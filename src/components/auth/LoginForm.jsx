import React, { useState } from 'react';
import { auth, db } from '../../firebase/firebase';
import { 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  RecaptchaVerifier, 
  signInWithPhoneNumber 
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

export default function LoginForm() {
  const navigate = useNavigate();

  // Toggles for UI state
  const [loginMethod, setLoginMethod] = useState('email'); // 'email', 'phone', or 'forgot'
  
  // Input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('+91'); // Default country code
  const [otp, setOtp] = useState('');
  
  // Firebase Auth states
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // --- REUSABLE ROUTING LOGIC ---
  const routeUser = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        if (role === 'admin') navigate('/admin');
        else if (role === 'consultant') navigate('/clients');
        else navigate('/dashboard'); 
      } else {
        navigate('/dashboard'); // Fallback
      }
    } catch (err) {
      console.error("Error fetching user role:", err);
      navigate('/dashboard');
    }
  };

  // --- 1. EMAIL & PASSWORD LOGIN ---
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await routeUser(userCredential.user.uid);
    } catch (err) {
      setError("Failed to sign in. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- 2. FORGOT PASSWORD ---
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (err) {
      setError("Failed to send reset email. Ensure the email is formatted correctly.");
    } finally {
      setLoading(false);
    }
  };

  // --- 3. PHONE NUMBER (OTP) LOGIN ---
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible' // Keeps the recaptcha hidden from the user
      });
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(confirmation);
      setMessage("OTP successfully sent to your phone.");
    } catch (err) {
      setError("Failed to send OTP. Please check your phone number format.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await confirmationResult.confirm(otp);
      await routeUser(userCredential.user.uid);
    } catch (err) {
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* ALERTS */}
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}

      {/* METHOD TOGGLES */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <Button 
          variant="link" 
          className={`text-decoration-none ${loginMethod === 'email' ? 'fw-bold' : 'text-muted'}`}
          onClick={() => { setLoginMethod('email'); setError(''); setMessage(''); }}
        >
          Email Login
        </Button>
        <span className="text-muted d-flex align-items-center">|</span>
        <Button 
          variant="link" 
          className={`text-decoration-none ${loginMethod === 'phone' ? 'fw-bold' : 'text-muted'}`}
          onClick={() => { setLoginMethod('phone'); setError(''); setMessage(''); }}
        >
          Phone Login
        </Button>
      </div>

      {/* --- FORM 1: EMAIL LOGIN --- */}
      {loginMethod === 'email' && (
        <Form onSubmit={handleEmailLogin}>
          <Form.Group className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="lw-btn lw-btn-primary w-100" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
          <div className="text-center mt-3">
            <Button variant="link" className="text-muted text-decoration-none small" onClick={() => setLoginMethod('forgot')}>
              Forgot Password?
            </Button>
          </div>
        </Form>
      )}

      {/* --- FORM 2: FORGOT PASSWORD --- */}
      {loginMethod === 'forgot' && (
        <Form onSubmit={handleResetPassword}>
          <p className="text-muted small text-center mb-3">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <Form.Group className="mb-4">
            <Form.Control 
              type="email" 
              placeholder="Enter your registered email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="lw-btn lw-btn-primary w-100" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
          <div className="text-center mt-3">
            <Button variant="link" className="text-muted text-decoration-none small" onClick={() => setLoginMethod('email')}>
              Back to Login
            </Button>
          </div>
        </Form>
      )}

      {/* --- FORM 3: PHONE OTP LOGIN --- */}
      {loginMethod === 'phone' && (
        <div>
          {/* Required invisible div for Firebase Recaptcha */}
          <div id="recaptcha-container"></div>
          
          {!confirmationResult ? (
            <Form onSubmit={handleSendOtp}>
              <Form.Group className="mb-4">
                <Form.Control 
                  type="tel" 
                  placeholder="Phone Number (e.g. +919876543210)" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="lw-btn lw-btn-primary w-100" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </Button>
            </Form>
          ) : (
            <Form onSubmit={handleVerifyOtp}>
              <Form.Group className="mb-4">
                <Form.Control 
                  type="text" 
                  placeholder="Enter 6-digit OTP" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="lw-btn lw-btn-primary w-100" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify & Login'}
              </Button>
            </Form>
          )}
        </div>
      )}
    </div>
  );
} 