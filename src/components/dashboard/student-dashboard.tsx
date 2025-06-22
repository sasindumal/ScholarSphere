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
import Image from 'next/image';

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
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome, Jane!</h1>
        <p className="text-muted-foreground">Here&apos;s your scholarship journey at a glance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Scholarships</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">matching your profile</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications Submitted</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 awaiting review</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">unread notifications</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Track the status of your latest submissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Scholarship</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Applied</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          app.status === 'Awarded'
                            ? 'default'
                            : app.status === 'In Review'
                            ? 'secondary'
                            : 'destructive'
                        }
                        className={`${
                            app.status === 'Awarded'
                            ? 'bg-accent text-accent-foreground'
                            : app.status === 'In Review'
                            ? 'bg-blue-200 text-blue-800'
                            : app.status === 'Submitted'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-red-200 text-red-800'
                        }`}
                      >
                        {app.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{app.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Featured Scholarship</CardTitle>
            <CardDescription>An opportunity you might be interested in.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Featured Scholarship"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint="university students campus"
            />
            <h3 className="font-semibold text-lg">Global Citizen Grant</h3>
            <p className="text-sm text-muted-foreground">For students passionate about creating global change. Covers full tuition and provides a stipend for international projects.</p>
            <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Link href="#">
                Learn More <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
