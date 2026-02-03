import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import Bootstrap and Global CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// 2. Import Auth Context and Security
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// 3. Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';


// 4. Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ConsultantList from './pages/ConsultantList';
import ConsultantProfile from './pages/ConsultantProfile';
import Auth from './pages/Auth';

// 5. Placeholder Dashboard Components (You can move these to their own files later)
const AdminDashboard = () => (
  <div className="container py-5">
    <h2 className="fw-bold">Admin Dashboard</h2>
    <p className="text-muted">Manage testimonials and user roles here.</p>
    <div className="p-4 bg-white rounded-4 shadow-sm border">
      <h6>Pending Testimonials</h6>
      <p className="small">No pending reviews to approve.</p>
    </div>
  </div>
);

const ConsultantDashboard = () => (
  <div className="container py-5">
    <h2 className="fw-bold">Consultant Portal</h2>
    <p className="text-muted">View your upcoming appointments and patient notes.</p>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
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
              <Route path="/login" element={<Auth />} />

              {/* Secure Admin Routes */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Secure Consultant Routes */}
              <Route 
                path="/consultant-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['consultant']}>
                    <ConsultantDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Secure Patient/User Routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['user', 'admin']}>
                    <div className="container py-5">
                      <h2>Patient Dashboard</h2>
                      <p>View your session history and book new appointments.</p>
                    </div>
                  </ProtectedRoute>
                } 
              />

              {/* 404 Catch-all */}
              <Route path="*" element={<div className="container py-5 text-center"><h1>404</h1><p>Page not found.</p></div>} />
            </Routes>
          </main>

          {/* Footer remains visible on all pages */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}