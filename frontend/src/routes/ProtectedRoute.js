// src/components/ProtectedRoute.js
import Main from '../components/main';
import { useAuth } from '../hooks/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Main>  {/* This wraps Sidebar + Content */}
      <Outlet />  {/* Child routes render here */}
    </Main>
  );
};

export default ProtectedRoute;