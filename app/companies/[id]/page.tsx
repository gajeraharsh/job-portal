'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Building2, MapPin, Users, ExternalLink, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SocialShare from '@/components/SocialShare';
import { companies, jobs } from '@/lib/data';
import type { Job } from '@/lib/types';

export default function CompanyProfilePage() {
  const params = useParams<{ id: string }>();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const company = useMemo(() => companies.find((c) => c.id === params.id), [params.id]);
  const companyJobs = useMemo(() => (company ? jobs.filter((j) => j.company === company.name) : []), [company]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" className="px-0">
            <Link href="/companies" className="inline-flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Back to Companies
            </Link>
          </Button>
        </div>

        {!company ? (
          <div className="text-center py-24">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Company not found</h1>
            <p className="text-gray-600 mb-6">The company you are looking for does not exist.</p>
            <Button asChild>
              <Link href="/companies">Go to Companies</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Building2 className="w-7 h-7 text-gray-600" />
                        </div>
                        <div>
                          <CardTitle>{company.name}</CardTitle>
                          <CardDescription>{company.industry}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {company.size && (
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" /> {company.size} employees
                          </span>
                        )}
                        <span>{company.jobCount} open positions</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <SocialShare title={`Jobs at ${company.name}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{company.description}</p>
                  {company.website && (
                    <div className="mt-4">
                      <Button asChild variant="outline">
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          Visit Website <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div>
                <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyJobs.map((job) => (
                    <Card key={job.id} className="group hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedJob(job)}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-blue-600">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-3 text-sm">
                          <span className="flex items-center gap-1 text-gray-600"><MapPin className="w-3 h-3" /> {job.location}</span>
                          {job.tags && <span className="hidden md:inline">•</span>}
                          <div className="hidden md:flex flex-wrap gap-1">
                            {job.tags?.slice(0, 3).map((t) => (
                              <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
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
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Company Details</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><span className="text-gray-500">Industry:</span> {company.industry}</li>
                    {company.size && <li><span className="text-gray-500">Size:</span> {company.size}</li>}
                    {company.website && (
                      <li>
                        <span className="text-gray-500">Website:</span> 
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">{company.website}</a>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
