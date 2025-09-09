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
  applicants?: number;
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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: Array<
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
  >;
  category:
    | 'Career Advice'
    | 'Resume & Cover Letter Tips'
    | 'Interview Preparation'
    | 'Job Market Trends'
    | 'Remote Work & Freelancing'
    | 'Company Insights / Culture';
  author: string;
  date: string;
  image: string;
  tags?: string[];
  popular?: boolean;
  readTime?: number;
}
