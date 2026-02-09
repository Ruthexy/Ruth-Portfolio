import { motion } from 'framer-motion'


const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.2,
delayChildren: 0.3,
},
},
}

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.8,
},
},
}

export default function Hero() {
return (
<section className="min-h-screen flex items-center justify-center px-6 pt-16">
<motion.div
variants={containerVariants}
initial="hidden"
animate="visible"
className="max-w-3xl text-center"
>
<motion.div variants={itemVariants}>
<h1 className="text-4xl md:text-6xl font-bold leading-tight">
Hi, I'm{" "}
<motion.span
className="text-accent inline-block"
animate={{ backgroundPosition: ["0%", "100%"] }}
transition={{ duration: 8, repeat: Infinity }}
style={{
backgroundImage: "linear-gradient(90deg, #6366f1, #a78bfa, #6366f1)",
backgroundSize: "200% 200%",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
}}
>
Ruth Okwuokenye
</motion.span>
</h1>
</motion.div>


<motion.p variants={itemVariants} className="mt-6 text-gray-400 text-lg">
A junior frontend developer focused on building clean, responsive,
and user‑friendly web experiences.
</motion.p>


<motion.div
variants={itemVariants}
className="mt-10 flex gap-4 justify-center flex-wrap"
>
<motion.a
href="#projects"
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="px-6 py-3 bg-accent text-white rounded-xl font-medium hover:opacity-90 transition"
>
View Projects
</motion.a>


<motion.a
href="#contact"
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="px-6 py-3 border border-white/20 rounded-xl font-medium hover:bg-white/5 transition"
>
Contact Me
</motion.a>
</motion.div>


<motion.div
className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
>
<svg
className="w-6 h-6 text-accent"
fill="none"
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</svg>
</motion.div>
</motion.div>
</section>
)
}