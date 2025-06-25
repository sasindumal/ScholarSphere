import { scholarships, type Scholarship } from './scholarships';

export type ApplicationStatus = 
  | 'pending'
  | 'under-review'
  | 'approved'
  | 'rejected'
  | 'draft';

export type Application = {
  application_id: string;
  student_id: string;
  scholarship_id: string;
  submission_date: string;
  status: ApplicationStatus;
  total_points?: number;
  reviewer_comments?: string;
  review_date?: string;
};

// Mock data for a user's applications
export const userApplications: Application[] = [
  {
    application_id: '1',
    student_id: 'user1',
    scholarship_id: '1',
    submission_date: '2024-03-15T10:00:00Z',
    status: 'under-review',
    reviewer_comments: 'Documents under review by the scholarship committee.',
    review_date: '2024-03-16T14:30:00Z',
    total_points: 85,
  },
  {
    application_id: '2',
    student_id: 'user1',
    scholarship_id: '2',
    submission_date: '2024-02-20T09:15:00Z',
    status: 'approved',
    reviewer_comments: 'Congratulations! Your application has been approved.',
    review_date: '2024-03-10T16:45:00Z',
    total_points: 92,
  },
  {
    application_id: '3',
    student_id: 'user1',
    scholarship_id: '3',
    submission_date: '2024-01-05T11:30:00Z',
    status: 'rejected',
    reviewer_comments: 'Unfortunately, your application was not selected for this scholarship.',
    review_date: '2024-02-01T13:20:00Z',
    total_points: 60,
  },
  {
    application_id: '4',
    student_id: 'user1',
    scholarship_id: '4',
    submission_date: '2024-03-18T08:45:00Z',
    status: 'pending',
  },
  {
    application_id: '5',
    student_id: 'user1',
    scholarship_id: '1',
    submission_date: '',
    status: 'draft',
  },
];

// Helper function to get application with scholarship details
export function getApplicationWithScholarship(application: Application) {
  const scholarship = scholarships.find(s => s.scholarship_id === application.scholarship_id);
  return {
    ...application,
    scholarship,
  };
}

// Helper function to get recent applications
export function getRecentApplications(limit: number = 5) {
  return userApplications
    .filter(app => app.status !== 'draft')
    .sort((a, b) => new Date(b.submission_date).getTime() - new Date(a.submission_date).getTime())
    .slice(0, limit)
    .map(getApplicationWithScholarship);
}

// Helper function to get all applications
export function getAllApplications() {
  return userApplications
    .sort((a, b) => new Date(b.submission_date).getTime() - new Date(a.submission_date).getTime())
    .map(getApplicationWithScholarship);
}

// Status badge configurations
export const statusConfig = {
  'pending': { label: 'Pending', color: 'bg-blue-500/10 text-blue-500' },
  'under-review': { label: 'Under Review', color: 'bg-yellow-500/10 text-yellow-500' },
  'approved': { label: 'Approved', color: 'bg-green-500/10 text-green-500' },
  'rejected': { label: 'Rejected', color: 'bg-red-500/10 text-red-500' },
  'draft': { label: 'Draft', color: 'bg-gray-500/10 text-gray-500' },
}; 