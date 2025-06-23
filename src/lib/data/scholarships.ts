export type Scholarship = {
  scholarship_id: string;
  name: string;
  description: string;
  amount: number;
  no_of_students: number;
  application_deadline: string;
  start_date: string;
  end_date: string;
  provider_id: string;
  is_active: boolean;
};

export const scholarships: Scholarship[] = [
  {
    scholarship_id: '1',
    name: 'Global Excellence Scholarship',
    description: 'Full scholarship for outstanding students pursuing undergraduate studies in any field.',
    amount: 25000,
    no_of_students: 10,
    application_deadline: '2024-08-15',
    start_date: '2024-09-01',
    end_date: '2025-06-30',
    provider_id: 'provider1',
    is_active: true,
  },
  {
    scholarship_id: '2',
    name: 'Research Innovation Grant',
    description: 'Grant for innovative research projects in STEM fields.',
    amount: 35000,
    no_of_students: 5,
    application_deadline: '2024-07-01',
    start_date: '2024-09-01',
    end_date: '2025-06-30',
    provider_id: 'provider2',
    is_active: true,
  },
  {
    scholarship_id: '3',
    name: 'Merit Scholarship Program',
    description: 'Merit-based scholarship for high-achieving students.',
    amount: 15000,
    no_of_students: 20,
    application_deadline: '2024-06-30',
    start_date: '2024-09-01',
    end_date: '2025-06-30',
    provider_id: 'provider3',
    is_active: false,
  },
  {
    scholarship_id: '4',
    name: 'Graduate Studies Fellowship',
    description: 'Fellowship for outstanding graduate students in any discipline.',
    amount: 40000,
    no_of_students: 3,
    application_deadline: '2024-09-15',
    start_date: '2024-10-01',
    end_date: '2025-07-31',
    provider_id: 'provider4',
    is_active: true,
  },
];

export const categories = [
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
  { value: 'research', label: 'Research' },
  { value: 'merit', label: 'Merit Based' },
  { value: 'needs-based', label: 'Needs Based' },
];

export const locations = [
  { value: 'worldwide', label: 'Worldwide' },
  { value: 'united-states', label: 'United States' },
  { value: 'europe', label: 'Europe' },
  { value: 'canada', label: 'Canada' },
];

export const statuses = [
  { value: 'open', label: 'Open' },
  { value: 'closing-soon', label: 'Closing Soon' },
  { value: 'closed', label: 'Closed' },
]; 