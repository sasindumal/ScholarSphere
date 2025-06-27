import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Card = ({ icon, title, value, description, color }) => (
  <div style={{
    flex: '1 1 250px',
    background: '#fff',
    borderRadius: 16,
    padding: 28,
    minWidth: 250,
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
    borderLeft: `6px solid ${color}`
  }}>
    <div style={{ fontSize: 32, color }}>{icon}</div>
    <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
    <div style={{ fontSize: 36, fontWeight: 700, color }}>{value}</div>
    <div style={{ color: '#888', fontSize: 15 }}>{description}</div>
  </div>
);

const CoordinatorDashboard = () => {
  const [pendingCount, setPendingCount] = useState(0);
  const [scholarshipCount, setScholarshipCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let interval;
    const fetchCounts = () => {
      const token = localStorage.getItem('token');
      setLoading(true);
      Promise.all([
        fetch('http://localhost:5001/api/applications/pending', {
          headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => res.ok ? res.json() : { count: 0 }),
        fetch('http://localhost:5001/api/scholarships/count', {
          headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => res.ok ? res.json() : { count: 0 }),
      ]).then(([pending, scholarships]) => {
        setPendingCount(pending.count || 0);
        setScholarshipCount(scholarships.count || 0);
      }).catch(() => {
        setPendingCount(0);
        setScholarshipCount(0);
      }).finally(() => setLoading(false));
    };
    fetchCounts();
    interval = setInterval(fetchCounts, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div style={{ padding: 40, background: '#f4f8fb', minHeight: '100vh' }}>
        <h1 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32 }}>Coordinator Dashboard</h1>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
          <Card
            icon={<span role="img" aria-label="review">📝</span>}
            title="Applications Requiring Review"
            value={loading ? '...' : pendingCount}
            description="Pending applications that need your review."
            color="#3182ce"
          />
          <Card
            icon={<span role="img" aria-label="scholarship">🎓</span>}
            title="Active Scholarships"
            value={loading ? '...' : scholarshipCount}
            description="Scholarships currently open for applications."
            color="#38a169"
          />
        </div>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 32, maxWidth: 700 }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 18 }}>Quick Actions</h2>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="/coordinator-applications" style={{
              background: '#3182ce', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 16, boxShadow: '0 1px 4px rgba(49,130,206,0.08)'
            }}>Review Applications</a>
            <a href="/coordinator-scholarships" style={{
              background: '#38a169', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 16, boxShadow: '0 1px 4px rgba(56,161,105,0.08)'
            }}>Manage Scholarships</a>
            <a href="/coordinator-students" style={{
              background: '#805ad5', color: '#fff', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 16, boxShadow: '0 1px 4px rgba(128,90,213,0.08)'
            }}>Manage Students</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoordinatorDashboard; 