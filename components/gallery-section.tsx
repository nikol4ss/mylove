"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"

const galleryItems = [
  { id: 1, size: "large", src: "/photos/1.jpeg" },
  { id: 2, size: "small", src: "/photos/2.jpeg" },
  { id: 3, size: "small", src: "/photos/3.jpeg" },
  { id: 5, size: "medium", src: "/photos/5.jpeg" },
  { id: 6, size: "large", src: "/photos/6.jpeg" },
  { id: 8, size: "small", src: "/photos/8.jpeg" },
  { id: 9, size: "small", src: "/photos/4.jpeg" },
]

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-2 md:col-span-1",
    large: "col-span-2 row-span-2",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className={`${sizeClasses[item.size as keyof typeof sizeClasses]} relative group`}
    >
      {/* Glowing border on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-50 blur transition-all duration-500"
      />

      {/* Image */}
      <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] rounded-2xl overflow-hidden border border-white/50 shadow-lg flex items-center justify-center hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 cursor-pointer">
        <img
          src={item.src}
          alt={`Foto ${item.id}`}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Sparkles on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-pink-400/10 to-transparent flex items-center justify-center"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, -40],
                opacity: [0, 1, 0],
                x: [0, (i - 1) * 20],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                bottom: "40%",
                left: `${40 + i * 10}%`,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(244,114,182,0.7)">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          ))}
        </motion.div>

        {/* Sparkles corner */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles className="w-5 h-5 text-pink-400" />
        </div>
      </div>
    </motion.div>
  )
}

export function GallerySection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-50/30 to-background" />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
            }}
          >
            <svg width={40 + i * 10} height={40 + i * 10} viewBox="0 0 100 100" fill="rgba(251,113,133,0.15)">
              <ellipse cx="50" cy="25" rx="15" ry="25" />
              <ellipse cx="50" cy="75" rx="15" ry="25" />
              <ellipse cx="25" cy="50" rx="25" ry="15" />
              <ellipse cx="75" cy="50" rx="25" ry="15" />
              <circle cx="50" cy="50" r="12" fill="rgba(253,224,71,0.3)" />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500">
              Nossos Momentos
            </span>
          </h2>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[180px]">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
