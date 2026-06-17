export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  type: 'work' | 'education'
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Engineer',
    company: 'Deasytech Solutions',
    period: '2025 — Present',
    description: 'Building production-grade web applications for clients across fintech, SaaS, and creative industries. Focus on React, TypeScript, and performance-first development.',
    highlights: [
      'Delivered 6+ frontend projects from design brief to production',
      '⁠⁠Responsible for MVP development of all websites and applications',
      'Consume API endpoints from backend engineers into the frontend of all projects.',

    ],
    type: 'work',
  },
  {
    role: 'Frontend Developer',
    company: 'AltSchool Africa',
    period: '2024 — 2025',
    description: 'Intensive engineering program focused on full-stack web development with React, Node.js, and modern DevOps practices.',
    highlights: [
      'Built and deployed 10+ projects ranging from SPAs to web applications',
      'Collaborated on team projects using Git workflows and agile methodologies',
      'Achieved top marks in  React performance modules',
    ],
    type: 'education',
  },
]

export const values = [
  {
    title: 'Craft over speed',
    description: 'I slow down to think about architecture before writing a single line. Code that\'s easy to reason about is code that\'s easy to maintain.',
  },
  {
    title: 'The user is always right',
    description: 'I build for people, not portfolios. If a feature doesn\'t serve a real user need, it\'s complexity I haven\'t earned yet.',
  },
  {
    title: 'Transparency in process',
    description: 'I share work early, communicate blockers quickly, and document decisions. Async communication should be asynchronous, not silent.',
  },
  {
    title: 'Continuous curiosity',
    description: 'The web platform evolves fast. I stay current not by chasing trends but by understanding fundamentals well enough to evaluate new tools critically.',
  },
]
