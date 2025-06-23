import { scholarships } from './scholarships';

export type ApplicationStatus = 
  | 'pending'
  | 'under-review'
  | 'approved'
  | 'rejected'
  | 'draft';

export type Application = {
  id: string;
  scholarshipId: string;
  userId: string;
  status: ApplicationStatus;
  submittedAt: string;
  lastUpdated: string;
  notes?: string;
};

// Mock data for a user's applications
export const userApplications: Application[] = [
  {
    id: '1',
    scholarshipId: '1',
    userId: 'user1',
    status: 'under-review',
    submittedAt: '2024-03-15T10:00:00Z',
    lastUpdated: '2024-03-16T14:30:00Z',
    notes: 'Documents under review by the scholarship committee.',
  },
  {
    id: '2',
    scholarshipId: '2',
    userId: 'user1',
    status: 'approved',
    submittedAt: '2024-02-20T09:15:00Z',
    lastUpdated: '2024-03-10T16:45:00Z',
    notes: 'Congratulations! Your application has been approved.',
  },
  {
    id: '3',
    scholarshipId: '3',
    userId: 'user1',
    status: 'rejected',
    submittedAt: '2024-01-05T11:30:00Z',
    lastUpdated: '2024-02-01T13:20:00Z',
    notes: 'Unfortunately, your application was not selected for this scholarship.',
  },
  {
    id: '4',
    scholarshipId: '4',
    userId: 'user1',
    status: 'pending',
    submittedAt: '2024-03-18T08:45:00Z',
    lastUpdated: '2024-03-18T08:45:00Z',
  },
  {
    id: '5',
    scholarshipId: '5',
    userId: 'user1',
    status: 'draft',
    submittedAt: '',
    lastUpdated: '2024-03-17T15:20:00Z',
    notes: 'Application saved as draft.',
  },
];

// Helper function to get application with scholarship details
export function getApplicationWithScholarship(application: Application) {
  const scholarship = scholarships.find(s => s.id === application.scholarshipId);
  return {
    ...application,
    scholarship,
  };
}

// Helper function to get recent applications
export function getRecentApplications(limit: number = 5) {
  return userApplications
    .filter(app => app.status !== 'draft')
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, limit)
    .map(getApplicationWithScholarship);
}

// Helper function to get all applications
export function getAllApplications() {
  return userApplications
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
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