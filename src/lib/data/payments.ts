import { type Application, userApplications } from './applications';
import { type Scholarship, scholarships } from './scholarships';

export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed';
export type PaymentMethod = 'bank_transfer' | 'check' | 'direct_deposit' | 'wire_transfer';

export interface Payment {
  payment_id: string;
  application_id: string;
  amount: number;
  payment_date: string;
  payment_method: PaymentMethod;
  transaction_id: string | null;
  status: PaymentStatus;
}

export const mockPayments: Payment[] = [
  {
    payment_id: '1',
    application_id: '2', // Reference to approved application
    amount: 12500,
    payment_date: '2024-01-15',
    payment_method: 'direct_deposit',
    transaction_id: 'TXN123456',
    status: 'completed'
  },
  {
    payment_id: '2',
    application_id: '2', // Second payment for same approved application
    amount: 12500,
    payment_date: '2024-06-15',
    payment_method: 'direct_deposit',
    transaction_id: null,
    status: 'pending'
  },
  {
    payment_id: '3',
    application_id: '4', // Reference to pending application
    amount: 35000,
    payment_date: '2024-03-20',
    payment_method: 'bank_transfer',
    transaction_id: 'TXN789012',
    status: 'processing'
  }
];

export const statusConfig = {
  pending: { label: 'Pending', color: 'bg-blue-500/10 text-blue-500' },
  processing: { label: 'Processing', color: 'bg-yellow-500/10 text-yellow-500' },
  completed: { label: 'Completed', color: 'bg-green-500/10 text-green-500' },
  failed: { label: 'Failed', color: 'bg-red-500/10 text-red-500' },
};

export const methodConfig = {
  bank_transfer: 'Bank Transfer',
  check: 'Check',
  direct_deposit: 'Direct Deposit',
  wire_transfer: 'Wire Transfer'
};

// Helper function to get payment with application details
export function getPaymentWithApplication(payment: Payment) {
  const application = userApplications.find(app => app.id === payment.application_id);
  let scholarship: Scholarship | undefined;
  
  if (application) {
    scholarship = scholarships.find(s => s.id === application.scholarshipId);
  }

  return {
    ...payment,
    application: application ? { ...application, scholarship } : undefined
  };
}

// Helper function to get all payments with application details
export function getAllPayments() {
  return mockPayments
    .sort((a, b) => new Date(b.payment_date).getTime() - new Date(a.payment_date).getTime())
    .map(getPaymentWithApplication);
}

// Helper function to get upcoming payments
export function getUpcomingPayments() {
  const now = new Date();
  return mockPayments
    .filter(payment => 
      (payment.status === 'pending' || payment.status === 'processing') &&
      new Date(payment.payment_date) >= now
    )
    .sort((a, b) => new Date(a.payment_date).getTime() - new Date(b.payment_date).getTime())
    .map(getPaymentWithApplication);
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