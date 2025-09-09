'use client';

import { useState } from 'react';
import { Search, MapPin, Filter, Grid3X3, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobModal from '@/components/JobModal';
import { jobs } from '@/lib/data';
import type { Job } from '@/lib/types';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="City or remote"
                  className="pl-10 h-12"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border border-gray-300 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none border-l"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} Jobs Found
          </h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            More Filters
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredJobs.map((job) => (
            <Card 
              key={job.id}
              className={`group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-0 shadow-md ${
                viewMode === 'list' ? 'flex-row' : ''
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <CardHeader className={viewMode === 'list' ? 'flex-1' : ''}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  {job.featured && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  {job.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="font-medium">{job.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className={viewMode === 'list' ? 'flex items-center justify-between' : ''}>
                <div className={`flex ${viewMode === 'list' ? 'flex-col items-start' : 'items-center justify-between'}`}>
                  <div className="flex flex-wrap gap-1">
                    {job.tags?.slice(0, viewMode === 'list' ? 4 : 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className={`flex items-center gap-4 ${viewMode === 'list' ? 'mt-2' : 'mt-4'}`}>
                    {job.salary && (
                      <span className="font-semibold text-blue-600">{job.salary}</span>
                    )}
                    <span className="text-sm text-gray-500">{job.postedDate}</span>
                  </div>
                </div>
                {viewMode === 'list' && (
                  <Button className="ml-4">
                    View Details
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <Button onClick={() => { setSearchTerm(''); setLocation(''); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
      
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}