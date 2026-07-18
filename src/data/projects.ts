import taskflowImg from '../assets/Taskflow.png'
import flowsyncImg from '../assets/FlowSync.png'
import ventsphereImg from '../assets/Ventsphere.png'
import spaceTourismImg from '../assets/SpaceTourism.png'
import fidioImg from '../assets/Fidio.png'
import interactiveCardImg from '../assets/InteractiveCard.png'

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Landing Page'

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  overview: string
  problem: string
  solution: string
  outcome: string
  tech: string[]
  github: string
  live: string
  image: string
  category: ProjectCategory
  year: string
  featured: boolean
  highlights: string[]
  challenges: string[]
}

export const projects: Project[] = [
  {
    slug: 'taskflow',
    title: 'TaskFlow',
    tagline: 'Collaborative project management for modern teams',
    description: 'A collaborative project management application designed to help teams organize work and improve productivity.',
    overview: 'TaskFlow is a full-stack project management platform built for distributed teams. It combines real-time collaboration, flexible task tracking, and a clean interface to help teams ship faster and stay aligned.',
    problem: 'Teams using fragmented tools lose context and move slower. There was a need for a unified workspace that felt lightweight but powerful enough for real engineering teams.',
    solution: 'Built a workspace-centric architecture where teams own their space. Implemented Kanban and Calendar views so different team members can visualize work the way they think. Added real-time updates so everyone stays in sync.',
    outcome: 'Reduced context-switching for project leads. The Kanban view became the most-used feature, proving the value of flexible task visualization.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux Toolkit', 'React Hook Form', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    github: 'https://github.com/Ruthexy/TaskFlow.git',
    live: 'https://task-flow-4j2lqdhd8-circle2-eacf58b9.vercel.app',
    image: taskflowImg,
    category: 'Frontend',
    year: '2026',
    featured: true,
    highlights: [
      'Kanban and Calendar views for flexible task tracking',
      'Real-time team collaboration with workspace management',
      'JWT-secured authentication with role-based access',
      'Fully responsive across all screen sizes',
    ],
    challenges: [
      'Designing a data model that supports both project hierarchies and flat task lists without over-engineering the schema.',
      'Implementing optimistic UI updates so actions feel instant while maintaining server consistency.',
      'Handling concurrent edits gracefully when multiple users modify the same task simultaneously.',
    ],
  },
  {
    slug: 'flowsync',
    title: 'FlowSync',
    tagline: 'Workflow automation and team performance at a glance',
    description: 'A workflow management platform enabling teams to organize tasks, automate workflows, and monitor performance.',
    overview: 'FlowSync gives engineering and product teams a central hub to manage their workflows, automate repetitive processes, and track delivery metrics through a clean, data-forward dashboard.',
    problem: 'Teams were spending too much time manually updating task statuses and generating reports. Managers lacked real-time visibility into bottlenecks.',
    solution: 'Designed a workflow engine with configurable automation rules. Built a performance dashboard with TanStack Query to keep data fresh without over-fetching. Structured the REST API with clean separation between resources.',
    outcome: 'Automated status reporting reduced manual update time. The dashboard surfaced workflow bottlenecks that were previously invisible to managers.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'TanStack Query', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Ruthexy/FlowSync.git',
    live: 'https://flow-sync-j2nfpjeyz-circle2-eacf58b9.vercel.app',
    image: flowsyncImg,
    category: 'Frontend',
    year: '2026',
    featured: true,
    highlights: [
      'Workflow automation with real-time status monitoring',
      'TanStack Query for efficient server-state management',
      'Clean dashboard with performance analytics',
      'Secure REST API with JWT authentication',
    ],
    challenges: [
      'Building a flexible automation rule engine without making the UI overly complex for non-technical users.',
      'Optimizing dashboard queries to aggregate large datasets without blocking the UI thread.',
      'Designing a permission model granular enough for enterprise teams but simple enough to configure.',
    ],
  },
  {
    slug: 'space-tourism',
    title: 'Space Tourism',
    tagline: 'An immersive guide to the final frontier',
    description: 'A responsive space tourism website with interactive navigation and detailed information about destinations, crew, and technology.',
    overview: 'A pixel-perfect implementation of a Frontend Mentor challenge, elevated with polished interactions and seamless route transitions. The site showcases space destinations, crew members, and spacecraft technology.',
    problem: 'The challenge was implementing a design that uses dramatically different backgrounds and layouts per destination while maintaining smooth transitions that feel native.',
    solution: 'Used React Router for tab-based navigation with animated route transitions. Background images are lazy-loaded per destination and swapped with a crossfade. All interactive elements are fully keyboard-accessible.',
    outcome: 'Achieved a high Lighthouse accessibility score. The tab-based navigation pattern became a reusable component pattern applied to other projects.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    github: 'https://github.com/Ruthexy/Space-Tourism.git',
    live: 'https://space-tourism-pink-nine.vercel.app',
    image: spaceTourismImg,
    category: 'Frontend',
    year: '2025',
    featured: false,
    highlights: [
      'Multi-page interactive experience with tab navigation',
      'Pixel-perfect implementation from design spec',
      'Background imagery swaps dynamically per destination',
      'Full keyboard accessibility support',
    ],
    challenges: [
      'Managing layout shifts when switching between destinations with different image aspect ratios.',
      'Ensuring the custom tab component met WCAG 2.1 AA standards without sacrificing visual design.',
    ],
  },
  {
    slug: 'interactive-card',
    title: 'Interactive Card',
    tagline: 'A structured multi-step software request flow',
    description: 'A frontend platform where users request software projects by submitting requirements through a structured multi-step form.',
    overview: 'Built a multi-step form experience that guides users through specifying software project requirements. The structured flow reduces friction and collects high-quality input.',
    problem: 'Unstructured request forms result in vague submissions that require back-and-forth clarification. The goal was to design a flow that educates users as they submit.',
    solution: 'Designed a wizard-style form with conditional rendering based on service type selection. Each step validates independently so users get feedback before moving forward.',
    outcome: 'The structured form significantly reduced incomplete submissions. Conditional fields ensure users only see questions relevant to their project type.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Hook Form'],
    github: 'https://github.com/Ruthexy/INTERACTIVE-PROJECT.git',
    live: 'https://interactive-project-hd97.vercel.app/',
    image: interactiveCardImg,
    category: 'Frontend',
    year: '2025',
    featured: false,
    highlights: [
      'Multi-step form with per-step validation',
      'Categorized service types with conditional rendering',
      'API integration for form submission',
      'Smooth micro-interactions and loading states',
    ],
    challenges: [
      'Designing a form state machine that handles branching paths without making state management unmanageable.',
      'Balancing form length with completion rate — too many steps causes drop-off.',
    ],
  },
  {
    slug: 'ventsphere',
    title: 'Ventsphere',
    tagline: 'Startup investment and mentorship, elegantly presented',
    description: 'A startup investment and mentorship landing page advertising a company that helps entrepreneurs grow.',
    overview: 'Ventsphere needed a landing page that conveyed credibility and warmth simultaneously — attracting founders while signaling investor seriousness. The design is conversion-focused with clear value propositions.',
    problem: 'The existing concept lacked a clear content hierarchy. Visitors did not immediately understand what Ventsphere offered or why they should care.',
    solution: 'Redesigned the information architecture with a benefit-led narrative. Built scroll-triggered animations to reveal content progressively. Placed CTAs at high-intent moments in the reading flow.',
    outcome: 'Clear value proposition above the fold. Animated sections create a narrative flow that guides visitors toward the call-to-action.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Ruthexy/Ventsphere.git',
    live: 'https://ventsphere-ruth.vercel.app/',
    image: ventsphereImg,
    category: 'Landing Page',
    year: '2024',
    featured: false,
    highlights: [
      'Conversion-focused layout with benefit-led narrative',
      'Scroll-triggered animations for progressive disclosure',
      'Clear CTA placement at high-intent moments',
      'Responsive layout optimized for all devices',
    ],
    challenges: [
      'Balancing visual richness with performance — heavy animations can hurt conversion on slower connections.',
      'Writing copy hierarchy that works for both founders seeking funding and advisors looking to contribute.',
    ],
  },
  {
    slug: 'fidio',
    title: 'FIDIO',
    tagline: 'Cinematic storytelling for a video production agency',
    description: 'A marketing landing page for a video production agency, designed to attract clients and drive consultation bookings.',
    overview: 'FIDIO needed a website as bold as their work. The design uses typography, motion, and whitespace to evoke the quality of their video productions.',
    problem: 'Generic agency websites fail to differentiate. FIDIO needed to stand out in a crowded market by making the website itself feel like a piece of their creative work.',
    solution: 'Leaned into large typography and full-bleed visuals. Used scroll-triggered reveals to create cinematic pacing. Built a clear funnel toward the booking CTA with social proof interspersed throughout.',
    outcome: 'The website communicates premium positioning immediately. The cinematic scroll experience sets expectations for quality before a single video is viewed.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Ruthexy/Fidio.git',
    live: 'https://fidio.vercel.app/',
    image: fidioImg,
    category: 'Landing Page',
    year: '2024',
    featured: false,
    highlights: [
      'Cinematic visual storytelling through bold typography',
      'Scroll-triggered animations for immersive experience',
      'Clear call-to-action funnel for lead generation',
      'Optimized for fast load times and performance',
    ],
    challenges: [
      'Achieving a cinematic feel without sacrificing load performance — large assets needed aggressive optimization.',
      'Designing animations that feel intentional rather than decorative.',
    ],
  },
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
