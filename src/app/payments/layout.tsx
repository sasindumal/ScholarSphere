import DashboardLayout from '@/components/layout/dashboard-layout';

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
} 