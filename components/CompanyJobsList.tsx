'use client';

import { useState, useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import JobModal from '@/components/JobModal';
import { jobs } from '@/lib/data';
import type { Job } from '@/lib/types';

export default function CompanyJobsList({ companyName }: { companyName: string }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const companyJobs = useMemo(() => jobs.filter((j) => j.company === companyName), [companyName]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companyJobs.map((job) => (
          <Card
            key={job.id}
            className="group hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedJob(job)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg group-hover:text-blue-600">{job.title}</CardTitle>
              <CardDescription className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-3 h-3" /> {job.location}
                </span>
                {job.tags && <span className="hidden md:inline">•</span>}
                <div className="hidden md:flex flex-wrap gap-1">
                  {job.tags?.slice(0, 3).map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 flex items-center justify-between">
              <span className="text-sm text-gray-500">{job.postedDate}</span>
              {job.salary && <span className="font-semibold text-blue-600">{job.salary}</span>}
            </CardContent>
          </Card>
        ))}

        {companyJobs.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-gray-600">No open positions currently.</CardContent>
          </Card>
        )}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}
