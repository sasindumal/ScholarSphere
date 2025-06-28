import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './MyApplications.css';
import Modal from 'react-modal';

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
  const [docActionLoading, setDocActionLoading] = useState({});
  const [previewModal, setPreviewModal] = useState({ open: false, url: '', type: '', name: '' });
  const [downloadLoading, setDownloadLoading] = useState({});

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

  useEffect(() => {
    fetchApplications();
    // eslint-disable-next-line
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/api/applications/all`, {
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
      const response = await fetch(`${apiUrl}/api/applications/${id}/review`, {
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

  const handleDocumentVerify = async (docId, status) => {
    setDocActionLoading(prev => ({ ...prev, [docId]: true }));
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/applications/documents/${docId}/verify`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update document status');
      await fetchApplications();
    } catch (err) {
      alert('Error updating document status.');
    } finally {
      setDocActionLoading(prev => ({ ...prev, [docId]: false }));
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

  // Helper to get file extension
  const getFileExtension = (filename) => filename.split('.').pop().toLowerCase();
  // Helper to get download URL
  const getDownloadUrl = (docId) => `${apiUrl}/api/user/documents/${docId}`;

  // Secure fetch and preview/download
  const handlePreviewDocument = async (doc) => {
    setDownloadLoading(prev => ({ ...prev, [doc.document_id]: true }));
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/documents/${doc.document_id}`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch document');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const ext = getFileExtension(doc.file_name);
      if (["jpg","jpeg","png","gif"].includes(ext) || ext === "pdf") {
        setPreviewModal({ open: true, url, type: ext, name: doc.file_name });
      } else {
        // Download
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.file_name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      alert('Error fetching document.');
    } finally {
      setDownloadLoading(prev => ({ ...prev, [doc.document_id]: false }));
    }
  };
  const closePreviewModal = () => {
    if (previewModal.url) URL.revokeObjectURL(previewModal.url);
    setPreviewModal({ open: false, url: '', type: '', name: '' });
  };

  // Manual override for eligibility status
  const handleOverrideEligibility = async (applicationId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/api/applications/${applicationId}/eligibility-status`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eligibility_status: newStatus })
      });
      if (response.ok) {
        await fetchApplications();
      } else {
        alert('Failed to update eligibility status.');
      }
    } catch (err) {
      alert('Error updating eligibility status.');
      console.error(err);
    }
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

              {/* Uploaded Documents */}
              <div className="review-section">
                <h4>Uploaded Documents</h4>
                {app.documents && app.documents.length > 0 ? (
                  <table style={{ width: '100%', marginBottom: 10, background: '#fff', borderRadius: 8 }}>
                    <thead>
                      <tr style={{ background: '#f4f8fb' }}>
                        <th style={{ padding: '10px 14px', textAlign: 'left' }}>Type</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left' }}>File Name</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left' }}>Upload Date</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left' }}>Status</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left' }}>Preview</th>
                        <th style={{ padding: '10px 14px', textAlign: 'left' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {app.documents.map(doc => {
                        const ext = getFileExtension(doc.file_name);
                        const downloadUrl = getDownloadUrl(doc.document_id);
                        return (
                          <tr key={doc.document_id}>
                            <td style={{ padding: '10px 14px' }}>{doc.document_type}</td>
                            <td style={{ padding: '10px 14px' }}>{doc.file_name}</td>
                            <td style={{ padding: '10px 14px' }}>{new Date(doc.upload_date).toLocaleString()}</td>
                            <td style={{ padding: '10px 14px' }}>
                              <span style={{
                                padding: '4px 12px',
                                borderRadius: 8,
                                background: doc.verification_status === 'verified' ? '#d1fae5' : doc.verification_status === 'rejected' ? '#fee2e2' : '#fef9c3',
                                color: doc.verification_status === 'verified' ? '#065f46' : doc.verification_status === 'rejected' ? '#991b1b' : '#92400e',
                                fontWeight: 600,
                                fontSize: 13,
                              }}>{doc.verification_status}</span>
                            </td>
                            <td style={{ padding: '10px 14px', minWidth: 120 }}>
                              {['jpg', 'jpeg', 'png', 'gif'].includes(ext) ? (
                                <button
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                  onClick={() => handlePreviewDocument(doc)}
                                  disabled={downloadLoading[doc.document_id]}
                                  title="Preview Image"
                                >
                                  <span style={{ display: 'inline-block', border: '1px solid #eee', borderRadius: 6, overflow: 'hidden', width: 80, height: 80, background: '#f9fafb' }}>
                                    <img src="/preview-placeholder.png" alt="Preview" style={{ width: 80, height: 80, objectFit: 'cover', opacity: 0.7 }} />
                                  </span>
                                </button>
                              ) : ext === 'pdf' ? (
                                <button
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', textDecoration: 'underline' }}
                                  onClick={() => handlePreviewDocument(doc)}
                                  disabled={downloadLoading[doc.document_id]}
                                  title="Preview PDF"
                                >Preview PDF</button>
                              ) : (
                                <button
                                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', textDecoration: 'underline' }}
                                  onClick={() => handlePreviewDocument(doc)}
                                  disabled={downloadLoading[doc.document_id]}
                                  title="Download File"
                                >Download</button>
                              )}
                            </td>
                            <td style={{ padding: '10px 14px' }}>
                              <button
                                style={{
                                  background: '#34d399', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontWeight: 600, marginRight: 8, cursor: 'pointer', opacity: docActionLoading[doc.document_id] ? 0.6 : 1
                                }}
                                disabled={docActionLoading[doc.document_id] || doc.verification_status === 'verified'}
                                onClick={() => handleDocumentVerify(doc.document_id, 'verified')}
                              >Approve</button>
                              <button
                                style={{
                                  background: '#f87171', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 14px', fontWeight: 600, cursor: 'pointer', opacity: docActionLoading[doc.document_id] ? 0.6 : 1
                                }}
                                disabled={docActionLoading[doc.document_id] || doc.verification_status === 'rejected'}
                                onClick={() => handleDocumentVerify(doc.document_id, 'rejected')}
                              >Reject</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : <p>No documents uploaded.</p>}
              </div>

              {/* Eligibility Breakdown */}
              <div className="review-section">
                <h4>Eligibility Evaluation</h4>
                {app.eligibility_breakdown && app.eligibility_breakdown.length > 0 ? (
                  <table style={{ width: '100%', marginBottom: 10, background: '#f9fafb', borderRadius: 8 }}>
                    <thead>
                      <tr style={{ background: '#f1f5f9' }}>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Criteria</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Required</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Student Value</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Points</th>
                        <th style={{ padding: '8px 12px', textAlign: 'left' }}>Met?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {app.eligibility_breakdown.map((row, idx) => (
                        <tr key={idx}>
                          <td style={{ padding: '8px 12px' }}>{row.criteria}</td>
                          <td style={{ padding: '8px 12px' }}>{row.required}</td>
                          <td style={{ padding: '8px 12px' }}>{row.studentValue}</td>
                          <td style={{ padding: '8px 12px' }}>{row.points}</td>
                          <td style={{ padding: '8px 12px' }}>{row.met ? '✅' : '❌'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p>No eligibility criteria found for this scholarship.</p>}
                <div style={{ marginTop: 8, fontWeight: 600 }}>
                  <span>Total Points: {app.total_points ?? '-'}</span>
                  <span style={{ marginLeft: 24 }}>Status: <span style={{ color: app.eligibility_status === 'eligible' ? '#059669' : app.eligibility_status === 'eligible_by_points' ? '#2563eb' : '#b91c1c', fontWeight: 700 }}>{app.eligibility_status?.replace(/_/g, ' ') ?? '-'}</span></span>
                </div>
                {/* Manual override for eligibility status */}
                <div style={{ marginTop: 10 }}>
                  <label style={{ fontWeight: 500, marginRight: 8 }}>Override Eligibility Status:</label>
                  <select value={app.eligibility_status || ''} onChange={e => handleOverrideEligibility(app.application_id, e.target.value)} style={{ padding: 6, borderRadius: 6, border: '1px solid #ccc' }}>
                    <option value="">(No Override)</option>
                    <option value="eligible">Eligible (All Criteria Met)</option>
                    <option value="eligible_by_points">Eligible by Points</option>
                    <option value="not_eligible">Not Eligible</option>
                  </select>
                </div>
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
      {/* Preview Modal */}
      <Modal
        isOpen={previewModal.open}
        onRequestClose={closePreviewModal}
        contentLabel="Document Preview"
        style={{
          overlay: { backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1000 },
          content: { maxWidth: 600, margin: 'auto', borderRadius: 12, padding: 24, minHeight: 200 }
        }}
        ariaHideApp={false}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Preview: {previewModal.name}</h2>
          <button onClick={closePreviewModal} style={{ fontSize: 18, background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
        </div>
        {['jpg', 'jpeg', 'png', 'gif'].includes(previewModal.type) ? (
          <img src={previewModal.url} alt={previewModal.name} style={{ maxWidth: '100%', maxHeight: 400, borderRadius: 8, border: '1px solid #eee' }} />
        ) : previewModal.type === 'pdf' ? (
          <iframe src={previewModal.url} title={previewModal.name} style={{ width: '100%', height: 500, border: '1px solid #eee', borderRadius: 8 }} />
        ) : null}
      </Modal>
    </Layout>
  );
};

export default CoordinatorApplications; 