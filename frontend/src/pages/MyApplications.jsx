import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './MyApplications.css'; // We will create this file next

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/applications', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        setError('Failed to fetch your applications.');
      }
    } catch (err) {
      setError('An error occurred while fetching applications.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderStatus = (status) => {
    const statusClass = `status-${status.toLowerCase()}`;
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loading-container"><div className="loading-spinner"></div><p>Loading your applications...</p></div>;
    }

    if (error) {
      return <div className="error-container"><p>{error}</p><button onClick={fetchApplications}>Try Again</button></div>;
    }

    if (applications.length === 0) {
        return (
          <div className="no-applications-container">
            <h2>No Applications Found</h2>
            <p>You haven't applied for any scholarships yet.</p>
          </div>
        );
      }

    return (
      <div className="applications-list">
        {applications.map((app) => (
          <div key={app.application_id} className="application-card">
            <div className="application-card-header">
              <h3>{app.scholarship.name}</h3>
              {renderStatus(app.status)}
            </div>
            <div className="application-card-body">
              <div className="application-details">
                <p className="amount-small"><strong>Amount:</strong> LKR {app.scholarship.amount} /month</p>
                <p><strong>Submitted:</strong> {new Date(app.submission_date).toLocaleDateString()}</p>
              </div>
              {app.reviews && app.reviews.length > 0 && (
                <div className="review-section">
                  <h4>Reviewer Feedback</h4>
                  {app.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <p className="review-comment">"{review.comments}"</p>
                      <p className="review-details">
                        <strong>Points:</strong> {review.points_awarded} | <strong>Date:</strong> {new Date(review.review_date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="my-applications-container">
        <div className="my-applications-header">
          <h1>My Applications</h1>
          <p>Track the status and reviews of your scholarship applications.</p>
        </div>
        {renderContent()}
      </div>
    </Layout>
  );
};

export default MyApplications; 