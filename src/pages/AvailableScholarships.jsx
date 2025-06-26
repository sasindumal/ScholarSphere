import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const AvailableScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [appliedScholarshipIds, setAppliedScholarshipIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // New state for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('application_deadline'); // Default sort

  const navigate = useNavigate();

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      // Fetch both scholarships and user's applications in parallel
      const [scholarshipsRes, applicationsRes] = await Promise.all([
        fetch('http://localhost:5001/api/scholarships', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('http://localhost:5001/api/applications', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (!scholarshipsRes.ok || !applicationsRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const scholarshipsData = await scholarshipsRes.json();
      const applicationsData = await applicationsRes.json();
      
      setScholarships(scholarshipsData);
      setAppliedScholarshipIds(new Set(applicationsData.map(app => app.scholarship_id)));

    } catch (error) {
      setError('Error fetching data');
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
        alert('Application submitted successfully!');
        // Add the new application to our state to update the UI instantly
        setAppliedScholarshipIds(prevIds => new Set(prevIds).add(scholarshipId));
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting application');
    }
  };

  const filteredAndSortedScholarships = useMemo(() => {
    let filtered = scholarships.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
        case 'amount_desc':
            return filtered.sort((a, b) => b.amount - a.amount);
        case 'amount_asc':
            return filtered.sort((a, b) => a.amount - b.amount);
        case 'name_asc':
            return filtered.sort((a, b) => a.name.localeCompare(b.name));
        case 'application_deadline':
        default:
            return filtered.sort((a, b) => new Date(a.application_deadline) - new Date(b.application_deadline));
    }
  }, [scholarships, searchTerm, sortBy]);

  const renderContent = () => {
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
          <button onClick={fetchInitialData}>Try Again</button>
        </div>
      );
    }

    return (
      <>
        <div className="scholarships-header">
          <h1>Available Scholarships</h1>
          <p>Explore and apply for scholarships that match your profile</p>
        </div>

        <div className="scholarships-controls">
          <input
            type="text"
            placeholder="Search by name, description..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="application_deadline">Sort by Deadline</option>
            <option value="amount_desc">Sort by Amount (High to Low)</option>
            <option value="amount_asc">Sort by Amount (Low to High)</option>
            <option value="name_asc">Sort by Name (A-Z)</option>
          </select>
        </div>

        <div className="scholarships-grid">
          {filteredAndSortedScholarships.map((scholarship) => {
            const isApplied = appliedScholarshipIds.has(scholarship.scholarship_id);
            return (
              <div key={scholarship.scholarship_id} className="scholarship-card">
                <div className="scholarship-card-header">
                  <h2>{scholarship.name}</h2>
                  <span className="scholarship-amount amount-small">LKR {scholarship.amount} /month</span>
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
                    className={`apply-button ${isApplied ? 'applied' : ''}`}
                    disabled={isApplied}
                  >
                    {isApplied ? 'Applied' : 'Apply Now'}
                  </button>
                </div>
              </div>
            );
          })}
           {filteredAndSortedScholarships.length === 0 && (
            <div className="no-results">
              <h3>No scholarships match your search.</h3>
              <p>Try clearing your search term or changing the filter.</p>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <Layout>
      <div className="scholarships-container">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default AvailableScholarships; 