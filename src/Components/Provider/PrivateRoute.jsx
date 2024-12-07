import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) {
    // Show spinner while loading
    return <Loading />;
  }

  if (!user) {
    // Redirect unauthenticated user to login
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};

export default PrivateRoute;
 