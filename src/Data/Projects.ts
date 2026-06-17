import taskflowImg from '../assets/Taskflow.png'
import flowsyncImg from '../assets/FlowSync.png'
import ventsphereImg from '../assets/Ventsphere.png'
import spaceTourismImg from '../assets/SpaceTourism.png'
import fidioImg from '../assets/Fidio.png'
import interactiveCardImg from '../assets/InteractiveCard.png'

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Landing Page'

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  gradient: string
  highlights: string[]
  image: string
  category: ProjectCategory
}

export const Projects: Project[] = [
  {
    title: 'TaskFlow',
    description:
      'TaskFlow is a collaborative project management application designed to help teams organize work and improve productivity. Users can create workspaces, manage projects, assign tasks, track progress through Kanban and Calendar views, and collaborate with team members in a seamless and intuitive environment.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux Toolkit', 'React Hook Form', 'Node.js', 'MongoDB', 'Axios', 'JWT', 'Express.js'],
    github: 'https://github.com/Ruthexy/TaskFlow.git',
    live: 'https://task-flow-4j2lqdhd8-circle2-eacf58b9.vercel.app',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    image: taskflowImg,
    category: 'Full Stack',
    highlights: [
      'Kanban and Calendar views for flexible task tracking',
      'Real-time team collaboration with workspace management',
      'JWT-secured authentication and role-based access control',
      'Fully responsive layout across all screen sizes',
    ],
  },
  {
    title: 'FlowSync',
    description:
      'FlowSync is a workflow management platform that enables teams to organize tasks, manage projects, automate workflows, and monitor performance through a clean and intuitive interface.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'TanStack Query', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    github: 'https://github.com/Ruthexy/FlowSync.git',
    live: 'https://flow-sync-j2nfpjeyz-circle2-eacf58b9.vercel.app',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
    image: flowsyncImg,
    category: 'Full Stack',
    highlights: [
      'Workflow automation with real-time status monitoring',
      'TanStack Query for efficient server-state management',
      'Clean dashboard with performance analytics',
      'Secure REST API with JWT authentication',
    ],
  },
  {
    title: 'Space Tourism',
    description:
      'A responsive space tourism website with interactive navigation and detailed information about space destinations, crew members, and technology.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Ruthexy/Space-Tourism.git',
    live: 'https://space-tourism-pink-nine.vercel.app',
    gradient: 'linear-gradient(135deg, #1e293b 0%, #3730a3 100%)',
    image: spaceTourismImg,
    category: 'Frontend',
    highlights: [
      'Multi-page interactive experience with tab navigation',
      'Pixel-perfect implementation of the Frontend Mentor design',
      'Background imagery swaps dynamically per destination',
      'Accessible navigation with full keyboard support',
    ],
  },
  {
    title: 'Interactive Card',
    description:
      'A frontend-driven platform where users request software projects by submitting requirements through a structured form, with categorized project types and a service-oriented flow.',
    tech: ['React', 'API', 'Tailwind CSS'],
    github: 'https://github.com/Ruthexy/INTERACTIVE-PROJECT.git',
    live: 'https://interactive-project-hd97.vercel.app/',
    gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
    image: interactiveCardImg,
    category: 'Frontend',
    highlights: [
      'Multi-step form with validation and dynamic fields',
      'Categorized service types with conditional rendering',
      'API integration for form submission and feedback',
      'Smooth micro-interactions and loading states',
    ],
  },
  {
    title: 'Ventsphere',
    description:
      'A startup investment and mentorship landing page that advertises a company helping entrepreneurs grow their businesses through funding, advice, and partnerships.',
    tech: ['React', 'API', 'Tailwind CSS'],
    github: 'https://github.com/Ruthexy/Ventsphere.git',
    live: 'https://ventsphere-ruth.vercel.app/',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
    image: ventsphereImg,
    category: 'Landing Page',
    highlights: [
      'Conversion-focused landing page design',
      'Animated sections with smooth scroll interactions',
      'API integration for dynamic content',
      'Responsive layout optimized for all devices',
    ],
  },
  {
    title: 'FIDIO',
    description:
      'The website functions as a marketing landing page for a video production agency, designed to attract potential clients and encourage them to book a consultation for video production services.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Ruthexy/Fidio.git',
    live: 'https://fidio.vercel.app/',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #e11d48 100%)',
    image: fidioImg,
    category: 'Landing Page',
    highlights: [
      'Cinematic visual storytelling through bold design',
      'Scroll-triggered animations for immersive experience',
      'Clear call-to-action funnel for lead generation',
      'Optimized for fast load times and performance',
    ],
  },
]
