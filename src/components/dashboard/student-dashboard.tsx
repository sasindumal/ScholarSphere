'use client';

import { ArrowUpRight, Award, FileText, Bell, CheckCircle } from 'lucide-react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { getRecentApplications, statusConfig } from '@/lib/data/applications';

const applications = [
  { id: 1, name: 'Innovators of Tomorrow Scholarship', status: 'In Review', date: '2023-10-15' },
  { id: 2, name: 'Future Leaders Grant', status: 'Awarded', date: '2023-09-20' },
  { id: 3, name: 'STEM Achievers Program', status: 'Submitted', date: '2023-11-01' },
  { id: 4, name: 'Community Impact Award', status: 'Rejected', date: '2023-08-30' },
];

const notifications = [
    {id: 1, text: "Your application for 'Innovators of Tomorrow' has been updated.", time: "2 hours ago"},
    {id: 2, text: "New scholarship matching your profile: 'Global Citizen Grant'.", time: "1 day ago"},
    {id: 3, text: "Reminder: Deadline for 'Arts & Humanities Scholarship' is in 3 days.", time: "2 days ago"},
];

export default function StudentDashboard() {
  const recentApplications = getRecentApplications(3);

  return (
    <div className="grid gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 under review
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              +1 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">33%</div>
            <p className="text-xs text-muted-foreground">
              +4% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>
                  Your recently submitted applications
                </CardDescription>
              </div>
              <Button variant="outline" asChild>
                <Link href="/my-applications">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div
                  key={application.id}
                  className="flex items-center justify-between space-x-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {application.scholarship?.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {application.scholarship?.organization}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={statusConfig[application.status].color}
                  >
                    {statusConfig[application.status].label}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>
              Applications that need your attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Research Innovation Grant
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Due in 3 days
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Merit Scholarship Program
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Due in 5 days
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
