import React from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const cardStyle = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  padding: 32,
  flex: '1 1 250px',
  minWidth: 250,
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 12,
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div style={{ padding: 40, background: '#f4f8fb', minHeight: '100vh' }}>
        <h1 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32 }}>Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={cardStyle}>
            <h2>User Management</h2>
            <p>View, create, edit, and delete users. Manage roles and access for all users in the system.</p>
            <button onClick={() => navigate('/admin-users')} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 12 }}>Go to User Management</button>
          </div>
          <div style={cardStyle}>
            <h2>Provider Management</h2>
            <p>Manage scholarship providers, add new providers, and edit provider details.</p>
            <button onClick={() => navigate('/admin-providers')} style={{ background: '#38a169', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 12 }}>Go to Provider Management</button>
          </div>
          <div style={cardStyle}>
            <h2>Payment Management</h2>
            <p>Track and manage all payments, view payment history, and resolve payment issues.</p>
            <button onClick={() => navigate('/admin-payments')} style={{ background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 12 }}>Go to Payment Management</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard; 