import { type Scholarship, scholarships } from './scholarships';

export type PaymentStatus = 'scheduled' | 'processing' | 'completed' | 'failed';
export type PaymentPeriod = 'one-time' | 'semester' | 'annual';

export interface Payment {
  id: string;
  scholarshipId: string;
  amount: number;
  status: PaymentStatus;
  scheduledDate: string;
  completedDate?: string;
  period: PaymentPeriod;
  description: string;
  transactionId?: string;
}

export const mockPayments: Payment[] = [
  {
    id: '1',
    scholarshipId: '1',
    amount: 12500,
    status: 'completed',
    scheduledDate: '2024-01-15',
    completedDate: '2024-01-15',
    period: 'semester',
    description: 'Spring 2024 Semester Payment',
    transactionId: 'TXN123456',
  },
  {
    id: '2',
    scholarshipId: '1',
    amount: 12500,
    status: 'scheduled',
    scheduledDate: '2024-06-15',
    period: 'semester',
    description: 'Fall 2024 Semester Payment',
  },
  {
    id: '3',
    scholarshipId: '2',
    amount: 35000,
    status: 'processing',
    scheduledDate: '2024-03-20',
    period: 'one-time',
    description: 'Research Grant Disbursement',
  },
  {
    id: '4',
    scholarshipId: '4',
    amount: 20000,
    status: 'completed',
    scheduledDate: '2024-02-01',
    completedDate: '2024-02-01',
    period: 'semester',
    description: 'Spring 2024 Fellowship Payment',
    transactionId: 'TXN789012',
  },
  {
    id: '5',
    scholarshipId: '4',
    amount: 20000,
    status: 'scheduled',
    scheduledDate: '2024-07-01',
    period: 'semester',
    description: 'Fall 2024 Fellowship Payment',
  },
];

export const statusConfig = {
  scheduled: { label: 'Scheduled', color: 'bg-blue-500/10 text-blue-500' },
  processing: { label: 'Processing', color: 'bg-yellow-500/10 text-yellow-500' },
  completed: { label: 'Completed', color: 'bg-green-500/10 text-green-500' },
  failed: { label: 'Failed', color: 'bg-red-500/10 text-red-500' },
};

export const periodConfig = {
  'one-time': 'One-time Payment',
  'semester': 'Per Semester',
  'annual': 'Annual',
};

export function getPaymentWithScholarship(payment: Payment) {
  const scholarship = scholarships.find((s: Scholarship) => s.id === payment.scholarshipId);
  return {
    ...payment,
    scholarship,
  };
}

export function getAllPayments() {
  return mockPayments
    .sort((a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime())
    .map(getPaymentWithScholarship);
}

export function getUpcomingPayments() {
  const now = new Date();
  return mockPayments
    .filter(payment => 
      (payment.status === 'scheduled' || payment.status === 'processing') &&
      new Date(payment.scheduledDate) >= now
    )
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
    .map(getPaymentWithScholarship);
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
} 