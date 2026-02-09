import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Load all certificate images
const modules = import.meta.glob(
  '../assets/certificates/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' }
) as Record<string, string>

const certificates = Object.entries(modules).map(([path, src]) => {
  const fileName = path.split('/').pop() || 'certificate'
  const name = fileName.replace(/\.[^/.]+$/, '')
  return { name, src }
})

export default function Certificates() {
  const [active, setActive] = useState<null | { name: string; src: string }>(
    null
  )

  return (
    <section
      id="certificates"
      className="py-20 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Certificates
          </h2>
          <p className="text-gray-400 mt-2">
            Professional certifications and achievements
          </p>
        </motion.div>

        {/* Grid (centered) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {certificates.map((cert) => (
              <motion.button
                key={cert.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActive(cert)}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden text-left focus:outline-none"
              >
                {/* Centered image */}
                <div className="h-48 sm:h-56 flex items-center justify-center bg-black/10">
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Caption */}
                <div className="p-4 text-center">
                  <div className="text-sm text-gray-300 truncate">
                    {cert.name}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActive(null)}
                className="absolute -top-10 right-0 text-gray-300 hover:text-white text-xl"
              >
                ✕
              </button>

              {/* Zoomed image */}
              <div className="bg-black/40 rounded-xl p-4 sm:p-6">
                <img
                  src={active.src}
                  alt={active.name}
                  className="w-full max-h-[80vh] object-contain mx-auto"
                />
                <div className="text-center text-gray-300 text-sm mt-4">
                  {active.name}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


