import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const AvailableScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [appliedScholarshipIds, setAppliedScholarshipIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentProfile, setStudentProfile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [profileLoading, setProfileLoading] = useState(true);
  
  // New state for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('application_deadline'); // Default sort

  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchInitialData();
    fetchStudentProfile();
    fetchDocuments();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      // Fetch both scholarships and user's applications in parallel
      const [scholarshipsRes, applicationsRes] = await Promise.all([
        fetch(`${apiUrl}/api/scholarships`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${apiUrl}/api/applications`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (!scholarshipsRes.ok) {
        throw new Error('Failed to fetch scholarships');
      }

      const scholarshipsData = await scholarshipsRes.json();
      let applicationsData = [];
      if (applicationsRes.ok) {
        applicationsData = await applicationsRes.json();
      } else if (applicationsRes.status === 404) {
        // No applications for new user, treat as empty
        applicationsData = [];
      } else {
        throw new Error('Failed to fetch applications');
      }
      
      setScholarships(scholarshipsData);
      setAppliedScholarshipIds(new Set(applicationsData.map(app => app.scholarship_id)));

    } catch (error) {
      setError('Error fetching data');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudentProfile = async () => {
    setProfileLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/full-profile`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch profile');
      const data = await res.json();
      setStudentProfile(data.student);
    } catch (err) {
      setStudentProfile(null);
    } finally {
      setProfileLoading(false);
    }
  };

  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/documents`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch documents');
      const data = await res.json();
      setDocuments(data);
    } catch (err) {
      setDocuments([]);
    }
  };

  // Helper to check if student info is complete
  const isStudentInfoComplete = () => {
    if (!studentProfile) return false;
    const requiredFields = [
      'full_name', 'registration_no', 'date_of_birth', 'permanent_address', 'admission_date',
      'year_of_study', 'gender', 'phone_number', 'email', 'school_name'
    ];
    for (const field of requiredFields) {
      if (!studentProfile[field] || studentProfile[field] === '' || studentProfile[field] === 'To be updated' || studentProfile[field] === '0000000000') {
        return false;
      }
    }
    return true;
  };

  // Helper to check if required documents are uploaded (and optionally verified)
  const isDocumentsComplete = () => {
    // You can adjust this logic based on your requirements
    const requiredTypes = ['NIC Front', 'NIC Back', 'GS Certificate'];
    const uploadedTypes = documents.map(doc => doc.document_type);
    return requiredTypes.every(type => uploadedTypes.includes(type));
  };

  const handleApply = async (scholarshipId) => {
    if (!isStudentInfoComplete()) {
      alert('Please complete your student profile before applying for a scholarship.');
      return;
    }
    if (!isDocumentsComplete()) {
      alert('Please upload all required documents before applying for a scholarship.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/api/scholarships/apply`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ scholarshipId })
      });

      if (response.ok) {
        alert('Application submitted successfully!');
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