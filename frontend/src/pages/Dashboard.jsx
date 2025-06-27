import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
// The logo is now created with CSS in App.css

// Icons for navigation
const DashboardIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const ApplicationsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ScholarshipsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>;
const PaymentsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const ProfileIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const NotificationsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const LogoutIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'My Applications', path: '/applications', icon: <ApplicationsIcon /> },
  { label: 'Available Scholarships', path: '/scholarships', icon: <ScholarshipsIcon /> },
  { label: 'Payments', path: '/payments', icon: <PaymentsIcon /> },
  { label: 'My Profile', path: '/profile', icon: <ProfileIcon /> },
  { label: 'Notifications', path: '/notifications', icon: <NotificationsIcon /> },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [scholarshipCount, setScholarshipCount] = useState(0);
  const [applicationCount, setApplicationCount] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [recentPayments, setRecentPayments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/user/profile', {
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
        if (response.ok) setUserData(await response.json());
        else console.error('Failed to fetch user data');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchScholarshipCount = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/scholarships/count', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) setScholarshipCount((await response.json()).count);
        else console.error('Failed to fetch scholarship count');
      } catch (error) {
        console.error('Error fetching scholarship count:', error);
      }
    };

    const fetchApplicationCount = async () => {
        try {
          const response = await fetch('http://localhost:5001/api/applications/count', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.ok) setApplicationCount((await response.json()).count);
          else console.error('Failed to fetch application count');
        } catch (error) {
          console.error('Error fetching application count:', error);
        }
      };

    const fetchTotalPaid = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/payments/total', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) setTotalPaid((await response.json()).total);
        else console.error('Failed to fetch total paid');
      } catch (error) {
        console.error('Error fetching total paid:', error);
      }
    };

    const fetchRecentPayments = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/payments/history', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setRecentPayments(data.slice(0, 5));
        } else {
          setRecentPayments([]);
        }
      } catch (error) {
        setRecentPayments([]);
      }
    };

    fetchUserData();
    fetchScholarshipCount();
    fetchApplicationCount();
    fetchTotalPaid();
    fetchRecentPayments();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <Layout>
      <div className="main-header">
        <h1>Student Dashboard</h1>
        <div className="date-display">{formattedDate}</div>
      </div>

      <section className="stats-grid">
        <div className="card">
          <div className="card-header"><span>Welcome</span><ProfileIcon /></div>
          <div className="card-body">
            <p className="user-name">{userData ? `${userData.first_name} ${userData.last_name}` : 'Loading...'}</p>
            <p className="user-role">Student</p>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/scholarships')} style={{ cursor: 'pointer' }}>
          <div className="card-header"><span>Available Scholarships</span><ScholarshipsIcon /></div>
          <div className="card-body">
            <p className="stat-number">{scholarshipCount}</p>
            <p className="stat-change">Click to view all</p>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/applications')} style={{ cursor: 'pointer' }}>
          <div className="card-header"><span>My Applications</span><ApplicationsIcon /></div>
          <div className="card-body">
            <p className="stat-number">{applicationCount}</p>
            <p className="stat-change">Click to track</p>
          </div>
        </div>
        <div className="card" onClick={() => navigate('/payments-history')} style={{ cursor: 'pointer' }}>
          <div className="card-header"><span>Total Awarded</span><PaymentsIcon /></div>
          <div className="card-body">
            <p className="stat-number">LKR {totalPaid} </p>
            <p className="stat-change">Click to view history</p>
          </div>
        </div>
      </section>

      <section className="bottom-sections">
        <div className="card recent-activity">
          <h2>Recent Payments</h2>
          <p className="section-subtitle">Your most recent scholarship payments</p>
          <ul>
            {recentPayments.length === 0 ? (
              <li><span className="status-dot gray"></span> <p>No recent payments found.</p></li>
            ) : recentPayments.map((payment, idx) => (
              <li key={payment.payment_id || idx}>
                <span className="status-dot green"></span>
                <p>Received <strong>LKR {payment.amount}</strong> for <strong>{payment.application?.scholarship?.name || 'Scholarship'}</strong></p>
                <span className="time">{new Date(payment.payment_date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card quick-actions">
          <h2>Quick Actions</h2>
          <p className="section-subtitle">Common tasks and shortcuts</p>
          <ul>
            <li>
              <Link to="/scholarships">
                <span className="quick-action-title">Browse Scholarships</span>
                <span className="quick-action-subtitle">Find new opportunities</span>
              </Link>
            </li>
            <li>
              <Link to="/applications">
                <span className="quick-action-title">Submit Application</span>
                <span className="quick-action-subtitle">Apply for scholarships</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span className="quick-action-title">View Profile</span>
                <span className="quick-action-subtitle">Update your information</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
