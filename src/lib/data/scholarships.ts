export type Scholarship = {
  id: string;
  title: string;
  organization: string;
  amount: number;
  deadline: string;
  description: string;
  requirements: string[];
  category: 'undergraduate' | 'postgraduate' | 'research' | 'merit' | 'needs-based';
  location: string;
  status: 'open' | 'closing-soon' | 'closed';
};

export const scholarships: Scholarship[] = [
  {
    id: '1',
    title: 'Global Excellence Scholarship',
    organization: 'International Education Foundation',
    amount: 25000,
    deadline: '2024-08-15',
    description: 'Full scholarship for outstanding students pursuing undergraduate studies in any field.',
    requirements: [
      'Minimum GPA of 3.5',
      'Strong leadership experience',
      'International student status',
    ],
    category: 'undergraduate',
    location: 'Worldwide',
    status: 'open',
  },
  {
    id: '2',
    title: 'Research Innovation Grant',
    organization: 'Advanced Research Institute',
    amount: 35000,
    deadline: '2024-07-01',
    description: 'Grant for innovative research projects in STEM fields.',
    requirements: [
      'Research proposal',
      'Letter of recommendation',
      'Published academic work',
    ],
    category: 'research',
    location: 'United States',
    status: 'open',
  },
  {
    id: '3',
    title: 'Merit Scholarship Program',
    organization: 'Academic Excellence Foundation',
    amount: 15000,
    deadline: '2024-06-30',
    description: 'Merit-based scholarship for high-achieving students.',
    requirements: [
      'Top 10% of class',
      'Extracurricular achievements',
      'Essay submission',
    ],
    category: 'merit',
    location: 'Europe',
    status: 'closing-soon',
  },
  {
    id: '4',
    title: 'Graduate Studies Fellowship',
    organization: 'Advanced Education Society',
    amount: 40000,
    deadline: '2024-09-15',
    description: 'Fellowship for outstanding graduate students in any discipline.',
    requirements: [
      'Masters or PhD enrollment',
      'Research proposal',
      'Academic excellence',
    ],
    category: 'postgraduate',
    location: 'Canada',
    status: 'open',
  },
  {
    id: '5',
    title: 'Community Support Scholarship',
    organization: 'Community Foundation',
    amount: 10000,
    deadline: '2024-05-30',
    description: 'Scholarship for students from underserved communities.',
    requirements: [
      'Financial need documentation',
      'Community service record',
      'Academic standing',
    ],
    category: 'needs-based',
    location: 'United States',
    status: 'closing-soon',
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