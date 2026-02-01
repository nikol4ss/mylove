"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Camera, Sparkles } from "lucide-react"

interface TimelineItem {
  id: number
  chapter: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    chapter: "Capitulo I",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    chapter: "Capitulo II",
    title: "Consectetur adipiscing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    chapter: "Capitulo III",
    title: "Sed do eiusmod tempor",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    chapter: "Capitulo IV",
    title: "Incididunt ut labore",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    chapter: "Capitulo V",
    title: "Et dolore magna aliqua",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 6,
    chapter: "Capitulo VI",
    title: "Ut enim ad minim veniam",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
  },
]

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -100 : 100 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"} max-md:flex-col relative`}
    >
      {/* Connecting line glow */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 top-full w-px h-24 bg-gradient-to-b from-pink-400 to-transparent max-md:hidden"
      />

      {/* Content card with glassmorphism */}
      <motion.div 
        className={`flex-1 ${isEven ? "text-right max-md:text-center" : "text-left max-md:text-center"}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="backdrop-blur-md bg-white/40 rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl hover:shadow-pink-200/30 transition-all duration-500 relative overflow-hidden group">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-rose-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-4 right-4 opacity-30"
          >
            <svg width="24" height="24" viewBox="0 0 100 100" fill="rgba(236,72,153,0.5)">
              <ellipse cx="50" cy="25" rx="12" ry="22" />
              <ellipse cx="50" cy="75" rx="12" ry="22" />
              <ellipse cx="25" cy="50" rx="22" ry="12" />
              <ellipse cx="75" cy="50" rx="22" ry="12" />
              <circle cx="50" cy="50" r="8" fill="rgba(253,224,71,0.8)" />
            </svg>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 font-serif text-lg tracking-wider"
          >
            {item.chapter}
          </motion.span>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-3xl font-serif text-foreground mt-3 text-balance relative z-10"
          >
            {item.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground mt-4 leading-relaxed max-w-md mx-auto md:mx-0 relative z-10"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>

      {/* Center heart icon with effects */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="relative">
          {/* Pulsing rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 2, 2.5],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="absolute inset-0 rounded-full bg-pink-400/30"
            />
          ))}
          
          {/* Main heart */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 shadow-lg shadow-pink-400/50 flex items-center justify-center">
            <motion.svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </motion.svg>
          </div>
        </div>
      </motion.div>

      {/* Image Placeholder with futuristic frame */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="relative group"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-3xl opacity-30 group-hover:opacity-60 blur transition-all duration-500" />
          
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-white/50 flex items-center justify-center shadow-xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, rgba(236,72,153,0.3) 0%, transparent 40%)`,
                }}
              />
            </div>
            
            <div className="text-center p-6 relative z-10">
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Camera className="w-14 h-14 text-pink-300 mx-auto mb-3" />
              </motion.div>
              <p className="text-pink-400 text-sm font-medium">Adicione uma foto</p>
            </div>

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent flex items-end justify-center pb-6"
            >
              <Sparkles className="w-8 h-8 text-pink-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function TimelineSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-pink-300/30 via-rose-200/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.2, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-rose-300/30 via-pink-200/10 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      {/* Floating flowers in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            <svg width={30 + i * 5} height={30 + i * 5} viewBox="0 0 100 100" fill="rgba(251,113,133,0.2)">
              <ellipse cx="50" cy="25" rx="12" ry="22" />
              <ellipse cx="50" cy="75" rx="12" ry="22" />
              <ellipse cx="25" cy="50" rx="22" ry="12" />
              <ellipse cx="75" cy="50" rx="22" ry="12" />
              <circle cx="50" cy="50" r="10" fill="rgba(253,224,71,0.4)" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-10 h-10 text-pink-400" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500">
              Nossa Historia
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </motion.p>
        </motion.div>

        {/* Timeline Line with animated glow */}
        <div className="absolute left-1/2 top-64 bottom-24 w-1 -translate-x-1/2 max-md:hidden overflow-hidden">
          <motion.div
            initial={{ height: "0%" }}
            animate={isInView ? { height: "100%" } : { height: "0%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="w-full bg-gradient-to-b from-pink-400 via-rose-300 to-pink-400 rounded-full"
          />
          {/* Animated light moving down the line */}
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>

        <div className="space-y-32">
          {timelineData.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
