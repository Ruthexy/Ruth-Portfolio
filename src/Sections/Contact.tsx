import { motion } from 'framer-motion'


const contacts = [
{
icon: (
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>
),
label: 'GitHub',
href: 'https://github.com/Ruthexy',
},
{
icon: (
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
),
label: 'Email',
href: 'mailto:ruthokwuokenye2019@gmail.com',
},
{
icon: (
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>
),
label: 'LinkedIn',
href: 'https://www.linkedin.com/in/ruth-okwuokenye-884a1a372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
},
{
icon: (
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a4.5 4.5 0 00-4.5-4.5z"/>
</svg>
),
label: 'X (Twitter)',
href: 'https://x.com/ruthexy_?s=21',
},
]


const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.15,
delayChildren: 0.2,
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

export default function Contact() {
return (
<section id="contact" className="py-32 px-6">
<div className="max-w-4xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}
className="text-center mb-16"
>
<h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
<p className="text-gray-400 text-lg">
Feel free to reach out to me through any of these platforms. I'd love to connect!
</p>
</motion.div>

<motion.div
className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
>
{contacts.map((contact) => (
<motion.a
key={contact.label}
href={contact.href}
target="_blank"
rel="noopener noreferrer"
variants={itemVariants}
whileHover={{ 
scale: 1.05,
backgroundColor: "rgba(99, 102, 241, 0.1)"
}}
whileTap={{ scale: 0.95 }}
className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors overflow-hidden"
>
<motion.div
className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
transition={{ duration: 0.3 }}
/>

<div className="relative z-10 flex flex-col items-center text-center">
<motion.div
whileHover={{ rotate: 10, scale: 1.1 }}
transition={{ duration: 0.3 }}
className="mb-4 text-accent group-hover:text-accent"
>
{contact.icon}
</motion.div>

<h3 className="text-xl font-semibold mb-2">{contact.label}</h3>
<p className="text-gray-400 text-sm mb-4">
{contact.label === 'Email' && 'ruthokwuokenye2019@gmail.com'}
{contact.label === 'GitHub' && 'github.com/Ruthexy'}
{contact.label === 'LinkedIn' && 'Connect on LinkedIn'}
{contact.label === 'X (Twitter)' && 'Follow on X'}
</p>

<motion.span
whileHover={{ x: 4 }}
transition={{ duration: 0.2 }}
className="inline-block text-accent font-medium text-sm"
>
Connect →
</motion.span>
</div>
</motion.a>
))}
</motion.div>

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, delay: 0.6 }}
className="mt-16 text-center"
>
<p className="text-gray-400 text-sm">
© 2026 Ruth Okwuokenye. All rights reserved.
</p>
</motion.div>
</div>
</section>
)
}
