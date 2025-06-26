import React from 'react';
import Layout from '../components/Layout';

const AdminSettings = () => (
  <Layout>
    <div style={{ padding: 40 }}>
      <h1>System Settings</h1>
      <p>Configure system-wide parameters and settings for ScholarSphere.</p>
      <div style={{ marginTop: 32, background: '#f9fafb', borderRadius: 12, padding: 32, minHeight: 200, textAlign: 'center', color: '#888' }}>
        <p>System settings controls will appear here.</p>
      </div>
    </div>
  </Layout>
);

export default AdminSettings; 