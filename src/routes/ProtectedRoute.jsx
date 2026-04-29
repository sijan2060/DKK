import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authHooks';
import { SkeletonPage } from '../components/ui/Skeleton';

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <SkeletonPage />;
  }

  // Not logged in -> redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Logged in but role does not match required roles
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // If user is not authorized, send them back to home or their dedicated dashboard
    return <Navigate to="/" replace />;
  }

  // Authorized
  return <Outlet />;
};

export default ProtectedRoute;
