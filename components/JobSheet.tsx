'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Clock,
  Building2,
  ExternalLink,
  Bookmark,
  Share2,
} from 'lucide-react';
import type { Job } from '@/lib/types';

interface JobSheetProps {
  job: Job;
  onClose: () => void;
}

export default function JobSheet({ job, onClose }: JobSheetProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleApply = () => {
    alert(`Applied to ${job.title} at ${job.company}!`);
  };

  const handleBookmark = () => setIsBookmarked(!isBookmarked);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: job.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  return (
    <Sheet open onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl overflow-y-auto">
        <SheetHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <SheetTitle className="text-2xl font-bold text-gray-900 mb-2">
                {job.title}
              </SheetTitle>
              <div className="flex flex-wrap items-center gap-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                {job.type && <Badge variant="outline">{job.type}</Badge>}
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleBookmark}
                className={isBookmarked ? 'bg-blue-50 border-blue-200' : ''}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-blue-600' : ''}`} />
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </SheetHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {job.salary && (
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold">{job.salary}</div>
                      <div className="text-sm text-gray-500">Salary</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">{job.postedDate}</div>
                    <div className="text-sm text-gray-500">Posted</div>
                  </div>
                </CardContent>
              </Card>

              {typeof job.applicants === 'number' && (
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-semibold">{job.applicants}</div>
                      <div className="text-sm text-gray-500">Total Applicants</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold">{job.type || 'Full-time'}</div>
                    <div className="text-sm text-gray-500">Employment Type</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Job Description</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
                <h4 className="font-semibold text-gray-900 mt-6 mb-3">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {(job.responsibilities && job.responsibilities.length > 0
                    ? job.responsibilities
                    : [
                        'Develop and maintain high-quality software solutions',
                        'Collaborate with cross-functional teams to deliver projects',
                        'Write clean, maintainable, and efficient code',
                        'Participate in code reviews and technical discussions',
                      ]
                  ).map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>

                <h4 className="font-semibold text-gray-900 mt-6 mb-3">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {(job.requirements && job.requirements.length > 0
                    ? job.requirements
                    : [
                        "Bachelor's degree in Computer Science or related field",
                        '3+ years of experience in software development',
                        'Strong problem-solving and analytical skills',
                        'Excellent communication and teamwork abilities',
                      ]
                  ).map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {job.tags && job.tags.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <Button onClick={handleApply} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold">
                  Apply Now
                </Button>
                <p className="text-sm text-gray-500 text-center mt-3">No registration required</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">About {job.company}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{job.company}</div>
                    <div className="text-sm text-gray-500">Technology Company</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Leading technology company focused on innovation and delivering exceptional products that make a difference in people's lives.
                </p>
                <Button variant="outline" className="w-full">
                  View Company Profile
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
