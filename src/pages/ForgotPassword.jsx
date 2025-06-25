import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

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
          <h2>Forgot Password?</h2>
          <p className="auth-subtitle">Enter your email to receive a password reset link.</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">University Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@university.edu"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-btn">Send Reset Link</button>
        </form>
        <footer className="auth-footer">
          <p>Remember your password? <Link to="/login" className="auth-link">Sign In</Link></p>
        </footer>
      </main>
    </div>
  );
};

export default ForgotPassword; 