import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Requirements Gathering',
    description: 'Understanding your needs and objectives to build a clear roadmap for the project.',
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Creating beautiful designs and developing your project with modern technologies.',
  },
  {
    number: '03',
    title: 'Testing & Optimization',
    description: 'Thoroughly testing for bugs, performance, and responsiveness across all devices.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Launching your project and providing ongoing support for updates and maintenance.',
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export default function Approach() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Web Development Approach</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            I follow a structured approach to delivering high-quality websites. From gathering requirements to product launch and ongoing maintenance, each step is essential to the success of your project.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative"
              >
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-accent/50 transition-all">
                      {step.number}
                    </div>
                  </motion.div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative h-96 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-2xl border border-accent/20 overflow-hidden group">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
                className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
              />

              <div className="relative z-10 h-full flex items-center justify-center p-8">
                <div className="space-y-4 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl font-bold text-accent"
                  >
                    4
                  </motion.div>
                  <p className="text-gray-400">Step Process</p>
                  <p className="text-sm text-gray-500 mt-4">
                    Structured workflow for successful projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent to-accent/70 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            Let's Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
