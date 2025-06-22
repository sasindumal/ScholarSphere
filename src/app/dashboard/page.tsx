import StudentDashboard from "@/components/dashboard/student-dashboard";

export default function DashboardPage() {
  // Here you could fetch user role and render the appropriate dashboard
  const userRole = 'student';

  switch (userRole) {
    case 'student':
      return <StudentDashboard />;
    // case 'coordinator':
    //   return <CoordinatorDashboard />;
    // case 'admin':
    //   return <AdminDashboard />;
    default:
      return <StudentDashboard />;
  }
}
