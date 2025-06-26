import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AvailableScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/scholarships', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setScholarships(data);
      } else {
        setError('Failed to fetch scholarships');
      }
    } catch (error) {
      setError('Error fetching scholarships');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (scholarshipId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/scholarships/apply', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ scholarshipId })
      });

      if (response.ok) {
        // Show success message and refresh scholarships
        alert('Application submitted successfully!');
        fetchScholarships();
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting application');
    }
  };

  if (loading) {
    return (
      <div className="scholarships-loading">
        <div className="loading-spinner"></div>
        <p>Loading scholarships...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="scholarships-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={fetchScholarships}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="scholarships-container">
      <div className="scholarships-header">
        <h1>Available Scholarships</h1>
        <p>Explore and apply for scholarships that match your profile</p>
      </div>

      <div className="scholarships-grid">
        {scholarships.map((scholarship) => (
          <div key={scholarship.scholarship_id} className="scholarship-card">
            <div className="scholarship-card-header">
              <h2>{scholarship.name}</h2>
              <span className="scholarship-amount">${scholarship.amount}</span>
            </div>
            
            <div className="scholarship-card-body">
              <p>{scholarship.description}</p>
              
              <div className="scholarship-details">
                <div className="detail-item">
                  <span className="detail-label">Deadline</span>
                  <span className="detail-value">
                    {new Date(scholarship.application_deadline).toLocaleDateString()}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Available Slots</span>
                  <span className="detail-value">{scholarship.no_of_students}</span>
                </div>
              </div>

              <div className="scholarship-provider">
                <span className="provider-label">Provided by:</span>
                <span className="provider-name">{scholarship.provider?.name}</span>
              </div>
            </div>

            <div className="scholarship-card-footer">
              <button 
                onClick={() => handleApply(scholarship.scholarship_id)}
                className="apply-button"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableScholarships; 