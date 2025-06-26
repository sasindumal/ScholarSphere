import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import AvailableScholarships from './pages/AvailableScholarships';
import MyApplications from './pages/MyApplications';
import ProtectedRoute from './components/ProtectedRoute';
import './pages/AvailableScholarships.css';
import './pages/MyApplications.css';
import PaymentsHistory from './pages/PaymentsHistory';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import CoordinatorDashboard from './pages/CoordinatorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CoordinatorApplications from './pages/CoordinatorApplications';
import CoordinatorReviewDetails from './pages/CoordinatorReviewDetails';
import CoordinatorScholarships from './pages/CoordinatorScholarships';
import CoordinatorStudents from './pages/CoordinatorStudents';
import CoordinatorReports from './pages/CoordinatorReports';
import AdminUsers from './pages/AdminUsers';
import AdminSettings from './pages/AdminSettings';
import AdminProviders from './pages/AdminProviders';
import AdminPayments from './pages/AdminPayments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="student">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordinator-dashboard"
          element={
            <ProtectedRoute role="coordinator">
              <CoordinatorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scholarships"
          element={
            <ProtectedRoute>
              <AvailableScholarships />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payments-history"
          element={
            <ProtectedRoute>
              <PaymentsHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordinator-applications"
          element={
            <ProtectedRoute role="coordinator">
              <CoordinatorApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordinator-review-details"
          element={
            <ProtectedRoute role="coordinator">
              <CoordinatorReviewDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordinator-scholarships"
          element={
            <ProtectedRoute role="coordinator">
              <CoordinatorScholarships />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordinator-students"
          element={
            <ProtectedRoute role="coordinator">
              <CoordinatorStudents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coordinator-reports"
          element={
            <ProtectedRoute role="coordinator">
              <CoordinatorReports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedRoute role="admin">
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-settings"
          element={
            <ProtectedRoute role="admin">
              <AdminSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-providers"
          element={
            <ProtectedRoute role="admin">
              <AdminProviders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-payments"
          element={
            <ProtectedRoute role="admin">
              <AdminPayments />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
