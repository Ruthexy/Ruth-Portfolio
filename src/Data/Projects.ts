export interface Project {
title: string
description: string
tech: string[]
github: string
live: string
}


export const Projects: Project[] = [
{
title: 'Todo Management App',
description:
'A responsive task management application with filtering, pagination, and detailed views. Focused on clean UI and state management.',
tech: ['React', 'TypeScript', 'Tailwind CSS', 'Nextjs'],
github: 'https://github.com/Ruthexy/TodoApp.git',
live: 'https://next-todo-app-lyart-ten.vercel.app/',
},
{
title: 'Ventsphere',
description:
'A startup investment and mentorship landing page that advertises a company helping entrepreneurs grow their businesses through funding, advice, and partnerships.',
tech: ['React', 'API', 'Tailwind CSS'],
github: 'https://github.com/Ruthexy/Ventsphere.git',
live: 'https://ventsphere-ruth.vercel.app/',
},
{
title: 'Space Tourism Website',
description:
'A responsive space tourism website with interactive navigation and detailed information about space destinations.',
tech: ['React', 'TypeScript', 'Tailwind CSS'],
github: 'https://github.com/Ruthexy/Space-Tourism.git',
live: 'https://space-tourism-pink-nine.vercel.app',
},
{
title: 'Pff Consulting',
description:
'A responsive consulting website for Pff Consulting with interactive navigation and detailed information.',
tech: ['HTML','JavaScript' ,'Tailwind CSS'],
github: 'https://github.com/Ruthexy/PFF-CONSULTING-1.git',
live: 'https://pff-consulting-1.vercel.app/',
},
{
title: 'FIDIO',
description:
'The website functions as a marketing landing page for a video production agency, designed to attract potential clients and encourage them to book a consultation for video production services.',
tech: ['React', 'TypeScript', 'Tailwind CSS'],
github: 'https://github.com/Ruthexy/Fidio.git',
live: 'https://fidio.vercel.app/',
},
{
title: 'GitHub Repository Explorer',
description:
'A frontend-driven platform where users request software projects by submitting requirements through a structured form, with categorized project types and a service-oriented flow.',
tech: ['React', 'API', 'Tailwind CSS'],
github: 'https://github.com/Ruthexy/INTERACTIVE-PROJECT.git',
live: 'https://interactive-project-hd97.vercel.app/',
},
]