import { motion } from 'framer-motion'

const skills = [
'HTML',
'CSS',
'JavaScript',
'TypeScript',
'React',
'Tailwind CSS',
'Git & GitHub',
]

const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.1,
delayChildren: 0.2,
},
},
}

const itemVariants = {
hidden: { opacity: 0, scale: 0.8, y: 20 },
visible: {
opacity: 1,
scale: 1,
y: 0,
transition: {
duration: 0.5,
},
},
}

export default function Skills() {
return (
<section className="py-32 px-6">
<div className="max-w-6xl mx-auto text-center">
<motion.h2
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}
className="text-3xl md:text-4xl font-bold mb-12"
>
Skills & Tools
</motion.h2>


<motion.div 
className="flex flex-wrap justify-center gap-4"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
>
{skills.map((skill) => (
<motion.span
key={skill}
variants={itemVariants}
whileHover={{ 
scale: 1.15,
backgroundColor: "rgba(99, 102, 241, 0.2)",
boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)"
}}
whileTap={{ scale: 0.95 }}
transition={{ 
duration: 0.3,
type: "spring",
stiffness: 300,
}}
className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm cursor-pointer relative overflow-hidden group"
>
<motion.div
className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100"
animate={{ x: ["100%", "-100%"] }}
transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
/>
<span className="relative z-10">{skill}</span>
</motion.span>
))}
</motion.div>
</div>
</section>
)
}