export interface StackItem {
  name: string
  description: string
  why: string
  category: StackCategory
}

export type StackCategory = 'Languages' | 'Frontend' | 'Backend' | 'Cloud' | 'Tools' | 'AI'

export const stackItems: StackItem[] = [
  // Languages
  {
    name: 'TypeScript',
    description: 'Typed superset of JavaScript',
    why: 'TypeScript eliminates a whole class of runtime errors before they reach production. The autocomplete and refactoring support alone justify the setup cost on any project larger than a weekend hack.',
    category: 'Languages',
  },
  {
    name: 'JavaScript',
    description: 'The language of the web',
    why: 'Understanding JavaScript deeply — the event loop, closures, prototypal inheritance — makes you a better TypeScript engineer. I lean on JS for quick scripts and non-critical tooling.',
    category: 'Languages',
  },
  {
    name: 'HTML & CSS',
    description: 'The foundation of the web',
    why: 'Senior engineers know their fundamentals. CSS Cascade, specificity, and the box model are not boring — they are what separates engineers who fight the browser from those who work with it.',
    category: 'Languages',
  },

  // Frontend
  {
    name: 'React',
    description: 'UI library for building components',
    why: 'React\'s component model and unidirectional data flow map well onto how I think about UI. The ecosystem depth and community mean solutions to hard problems already exist.',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    description: 'Full-stack React framework',
    why: 'When a project needs SSR, SSG, or API routes, Next.js handles the plumbing so I can focus on product. The App Router architecture makes server/client boundaries explicit.',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    why: 'Tailwind keeps styles co-located with markup, eliminating the naming gymnastics of BEM and the cascade leakage of global CSS. Composition over inheritance, in CSS form.',
    category: 'Frontend',
  },
  {
    name: 'Framer Motion',
    description: 'Production-ready animation library',
    why: 'Framer Motion has the best API for gesture-driven and physics-based animations in React. The declarative variants system makes complex choreography manageable.',
    category: 'Frontend',
  },
  {
    name: 'TanStack Query',
    description: 'Async state management for fetching',
    why: 'Server state is fundamentally different from client state. TanStack Query handles caching, refetching, and synchronization with far less boilerplate than hand-rolling with useEffect.',
    category: 'Frontend',
  },

  // Backend
  

  // Cloud
  {
    name: 'Vercel',
    description: 'Frontend cloud platform',
    why: 'Vercel\'s Git integration, preview deployments, and edge network make it the fastest path from commit to production for React and Next.js projects.',
    category: 'Cloud',
  },
  {
    name: 'GitHub',
    description: 'Version control and collaboration',
    why: 'Beyond version control, GitHub Actions handles my CI/CD pipelines, and GitHub Projects gives me a lightweight way to manage project scope.',
    category: 'Cloud',
  },

  // Tools
  {
    name: 'VS Code',
    description: 'Code editor',
    why: 'The extension ecosystem and TypeScript integration are unmatched. A well-configured VS Code setup — with the right extensions and keybindings — multiplies development speed.',
    category: 'Tools',
  },
  {
    name: 'Figma',
    description: 'Collaborative design tool',
    why: 'Being able to inspect designs accurately, extract spacing values, and prototype interactions makes me a more effective collaborator with designers and a better product thinker overall.',
    category: 'Tools',
  },
  {
    name: 'Vite',
    description: 'Next-generation frontend tooling',
    why: 'Vite\'s ESM-based dev server is dramatically faster than webpack-based alternatives. Hot module replacement that\'s actually instant makes the development feedback loop tight.',
    category: 'Tools',
  },

  // AI
  {
    name: 'Claude Code',
    description: 'AI assistant by Anthropic',
    why: 'Claude is my go-to for reasoning through architectural decisions, reviewing code for correctness, and exploring trade-offs. It works best as a thinking partner, not a code generator.',
    category: 'AI',
  },
  {
    name: 'Codex',
    description: 'AI assistant by OpenAI',
    why: 'ChatGPT is my go-to for generating boilerplate code, writing documentation, and exploring new libraries. It\'s a great starting point, but I always review and refine the output.',
    category: 'AI',
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer',
    why: 'Copilot excels at pattern completion — the repetitive, high-confidence parts of coding where the next line is predictable. It keeps my hands on the keyboard for the interesting parts.',
    category: 'AI',
  },
]

export const stackCategories: StackCategory[] = ['Languages', 'Frontend', 'Cloud', 'Tools', 'AI']

export function getStackByCategory(category: StackCategory): StackItem[] {
  return stackItems.filter(item => item.category === category)
}
