import React from 'react';
import Layout from '../components/Layout';

const AdminPayments = () => (
  <Layout>
    <div style={{ padding: 40 }}>
      <h1>Payment Management</h1>
      <p>Track and manage all payments, view payment history, and resolve payment issues.</p>
      <div style={{ marginTop: 32, background: '#f9fafb', borderRadius: 12, padding: 32, minHeight: 200, textAlign: 'center', color: '#888' }}>
        <p>Payment table and management controls will appear here.</p>
      </div>
    </div>
  </Layout>
);

export default AdminPayments; 