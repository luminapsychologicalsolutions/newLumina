import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { currentUser, userRole } = useAuth();

  if (!currentUser) return <Navigate to="/login" />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/" />;

  return children;
}