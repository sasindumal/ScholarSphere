import { Calendar, DollarSign, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Scholarship } from '@/lib/data/scholarships';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  const statusColor = {
    'open': 'bg-green-500/10 text-green-500',
    'closing-soon': 'bg-yellow-500/10 text-yellow-500',
    'closed': 'bg-red-500/10 text-red-500',
  }[scholarship.status];

  const formatDate = (dateString: string) => {
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
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle>{scholarship.title}</CardTitle>
            <CardDescription>{scholarship.organization}</CardDescription>
          </div>
          <Badge variant="outline" className={statusColor}>
            {scholarship.status === 'closing-soon' ? 'Closing Soon' : scholarship.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {scholarship.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>{formatAmount(scholarship.amount)}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>Deadline: {formatDate(scholarship.deadline)}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
            <span>{scholarship.location}</span>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {scholarship.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply Now</Button>
      </CardFooter>
    </Card>
  );
} 