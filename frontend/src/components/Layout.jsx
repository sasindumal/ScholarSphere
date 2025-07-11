import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Icons for navigation (reusing from Dashboard)
const DashboardIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const ApplicationsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ScholarshipsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>;
const PaymentsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const ProfileIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const NotificationsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const LogoutIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const SettingsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 5 8.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09c0 .66.39 1.25 1 1.51a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.22.63.22 1.31 0 1.94z"></path></svg>;
const ProviderIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M2 11h20"></path></svg>;
const UserIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'My Applications', path: '/applications', icon: <ApplicationsIcon /> },
  { label: 'Scholarships', path: '/scholarships', icon: <ScholarshipsIcon /> },
  { label: 'Payments', path: '/payments-history', icon: <PaymentsIcon /> },
  { label: 'My Profile', path: '/profile', icon: <ProfileIcon /> },
  { label: 'Notifications', path: '/notifications', icon: <NotificationsIcon /> },
];

const navItemsCoordinator = [
  { label: 'Dashboard', path: '/coordinator-dashboard', icon: <DashboardIcon /> },
  { label: 'Application Reviews', path: '/coordinator-applications', icon: <ApplicationsIcon /> },
  { label: 'Scholarships', path: '/coordinator-scholarships', icon: <ScholarshipsIcon /> },
  { label: 'Student Management', path: '/coordinator-students', icon: <ProfileIcon /> },
];

const navItemsAdmin = [
  { label: 'Dashboard', path: '/admin-dashboard', icon: <DashboardIcon /> },
  { label: 'User Management', path: '/admin-users', icon: <UserIcon /> },
  { label: 'Provider Management', path: '/admin-providers', icon: <ProviderIcon /> },
  { label: 'Payment Management', path: '/admin-payments', icon: <PaymentsIcon /> },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [latestNotifications, setLatestNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const apiUrl = process.env.REACT_APP_API_URL;
        const res = await fetch(`${apiUrl}/api/user/profile`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (e) {
        // ignore
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const fetchNotificationData = async () => {
      try {
        // Fetch unread count
        const apiUrl = process.env.REACT_APP_API_URL;
        const countRes = await fetch(`${apiUrl}/api/notifications/unread-count`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (countRes.ok) {
          const countData = await countRes.json();
          setUnreadCount(countData.count);
        }

        // Fetch recent notifications for the dropdown
        const recentRes = await fetch(`${apiUrl}/api/notifications/recent`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (recentRes.ok) {
          const recentData = await recentRes.json();
          setLatestNotifications(recentData);
        }
      } catch (error) {
        console.error('Failed to fetch notification data:', error);
      }
    };

    fetchNotificationData();
    const interval = setInterval(fetchNotificationData, 30000); // Poll every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleNotifClick = async () => {
    setNotifOpen(prev => !prev);

    // If opening the panel and there are recent notifications to show.
    // The 'recent' endpoint only gives us unread ones.
    if (!notifOpen && latestNotifications.length > 0) {
      const token = localStorage.getItem('token');
      const notificationIdsToMark = latestNotifications.map(n => n.notification_id);

      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const res = await fetch(`${apiUrl}/api/notifications/mark-as-read`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ notificationIds: notificationIdsToMark }),
        });

        if (res.ok) {
          // Update state locally for immediate UI feedback.
          // The polling will sync with the server state eventually.
          setUnreadCount(prev => Math.max(0, prev - notificationIdsToMark.length));
          setLatestNotifications(prev =>
            prev.map(n => ({ ...n, is_read: true }))
          );
        }
      } catch (error) {
        console.error('Failed to mark notifications as read:', error);
      }
    }
  };

  // Modern avatar: show initials or photo
  const getInitials = () => {
    if (!user) return 'U';
    const { first_name, last_name } = user;
    if (first_name && last_name) return `${first_name[0]}${last_name[0]}`.toUpperCase();
    if (first_name) return first_name[0].toUpperCase();
    return 'U';
  };

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">S</div>
          <span className="sidebar-title">ScholarSphere</span>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {(user && user.role === 'coordinator' ? navItemsCoordinator : user && user.role === 'admin' ? navItemsAdmin : navItems).map((item) => (
              <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="main-wrapper">
        <header className="app-header">
          <button className="icon-btn sidebar-toggle-btn" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
          <div className="header-actions" style={{ position: 'relative' }}>
            {user && user.role === 'student' && (
              <>
                <button className="icon-btn" onClick={handleNotifClick} style={{ position: 'relative' }}>
                  <NotificationsIcon />
                  {unreadCount > 0 && (
                    <span style={{ position: 'absolute', top: 2, right: 2, background: '#e53e3e', color: '#fff', borderRadius: '50%', fontSize: 10, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{unreadCount}</span>
                  )}
                </button>
                {notifOpen && (
                  <div style={{ position: 'absolute', right: 0, top: 36, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: 8, width: 320, zIndex: 10, padding: 12 }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Notifications</div>
                    <div style={{ color: '#888', fontSize: 12, marginBottom: 8 }}>
                      Showing your 5 most recent notifications
                    </div>
                    {latestNotifications.length === 0 ? (
                      <div style={{ color: '#888', fontSize: 14 }}>No notifications</div>
                    ) : (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {latestNotifications.map(n => (
                          <li key={n.notification_id} style={{ background: n.is_read ? '#f9f9f9' : '#e6f7ff', padding: 8, borderRadius: 5, marginBottom: 6 }}>
                            <div style={{ fontWeight: n.is_read ? 400 : 600 }}>{n.message}</div>
                            <div style={{ fontSize: 11, color: '#888' }}>{new Date(n.created_at).toLocaleString()}</div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div style={{ textAlign: 'right', marginTop: 8 }}>
                      <Link to="/notifications" onClick={() => setNotifOpen(false)} style={{ color: '#3182ce', fontWeight: 500, fontSize: 14 }}>View more</Link>
                    </div>
                  </div>
                )}
                <Link to="/profile" className="user-avatar modern-avatar" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {getInitials()}
                </Link>
              </>
            )}
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 