import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// --- PUBLIC & FEATURE PAGES ---
import Home from './pages/Home';
import AboutUs from './pages/About'; 
import Contact from './pages/Contact';
import Tests from './pages/Tests';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';

// --- UI & SECURITY COMPONENTS ---
import Header from './components/Header'; 
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ThemeToggle from './components/ThemeToggle'; 

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <>
      {/* Hide header on immersive auth page */}
      {!isAuthPage && <Header />}
      
      {/* Floating Day/Night Graphic Switcher */}
      <ThemeToggle /> 
      
      <main>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* PROTECTED ADMIN ROUTE */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}