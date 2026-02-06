import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


export default function App() {
  return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
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
      </Router>
  );
}