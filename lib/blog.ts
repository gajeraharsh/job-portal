import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-10-resume-mistakes-to-avoid-in-2025',
    title: 'Top 10 Resume Mistakes to Avoid in 2025',
    excerpt:
      'Avoid common resume pitfalls recruiters still see in 2025. Learn how to optimize your format, keywords, and achievements to pass ATS scans and impress hiring managers.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    category: 'Resume & Cover Letter Tips',
    author: 'Priya Sharma',
    date: '2025-05-14',
    tags: ['resume', 'ATS', 'job search', 'keywords'],
    popular: true,
    readTime: 8,
    content: [
      { type: 'p', text: 'Your resume is still your most important job‑search asset. In 2025, recruiters skim in seconds and Applicant Tracking Systems (ATS) filter aggressively. The good news: avoiding a few common mistakes can dramatically boost your callback rate.' },
      { type: 'h2', text: '1) Using a One‑Size‑Fits‑All Resume' },
      { type: 'p', text: 'Generic resumes underperform. Tailor your summary, skills, and achievements to the job description. Mirror critical keywords and highlight the most relevant wins for each application.' },
      { type: 'h2', text: '2) Weak, Vague Achievements' },
      { type: 'p', text: 'Replace responsibilities with quantified achievements. Use metrics like revenue, users, conversion, or time saved. Start bullets with action verbs and connect your work to business outcomes.' },
      { type: 'h2', text: '3) Ignoring ATS Formatting Rules' },
      { type: 'ul', items: [
        'Use standard section headings (Experience, Education, Skills)',
        'Avoid tables/columns when possible; prefer simple layouts',
        'Export to PDF unless the employer requests DOCX',
        'Use a clean, web‑safe font and consistent spacing',
      ] },
      { type: 'h2', text: '4) Overstuffing Buzzwords' },
      { type: 'p', text: 'Keywords matter, but stuffing looks unnatural. Integrate keywords in context and pair them with proof—projects, tools, and measurable results.' },
      { type: 'h2', text: '5) Too Long or Too Short' },
      { type: 'p', text: 'Aim for 1 page (early career) or 2 pages (experienced). Recruiters value clarity over volume. Ruthlessly trim older or less relevant roles.' },
      { type: 'h2', text: 'Key Takeaway' },
      { type: 'p', text: 'Customize, quantify, and keep it clean. A focused, ATS‑friendly resume with real results will outperform a flashy template every time.' },
    ],
  },
  {
    slug: 'how-to-prepare-for-a-virtual-interview-complete-guide',
    title: 'How to Prepare for a Virtual Interview – Complete Guide',
    excerpt:
      'Virtual interviews are now standard. Master your setup, storytelling, and on‑camera presence to stand out and convert interviews into offers.',
    image:
      'https://images.unsplash.com/photo-1515165562835-c3b8c1f0b62b?q=80&w=1600&auto=format&fit=crop',
    category: 'Interview Preparation',
    author: 'Rahul Verma',
    date: '2025-05-10',
    tags: ['interview', 'remote', 'communication'],
    popular: true,
    readTime: 9,
    content: [
      { type: 'p', text: 'Virtual interviews demand great audio, lighting, and structure. Small improvements can significantly impact how confident and credible you appear.' },
      { type: 'h2', text: 'Technical Setup' },
      { type: 'ul', items: ['Test your mic, camera, and internet speed', 'Use front‑facing natural light; avoid backlighting', 'Close bandwidth‑heavy apps; silence notifications', 'Position the camera at eye level to simulate eye contact'] },
      { type: 'h2', text: 'Story Frameworks' },
      { type: 'p', text: 'Use the STAR method (Situation, Task, Action, Result) to structure answers. Prepare 6–8 stories covering leadership, conflict, failure, impact, and collaboration.' },
      { type: 'h2', text: 'On‑Camera Presence' },
      { type: 'p', text: 'Sit upright, lean in slightly, and keep gestures within frame. Smile, pause, and keep answers concise. Practice looking at the camera when making key points.' },
      { type: 'h2', text: 'Follow‑Up' },
      { type: 'p', text: 'Send a concise thank‑you email within 24 hours, reiterating your fit and one memorable business outcome you can drive in the role.' },
    ],
  },
  {
    slug: 'best-free-online-courses-to-boost-your-skills',
    title: 'Best Free Online Courses to Boost Your Skills',
    excerpt:
      'Level up without breaking the bank. These reputable free courses can help you gain job‑ready skills and signal initiative to employers.',
    image:
      'https://images.unsplash.com/photo-1523246191872-9f9d2b83f1f4?q=80&w=1600&auto=format&fit=crop',
    category: 'Career Advice',
    author: 'Ananya Gupta',
    date: '2025-05-05',
    tags: ['learning', 'skills', 'courses'],
    readTime: 7,
    content: [
      { type: 'p', text: 'From data analytics to writing, free high‑quality courses exist across domains. Prioritize hands‑on projects and certificates with recognition.' },
      { type: 'h2', text: 'Top Picks by Category' },
      { type: 'ul', items: [
        'Technology: CS50 (Harvard), Google Data Analytics (Coursera audit)',
        'Design: Figma Learn, Canva Design School',
        'Marketing: HubSpot Academy certifications',
        'Finance: Corporate Finance Institute free modules',
      ] },
      { type: 'h2', text: 'How to Showcase Learning' },
      { type: 'p', text: 'Build small projects, publish on GitHub or a portfolio, and reference outcomes on your resume. Employers hire evidence—not just course names.' },
    ],
  },
  {
    slug: 'remote-jobs-in-india-latest-trends-and-opportunities',
    title: 'Remote Jobs in India – Latest Trends and Opportunities',
    excerpt:
      'Remote work in India is maturing. Learn which roles are booming, salaries by city, and how to stand out for distributed teams.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    category: 'Remote Work & Freelancing',
    author: 'Kunal Mehta',
    date: '2025-04-22',
    tags: ['remote', 'india', 'trends'],
    popular: true,
    readTime: 8,
    content: [
      { type: 'p', text: 'Indian companies and global startups continue hiring remotely for engineering, product, design, and operations. Salary bands vary widely with experience and company stage.' },
      { type: 'h2', text: 'Hot Roles' },
      { type: 'ul', items: ['Full‑stack developers', 'Data analysts and scientists', 'Product managers', 'Customer success and operations'] },
      { type: 'h2', text: 'How to Compete' },
      { type: 'p', text: 'Showcase async communication, documentation, and timezone empathy. Contribute to open‑source or remote‑first communities to build credibility.' },
    ],
  },
  {
    slug: 'how-to-negotiate-salary-like-a-pro',
    title: 'How to Negotiate Salary Like a Pro',
    excerpt:
      'Negotiation is a professional skill. Prepare your numbers, practice your script, and frame your ask around impact rather than entitlement.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    category: 'Career Advice',
    author: 'Sara Khan',
    date: '2025-04-10',
    tags: ['salary', 'negotiation'],
    readTime: 6,
    content: [
      { type: 'p', text: 'Enter negotiations with market ranges, your walk‑away number, and three value stories that connect your work to business outcomes.' },
      { type: 'h2', text: 'Scripts That Work' },
      { type: 'p', text: "Based on the scope and the outcomes we've discussed, a fair range for this role in this market is ₹24–28 LPA. Given my experience improving activation by 18%, I believe ₹27 LPA is appropriate. How close can we get?" },
      { type: 'h2', text: 'Beyond Base Salary' },
      { type: 'ul', items: ['Signing bonus', 'Remote stipend', 'Learning budget', 'Flexible hours', 'Relocation support'] },
    ],
  },
  {
    slug: 'career-growth-in-it-vs-non-it-jobs',
    title: 'Career Growth in IT vs. Non‑IT Jobs',
    excerpt:
      'Both tracks can be rewarding. Understand growth paths, skills, and risk profiles so you can choose deliberately based on your strengths.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    category: 'Job Market Trends',
    author: 'Vikram Singh',
    date: '2025-03-28',
    tags: ['career', 'it', 'non-it'],
    readTime: 7,
    content: [
      { type: 'p', text: 'IT careers often offer faster comp growth and remote options; non‑IT roles can provide broader business exposure and operational leadership pathways.' },
      { type: 'h2', text: 'How to Decide' },
      { type: 'p', text: 'Map roles to your energizers—building systems, influencing people, analyzing data, or running operations. Seek managers who invest in coaching, whichever path you choose.' },
    ],
  },
];

export const blogCategories = [
  'Career Advice',
  'Resume & Cover Letter Tips',
  'Interview Preparation',
  'Job Market Trends',
  'Remote Work & Freelancing',
  'Company Insights / Culture',
] as const;
