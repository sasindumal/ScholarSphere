import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, read, unread

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      try {
        const response = await fetch(`${apiUrl}/api/notifications`, {
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

  // Filter and search notifications
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "read" && notification.is_read) ||
      (filter === "unread" && !notification.is_read);
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      <div className="notifications-container">
        <h1>Notifications</h1>
        <p>All your notifications in one place.</p>
        {/* Search and Filter Controls */}
        <div className="notifications-controls">
          <input
            type="text"
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="notifications-search"
          />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="notifications-filter"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
        {loading ? (
          <p>Loading notifications...</p>
        ) : filteredNotifications.length > 0 ? (
          <ul className="notifications-list">
            {filteredNotifications.map((notification) => (
              <li key={notification.notification_id} className={`notification-item ${notification.is_read ? 'read' : 'unread'}`}>
                <span className="notif-dot" />
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
          <p>No notifications found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Notifications;
