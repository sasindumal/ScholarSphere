import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './Profile.css';

const TABS = [
  { label: 'Basic Info', key: 'basic' },
  { label: 'Password', key: 'password' },
  { label: 'Student Info', key: 'student' },
  { label: 'Documents Verification', key: 'documents' },
];

const YEAR_OPTIONS = [
  { value: 1, label: '1st' },
  { value: 2, label: '2nd' },
  { value: 3, label: '3rd' },
  { value: 4, label: '4th' },
];
const GENDER_OPTIONS = ['male', 'female', 'other'];

const RELATIONSHIP_OPTIONS = [
  { value: 'Father', label: 'Father' },
  { value: 'Mother', label: 'Mother' },
  { value: 'Sibling', label: 'Sibling' },
];

const emptyMember = {
  full_name: '', age: '', relationship: '', designation: '', annual_income: '', workplace: '', phone_number: '',
  siblingEducation: { institution: '', year_grade: '', registration_course: '' }
};
const emptyFunding = {
  funding_name: '', organization: '', annual_amount: '', start_date: '', end_date: ''
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [profile, setProfile] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [form, setForm] = useState({});
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [studentForm, setStudentForm] = useState({});
  const [studentError, setStudentError] = useState('');
  const [studentSuccess, setStudentSuccess] = useState('');
  const [familyMembers, setFamilyMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [memberForm, setMemberForm] = useState(emptyMember);
  const [memberError, setMemberError] = useState('');
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [fundings, setFundings] = useState([]);
  const [editingFunding, setEditingFunding] = useState(null);
  const [fundingForm, setFundingForm] = useState(emptyFunding);
  const [fundingError, setFundingError] = useState('');
  const [showFundingForm, setShowFundingForm] = useState(false);
  const [nicFront, setNicFront] = useState(null);
  const [nicBack, setNicBack] = useState(null);
  const [gsCertificate, setGsCertificate] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [documents, setDocuments] = useState([]);
  const [docLoading, setDocLoading] = useState(false);
  const [docDeleteStatus, setDocDeleteStatus] = useState('');

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchProfile();
    fetchFamilyMembers();
    fetchFundings();
  }, []);

  useEffect(() => {
    if (activeTab === 'documents') {
      fetchDocuments();
    }
  }, [activeTab]);

  const fetchProfile = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/full-profile`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch profile');
      const data = await res.json();
      setProfile(data);
      setStudent(data.student);
      setForm({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        username: data.username,
      });
      if (data.student) {
        function getField(obj, snake, camel, fallback) {
          if (snake === 'registration_no' && obj[snake] && obj[snake].startsWith('UGC/NEW/')) return '';
          if (snake === 'registration_no' && obj[camel] && obj[camel].startsWith('UGC/NEW/')) return '';
          if (obj[snake] !== undefined && obj[snake] !== null && obj[snake] !== '' && obj[snake] !== 'To be updated' && obj[snake] !== '0000000000') return obj[snake];
          if (obj[camel] !== undefined && obj[camel] !== null && obj[camel] !== '' && obj[camel] !== 'To be updated' && obj[camel] !== '0000000000') return obj[camel];
          return fallback;
        }
        const snakeCamelMap = {
          full_name: 'fullName',
          registration_no: 'registrationNo',
          date_of_birth: 'dateOfBirth',
          gender: 'gender',
          permanent_address: 'permanentAddress',
          admission_date: 'admissionDate',
          year_of_study: 'yearOfStudy',
          phone_number: 'phoneNumber',
          email: 'email',
          school_name: 'schoolName',
          unmarried_siblings: 'unmarriedSiblings',
        };
        const requiredFields = Object.keys(snakeCamelMap);
        const defaults = {
          gender: 'male',
          year_of_study: 1,
          unmarried_siblings: 0,
        };
        const form = {};
        for (const f of requiredFields) {
          form[f] = getField(data.student, f, snakeCamelMap[f], defaults[f] !== undefined ? defaults[f] : '');
        }
        setStudentForm(form);
      } else {
        setStudentForm({
          full_name: '',
          registration_no: '',
          date_of_birth: '',
          gender: 'male',
          permanent_address: '',
          admission_date: '',
          year_of_study: 1,
          phone_number: '',
          email: '',
          school_name: '',
          unmarried_siblings: 0,
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchFamilyMembers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/family-members`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) setFamilyMembers(await res.json());
    } catch {}
  };

  const fetchFundings = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/other-funding`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (res.ok) setFundings(await res.json());
    } catch {}
  };

  const fetchDocuments = async () => {
    setDocLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/documents`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to fetch documents');
      setDocuments(await res.json());
    } catch (err) {
      setUploadStatus('Failed to fetch documents');
    } finally {
      setDocLoading(false);
    }
  };

  // Basic Info Update
  const handleBasicChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBasicSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/profile`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to update profile');
      setSuccess('Profile updated successfully');
      fetchProfile();
    } catch (err) {
      setError(err.message);
    }
  };

  // Password Update
  const handlePasswordChange = e => setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  const handlePasswordSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/auth/password`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update password');
      setSuccess('Password updated successfully');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  // Student Info Update
  const handleStudentChange = e => {
    let value = e.target.value;
    if (e.target.name === 'year_of_study') value = parseInt(value);
    setStudentForm({ ...studentForm, [e.target.name]: value });
  };
  const handleStudentSubmit = async e => {
    e.preventDefault();
    setStudentSuccess('');
    setStudentError('');
    try {
      const token = localStorage.getItem('token');
      // Convert date fields to ISO-8601 strings if not empty
      const payload = { ...studentForm };
      if (payload.date_of_birth) {
        payload.date_of_birth = new Date(payload.date_of_birth).toISOString();
      }
      if (payload.admission_date) {
        payload.admission_date = new Date(payload.admission_date).toISOString();
      }
      if (payload.unmarried_siblings !== undefined && payload.unmarried_siblings !== null && payload.unmarried_siblings !== '') {
        payload.unmarried_siblings = Number(payload.unmarried_siblings);
      }
      const res = await fetch(`${apiUrl}/api/user/student`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to update student info');
      setStudentSuccess('Student info updated successfully');
      fetchProfile();
    } catch (err) {
      setStudentError(err.message);
    }
  };

  // --- Family Member Handlers ---
  const openAddMember = () => {
    setEditingMember(null);
    setMemberForm(emptyMember);
    setShowMemberForm(true);
    setMemberError('');
  };
  const openEditMember = (member) => {
    setEditingMember(member);
    setMemberForm({
      ...member,
      siblingEducation: member.siblingEducation?.[0] || { institution: '', year_grade: '', registration_course: '' }
    });
    setShowMemberForm(true);
    setMemberError('');
  };
  const closeMemberForm = () => {
    setShowMemberForm(false);
    setEditingMember(null);
    setMemberForm(emptyMember);
    setMemberError('');
  };
  const handleMemberChange = e => {
    const { name, value } = e.target;
    if (name.startsWith('siblingEducation.')) {
      setMemberForm({ ...memberForm, siblingEducation: { ...memberForm.siblingEducation, [name.split('.')[1]]: value } });
    } else {
      setMemberForm({ ...memberForm, [name]: value });
    }
  };
  const handleMemberSubmit = async e => {
    e.preventDefault();
    setMemberError('');
    try {
      const token = localStorage.getItem('token');
      // Convert age and annual_income to numbers
      const payload = { ...memberForm };
      if (payload.age !== undefined && payload.age !== null && payload.age !== '') {
        payload.age = Number(payload.age);
      }
      if (payload.annual_income !== undefined && payload.annual_income !== null && payload.annual_income !== '') {
        payload.annual_income = Number(payload.annual_income);
      }
      // Only include siblingEducation if relationship is 'sibling' and all fields are filled
      if (payload.relationship === 'Sibling') {
        const se = payload.siblingEducation || {};
        if (se.institution && se.year_grade && se.registration_course) {
          payload.siblingEducation = {
            institution: se.institution,
            year_grade: se.year_grade,
            registration_course: se.registration_course,
          };
        } else {
          delete payload.siblingEducation;
        }
      } else {
        delete payload.siblingEducation;
      }
      const url = editingMember ? `${apiUrl}/api/user/family-members/${editingMember.member_id}` : `${apiUrl}/api/user/family-members`;
      const method = editingMember ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to save family member');
      setShowMemberForm(false);
      fetchFamilyMembers();
    } catch (err) {
      setMemberError(err.message);
    }
  };
  const handleDeleteMember = async (id) => {
    if (!window.confirm('Delete this family member?')) return;
    try {
      const token = localStorage.getItem('token');
      await fetch(`${apiUrl}/api/user/family-members/${id}`, {
        method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchFamilyMembers();
    } catch {}
  };

  // --- Funding Handlers ---
  const openAddFunding = () => {
    setEditingFunding(null);
    setFundingForm(emptyFunding);
    setShowFundingForm(true);
    setFundingError('');
  };
  const openEditFunding = (funding) => {
    setEditingFunding(funding);
    setFundingForm({ ...funding, start_date: funding.start_date?.slice(0,10), end_date: funding.end_date?.slice(0,10) });
    setShowFundingForm(true);
    setFundingError('');
  };
  const closeFundingForm = () => {
    setShowFundingForm(false);
    setEditingFunding(null);
    setFundingForm(emptyFunding);
    setFundingError('');
  };
  const handleFundingChange = e => setFundingForm({ ...fundingForm, [e.target.name]: e.target.value });
  const handleFundingSubmit = async e => {
    e.preventDefault();
    setFundingError('');
    try {
      const token = localStorage.getItem('token');
      const url = editingFunding ? `${apiUrl}/api/user/other-funding/${editingFunding.funding_id}` : `${apiUrl}/api/user/other-funding`;
      const method = editingFunding ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(fundingForm),
      });
      if (!res.ok) throw new Error('Failed to save funding');
      closeFundingForm();
      fetchFundings();
    } catch (err) {
      setFundingError(err.message);
    }
  };
  const handleDeleteFunding = async (id) => {
    if (!window.confirm('Delete this funding?')) return;
    try {
      const token = localStorage.getItem('token');
      await fetch(`${apiUrl}/api/user/other-funding/${id}`, {
        method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchFundings();
    } catch {}
  };

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };
  const handleDocumentsUpload = async (e) => {
    e.preventDefault();
    setUploadStatus('');
    const formData = new FormData();
    if (nicFront) formData.append('nicFront', nicFront);
    if (nicBack) formData.append('nicBack', nicBack);
    if (gsCertificate) formData.append('gsCertificate', gsCertificate);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/documents`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      setUploadStatus('Documents uploaded successfully!');
      setNicFront(null);
      setNicBack(null);
      setGsCertificate(null);
      fetchDocuments();
    } catch (err) {
      setUploadStatus('Upload failed: ' + err.message);
    }
  };

  const handleDeleteDocument = async (id) => {
    if (!window.confirm('Are you sure you want to delete this document?')) return;
    setDocDeleteStatus('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${apiUrl}/api/user/documents/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete document');
      setDocDeleteStatus('Document deleted successfully.');
      fetchDocuments();
    } catch (err) {
      setDocDeleteStatus('Delete failed: ' + err.message);
    }
  };

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile-title">My Profile</h1>
        <div className="profile-tabs">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={activeTab === tab.key ? 'active' : ''}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="profile-tab-content">
          {loading ? <p>Loading...</p> : null}
          {error && <p className="error-message">{error}</p>}
          {activeTab === 'basic' && !loading && (
            <form className="profile-form" onSubmit={handleBasicSubmit}>
              <label>First Name<input name="first_name" value={form.first_name || ''} onChange={handleBasicChange} required /></label>
              <label>Last Name<input name="last_name" value={form.last_name || ''} onChange={handleBasicChange} required /></label>
              <label>University Email<input name="email" type="email" value={form.email || ''} onChange={handleBasicChange} required /></label>
              <label>Username<input name="username" value={form.username || ''} onChange={handleBasicChange} required /></label>
              <button type="submit">Update</button>
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
          {activeTab === 'password' && !loading && (
            <form className="profile-form" onSubmit={handlePasswordSubmit}>
              <label>Current Password<input name="currentPassword" type="password" value={passwordForm.currentPassword} onChange={handlePasswordChange} required /></label>
              <label>New Password<input name="newPassword" type="password" value={passwordForm.newPassword} onChange={handlePasswordChange} required /></label>
              <label>Confirm Password<input name="confirmPassword" type="password" value={passwordForm.confirmPassword} onChange={handlePasswordChange} required /></label>
              <button type="submit">Update Password</button>
              {success && <p className="success-message">{success}</p>}
            </form>
          )}
          {activeTab === 'student' && !loading && (
            <>
              <form className="profile-form" onSubmit={handleStudentSubmit}>
                <label>Full Name<input name="full_name" value={studentForm.full_name || ''} onChange={handleStudentChange} required /></label>
                <label>Registration Number<input name="registration_no" value={studentForm.registration_no || ''} onChange={handleStudentChange} required placeholder="20YYEXXX" /></label>
                <label>Date of Birth<input name="date_of_birth" type="date" value={studentForm.date_of_birth ? studentForm.date_of_birth.slice(0,10) : ''} onChange={handleStudentChange} required /></label>
                <label>Gender<select name="gender" value={studentForm.gender || ''} onChange={handleStudentChange} required>{GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}</select></label>
                <label>Permanent Address<input name="permanent_address" value={studentForm.permanent_address || ''} onChange={handleStudentChange} required /></label>
                <label>Admission Date<input name="admission_date" type="date" value={studentForm.admission_date ? studentForm.admission_date.slice(0,10) : ''} onChange={handleStudentChange} required /></label>
                <label>Year of Study<select name="year_of_study" value={studentForm.year_of_study || ''} onChange={handleStudentChange} required>{[1,2,3,4].map(y => <option key={y} value={y}>{y}</option>)}</select></label>
                <label>Phone Number<input name="phone_number" value={studentForm.phone_number || ''} onChange={handleStudentChange} required /></label>
                <label>Email<input name="email" type="email" value={studentForm.email || ''} onChange={handleStudentChange} required /></label>
                <label>School Name<input name="school_name" value={studentForm.school_name || ''} onChange={handleStudentChange} required /></label>
                <label>Unmarried Siblings<input name="unmarried_siblings" type="number" min="0" value={studentForm.unmarried_siblings || ''} onChange={handleStudentChange} required /></label>
                <button type="submit">Update Student Info</button>
                {studentSuccess && <p className="success-message">{studentSuccess}</p>}
                {studentError && <p className="error-message">{studentError}</p>}
              </form>
              {/* --- Family Members Section --- */}
              <div className="profile-section">
                <div className="profile-section-title">Family Members</div>
                <button onClick={openAddMember} className="profile-card-action-btn" style={{ marginBottom: 10 }}>Add Family Member</button>
                <div className="profile-card-list">
                  {familyMembers.length === 0 ? (
                    <div style={{ color: '#64748b', fontStyle: 'italic', margin: '12px 0' }}>No family members yet.</div>
                  ) : familyMembers.map(m => (
                    <div key={m.member_id} className="profile-card">
                      <div className="profile-card-label">{m.full_name} <span className="profile-card-sub">({m.relationship}) - {m.designation} | Age: {m.age}</span></div>
                      <div className="profile-card-sub">Income: LKR {m.annual_income} | Workplace: {m.workplace} | Phone: {m.phone_number}</div>
                      {m.relationship === 'student' && m.siblingEducation.length > 0 && (
                        <div className="profile-card-sub" style={{ marginTop: 6, fontStyle: 'italic' }}>
                          Student: {m.siblingEducation[0].institution}, {m.siblingEducation[0].year_grade}, {m.siblingEducation[0].registration_course}
                        </div>
                      )}
                      <div className="profile-card-actions">
                        <button onClick={() => openEditMember(m)} className="profile-card-action-btn">Edit</button>
                        <button onClick={() => handleDeleteMember(m.member_id)} className="profile-card-action-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
                {showMemberForm && (
                  <form className="profile-inline-form" onSubmit={handleMemberSubmit}>
                    <label>Full Name<input name="full_name" value={memberForm.full_name} onChange={handleMemberChange} required /></label>
                    <label>Age<input name="age" type="number" value={memberForm.age} onChange={handleMemberChange} required /></label>
                    <label>Relationship
                      <select name="relationship" value={memberForm.relationship} onChange={handleMemberChange} required>
                        <option value="">Select Relationship</option>
                        {RELATIONSHIP_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </label>
                    <label>Designation<input name="designation" value={memberForm.designation} onChange={handleMemberChange} required /></label>
                    <label>Annual Income<input name="annual_income" type="number" value={memberForm.annual_income} onChange={handleMemberChange} required /></label>
                    <label>Workplace<input name="workplace" value={memberForm.workplace} onChange={handleMemberChange} required /></label>
                    <label>Phone Number<input name="phone_number" value={memberForm.phone_number} onChange={handleMemberChange} required /></label>
                    {memberForm.relationship === 'Sibling' && (
                      <>
                        <label>Institution<input name="siblingEducation.institution" value={memberForm.siblingEducation.institution} onChange={handleMemberChange} required /></label>
                        <label>Year/Grade<input name="siblingEducation.year_grade" value={memberForm.siblingEducation.year_grade} onChange={handleMemberChange} required /></label>
                        <label>Registration/Course<input name="siblingEducation.registration_course" value={memberForm.siblingEducation.registration_course} onChange={handleMemberChange} required /></label>
                      </>
                    )}
                    <button type="submit">{editingMember ? 'Update' : 'Add'} Family Member</button>
                    {memberError && <p className="error-message">{memberError}</p>}
                  </form>
                )}
              </div>
              {/* --- Other Funding Section --- */}
              <div className="profile-section">
                <div className="profile-section-title">Other Fundings</div>
                <button onClick={openAddFunding} className="profile-card-action-btn" style={{ marginBottom: 10 }}>Add Funding</button>
                <div className="profile-card-list">
                  {fundings.length === 0 ? (
                    <div style={{ color: '#64748b', fontStyle: 'italic', margin: '12px 0' }}>No fundings yet.</div>
                  ) : fundings.map(f => (
                    <div key={f.funding_id} className="profile-card">
                      <div className="profile-card-label">{f.funding_name} <span className="profile-card-sub">({f.organization})</span></div>
                      <div className="profile-card-sub">Amount: LKR {f.annual_amount} | {f.start_date?.slice(0,10)} - {f.end_date?.slice(0,10)}</div>
                      <div className="profile-card-actions">
                        <button onClick={() => openEditFunding(f)} className="profile-card-action-btn">Edit</button>
                        <button onClick={() => handleDeleteFunding(f.funding_id)} className="profile-card-action-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
                {showFundingForm && (
                  <form className="profile-inline-form" onSubmit={handleFundingSubmit}>
                    <label>Funding Name<input name="funding_name" value={fundingForm.funding_name} onChange={handleFundingChange} required /></label>
                    <label>Organization<input name="organization" value={fundingForm.organization} onChange={handleFundingChange} required /></label>
                    <label>Annual Amount<input name="annual_amount" type="number" value={fundingForm.annual_amount} onChange={handleFundingChange} required /></label>
                    <label>Start Date<input name="start_date" type="date" value={fundingForm.start_date} onChange={handleFundingChange} required /></label>
                    <label>End Date<input name="end_date" type="date" value={fundingForm.end_date} onChange={handleFundingChange} required /></label>
                    <div className="profile-inline-actions">
                      <button type="submit">{editingFunding ? 'Update' : 'Add'} Funding</button>
                      <button type="button" onClick={closeFundingForm}>Cancel</button>
                    </div>
                    {fundingError && <p className="error-message">{fundingError}</p>}
                  </form>
                )}
              </div>
            </>
          )}
          {activeTab === 'documents' && !loading && (
            <>
              <form className="profile-form" onSubmit={handleDocumentsUpload}>
                <label>
                  NIC Front
                  <input type="file" accept="image/*,application/pdf" onChange={e => handleFileChange(e, setNicFront)} required />
                </label>
                <label>
                  NIC Back
                  <input type="file" accept="image/*,application/pdf" onChange={e => handleFileChange(e, setNicBack)} required />
                </label>
                <label>
                  Financial Proof (GS Certificate)
                  <input type="file" accept="image/*,application/pdf" onChange={e => handleFileChange(e, setGsCertificate)} required />
                </label>
                <button type="submit">Upload Documents</button>
                {uploadStatus && <p>{uploadStatus}</p>}
              </form>
              <div style={{ marginTop: 32 }}>
                <h3>Previously Uploaded Documents</h3>
                {docDeleteStatus && <p style={{ color: docDeleteStatus.startsWith('Delete failed') ? 'red' : 'green', marginBottom: 8 }}>{docDeleteStatus}</p>}
                {docLoading ? <p>Loading documents...</p> : (
                  documents.length === 0 ? <p>No documents uploaded yet.</p> : (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{
                        width: '100%',
                        marginTop: 12,
                        background: '#fff',
                        borderRadius: 12,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        borderCollapse: 'separate',
                        borderSpacing: 0,
                        fontSize: 15,
                        overflow: 'hidden',
                      }}>
                        <thead>
                          <tr style={{ background: '#f4f8fb' }}>
                            <th style={{ padding: '14px 18px', textAlign: 'left', borderTopLeftRadius: 12 }}>Type</th>
                            <th style={{ padding: '14px 18px', textAlign: 'left' }}>File Name</th>
                            <th style={{ padding: '14px 18px', textAlign: 'left' }}>Upload Date</th>
                            <th style={{ padding: '14px 18px', textAlign: 'left' }}>Status</th>
                            <th style={{ padding: '14px 18px', textAlign: 'left', borderTopRightRadius: 12 }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {documents.map((doc, idx) => (
                            <tr key={doc.document_id} style={{ background: idx % 2 === 0 ? '#f9fafb' : '#fff', transition: 'background 0.2s', cursor: 'pointer' }}>
                              <td style={{ padding: '12px 18px', fontWeight: 500 }}>{doc.document_type}</td>
                              <td style={{ padding: '12px 18px' }}>{doc.file_name}</td>
                              <td style={{ padding: '12px 18px' }}>{new Date(doc.upload_date).toLocaleString()}</td>
                              <td style={{ padding: '12px 18px' }}>
                                <span style={{
                                  padding: '4px 12px',
                                  borderRadius: 8,
                                  background: doc.verification_status === 'verified' ? '#d1fae5' : doc.verification_status === 'rejected' ? '#fee2e2' : '#fef9c3',
                                  color: doc.verification_status === 'verified' ? '#065f46' : doc.verification_status === 'rejected' ? '#991b1b' : '#92400e',
                                  fontWeight: 600,
                                  fontSize: 13,
                                }}>{doc.verification_status}</span>
                              </td>
                              <td style={{ padding: '12px 18px' }}>
                                <button
                                  onClick={() => handleDeleteDocument(doc.document_id)}
                                  style={{
                                    background: '#f87171',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 8,
                                    padding: '7px 18px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                    transition: 'background 0.2s',
                                  }}
                                >Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile; 