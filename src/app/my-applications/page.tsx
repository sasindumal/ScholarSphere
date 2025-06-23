'use client';

import { useState } from 'react';
import { getAllApplications, type ApplicationStatus, statusConfig } from '@/lib/data/applications';

export default function MyApplicationsPage() {
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'status'>('date');

  // Get applications and filter out any with missing scholarship data
  const applications = getAllApplications()
    .filter((app) => app.scholarship !== undefined);

  const filteredApplications = applications
    .filter(app => statusFilter === 'all' || app.status === statusFilter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.submission_date).getTime() - new Date(a.submission_date).getTime();
      }
      // Sort by status priority: draft -> pending -> under-review -> approved -> rejected
      const statusPriority: Record<ApplicationStatus, number> = {
        draft: 0,
        pending: 1,
        'under-review': 2,
        approved: 3,
        rejected: 4,
      };
      return statusPriority[a.status] - statusPriority[b.status];
    });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Applications</h1>
        <p className="text-muted-foreground">
          Track and manage your scholarship applications.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as ApplicationStatus | 'all')}
            className="border rounded px-2 py-1"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="under-review">Under Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'date' | 'status')}
            className="border rounded px-2 py-1"
          >
            <option value="date">Sort by Date</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>

        <p className="text-sm text-muted-foreground">
          Showing {filteredApplications.length} applications
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((application) => (
            <div key={application.application_id} className="border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{application.scholarship?.name}</h2>
                <span className="text-xs px-2 py-1 rounded font-bold {statusConfig[application.status].color}">{statusConfig[application.status].label}</span>
              </div>
              <div className="text-sm mb-1">Submitted: {application.submission_date ? new Date(application.submission_date).toLocaleDateString() : 'Not submitted'}</div>
              <div className="text-sm mb-1">Total Points: {application.total_points ?? '-'}</div>
              <div className="text-sm mb-1">Review Date: {application.review_date ? new Date(application.review_date).toLocaleDateString() : '-'}</div>
              <div className="text-sm mb-1">Reviewer Comments: {application.reviewer_comments ?? '-'}</div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-muted-foreground">
              No applications found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}