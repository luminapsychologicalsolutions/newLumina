import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { db, auth } from '../firebase/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { Shield, Users, UserCheck, Award, Lock, User } from 'lucide-react';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Profile & Password Reset State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passLoading, setPassLoading] = useState(false);

  // Fetch all registered users from Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const userList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to load user database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle instant role promotion / demotion
  const handleRoleChange = async (uid, newRole) => {
    setError('');
    setSuccess('');
    try {
      const userDocRef = doc(db, 'users', uid);
      await updateDoc(userDocRef, { role: newRole });
      setUsers(users.map(u => u.uid === uid ? { ...u, role: newRole } : u));
      setSuccess(`Successfully updated user role to ${newRole}.`);
    } catch (err) {
      console.error("Error updating role:", err);
      setError("Failed to update user role.");
    }
  };

  // Handle Password Reset / Change
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setPassLoading(true);

    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      
      // Re-authenticate user before allowing password change
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      setSuccess("Password updated successfully!");
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      console.error("Password update error:", err);
      setError("Failed to update password. Please verify your current password.");
    } finally {
      setPassLoading(false);
    }
  };

  // Calculate KPIs
  const totalUsers = users.length;
  const clientsCount = users.filter(u => u.role === 'client' || !u.role).length;
  const consultantsCount = users.filter(u => u.role === 'consultant').length;
  const adminsCount = users.filter(u => u.role === 'admin').length;

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <div className="min-vh-100 py-4">
      <Container fluid className="px-4">
        
        {/* HEADER TITLE */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Admin Control Center</h2>
            <p className="text-muted small mb-0">Manage system roles, user database, and administrative security.</p>
          </div>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        {/* 1. KPI METRIC CARDS */}
        <Row className="g-4 mb-4">
          <Col md={3} sm={6}>
            <Card className="p-3 shadow-sm h-100" style={{ borderRadius: '16px' }}>
              <div className="d-flex align-items-center">
                <div className="p-3 rounded-circle me-3 text-info">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-muted small mb-1">Total Users</p>
                  <h4 className="fw-bold mb-0">{totalUsers}</h4>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="p-3 shadow-sm h-100" style={{ borderRadius: '16px' }}>
              <div className="d-flex align-items-center">
                <div className="p-3 rounded-circle me-3 text-success">
                  <UserCheck size={24} />
                </div>
                <div>
                  <p className="text-muted small mb-1">Clients</p>
                  <h4 className="fw-bold mb-0">{clientsCount}</h4>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="p-3 shadow-sm h-100" style={{ borderRadius: '16px' }}>
              <div className="d-flex align-items-center">
                <div className="p-3 rounded-circle me-3 text-warning">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-muted small mb-1">Consultants</p>
                  <h4 className="fw-bold mb-0">{consultantsCount}</h4>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} sm={6}>
            <Card className="p-3 shadow-sm h-100" style={{ borderRadius: '16px' }}>
              <div className="d-flex align-items-center">
                <div className="p-3 rounded-circle me-3 text-danger">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-muted small mb-1">Administrators</p>
                  <h4 className="fw-bold mb-0">{adminsCount}</h4>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        {/* 2. USER DIRECTORY & ROLE MANAGEMENT TABLE */}
        <Card className="shadow-sm mb-4" style={{ borderRadius: '20px' }}>
          <Card.Header className="border-bottom py-3 px-4">
            <h5 className="fw-bold mb-0">User Directory & Role Management</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="table-responsive">
              <Table hover className="align-middle mb-0" responsive>
                <thead className="text-muted small text-uppercase">
                  <tr>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Current Role</th>
                    <th className="py-3 px-4 text-end">Action / Assign Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.uid || u.id} className="border-bottom">
                      <td className="py-3 px-4 fw-semibold">
                        {u.name || 'Unnamed User'}
                      </td>
                      <td className="py-3 text-muted">{u.email}</td>
                      <td className="py-3">
                        <span className={`badge px-3 py-2 text-uppercase ${
                          u.role === 'admin' ? 'bg-danger text-white' :
                          u.role === 'consultant' ? 'bg-warning text-dark' : 'bg-secondary text-white'
                        }`}>
                          {u.role || 'client'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-end">
                        <Form.Select 
                          size="sm"
                          value={u.role || 'client'}
                          onChange={(e) => handleRoleChange(u.uid || u.id, e.target.value)}
                          style={{ maxWidth: '160px', display: 'inline-block' }}
                        >
                          <option value="client">Client</option>
                          <option value="consultant">Consultant</option>
                          <option value="admin">Admin</option>
                        </Form.Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        {/* 3. PROFILE & PASSWORD RESET SECTION */}
        <Row>
          <Col md={6}>
            <Card className="shadow-sm h-100" style={{ borderRadius: '20px' }}>
              <Card.Header className="border-bottom py-3 px-4">
                <h5 className="fw-bold mb-0 d-flex align-items-center">
                  <User className="me-2" size={20} /> My Administrator Profile
                </h5>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="text-muted mb-2"><strong>Logged in as:</strong> {auth.currentUser?.email}</p>
                <p className="text-muted mb-2"><strong>System Privilege:</strong> Master Administrator</p>
                <p className="text-muted mb-0">You have full database read/write access and permission to assign clinical roles across Lumina.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm h-100" style={{ borderRadius: '20px' }}>
              <Card.Header className="border-bottom py-3 px-4">
                <h5 className="fw-bold mb-0 d-flex align-items-center">
                  <Lock className="me-2" size={20} /> Security & Password Reset
                </h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Form onSubmit={handlePasswordReset}>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="password"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control 
                      type="password"
                      placeholder="New Password (min 6 chars)"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="w-150 rounded-pill px-4" disabled={passLoading}>
                    {passLoading ? 'Updating...' : 'Change Password'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}