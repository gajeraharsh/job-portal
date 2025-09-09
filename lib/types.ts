export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type?: string;
  salary?: string;
  description: string;
  tags?: string[];
  featured?: boolean;
  postedDate: string;
  experience?: string;
  responsibilities?: string[];
  requirements?: string[];
}

export interface Company {
  id: string;
  name: string;
  description: string;
  logo?: string;
  jobCount: number;
  industry: string;
  size?: string;
  website?: string;
}

export interface Category {
  name: string;
  icon: any;
  count: number;
}