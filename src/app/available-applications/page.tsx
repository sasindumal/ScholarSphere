'use client';

import { useState } from 'react';
import { type Scholarship, scholarships } from '@/lib/data/scholarships';

export default function AvailableApplicationsPage() {
  // Only show active scholarships
  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>(
    scholarships.filter(s => s.is_active)
  );

  // Placeholder for eligibility criteria (to be implemented)
  // const eligibilityCriteria = ...

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Available Scholarships</h1>
        <p className="text-muted-foreground">
          Browse and apply for available scholarship opportunities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((scholarship) => (
            <div key={scholarship.scholarship_id} className="border rounded-lg p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{scholarship.name}</h2>
                <span className="text-primary font-bold">${scholarship.amount.toLocaleString()}</span>
              </div>
              <p className="text-muted-foreground mb-2">{scholarship.description}</p>
              <div className="flex flex-col gap-1 text-sm mb-2">
                <span>Deadline: <b>{new Date(scholarship.application_deadline).toLocaleDateString()}</b></span>
                <span>Start: {new Date(scholarship.start_date).toLocaleDateString()}</span>
                <span>End: {new Date(scholarship.end_date).toLocaleDateString()}</span>
                <span>Number of Students: {scholarship.no_of_students}</span>
              </div>
              {/* Placeholder for eligibility criteria */}
              {/* <div className="mt-2 text-xs text-muted-foreground">Eligibility: ...</div> */}
              <button className="mt-3 w-full bg-primary text-white py-2 rounded hover:bg-primary/90">Apply Now</button>
            </div>
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