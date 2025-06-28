import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const statusColors = {
  pending: '#e53e3e',
  completed: '#38a169',
  failed: '#d69e2e',
};

const tableContainerStyle = {
  width: '100%',
  overflowX: 'auto',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  background: '#fff',
};

const tableStyle = {
  width: '100%',
  minWidth: 900,
  borderCollapse: 'collapse',
};

const thTdStyle = {
  padding: 12,
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

const actionBtnStyle = {
  marginRight: 8,
  background: '#805ad5',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  padding: '6px 16px',
  cursor: 'pointer',
  marginBottom: 6,
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.18)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
};

const modalFormStyle = {
  background: '#fff',
  borderRadius: 12,
  padding: 24,
  minWidth: 280,
  maxWidth: 400,
  width: '100%',
  boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
};

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showResolve, setShowResolve] = useState(false);
  const [resolveStatus, setResolveStatus] = useState('');
  const [resolveLoading, setResolveLoading] = useState(false);
  const [resolveError, setResolveError] = useState('');

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/payments/all`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setPayments(await res.json());
      } else {
        setError('Failed to fetch payments.');
      }
    } catch (err) {
      setError('An error occurred while fetching payments.');
    } finally {
      setLoading(false);
    }
  };

  const filtered = payments.filter(p => {
    const user = p.application?.student?.user;
    const scholarship = p.application?.scholarship;
    return (
      (!search ||
        (user && (`${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))) ||
        (scholarship && scholarship.name.toLowerCase().includes(search.toLowerCase())) ||
        (p.transaction_id && p.transaction_id.toLowerCase().includes(search.toLowerCase()))
      )
    );
  });

  const handleDetail = payment => {
    setSelected(payment);
    setShowDetail(true);
  };

  const handleResolve = payment => {
    setSelected(payment);
    setResolveStatus(payment.status);
    setShowResolve(true);
    setResolveError('');
  };

  const handleResolveSubmit = async e => {
    e.preventDefault();
    setResolveLoading(true);
    setResolveError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/payments/${selected.payment_id}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: resolveStatus }),
      });
      if (res.ok) {
        setShowResolve(false);
        setSelected(null);
        fetchPayments();
      } else {
        const data = await res.json();
        setResolveError(data.error || 'Failed to update payment.');
      }
    } catch (err) {
      setResolveError('Error updating payment.');
    } finally {
      setResolveLoading(false);
    }
  };

  // Responsive styles
  const responsiveStyles = `
    @media (max-width: 900px) {
      .admin-payments-table th, .admin-payments-table td {
        padding: 8px !important;
        font-size: 14px;
      }
      .admin-payments-table {
        min-width: 500px !important;
      }
      .admin-payments-actions {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .admin-payments-modal-form {
        min-width: 0 !important;
        max-width: 98vw !important;
        padding: 12px !important;
      }
    }
  `;

  return (
    <Layout>
      <style>{responsiveStyles}</style>
      <div style={{ padding: 40 }}>
        <h1>Payment Management</h1>
        <p>Track and manage all payments, view payment history, and resolve payment issues.</p>
        <div style={{ margin: '24px 0', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search by user, scholarship, or transaction..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: 10, borderRadius: 8, border: '1px solid #ccc', minWidth: 220 }}
          />
        </div>
        {loading ? (
          <div>Loading payments...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <div style={tableContainerStyle}>
            <table className="admin-payments-table" style={tableStyle}>
              <thead>
                <tr style={{ background: '#f4f8fb' }}>
                  <th style={thTdStyle}>User</th>
                  <th style={thTdStyle}>Email</th>
                  <th style={thTdStyle}>Scholarship</th>
                  <th style={thTdStyle}>Amount</th>
                  <th style={thTdStyle}>Date</th>
                  <th style={thTdStyle}>Status</th>
                  <th style={thTdStyle}>Transaction ID</th>
                  <th style={thTdStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} style={{ padding: 24, textAlign: 'center' }}>No payments found.</td></tr>
                ) : filtered.map(payment => {
                  const user = payment.application?.student?.user;
                  const scholarship = payment.application?.scholarship;
                  return (
                    <tr key={payment.payment_id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={thTdStyle}>{user ? `${user.first_name} ${user.last_name}` : '-'}</td>
                      <td style={thTdStyle}>{user?.email || '-'}</td>
                      <td style={thTdStyle}>{scholarship?.name || '-'}</td>
                      <td style={thTdStyle}>{payment.amount}</td>
                      <td style={thTdStyle}>{new Date(payment.payment_date).toLocaleDateString()}</td>
                      <td style={{ ...thTdStyle, color: statusColors[payment.status] || '#444', fontWeight: 600 }}>{payment.status}</td>
                      <td style={thTdStyle}>{payment.transaction_id || '-'}</td>
                      <td style={{ ...thTdStyle, minWidth: 120 }} className="admin-payments-actions">
                        <button onClick={() => handleDetail(payment)} style={actionBtnStyle}>Details</button>
                        <button onClick={() => handleResolve(payment)} style={{ ...actionBtnStyle, background: '#38a169' }}>Resolve</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {/* Payment Details Modal */}
        {showDetail && selected && (
          <div style={modalStyle}>
            <div className="admin-payments-modal-form" style={modalFormStyle}>
              <h2 style={{ marginBottom: 18 }}>Payment Details</h2>
              <div style={{ marginBottom: 10 }}><b>User:</b> {selected.application?.student?.user ? `${selected.application.student.user.first_name} ${selected.application.student.user.last_name}` : '-'}</div>
              <div style={{ marginBottom: 10 }}><b>Email:</b> {selected.application?.student?.user?.email || '-'}</div>
              <div style={{ marginBottom: 10 }}><b>Scholarship:</b> {selected.application?.scholarship?.name || '-'}</div>
              <div style={{ marginBottom: 10 }}><b>Amount:</b> {selected.amount}</div>
              <div style={{ marginBottom: 10 }}><b>Date:</b> {new Date(selected.payment_date).toLocaleString()}</div>
              <div style={{ marginBottom: 10 }}><b>Status:</b> {selected.status}</div>
              <div style={{ marginBottom: 10 }}><b>Transaction ID:</b> {selected.transaction_id || '-'}</div>
              <div style={{ marginBottom: 10 }}><b>Payment Method:</b> {selected.payment_method || '-'}</div>
              <div style={{ marginBottom: 10 }}><b>Application ID:</b> {selected.application_id}</div>
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <button onClick={() => setShowDetail(false)} style={{ background: '#a0aec0', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Close</button>
              </div>
            </div>
          </div>
        )}
        {/* Resolve Payment Modal */}
        {showResolve && selected && (
          <div style={modalStyle}>
            <form onSubmit={handleResolveSubmit} className="admin-payments-modal-form" style={modalFormStyle}>
              <h2 style={{ marginBottom: 18 }}>Resolve Payment</h2>
              <div style={{ marginBottom: 14 }}>
                <label>Status<br />
                  <select name="status" value={resolveStatus} onChange={e => setResolveStatus(e.target.value)} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }}>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                  </select>
                </label>
              </div>
              {resolveError && <div style={{ color: 'red', marginBottom: 10 }}>{resolveError}</div>}
              <div style={{ display: 'flex', gap: 12, marginTop: 10, flexWrap: 'wrap' }}>
                <button type="submit" disabled={resolveLoading} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Update</button>
                <button type="button" onClick={() => setShowResolve(false)} style={{ background: '#a0aec0', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminPayments; 