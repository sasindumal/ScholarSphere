import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(!!role);

  useEffect(() => {
    if (role && token) {
      const apiUrl = process.env.REACT_APP_API_URL;
      fetch(`${apiUrl}/api/user/profile`, {
        headers: { 'Authorization': `Bearer ${token}` },
      })
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(data => {
          setUserRole(data.role);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [role, token]);

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" />;
  }

  if (role) {
    if (loading) return null;
    if (userRole !== role) return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
