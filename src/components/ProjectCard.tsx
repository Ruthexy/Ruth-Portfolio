import { motion } from 'framer-motion'
import type { Project } from '../Data/Projects'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiAxios,
} from 'react-icons/si'

const techIconMap: Record<string, React.ReactNode> = {
  'React': <SiReact />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'Tailwind CSS': <SiTailwindcss />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <SiNodedotjs />,
  'MongoDB': <SiMongodb />,
  'Express.js': <SiExpress />,
  'Redux Toolkit': <SiRedux />,
  'Axios': <SiAxios />,
}

interface Props {
  project: Project
  onViewOverview: () => void
}

export default function ProjectCard({ project, onViewOverview }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, type: 'spring', stiffness: 280 }}
      className="bg-[#111118] border border-white/10 rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:border-white/20 transition-colors"
      onClick={onViewOverview}
    >
      {/* Screenshot thumbnail */}
      <div className="relative h-52 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={e => {
              e.stopPropagation()
              onViewOverview()
            }}
            className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:scale-105 active:scale-95 transition-transform"
          >
            View Overview
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
            >
              {techIconMap[tech] && (
                <span className="opacity-70 text-[11px]">{techIconMap[tech]}</span>
              )}
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Footer links */}
        <div className="flex items-center gap-5 mt-4 pt-4 border-t border-white/5">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub className="w-3.5 h-3.5" />
            Github
          </a>
        </div>
      </div>
    </motion.div>
  )
}
