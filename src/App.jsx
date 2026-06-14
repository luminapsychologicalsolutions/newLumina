import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 1. Import Bootstrap and Global CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// 2. Import Auth Context and Security

// 3. Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// 4. Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ConsultantList from './pages/ConsultantList';
import ConsultantProfile from './pages/ConsultantProfile';
import Tests from './pages/Tests';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Global Watermark (Logo + Text) - Hidden on Home page */}
      {!isHome && (
        <div 
          className="fixed-top w-100 h-100 d-flex flex-column align-items-center justify-content-center" 
          style={{ zIndex: -1, pointerEvents: 'none', opacity: 0.10 }}
        >
          <img src="/images/logo.png" alt="" style={{ width: '320px', height: 'auto', objectFit: 'contain' }} />
          <h1 className="fw-bold text-uppercase mt-4 text-center px-3" style={{ letterSpacing: '6px', fontSize: '2.4rem', color: '#436488ff' }}>
            Lumina Psychological
          </h1>
        </div>
      )}

      {/* Header remains visible on all pages */}
      <Header />

      <main className="flex-grow-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultants" element={<ConsultantList />} />
          <Route path="/consultant/:id" element={<ConsultantProfile />} />
          <Route path="/tests" element={<Tests />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<div className="container py-5 text-center"><h1>404</h1><p>Page not found.</p></div>} />
        </Routes>
      </main>

      {/* Footer remains visible on all pages */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}