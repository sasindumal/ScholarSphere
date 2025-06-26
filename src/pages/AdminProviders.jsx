import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const tableContainerStyle = {
  width: '100%',
  overflowX: 'auto',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  background: '#fff',
};

const tableStyle = {
  width: '100%',
  minWidth: 700,
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

const deleteBtnStyle = {
  ...actionBtnStyle,
  background: '#e53e3e',
  marginRight: 0,
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

const AdminProviders = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', contact_person: '', phone: '', email: '', address: '' });
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/scholarships/providers', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setProviders(await res.json());
      } else {
        setError('Failed to fetch providers.');
      }
    } catch (err) {
      setError('An error occurred while fetching providers.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleAdd = () => {
    setForm({ name: '', contact_person: '', phone: '', email: '', address: '' });
    setEditingId(null);
    setShowForm(true);
    setFormError('');
  };

  const handleEdit = provider => {
    setForm({ ...provider });
    setEditingId(provider.provider_id);
    setShowForm(true);
    setFormError('');
  };

  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this provider?')) return;
    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5001/api/scholarships/providers/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setProviders(providers.filter(p => p.provider_id !== id));
      } else {
        alert('Failed to delete provider.');
      }
    } catch (err) {
      alert('Error deleting provider.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    setFormError('');
    setActionLoading(true);
    const token = localStorage.getItem('token');
    try {
      let res;
      if (editingId) {
        res = await fetch(`http://localhost:5001/api/scholarships/providers/${editingId}`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch('http://localhost:5001/api/scholarships/providers', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      if (res.ok) {
        setShowForm(false);
        setForm({ name: '', contact_person: '', phone: '', email: '', address: '' });
        setEditingId(null);
        fetchProviders();
      } else {
        const data = await res.json();
        setFormError(data.error || 'Failed to save provider.');
      }
    } catch (err) {
      setFormError('Error saving provider.');
    } finally {
      setActionLoading(false);
    }
  };

  // Responsive styles
  const responsiveStyles = `
    @media (max-width: 700px) {
      .admin-providers-table th, .admin-providers-table td {
        padding: 8px !important;
        font-size: 14px;
      }
      .admin-providers-table {
        min-width: 400px !important;
      }
      .admin-providers-actions {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .admin-providers-modal-form {
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
        <h1>Provider Management</h1>
        <p>Manage scholarship providers. You can add, edit, or delete providers.</p>
        <div style={{ margin: '24px 0' }}>
          <button onClick={handleAdd} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Add Provider</button>
        </div>
        {loading ? (
          <div>Loading providers...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <div style={tableContainerStyle}>
            <table className="admin-providers-table" style={tableStyle}>
              <thead>
                <tr style={{ background: '#f4f8fb' }}>
                  <th style={thTdStyle}>Name</th>
                  <th style={thTdStyle}>Contact Person</th>
                  <th style={thTdStyle}>Phone</th>
                  <th style={thTdStyle}>Email</th>
                  <th style={thTdStyle}>Address</th>
                  <th style={thTdStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {providers.length === 0 ? (
                  <tr><td colSpan={6} style={{ padding: 24, textAlign: 'center' }}>No providers found.</td></tr>
                ) : providers.map(provider => (
                  <tr key={provider.provider_id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={thTdStyle}>{provider.name}</td>
                    <td style={thTdStyle}>{provider.contact_person}</td>
                    <td style={thTdStyle}>{provider.phone}</td>
                    <td style={thTdStyle}>{provider.email}</td>
                    <td style={thTdStyle}>{provider.address}</td>
                    <td style={{ ...thTdStyle, minWidth: 120 }} className="admin-providers-actions">
                      <button onClick={() => handleEdit(provider)} style={actionBtnStyle}>Edit</button>
                      <button onClick={() => handleDelete(provider.provider_id)} style={deleteBtnStyle} disabled={actionLoading}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Add/Edit Provider Modal */}
        {showForm && (
          <div style={modalStyle}>
            <form onSubmit={handleFormSubmit} className="admin-providers-modal-form" style={modalFormStyle}>
              <h2 style={{ marginBottom: 18 }}>{editingId ? 'Edit Provider' : 'Add Provider'}</h2>
              <div style={{ marginBottom: 14 }}>
                <label>Name<br />
                  <input name="name" value={form.name} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Contact Person<br />
                  <input name="contact_person" value={form.contact_person} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Phone<br />
                  <input name="phone" value={form.phone} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Email<br />
                  <input name="email" type="email" value={form.email} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Address<br />
                  <textarea name="address" value={form.address} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4, minHeight: 60 }} />
                </label>
              </div>
              {formError && <div style={{ color: 'red', marginBottom: 10 }}>{formError}</div>}
              <div style={{ display: 'flex', gap: 12, marginTop: 10, flexWrap: 'wrap' }}>
                <button type="submit" disabled={actionLoading} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>{editingId ? 'Update' : 'Create'}</button>
                <button type="button" onClick={() => setShowForm(false)} style={{ background: '#a0aec0', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminProviders; 