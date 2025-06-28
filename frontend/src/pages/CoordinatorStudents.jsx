import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const CoordinatorStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState({});
  const [notifInputs, setNotifInputs] = useState({});
  const [notifStatus, setNotifStatus] = useState({});

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${apiUrl}/api/user/students`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        setError('Failed to fetch students.');
      }
    } catch (err) {
      setError('An error occurred while fetching students.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleExpand = (user_id) => {
    setExpanded(prev => ({ ...prev, [user_id]: !prev[user_id] }));
  };

  const getFilteredStudents = () => {
    if (!search.trim()) return students;
    const s = search.trim().toLowerCase();
    return students.filter(stu =>
      (stu.first_name && stu.first_name.toLowerCase().includes(s)) ||
      (stu.last_name && stu.last_name.toLowerCase().includes(s)) ||
      (stu.email && stu.email.toLowerCase().includes(s)) ||
      (stu.username && stu.username.toLowerCase().includes(s)) ||
      (stu.student && stu.student.registration_no && stu.student.registration_no.toLowerCase().includes(s))
    );
  };

  const handleSendNotification = async (student_id) => {
    const message = notifInputs[student_id];
    if (!message || !message.trim()) {
      setNotifStatus(prev => ({ ...prev, [student_id]: 'Message required.' }));
      return;
    }
    setNotifStatus(prev => ({ ...prev, [student_id]: 'Sending...' }));
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/applications/notify-student`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ student_id, message }),
      });
      if (!res.ok) throw new Error('Failed to send notification');
      setNotifStatus(prev => ({ ...prev, [student_id]: 'Notification sent!' }));
      setNotifInputs(prev => ({ ...prev, [student_id]: '' }));
    } catch (err) {
      setNotifStatus(prev => ({ ...prev, [student_id]: 'Error sending notification.' }));
    }
  };

  return (
    <Layout>
      <div style={{ padding: 40 }}>
        <h1>Student Management</h1>
        <p>View and manage student profiles here.</p>
        <div style={{ margin: '24px 0' }}>
          <input
            type="text"
            placeholder="Search by name, reg. no, or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: 8, minWidth: 260, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        {loading ? (
          <div>Loading students...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <thead>
              <tr style={{ background: '#f4f8fb' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Registration No</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Email</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Year</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredStudents().length === 0 ? (
                <tr><td colSpan={5} style={{ padding: 24, textAlign: 'center' }}>No students found.</td></tr>
              ) : getFilteredStudents().map(stu => (
                <React.Fragment key={stu.user_id}>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 12 }}>{stu.first_name} {stu.last_name}</td>
                    <td style={{ padding: 12 }}>{stu.student?.registration_no || '-'}</td>
                    <td style={{ padding: 12 }}>{stu.email}</td>
                    <td style={{ padding: 12 }}>{stu.student?.year_of_study || '-'}</td>
                    <td style={{ padding: 12 }}>
                      <button onClick={() => handleExpand(stu.user_id)} style={{ padding: '6px 16px', borderRadius: 6, border: 'none', background: '#3182ce', color: '#fff', cursor: 'pointer' }}>
                        {expanded[stu.user_id] ? 'Hide' : 'View'}
                      </button>
                    </td>
                  </tr>
                  {expanded[stu.user_id] && (
                    <tr>
                      <td colSpan={5} style={{ background: '#f9fafb', padding: 18 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
                          <div>
                            <h4>Basic Info</h4>
                            <p><strong>Full Name:</strong> {stu.first_name} {stu.last_name}</p>
                            <p><strong>Email:</strong> {stu.email}</p>
                            <p><strong>Username:</strong> {stu.username}</p>
                            <p><strong>Role:</strong> {stu.role}</p>
                          </div>
                          <div>
                            <h4>Student Profile</h4>
                            {stu.student ? (
                              <>
                                <p><strong>Registration No:</strong> {stu.student.registration_no}</p>
                                <p><strong>Date of Birth:</strong> {stu.student.date_of_birth ? new Date(stu.student.date_of_birth).toLocaleDateString() : '-'}</p>
                                <p><strong>Gender:</strong> {stu.student.gender}</p>
                                <p><strong>Year of Study:</strong> {stu.student.year_of_study}</p>
                                <p><strong>School Name:</strong> {stu.student.school_name}</p>
                                <p><strong>Admission Date:</strong> {stu.student.admission_date ? new Date(stu.student.admission_date).toLocaleDateString() : '-'}</p>
                                <p><strong>Permanent Address:</strong> {stu.student.permanent_address}</p>
                                <p><strong>Unmarried Siblings:</strong> {stu.student.unmarried_siblings}</p>
                                {/* Family Members */}
                                <div style={{ marginTop: 18 }}>
                                  <h4>Family Members</h4>
                                  {stu.student.familyMembers && stu.student.familyMembers.length > 0 ? (
                                    <table style={{ width: '100%', marginBottom: 10, background: '#fff' }}>
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
                                        {stu.student.familyMembers.map(member => (
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
                                <div style={{ marginTop: 18 }}>
                                  <h4>Other Fundings</h4>
                                  {stu.student.otherFunding && stu.student.otherFunding.length > 0 ? (
                                    <table style={{ width: '100%', marginBottom: 10, background: '#fff' }}>
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
                                        {stu.student.otherFunding.map(funding => (
                                          <tr key={funding.funding_id}>
                                            <td>{funding.funding_name}</td>
                                            <td>{funding.organization}</td>
                                            <td>{funding.annual_amount}</td>
                                            <td>{funding.start_date ? new Date(funding.start_date).toLocaleDateString() : '-'}</td>
                                            <td>{funding.end_date ? new Date(funding.end_date).toLocaleDateString() : '-'}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  ) : <p>No other fundings reported.</p>}
                                </div>
                              </>
                            ) : <p>No student profile data.</p>}
                          </div>
                          {/* Custom Notification UI */}
                          <div style={{ marginTop: 24, background: '#f4f8fb', padding: 16, borderRadius: 8 }}>
                            <h4>Send Custom Notification</h4>
                            <textarea
                              placeholder="Type your message to this student..."
                              value={notifInputs[stu.student?.student_id] || ''}
                              onChange={e => setNotifInputs(prev => ({ ...prev, [stu.student?.student_id]: e.target.value }))}
                              style={{ width: '100%', minHeight: 60, borderRadius: 6, border: '1px solid #ccc', marginBottom: 8 }}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                              <button
                                onClick={() => handleSendNotification(stu.student?.student_id)}
                                style={{ background: '#3182ce', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 22px', fontWeight: 600, cursor: 'pointer' }}
                              >Send</button>
                              {notifStatus[stu.student?.student_id] && (
                                <span style={{ color: notifStatus[stu.student?.student_id].includes('sent') ? 'green' : 'red', fontSize: 14 }}>{notifStatus[stu.student?.student_id]}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default CoordinatorStudents; 