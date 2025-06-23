'use client';

import { useState } from 'react';
import { ScholarshipCard } from '@/components/scholarships/scholarship-card';
import { ScholarshipFilters } from '@/components/scholarships/scholarship-filters';
import { type Scholarship, scholarships } from '@/lib/data/scholarships';

export default function AvailableApplicationsPage() {
  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>(scholarships);

  const handleFilterChange = (filters: {
    search: string;
    category?: string;
    location?: string;
    status?: string;
  }) => {
    let results = [...scholarships];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      results = results.filter(
        (scholarship) =>
          scholarship.title.toLowerCase().includes(searchLower) ||
          scholarship.description.toLowerCase().includes(searchLower) ||
          scholarship.organization.toLowerCase().includes(searchLower)
      );
    }

    if (filters.category && filters.category !== 'all') {
      results = results.filter(
        (scholarship) => scholarship.category === filters.category
      );
    }

    if (filters.location && filters.location !== 'all') {
      results = results.filter(
        (scholarship) =>
          scholarship.location.toLowerCase() === filters.location?.toLowerCase()
      );
    }

    if (filters.status && filters.status !== 'all') {
      results = results.filter(
        (scholarship) => scholarship.status === filters.status
      );
    }

    setFilteredScholarships(results);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Available Applications</h1>
        <p className="text-muted-foreground">
          Browse and apply for available scholarship opportunities.
        </p>
      </div>

      <ScholarshipFilters onFilterChange={handleFilterChange} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-muted-foreground">
              No scholarships found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}