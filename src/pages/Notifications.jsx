import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5001/api/notifications', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        } else {
          console.error('Failed to fetch notifications');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Layout>
      <div className="notifications-container">
        <h1>Notifications</h1>
        <p>All your notifications in one place.</p>
        {loading ? (
          <p>Loading notifications...</p>
        ) : notifications.length > 0 ? (
          <ul className="notifications-list">
            {notifications.map((notification) => (
              <li key={notification.notification_id} className={`notification-item ${notification.is_read ? 'read' : 'unread'}`}>
                <div className="notification-content">
                  <p>{notification.message}</p>
                  <span className="notification-time">
                    {new Date(notification.created_at).toLocaleString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no notifications.</p>
        )}
      </div>
    </Layout>
  );
};

export default Notifications;
