import { motion } from 'framer-motion'
import type { Project } from '../Data/Projects'


interface Props {
project: Project
}


export default function ProjectCard({ project }: Props) {
return (
<motion.div
whileHover={{ 
y: -12,
boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
}}
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
>
<motion.div
className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
transition={{ duration: 0.3 }}
/>

<div className="relative z-10">
<motion.h3
className="text-xl font-semibold mb-3"
whileHover={{ color: "#6366f1" }}
transition={{ duration: 0.2 }}
>
{project.title}
</motion.h3>
<p className="text-gray-400 text-sm leading-relaxed">
{project.description}
</p>


<div className="flex flex-wrap gap-2 mt-4">
{project.tech.map((tech, index) => (
<motion.span
key={tech}
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
transition={{ duration: 0.2, delay: index * 0.05 }}
viewport={{ once: true }}
className="text-xs px-3 py-1 rounded-full bg-white/10"
>
{tech}
</motion.span>
))}
</div>
</div>


<div className="flex gap-4 mt-6 text-sm relative z-10">
<motion.a
href={project.live}
target="_blank"
whileHover={{ x: 4 }}
transition={{ duration: 0.2 }}
className="text-accent hover:underline"
>
Live Demo
</motion.a>
<motion.a
href={project.github}
target="_blank"
rel="noopener noreferrer"
whileHover={{ x: 4 }}
transition={{ duration: 0.2 }}
className="text-gray-400 hover:text-white"
>
GitHub
</motion.a>
</div>
</motion.div>
)
}