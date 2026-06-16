import { motion } from 'framer-motion'


const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.2,
},
},
}

const itemVariants = {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6 },
},
}


export default function About() {
return (
<section id="about" className="py-32 px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<motion.div
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
>
<motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">About Me</motion.h2>
<motion.p variants={itemVariants} className="text-gray-400 leading-relaxed">
I’m a frontend developer who enjoys turning complex problems
into simple, beautiful, and intuitive user interfaces. I care deeply
about clean code, accessibility, and building experiences that feel
natural to use.
</motion.p>


<motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mt-4">
I’m constantly learning, experimenting, and improving, whether it’s
mastering React patterns, refining UI details, or understanding how
users interact with products.
</motion.p>
</motion.div>


<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, delay: 0.2 }}
className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-colors group relative overflow-hidden"
>
<motion.div
className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100"
transition={{ duration: 0.3 }}
/>
<motion.h3 
variants={itemVariants}
className="text-xl font-semibold mb-6 relative z-10"
>
What I Focus On
</motion.h3>
<motion.ul 
className="space-y-4 text-gray-400 relative z-10"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
>
{['Writing clean, maintainable React code', 'Building responsive, accessible UIs', 'Translating designs into pixel‑perfect layouts', 'Continuous learning and growth'].map((item) => (
<motion.li 
key={item}
variants={itemVariants}
whileHover={{ x: 8 }}
transition={{ duration: 0.2 }}
>
• {item}
</motion.li>
))}
</motion.ul>
</motion.div>
</div>
</section>
)
}