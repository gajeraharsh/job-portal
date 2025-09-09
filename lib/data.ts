import { 
  Code, 
  Palette, 
  BarChart3, 
  Shield, 
  Megaphone, 
  HeadphonesIcon, 
  Briefcase, 
  Users 
} from 'lucide-react';
import type { Job, Company, Category } from './types';

export const categories: Category[] = [
  {
    name: 'Technology',
    icon: Code,
    count: 2340
  },
  {
    name: 'Design',
    icon: Palette,
    count: 1250
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    count: 890
  },
  {
    name: 'Sales',
    icon: BarChart3,
    count: 1120
  },
  {
    name: 'Finance',
    icon: Briefcase,
    count: 670
  },
  {
    name: 'HR',
    icon: Users,
    count: 450
  },
  {
    name: 'Security',
    icon: Shield,
    count: 320
  },
  {
    name: 'Support',
    icon: HeadphonesIcon,
    count: 280
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for an experienced React developer to join our dynamic team. You will be responsible for developing and maintaining web applications using React.js and related technologies.',
    tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'AWS'],
    featured: true,
    postedDate: '2 days ago',
    experience: '5+ years',
    responsibilities: [
      'Develop and maintain React-based web applications',
      'Collaborate with UX/UI designers to implement pixel-perfect interfaces',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and technical discussions',
      'Mentor junior developers and contribute to team knowledge sharing'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '5+ years of experience with React.js and modern JavaScript',
      'Strong understanding of HTML5, CSS3, and responsive design',
      'Experience with state management libraries (Redux, Context API)',
      'Familiarity with testing frameworks (Jest, React Testing Library)'
    ],
    applicants: 42
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Join our creative team as a UX/UI Designer. You will be responsible for creating intuitive and beautiful user experiences for our web and mobile applications.',
    tags: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    featured: true,
    postedDate: '1 day ago',
    experience: '3+ years',
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve design systems and style guides'
    ],
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
      'Strong understanding of user-centered design principles',
      'Portfolio demonstrating successful design projects'
    ],
    applicants: 27
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'DataTech',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130k - $200k',
    description: 'We are seeking a skilled Data Scientist to analyze complex datasets and provide actionable insights to drive business decisions.',
    tags: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Statistics'],
    featured: true,
    postedDate: '3 days ago',
    experience: '4+ years',
    applicants: 58
  },
  {
    id: '4',
    title: 'Product Manager',
    company: 'InnovateLabs',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$140k - $220k',
    description: 'Lead product development initiatives and work closely with engineering and design teams to deliver exceptional user experiences.',
    tags: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping'],
    featured: true,
    postedDate: '1 week ago',
    experience: '6+ years',
    applicants: 31
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudFirst',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110k - $160k',
    description: 'Join our DevOps team to build and maintain scalable cloud infrastructure and deployment pipelines.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    featured: true,
    postedDate: '4 days ago',
    experience: '4+ years',
    applicants: 19
  },
  {
    id: '6',
    title: 'Marketing Manager',
    company: 'GrowthCo',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$85k - $125k',
    description: 'Drive marketing campaigns and strategies to increase brand awareness and customer acquisition.',
    tags: ['Digital Marketing', 'SEO', 'SEM', 'Analytics', 'Content Strategy'],
    featured: true,
    postedDate: '5 days ago',
    experience: '3+ years',
    applicants: 24
  }
];

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    description: 'Leading technology company focused on innovation and scalable solutions.',
    jobCount: 24,
    industry: 'Technology',
    size: '1000-5000',
    website: 'https://techcorp.com'
  },
  {
    id: '2',
    name: 'DesignStudio',
    description: 'Creative agency specializing in digital experiences and brand design.',
    jobCount: 12,
    industry: 'Design',
    size: '50-200',
    website: 'https://designstudio.com'
  },
  {
    id: '3',
    name: 'DataTech',
    description: 'Data analytics and machine learning solutions provider.',
    jobCount: 18,
    industry: 'Technology',
    size: '200-1000',
    website: 'https://datatech.com'
  },
  {
    id: '4',
    name: 'InnovateLabs',
    description: 'Product development and innovation consultancy.',
    jobCount: 8,
    industry: 'Consulting',
    size: '100-500',
    website: 'https://innovatelabs.com'
  },
  {
    id: '5',
    name: 'CloudFirst',
    description: 'Cloud infrastructure and DevOps solutions company.',
    jobCount: 15,
    industry: 'Technology',
    size: '200-1000',
    website: 'https://cloudfirst.com'
  },
  {
    id: '6',
    name: 'GrowthCo',
    description: 'Digital marketing and growth hacking agency.',
    jobCount: 9,
    industry: 'Marketing',
    size: '50-200',
    website: 'https://growthco.com'
  },
  {
    id: '7',
    name: 'FinanceHub',
    description: 'Financial technology and services company.',
    jobCount: 22,
    industry: 'Finance',
    size: '500-1000',
    website: 'https://financehub.com'
  },
  {
    id: '8',
    name: 'HealthTech',
    description: 'Healthcare technology and medical devices company.',
    jobCount: 16,
    industry: 'Healthcare',
    size: '1000-5000',
    website: 'https://healthtech.com'
  }
];
