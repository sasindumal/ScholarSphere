import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const roles = ['student', 'coordinator', 'admin'];

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', username: '', password: '', role: 'student' });
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/user/all', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setUsers(await res.json());
      } else {
        setError('Failed to fetch users.');
      }
    } catch (err) {
      setError('An error occurred while fetching users.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleAdd = () => {
    setForm({ first_name: '', last_name: '', email: '', username: '', password: '', role: 'student' });
    setEditingId(null);
    setShowForm(true);
    setFormError('');
  };

  const handleEdit = user => {
    setForm({ ...user, password: '' });
    setEditingId(user.user_id);
    setShowForm(true);
    setFormError('');
  };

  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5001/api/user/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) {
        setUsers(users.filter(u => u.user_id !== id));
      } else {
        alert('Failed to delete user.');
      }
    } catch (err) {
      alert('Error deleting user.');
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
        res = await fetch(`http://localhost:5001/api/user/${editingId}`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch('http://localhost:5001/api/user', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }
      if (res.ok) {
        setShowForm(false);
        setForm({ first_name: '', last_name: '', email: '', username: '', password: '', role: 'student' });
        setEditingId(null);
        fetchUsers();
      } else {
        const data = await res.json();
        setFormError(data.error || 'Failed to save user.');
      }
    } catch (err) {
      setFormError('Error saving user.');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: 40 }}>
        <h1>User Management</h1>
        <p>Manage all users in the system. You can add, edit, or delete users, and assign roles.</p>
        <div style={{ margin: '24px 0' }}>
          <button onClick={handleAdd} style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Add User</button>
        </div>
        {loading ? (
          <div>Loading users...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <thead>
              <tr style={{ background: '#f4f8fb' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Email</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Username</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Role</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan={5} style={{ padding: 24, textAlign: 'center' }}>No users found.</td></tr>
              ) : users.map(user => (
                <tr key={user.user_id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: 12 }}>{user.first_name} {user.last_name}</td>
                  <td style={{ padding: 12 }}>{user.email}</td>
                  <td style={{ padding: 12 }}>{user.username}</td>
                  <td style={{ padding: 12 }}>{user.role}</td>
                  <td style={{ padding: 12 }}>
                    <button onClick={() => handleEdit(user)} style={{ marginRight: 8, background: '#805ad5', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }}>Edit</button>
                    <button onClick={() => handleDelete(user.user_id)} style={{ background: '#e53e3e', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 16px', cursor: 'pointer' }} disabled={actionLoading}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Add/Edit User Modal */}
        {showForm && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form onSubmit={handleFormSubmit} style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 340, boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}>
              <h2 style={{ marginBottom: 18 }}>{editingId ? 'Edit User' : 'Add User'}</h2>
              <div style={{ marginBottom: 14 }}>
                <label>First Name<br />
                  <input name="first_name" value={form.first_name} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Last Name<br />
                  <input name="last_name" value={form.last_name} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Email<br />
                  <input name="email" type="email" value={form.email} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Username<br />
                  <input name="username" value={form.username} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Role<br />
                  <select name="role" value={form.role} onChange={handleFormChange} required style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }}>
                    {roles.map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
                  </select>
                </label>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label>Password {editingId ? <span style={{ color: '#888', fontSize: 12 }}>(leave blank to keep unchanged)</span> : null}<br />
                  <input name="password" type="password" value={form.password} onChange={handleFormChange} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} />
                </label>
              </div>
              {formError && <div style={{ color: 'red', marginBottom: 10 }}>{formError}</div>}
              <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
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

export default AdminUsers; 