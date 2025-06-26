import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './MyApplications.css';

const CoordinatorApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    fetchApplications();
    // eslint-disable-next-line
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/applications/all', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        setError('Failed to fetch applications.');
      }
    } catch (err) {
      setError('An error occurred while fetching applications.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReview = async (id, status) => {
    setActionLoading(prev => ({ ...prev, [id]: true }));
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5001/api/applications/${id}/review`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,
          reviewer_comments: commentInputs[id] || '',
        })
      });
      if (response.ok) {
        await fetchApplications();
        setCommentInputs(prev => ({ ...prev, [id]: '' }));
      } else {
        alert('Failed to update application.');
      }
    } catch (err) {
      alert('Error updating application.');
      console.error(err);
    } finally {
      setActionLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  const renderStatus = (status) => {
    const statusClass = `status-${status.toLowerCase()}`;
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loading-container"><div className="loading-spinner"></div><p>Loading applications...</p></div>;
    }
    if (error) {
      return <div className="error-container"><p>{error}</p><button onClick={fetchApplications}>Try Again</button></div>;
    }
    if (applications.length === 0) {
      return (
        <div className="no-applications-container">
          <h2>No Applications Found</h2>
          <p>No student applications are available for review.</p>
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
              <div className="application-details">
                <p><strong>Student:</strong> {app.student.full_name} ({app.student.registration_no})</p>
                <p><strong>Email:</strong> {app.student.email}</p>
                <p><strong>Year:</strong> {app.student.year_of_study}</p>
              </div>
              {app.reviewer_comments && (
                <div className="review-section">
                  <h4>Coordinator Comment</h4>
                  <div className="review-item">
                    <p className="review-comment">"{app.reviewer_comments}"</p>
                    <p className="review-details">
                      <strong>Date:</strong> {app.review_date ? new Date(app.review_date).toLocaleDateString() : '-'}
                    </p>
                  </div>
                </div>
              )}
              <div className="review-section">
                <h4>Review Action</h4>
                <textarea
                  placeholder="Leave a comment (optional)"
                  value={commentInputs[app.application_id] || ''}
                  onChange={e => setCommentInputs(prev => ({ ...prev, [app.application_id]: e.target.value }))}
                  style={{ width: '100%', minHeight: 60, marginBottom: 10 }}
                  disabled={actionLoading[app.application_id]}
                />
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    className="status-badge status-approved"
                    style={{ border: 'none', cursor: 'pointer' }}
                    disabled={actionLoading[app.application_id]}
                    onClick={() => handleReview(app.application_id, 'approved')}
                  >Approve</button>
                  <button
                    className="status-badge status-rejected"
                    style={{ border: 'none', cursor: 'pointer' }}
                    disabled={actionLoading[app.application_id]}
                    onClick={() => handleReview(app.application_id, 'rejected')}
                  >Reject</button>
                  <button
                    className="status-badge status-under-review"
                    style={{ border: 'none', cursor: 'pointer' }}
                    disabled={actionLoading[app.application_id]}
                    onClick={() => handleReview(app.application_id, 'under_review')}
                  >Mark Under Review</button>
                </div>
              </div>
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
          <h1>Application Reviews</h1>
          <p>Review, approve, or reject student scholarship applications in real time.</p>
        </div>
        {renderContent()}
      </div>
    </Layout>
  );
};

export default CoordinatorApplications; 