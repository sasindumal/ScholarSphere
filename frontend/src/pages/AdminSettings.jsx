import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const AdminSettings = () => {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editKey, setEditKey] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [addForm, setAddForm] = useState({ key: '', value: '' });
  const [addError, setAddError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/settings`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setSettings(await res.json());
      } else {
        setError('Failed to fetch settings.');
      }
    } catch (err) {
      setError('An error occurred while fetching settings.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (key, value) => {
    setEditKey(key);
    setEditValue(value);
  };

  const handleEditSave = async key => {
    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/settings/${key}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: editValue }),
      });
      if (res.ok) {
        setSettings(settings.map(s => s.key === key ? { ...s, value: editValue } : s));
        setEditKey(null);
        setEditValue('');
      } else {
        alert('Failed to update setting.');
      }
    } catch (err) {
      alert('Error updating setting.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async key => {
    if (!window.confirm('Delete this setting?')) return;
    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/settings/${key}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setSettings(settings.filter(s => s.key !== key));
      } else {
        alert('Failed to delete setting.');
      }
    } catch (err) {
      alert('Error deleting setting.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleAddChange = e => {
    const { name, value } = e.target;
    setAddForm(f => ({ ...f, [name]: value }));
  };

  const handleAdd = async e => {
    e.preventDefault();
    setAddError('');
    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/settings`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(addForm),
      });
      if (res.ok) {
        setAddForm({ key: '', value: '' });
        fetchSettings();
      } else {
        const data = await res.json();
        setAddError(data.error || 'Failed to add setting.');
      }
    } catch (err) {
      setAddError('Error adding setting.');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: 40 }}>
        <h1>System Settings</h1>
        <p>Configure system-wide parameters and settings for ScholarSphere.</p>
        <form onSubmit={handleAdd} style={{ margin: '24px 0', display: 'flex', gap: 12, alignItems: 'center' }}>
          <input name="key" value={addForm.key} onChange={handleAddChange} placeholder="Key" required style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', minWidth: 120 }} />
          <input name="value" value={addForm.value} onChange={handleAddChange} placeholder="Value" required style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', minWidth: 180 }} />
          <button type="submit" disabled={actionLoading} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Add Setting</button>
          {addError && <span style={{ color: 'red', marginLeft: 8 }}>{addError}</span>}
        </form>
        {loading ? (
          <div>Loading settings...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <thead>
              <tr style={{ background: '#f4f8fb' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Key</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Value</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {settings.length === 0 ? (
                <tr><td colSpan={3} style={{ padding: 24, textAlign: 'center' }}>No settings found.</td></tr>
              ) : settings.map(s => (
                <tr key={s.key} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: 12 }}>{s.key}</td>
                  <td style={{ padding: 12 }}>
                    {editKey === s.key ? (
                      <input value={editValue} onChange={e => setEditValue(e.target.value)} style={{ padding: 6, borderRadius: 6, border: '1px solid #ccc', minWidth: 120 }} />
                    ) : s.value}
                  </td>
                  <td style={{ padding: 12 }}>
                    {editKey === s.key ? (
                      <>
                        <button onClick={() => handleEditSave(s.key)} disabled={actionLoading} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', marginRight: 8, cursor: 'pointer' }}>Save</button>
                        <button onClick={() => setEditKey(null)} style={{ background: '#a0aec0', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(s.key, s.value)} style={{ marginRight: 8, background: '#805ad5', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => handleDelete(s.key)} style={{ background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }} disabled={actionLoading}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default AdminSettings; 