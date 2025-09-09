'use client';

import { useState } from 'react';
import { Search, MapPin, Building2, Users, TrendingUp, Star, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobModal from '@/components/JobModal';
import { jobs, companies, categories } from '@/lib/data';
import type { Job } from '@/lib/types';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const featuredJobs = jobs.filter(job => job.featured).slice(0, 6);
  const topCompanies = companies.slice(0, 8);

  const handleSearch = () => {
    // In a real app, this would filter jobs and navigate to results
    console.log('Searching for:', searchTerm, 'in', location);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your
              <span className="text-blue-600 block">Dream Job</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover thousands of opportunities from top companies around the world. 
              Your next career move is just one search away.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-12 h-14 text-lg border-0 bg-gray-50 focus:bg-white transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="City or remote"
                  className="pl-12 h-14 text-lg border-0 bg-gray-50 focus:bg-white transition-colors"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleSearch}
                size="lg"
                className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Search Jobs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              <span className="text-sm text-gray-500">Popular searches:</span>
              {['React Developer', 'Product Manager', 'Data Scientist', 'UX Designer'].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-blue-50 hover:border-blue-200 transition-colors"
                  onClick={() => setSearchTerm(term)}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find opportunities in your field of expertise</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.name}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-0 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <category.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
              <p className="text-xl text-gray-600">Hand-picked opportunities from top companies</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center hover:bg-blue-50 hover:border-blue-200">
              View All Jobs
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card 
                key={job.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-0 shadow-md"
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="font-medium">{job.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {job.tags?.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {job.salary && (
                      <span className="font-semibold text-blue-600">{job.salary}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="text-xl text-gray-600">Join thousands of professionals at these top companies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topCompanies.map((company, index) => (
              <Card 
                key={company.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-0 shadow-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Building2 className="w-8 h-8 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{company.name}</h3>
                  <p className="text-xs text-gray-500">{company.jobCount} open positions</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Jobs</div>
            </div>
            <div className="animate-fade-in-up animation-delay-100">
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-blue-100">Companies</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-100">Job Seekers</div>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}