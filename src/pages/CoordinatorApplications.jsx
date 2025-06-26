import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './MyApplications.css';

const statusOptions = [
  { value: '', label: 'All Statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'under_review', label: 'Under Review' },
];

const orderOptions = [
  { value: 'date_desc', label: 'Submission Date (Newest)' },
  { value: 'date_asc', label: 'Submission Date (Oldest)' },
  { value: 'amount_desc', label: 'Scholarship Amount (High to Low)' },
  { value: 'amount_asc', label: 'Scholarship Amount (Low to High)' },
];

const CoordinatorApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [order, setOrder] = useState('date_desc');

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

  // Filtering, searching, and ordering logic
  const getFilteredApplications = () => {
    let filtered = [...applications];
    // Search
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      filtered = filtered.filter(app =>
        (app.student.full_name && app.student.full_name.toLowerCase().includes(s)) ||
        (app.student.registration_no && app.student.registration_no.toLowerCase().includes(s)) ||
        (app.scholarship.name && app.scholarship.name.toLowerCase().includes(s))
      );
    }
    // Status filter
    if (statusFilter) {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    // Order
    if (order === 'date_desc') {
      filtered.sort((a, b) => new Date(b.submission_date) - new Date(a.submission_date));
    } else if (order === 'date_asc') {
      filtered.sort((a, b) => new Date(a.submission_date) - new Date(b.submission_date));
    } else if (order === 'amount_desc') {
      filtered.sort((a, b) => Number(b.scholarship.amount) - Number(a.scholarship.amount));
    } else if (order === 'amount_asc') {
      filtered.sort((a, b) => Number(a.scholarship.amount) - Number(b.scholarship.amount));
    }
    return filtered;
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loading-container"><div className="loading-spinner"></div><p>Loading applications...</p></div>;
    }
    if (error) {
      return <div className="error-container"><p>{error}</p><button onClick={fetchApplications}>Try Again</button></div>;
    }
    const filteredApplications = getFilteredApplications();
    if (filteredApplications.length === 0) {
      return (
        <div className="no-applications-container">
          <h2>No Applications Found</h2>
          <p>No student applications are available for review.</p>
        </div>
      );
    }
    return (
      <div className="applications-list">
        {filteredApplications.map((app) => (
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

              <div className="review-section">
                <h4>Scholarship Details</h4>
                <table style={{ width: '100%', marginBottom: 10 }}>
                  <tbody>
                    <tr>
                      <td><strong>Name</strong></td>
                      <td>{app.scholarship.name}</td>
                    </tr>
                    <tr>
                      <td><strong>Description</strong></td>
                      <td>{app.scholarship.description}</td>
                    </tr>
                    <tr>
                      <td><strong>Amount</strong></td>
                      <td>LKR {app.scholarship.amount} /month</td>
                    </tr>
                    <tr>
                      <td><strong>Available Slots</strong></td>
                      <td>{app.scholarship.no_of_students}</td>
                    </tr>
                    <tr>
                      <td><strong>Deadline</strong></td>
                      <td>{new Date(app.scholarship.application_deadline).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td><strong>Provider</strong></td>
                      <td>{app.scholarship.provider?.name || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="review-section">
                <h4>Student Details</h4>
                <table style={{ width: '100%', marginBottom: 10 }}>
                  <tbody>
                    <tr>
                      <td><strong>Full Name</strong></td>
                      <td>{app.student.full_name}</td>
                    </tr>
                    <tr>
                      <td><strong>Registration No</strong></td>
                      <td>{app.student.registration_no}</td>
                    </tr>
                    <tr>
                      <td><strong>Date of Birth</strong></td>
                      <td>{new Date(app.student.date_of_birth).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td><strong>Gender</strong></td>
                      <td>{app.student.gender}</td>
                    </tr>
                    <tr>
                      <td><strong>Email</strong></td>
                      <td>{app.student.email}</td>
                    </tr>
                    <tr>
                      <td><strong>Phone</strong></td>
                      <td>{app.student.phone_number}</td>
                    </tr>
                    <tr>
                      <td><strong>Year of Study</strong></td>
                      <td>{app.student.year_of_study}</td>
                    </tr>
                    <tr>
                      <td><strong>School Name</strong></td>
                      <td>{app.student.school_name}</td>
                    </tr>
                    <tr>
                      <td><strong>Admission Date</strong></td>
                      <td>{new Date(app.student.admission_date).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td><strong>Permanent Address</strong></td>
                      <td>{app.student.permanent_address}</td>
                    </tr>
                    <tr>
                      <td><strong>Unmarried Siblings</strong></td>
                      <td>{app.student.unmarried_siblings}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Family Details */}
              <div className="review-section">
                <h4>Family Details</h4>
                {app.student.familyMembers && app.student.familyMembers.length > 0 ? (
                  <table style={{ width: '100%', marginBottom: 10 }}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Relationship</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Annual Income</th>
                        <th>Workplace</th>
                        <th>Phone</th>
                        <th>Siblings Education</th>
                      </tr>
                    </thead>
                    <tbody>
                      {app.student.familyMembers.map(member => (
                        <tr key={member.member_id}>
                          <td>{member.full_name}</td>
                          <td>{member.relationship}</td>
                          <td>{member.age}</td>
                          <td>{member.designation}</td>
                          <td>{member.annual_income}</td>
                          <td>{member.workplace}</td>
                          <td>{member.phone_number}</td>
                          <td>
                            {member.siblingEducation && member.siblingEducation.length > 0 ? (
                              <ul style={{ paddingLeft: 16 }}>
                                {member.siblingEducation.map(edu => (
                                  <li key={edu.education_id}>
                                    {edu.institution} ({edu.year_grade}, {edu.registration_course})
                                  </li>
                                ))}
                              </ul>
                            ) : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p>No family details provided.</p>}
              </div>

              {/* Other Fundings */}
              <div className="review-section">
                <h4>Other Fundings</h4>
                {app.student.otherFunding && app.student.otherFunding.length > 0 ? (
                  <table style={{ width: '100%', marginBottom: 10 }}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Organization</th>
                        <th>Annual Amount</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {app.student.otherFunding.map(funding => (
                        <tr key={funding.funding_id}>
                          <td>{funding.funding_name}</td>
                          <td>{funding.organization}</td>
                          <td>{funding.annual_amount}</td>
                          <td>{new Date(funding.start_date).toLocaleDateString()}</td>
                          <td>{new Date(funding.end_date).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p>No other fundings reported.</p>}
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
        {/* Search, Filter, and Order Controls */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search by student, reg. no, or scholarship..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: 8, minWidth: 220, borderRadius: 6, border: '1px solid #ccc' }}
          />
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}>
            {statusOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
          <select value={order} onChange={e => setOrder(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}>
            {orderOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        {renderContent()}
      </div>
    </Layout>
  );
};

export default CoordinatorApplications; 