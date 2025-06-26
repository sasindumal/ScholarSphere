import React from 'react';
import Layout from '../components/Layout';

const AdminProviders = () => (
  <Layout>
    <div style={{ padding: 40 }}>
      <h1>Provider Management</h1>
      <p>Manage scholarship providers. You can add, edit, or delete providers.</p>
      <div style={{ marginTop: 32, background: '#f9fafb', borderRadius: 12, padding: 32, minHeight: 200, textAlign: 'center', color: '#888' }}>
        <p>Provider table and CRUD controls will appear here.</p>
      </div>
    </div>
  </Layout>
);

export default AdminProviders; 