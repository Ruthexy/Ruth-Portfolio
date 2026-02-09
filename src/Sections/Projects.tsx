import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { Projects as projects } from '../Data/Projects'


const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.15,
delayChildren: 0.1,
},
},
}

const itemVariants = {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.5 },
},
}

export default function Projects() {
return (
<section id="projects" className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<motion.h2
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}
className="text-3xl md:text-4xl font-bold mb-12"
>
Projects
</motion.h2>


<motion.div 
className="grid md:grid-cols-2 gap-8"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
>
{projects.map((project) => (
<motion.div
key={project.title}
variants={itemVariants}
>
<ProjectCard project={project} />
</motion.div>
))}
</motion.div>
</div>
</section>
)
}