import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './Profile.css';

const TABS = [
  { label: 'Basic Info', key: 'basic' },
  { label: 'Password', key: 'password' },
  { label: 'Student Info', key: 'student' },
];

const YEAR_OPTIONS = [
  { value: 1, label: '1st' },
  { value: 2, label: '2nd' },
  { value: 3, label: '3rd' },
  { value: 4, label: '4th' },
];
const GENDER_OPTIONS = ['male', 'female', 'other'];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [profile, setProfile] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [form, setForm] = useState({});
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [studentForm, setStudentForm] = useState({});
  const [studentError, setStudentError] = useState('');
  const [studentSuccess, setStudentSuccess] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/user/full-profile', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch profile');
      const data = await res.json();
      setProfile(data);
      setStudent(data.student);
      setForm({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        username: data.username,
      });
      if (data.student) {
        setStudentForm({ ...data.student });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Basic Info Update
  const handleBasicChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBasicSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/user/profile', {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to update profile');
      setSuccess('Profile updated successfully');
      fetchProfile();
    } catch (err) {
      setError(err.message);
    }
  };

  // Password Update
  const handlePasswordChange = e => setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  const handlePasswordSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/auth/password', {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update password');
      setSuccess('Password updated successfully');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  // Student Info Update
  const handleStudentChange = e => {
    let value = e.target.value;
    if (e.target.name === 'year_of_study') value = parseInt(value);
    setStudentForm({ ...studentForm, [e.target.name]: value });
  };
  const handleStudentSubmit = async e => {
    e.preventDefault();
    setStudentSuccess('');
    setStudentError('');
    // Validation
    if (!/^20\d{2}E\d{3}$/.test(studentForm.registration_no || '')) {
      setStudentError('Registration number must be in 20YYEXXX format');
      return;
    }
    // Required fields
    const required = ['full_name','registration_no','date_of_birth','gender','permanent_address','admission_date','year_of_study','phone_number','email','school_name','unmarried_siblings'];
    for (let f of required) {
      if (!studentForm[f]) {
        setStudentError('All fields are required');
        return;
      }
    }
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5001/api/user/student', {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(studentForm),
      });
      if (!res.ok) throw new Error('Failed to update student info');
      setStudentSuccess('Student info updated successfully');
      fetchProfile();
    } catch (err) {
      setStudentError(err.message);
    }
  };

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile-title">My Profile</h1>
        <div className="profile-tabs">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={activeTab === tab.key ? 'active' : ''}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="profile-tab-content">
          {loading ? <p>Loading...</p> : null}
          {error && <p className="error-message">{error}</p>}
          {activeTab === 'basic' && !loading && (
            <form className="profile-form" onSubmit={handleBasicSubmit}>
              <label>First Name<input name="first_name" value={form.first_name || ''} onChange={handleBasicChange} required /></label>
              <label>Last Name<input name="last_name" value={form.last_name || ''} onChange={handleBasicChange} required /></label>
              <label>University Email<input name="email" type="email" value={form.email || ''} onChange={handleBasicChange} required /></label>
              <label>Username<input name="username" value={form.username || ''} onChange={handleBasicChange} required /></label>
              <button type="submit">Update</button>
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
          {activeTab === 'password' && !loading && (
            <form className="profile-form" onSubmit={handlePasswordSubmit}>
              <label>Current Password<input name="currentPassword" type="password" value={passwordForm.currentPassword} onChange={handlePasswordChange} required /></label>
              <label>New Password<input name="newPassword" type="password" value={passwordForm.newPassword} onChange={handlePasswordChange} required /></label>
              <label>Confirm Password<input name="confirmPassword" type="password" value={passwordForm.confirmPassword} onChange={handlePasswordChange} required /></label>
              <button type="submit">Update Password</button>
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
          {activeTab === 'student' && !loading && (
            <form className="profile-form" onSubmit={handleStudentSubmit}>
              <label>Full Name<input name="full_name" value={studentForm.full_name || ''} onChange={handleStudentChange} required /></label>
              <label>Registration Number<input name="registration_no" value={studentForm.registration_no || ''} onChange={handleStudentChange} required placeholder="20YYEXXX" /></label>
              <label>Date of Birth<input name="date_of_birth" type="date" value={studentForm.date_of_birth ? studentForm.date_of_birth.slice(0,10) : ''} onChange={handleStudentChange} required /></label>
              <label>Gender<select name="gender" value={studentForm.gender || ''} onChange={handleStudentChange} required>{GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}</select></label>
              <label>Permanent Address<input name="permanent_address" value={studentForm.permanent_address || ''} onChange={handleStudentChange} required /></label>
              <label>Admission Date<input name="admission_date" type="date" value={studentForm.admission_date ? studentForm.admission_date.slice(0,10) : ''} onChange={handleStudentChange} required /></label>
              <label>Year of Study<select name="year_of_study" value={studentForm.year_of_study || ''} onChange={handleStudentChange} required>{YEAR_OPTIONS.map(y => <option key={y.value} value={y.value}>{y.label}</option>)}</select></label>
              <label>Phone Number<input name="phone_number" value={studentForm.phone_number || ''} onChange={handleStudentChange} required /></label>
              <label>Email<input name="email" type="email" value={studentForm.email || ''} onChange={handleStudentChange} required /></label>
              <label>School Name<input name="school_name" value={studentForm.school_name || ''} onChange={handleStudentChange} required /></label>
              <label>Unmarried Siblings<input name="unmarried_siblings" type="number" min="0" value={studentForm.unmarried_siblings || ''} onChange={handleStudentChange} required /></label>
              <button type="submit">Update Student Info</button>
              {studentSuccess && <p className="success-message">{studentSuccess}</p>}
              {studentError && <p className="error-message">{studentError}</p>}
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile; 