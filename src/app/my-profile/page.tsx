'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

// Mock data for demonstration
const mockProfile = {
  basic: {
    first_name: 'John',
    last_name: 'Doe',
    username: 'johndoe',
    university_email: 'john.doe@university.edu',
  },
  student: {
    full_name: 'John Doe',
    registration_no: '20231234',
    date_of_birth: '2002-05-10',
    permanent_address: '123 Main St, Hometown',
    admission_date: '2021-09-01',
    year_of_study: 3,
    gender: 'Male',
    phone_number: '555-1234',
    email: 'john.doe@university.edu',
    school_name: 'School of Engineering',
    unmarried_siblings: 2,
  },
  family: [
    {
      full_name: 'Jane Doe',
      age: 45,
      relationship: 'mother',
      designation: 'Teacher',
      annual_income: 50000,
      workplace: 'High School',
      phone_number: '555-5678',
    },
    {
      full_name: 'Jake Doe',
      age: 16,
      relationship: 'sibling',
      designation: 'Student',
      annual_income: 0,
      workplace: '',
      phone_number: '555-8765',
      institution: 'Central High',
      year_grade: '11',
      registration_course: 'Science',
    },
  ],
  fundings: [
    {
      funding_name: 'Merit Scholarship',
      organization: 'Govt. of State',
      annual_amount: 2000,
      start_date: '2022-09-01',
      end_date: '2025-06-30',
    },
  ],
};

export default function MyProfilePage() {
  const [profile, setProfile] = useState(mockProfile);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });

  // Handlers for updating each section (mocked)
  const handleBasicChange = (e: any) => {
    setProfile({ ...profile, basic: { ...profile.basic, [e.target.name]: e.target.value } });
  };
  const handleStudentChange = (e: any) => {
    setProfile({ ...profile, student: { ...profile.student, [e.target.name]: e.target.value } });
  };
  const handlePasswordChange = (e: any) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Family
  const handleFamilyChange = (idx: number, e: any) => {
    const { name, value } = e.target;
    const numericFields = ['age', 'annual_income'];
    const updated = profile.family.map((member, i) =>
      i === idx
        ? {
            ...member,
            [name]: numericFields.includes(name) ? Number(value) : value,
          }
        : member
    );
    setProfile({ ...profile, family: updated });
  };
  const addFamilyMember = () => {
    setProfile({
      ...profile,
      family: [
        ...profile.family,
        { full_name: '', age: 0, relationship: '', designation: '', annual_income: 0, workplace: '', phone_number: '' },
      ],
    });
  };
  const removeFamilyMember = (idx: number) => {
    setProfile({ ...profile, family: profile.family.filter((_, i) => i !== idx) });
  };

  const handleFamilyUpdate = (idx: number) => {
    // In a real application, this would make an API call to update the family member
    console.log('Updating family member:', profile.family[idx]);
  };

  // Fundings
  const handleFundingChange = (idx: number, e: any) => {
    const { name, value } = e.target;
    const updated = profile.fundings.map((fund, i) =>
      i === idx
        ? {
            ...fund,
            [name]: name === 'annual_amount' ? Number(value) : value,
          }
        : fund
    );
    setProfile({ ...profile, fundings: updated });
  };
  const addFunding = () => {
    setProfile({
      ...profile,
      fundings: [
        ...profile.fundings,
        { funding_name: '', organization: '', annual_amount: 0, start_date: '', end_date: '' },
      ],
    });
  };
  const removeFunding = (idx: number) => {
    setProfile({ ...profile, fundings: profile.fundings.filter((_, i) => i !== idx) });
  };

  const handleFundingUpdate = (idx: number) => {
    // In a real application, this would make an API call to update the funding
    console.log('Updating funding:', profile.fundings[idx]);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 py-8">
      {/* Basic Data */}
      <section className="bg-card p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Basic Data</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="mb-1 font-medium">First Name</span>
            <input name="first_name" value={profile.basic.first_name} onChange={handleBasicChange} placeholder="First Name" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Last Name</span>
            <input name="last_name" value={profile.basic.last_name} onChange={handleBasicChange} placeholder="Last Name" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Username</span>
            <input name="username" value={profile.basic.username} onChange={handleBasicChange} placeholder="Username" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">University Email</span>
            <input name="university_email" value={profile.basic.university_email} onChange={handleBasicChange} placeholder="University Email" className="border rounded px-3 py-2" />
          </label>
          <button type="button" className="col-span-2 bg-primary text-white py-2 rounded mt-2">Update Basic Data</button>
        </form>
      </section>

      {/* Security Data */}
      <section className="bg-card p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Security Data</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Current Password</span>
            <input name="current" type="password" value={passwords.current} onChange={handlePasswordChange} placeholder="Current Password" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">New Password</span>
            <input name="new" type="password" value={passwords.new} onChange={handlePasswordChange} placeholder="New Password" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Confirm Password</span>
            <input name="confirm" type="password" value={passwords.confirm} onChange={handlePasswordChange} placeholder="Confirm Password" className="border rounded px-3 py-2" />
          </label>
          <button type="button" className="col-span-3 bg-primary text-white py-2 rounded mt-2">Update Password</button>
        </form>
      </section>

      {/* Student Information */}
      <section className="bg-card p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Student Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Full Name</span>
            <input name="full_name" value={profile.student.full_name} onChange={handleStudentChange} placeholder="Full Name" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Registration No</span>
            <input name="registration_no" value={profile.student.registration_no} onChange={handleStudentChange} placeholder="Registration No" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Date of Birth</span>
            <input name="date_of_birth" type="date" value={profile.student.date_of_birth} onChange={handleStudentChange} placeholder="Date of Birth" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Permanent Address</span>
            <input name="permanent_address" value={profile.student.permanent_address} onChange={handleStudentChange} placeholder="Permanent Address" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Admission Date</span>
            <input name="admission_date" type="date" value={profile.student.admission_date} onChange={handleStudentChange} placeholder="Admission Date" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Year of Study</span>
            <input name="year_of_study" value={profile.student.year_of_study} onChange={handleStudentChange} placeholder="Year of Study" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Gender</span>
            <input name="gender" value={profile.student.gender} onChange={handleStudentChange} placeholder="Gender" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Phone Number</span>
            <input name="phone_number" value={profile.student.phone_number} onChange={handleStudentChange} placeholder="Phone Number" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Email</span>
            <input name="email" value={profile.student.email} onChange={handleStudentChange} placeholder="Email" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">School Name</span>
            <input name="school_name" value={profile.student.school_name} onChange={handleStudentChange} placeholder="School Name" className="border rounded px-3 py-2" />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 font-medium">Unmarried Siblings</span>
            <input name="unmarried_siblings" value={profile.student.unmarried_siblings} onChange={handleStudentChange} placeholder="Unmarried Siblings" className="border rounded px-3 py-2" />
          </label>
          <button type="button" className="col-span-2 bg-primary text-white py-2 rounded mt-2">Update Student Info</button>
        </form>
      </section>

      {/* Family Information */}
      <section className="bg-card p-6 rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Family Information</h2>
          <button type="button" onClick={addFamilyMember} className="bg-primary text-white px-3 py-1 rounded">Add Family Member</button>
        </div>
        <div className="space-y-6">
          {profile.family.map((member, idx) => (
            <div key={idx} className="border rounded p-4 relative">
              <div className="absolute top-2 right-2 flex gap-2">
                <button type="button" onClick={() => handleFamilyUpdate(idx)} className="bg-primary text-white px-3 py-1 rounded text-sm">Update</button>
                <button type="button" onClick={() => removeFamilyMember(idx)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Remove</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Full Name</span>
                  <input name="full_name" value={member.full_name} onChange={e => handleFamilyChange(idx, e)} placeholder="Full Name" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Age</span>
                  <input name="age" value={member.age} onChange={e => handleFamilyChange(idx, e)} placeholder="Age" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Relationship</span>
                  <input name="relationship" value={member.relationship} onChange={e => handleFamilyChange(idx, e)} placeholder="Relationship" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Designation</span>
                  <input name="designation" value={member.designation} onChange={e => handleFamilyChange(idx, e)} placeholder="Designation" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Annual Income</span>
                  <input name="annual_income" value={member.annual_income} onChange={e => handleFamilyChange(idx, e)} placeholder="Annual Income" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Workplace</span>
                  <input name="workplace" value={member.workplace} onChange={e => handleFamilyChange(idx, e)} placeholder="Workplace" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Phone Number</span>
                  <input name="phone_number" value={member.phone_number} onChange={e => handleFamilyChange(idx, e)} placeholder="Phone Number" className="border rounded px-3 py-2" />
                </label>
                {/* Sibling-specific fields */}
                {member.relationship === 'sibling' && (
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex flex-col">
                      <span className="mb-1 font-medium">Institution</span>
                      <input name="institution" value={member.institution || ''} onChange={e => handleFamilyChange(idx, e)} placeholder="Institution" className="border rounded px-3 py-2" />
                    </label>
                    <label className="flex flex-col">
                      <span className="mb-1 font-medium">Year/Grade</span>
                      <input name="year_grade" value={member.year_grade || ''} onChange={e => handleFamilyChange(idx, e)} placeholder="Year/Grade" className="border rounded px-3 py-2" />
                    </label>
                    <label className="flex flex-col">
                      <span className="mb-1 font-medium">Registration/Course</span>
                      <input name="registration_course" value={member.registration_course || ''} onChange={e => handleFamilyChange(idx, e)} placeholder="Registration/Course" className="border rounded px-3 py-2" />
                    </label>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Fundings */}
      <section className="bg-card p-6 rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Other Fundings</h2>
          <button type="button" onClick={addFunding} className="bg-primary text-white px-3 py-1 rounded">Add Funding</button>
        </div>
        <div className="space-y-6">
          {profile.fundings.map((fund, idx) => (
            <div key={idx} className="border rounded p-4 relative">
              <div className="absolute top-2 right-2 flex gap-2">
                <button type="button" onClick={() => handleFundingUpdate(idx)} className="bg-primary text-white px-3 py-1 rounded text-sm">Update</button>
                <button type="button" onClick={() => removeFunding(idx)} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Remove</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Funding Name</span>
                  <input name="funding_name" value={fund.funding_name} onChange={e => handleFundingChange(idx, e)} placeholder="Funding Name" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Organization</span>
                  <input name="organization" value={fund.organization} onChange={e => handleFundingChange(idx, e)} placeholder="Organization" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Annual Amount</span>
                  <input name="annual_amount" value={fund.annual_amount} onChange={e => handleFundingChange(idx, e)} placeholder="Annual Amount" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">Start Date</span>
                  <input name="start_date" type="date" value={fund.start_date} onChange={e => handleFundingChange(idx, e)} placeholder="Start Date" className="border rounded px-3 py-2" />
                </label>
                <label className="flex flex-col">
                  <span className="mb-1 font-medium">End Date</span>
                  <input name="end_date" type="date" value={fund.end_date} onChange={e => handleFundingChange(idx, e)} placeholder="End Date" className="border rounded px-3 py-2" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}