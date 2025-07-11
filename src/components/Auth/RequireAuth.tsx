import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const RequireAuth: React.FC = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default RequireAuth;
