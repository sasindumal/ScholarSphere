import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <div className="auth-logo">
          <div className="logo-icon">S</div>
          <h1>ScholarSphere</h1>
        </div>
      </header>
      <main className="auth-card">
        <div className="auth-card-header">
          <h2>Create an Account</h2>
          <p className="auth-subtitle">Join ScholarSphere to find your next opportunity.</p>
        </div>
        <form className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" placeholder="Jane" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" placeholder="janedoe" value={form.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">University Email</label>
            <input id="email" name="email" type="email" placeholder="you@university.edu" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" value={form.password} onChange={handleChange} required />
              <button type="button" className="password-toggle-btn" onClick={() => setShowPassword(s => !s)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-wrapper">
              <input id="confirmPassword" name="confirmPassword" type={showConfirm ? 'text' : 'password'} placeholder="Confirm your password" value={form.confirmPassword} onChange={handleChange} required />
              <button type="button" className="password-toggle-btn" onClick={() => setShowConfirm(s => !s)}>
                {showConfirm ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button className="auth-btn" type="submit">Create Account</button>
        </form>
        <footer className="auth-footer">
          <p>Already have an account? <Link to="/login" className="auth-link">Sign In</Link></p>
        </footer>
      </main>
    </div>
  );
};

export default Signup; 