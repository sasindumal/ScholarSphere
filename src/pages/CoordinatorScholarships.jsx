import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const CoordinatorScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    amount: '',
    no_of_students: '',
    application_deadline: '',
    start_date: '',
    end_date: '',
    provider_id: '',
    is_active: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const [schRes, provRes] = await Promise.all([
        fetch('http://localhost:5001/api/scholarships', { headers: { 'Authorization': `Bearer ${token}` } }),
        fetch('http://localhost:5001/api/scholarships/providers', { headers: { 'Authorization': `Bearer ${token}` } })
      ]);
      const scholarships = schRes.ok ? await schRes.json() : [];
      const providers = provRes.ok ? await provRes.json() : [];
      setScholarships(scholarships);
      setProviders(providers);
      setError(null);
    } catch (err) {
      setError('Failed to fetch scholarships or providers.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleEdit = sch => {
    setEditingId(sch.scholarship_id);
    setForm({
      name: sch.name,
      description: sch.description,
      amount: sch.amount,
      no_of_students: sch.no_of_students,
      application_deadline: sch.application_deadline ? sch.application_deadline.slice(0, 10) : '',
      start_date: sch.start_date ? sch.start_date.slice(0, 10) : '',
      end_date: sch.end_date ? sch.end_date.slice(0, 10) : '',
      provider_id: sch.provider_id || '',
      is_active: sch.is_active,
    });
    setFormError('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({
      name: '', description: '', amount: '', no_of_students: '', application_deadline: '', start_date: '', end_date: '', provider_id: '', is_active: true
    });
    setFormError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormError('');
    setSubmitting(true);
    const token = localStorage.getItem('token');
    // Basic validation
    if (!form.name || !form.amount || !form.no_of_students || !form.application_deadline || !form.start_date || !form.end_date || !form.provider_id) {
      setFormError('Please fill all required fields.');
      setSubmitting(false);
      return;
    }
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `http://localhost:5001/api/scholarships/${editingId}` : 'http://localhost:5001/api/scholarships';
      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to save scholarship');
      await fetchAll();
      handleCancelEdit();
    } catch (err) {
      setFormError('Failed to save scholarship.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: 40, maxWidth: 1100, margin: '0 auto', background: '#f7fafd', minHeight: '100vh' }}>
        <h1 style={{ fontWeight: 800, fontSize: 32, marginBottom: 8, color: '#2d3748' }}>Scholarship Management</h1>
        <p style={{ color: '#718096', marginBottom: 32 }}>Create and edit scholarships here.</p>
        {loading ? <p>Loading...</p> : error ? <p style={{ color: 'red' }}>{error}</p> : (
          <>
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32, marginBottom: 40 }}>
              <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 18, color: '#2c5282' }}>All Scholarships</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, background: '#f9fafb', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', color: '#374151', fontSize: '1.05rem', fontWeight: 600 }}>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Name</th>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Amount</th>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Slots</th>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Deadline</th>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Provider</th>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Status</th>
                      <th style={{ padding: '16px 18px', textAlign: 'left' }}>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scholarships.map(sch => (
                      <tr key={sch.scholarship_id} style={{ background: '#fff', color: '#374151', fontSize: '1rem', borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}>
                        <td style={{ padding: '14px 18px' }}>{sch.name}</td>
                        <td style={{ padding: '14px 18px' }}>LKR {sch.amount}</td>
                        <td style={{ padding: '14px 18px' }}>{sch.no_of_students}</td>
                        <td style={{ padding: '14px 18px' }}>{sch.application_deadline ? new Date(sch.application_deadline).toLocaleDateString() : '-'}</td>
                        <td style={{ padding: '14px 18px' }}>{sch.provider?.name || '-'}</td>
                        <td style={{ padding: '14px 18px' }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: 12,
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: '#fff',
                            backgroundColor: sch.is_active ? '#38a169' : '#a0aec0',
                          }}>{sch.is_active ? 'Active' : 'Inactive'}</span>
                        </td>
                        <td style={{ padding: '14px 18px' }}>
                          <button onClick={() => handleEdit(sch)} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 1px 4px rgba(49,130,206,0.08)' }}>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 32, maxWidth: 650, margin: '0 auto' }}>
              <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 18, color: '#2c5282' }}>{editingId ? 'Edit Scholarship' : 'Create Scholarship'}</h2>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontWeight: 600 }}>Name*<br />
                    <input name="name" value={form.name} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }} />
                  </label>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontWeight: 600 }}>Description*<br />
                    <textarea name="description" value={form.description} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4, minHeight: 60 }} />
                  </label>
                </div>
                <div style={{ marginBottom: 18, display: 'flex', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 600 }}>Amount (LKR)*<br />
                      <input name="amount" type="number" value={form.amount} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }} />
                    </label>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 600 }}>Available Slots*<br />
                      <input name="no_of_students" type="number" value={form.no_of_students} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }} />
                    </label>
                  </div>
                </div>
                <div style={{ marginBottom: 18, display: 'flex', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 600 }}>Application Deadline*<br />
                      <input name="application_deadline" type="date" value={form.application_deadline} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }} />
                    </label>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 600 }}>Start Date*<br />
                      <input name="start_date" type="date" value={form.start_date} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }} />
                    </label>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontWeight: 600 }}>End Date*<br />
                      <input name="end_date" type="date" value={form.end_date} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }} />
                    </label>
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontWeight: 600 }}>Provider*<br />
                    <select name="provider_id" value={form.provider_id} onChange={handleFormChange} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #cbd5e1', fontSize: 16, marginTop: 4 }}>
                      <option value="">Select Provider</option>
                      {providers.map(p => <option key={p.provider_id} value={p.provider_id}>{p.name}</option>)}
                    </select>
                  </label>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontWeight: 600 }}>
                    <input name="is_active" type="checkbox" checked={form.is_active} onChange={handleFormChange} style={{ marginRight: 8 }} /> Active
                  </label>
                </div>
                {formError && <p style={{ color: 'red', marginBottom: 12 }}>{formError}</p>}
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="submit" disabled={submitting} style={{ background: '#38a169', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 1px 4px rgba(56,161,105,0.08)' }}>{editingId ? 'Update' : 'Create'}</button>
                  {editingId && <button type="button" onClick={handleCancelEdit} style={{ background: '#a0aec0', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Cancel</button>}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CoordinatorScholarships; 