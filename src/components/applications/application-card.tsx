'use client';

import { Calendar, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Application } from '@/lib/data/applications';
import { statusConfig } from '@/lib/data/applications';
import type { Scholarship } from '@/lib/data/scholarships';

interface ApplicationCardProps {
  application: Application & { scholarship: Scholarship };
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const status = statusConfig[application.status];
  
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not submitted';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle>{application.scholarship.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {application.scholarship.organization}
            </p>
          </div>
          <Badge variant="outline" className={status.color}>
            {status.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>{formatAmount(application.scholarship.amount)}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>Submitted: {formatDate(application.submittedAt)}</span>
          </div>
          {application.notes && (
            <p className="text-sm text-muted-foreground mt-2">
              {application.notes}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="w-full">
          View Details
        </Button>
        {application.status === 'draft' && (
          <Button className="w-full">Continue Application</Button>
        )}
      </CardFooter>
    </Card>
  );
} 