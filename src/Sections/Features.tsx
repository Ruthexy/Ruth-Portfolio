import { motion } from 'framer-motion'


const features = [
{
title: 'Clean Code',
description: 'Writing maintainable, well-structured code that follows best practices and industry standards.',
icon: (
<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4m0 6H4m16 0a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
),
},
{
title: 'Responsive Design',
description: 'Creating beautiful interfaces that work seamlessly across all devices and screen sizes.',
icon: (
<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
),
},
{
title: 'High Performance',
description: 'Optimizing every aspect for lightning-fast load times and smooth user interactions.',
icon: (
<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
),
},
{
title: 'Scalable Solutions',
description: 'Building future-proof architectures that grow with your project and user base.',
icon: (
<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
</svg>
),
},
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
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6 },
},
}

export default function Features() {
return (
<section className="py-32 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
<div className="max-w-6xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}
className="text-center mb-16"
>
<h2 className="text-3xl md:text-4xl font-bold mb-4">Quality in Every Detail</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">
Delivering excellence through innovative solutions and meticulous attention to detail
</p>
</motion.div>

<motion.div
className="grid grid-cols-1 md:grid-cols-2 gap-8"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
>
{features.map((feature) => (
<motion.div
key={feature.title}
variants={itemVariants}
whileHover={{ 
y: -8,
backgroundColor: "rgba(99, 102, 241, 0.05)"
}}
className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300 overflow-hidden"
>
<motion.div
className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
transition={{ duration: 0.3 }}
/>

<div className="relative z-10">
<motion.div
whileHover={{ rotate: 10, scale: 1.1 }}
transition={{ duration: 0.3 }}
className="mb-6 text-accent inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
>
{feature.icon}
</motion.div>

<h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
{feature.title}
</h3>
<p className="text-gray-400 leading-relaxed">
{feature.description}
</p>
</div>
</motion.div>
))}
</motion.div>
</div>
</section>
)
}
