"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "linear-gradient(180deg, transparent 0%, rgba(236,72,153,0.1) 50%, rgba(244,114,182,0.15) 100%)",
              "linear-gradient(180deg, transparent 0%, rgba(244,114,182,0.1) 50%, rgba(251,113,133,0.15) 100%)",
              "linear-gradient(180deg, transparent 0%, rgba(251,113,133,0.1) 50%, rgba(236,72,153,0.15) 100%)",
              "linear-gradient(180deg, transparent 0%, rgba(236,72,153,0.1) 50%, rgba(244,114,182,0.15) 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${5 + (i * 5) % 90}%`,
            bottom: `${10 + (i * 3) % 40}%`,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + (i % 4),
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <svg width={16 + i * 1.5} height={16 + i * 1.5} viewBox="0 0 24 24" fill={`rgba(244,114,182,${0.3 + (i % 3) * 0.1})`}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating flowers */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          className="absolute"
          style={{
            left: `${5 + i * 10}%`,
            bottom: `${10 + (i % 3) * 10}%`,
          }}
          animate={{
            y: [0, -80, -160],
            opacity: [0, 0.4, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12 + (i % 5),
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          <svg width={20 + i * 2} height={20 + i * 2} viewBox="0 0 100 100" fill="rgba(251,113,133,0.25)">
            <ellipse cx="50" cy="25" rx="12" ry="22" />
            <ellipse cx="50" cy="75" rx="12" ry="22" />
            <ellipse cx="25" cy="50" rx="22" ry="12" />
            <ellipse cx="75" cy="50" rx="22" ry="12" />
            <circle cx="50" cy="50" r="10" fill="rgba(253,224,71,0.5)" />
          </svg>
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated infinity symbol made of hearts */}
          <motion.div
            className="flex justify-center mb-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              {/* Create infinity with orbiting hearts */}
              <svg width="120" height="60" viewBox="0 0 120 60" className="overflow-visible">
                <defs>
                  <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
                <path
                  d="M30 30 C30 15 45 0 60 15 C75 30 90 15 90 30 C90 45 75 60 60 45 C45 30 30 45 30 30"
                  stroke="url(#infinityGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* Orbiting heart on infinity path */}
              <motion.div
                className="absolute"
                style={{ top: "50%", left: "50%" }}
                animate={{
                  x: [0, 30, 60, 30, 0, -30, -60, -30, 0],
                  y: [-15, 0, 15, 30, 15, 0, -15, -30, -15],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ec4899">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-10 h-10 text-pink-400" />
          </motion.div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500">
              Para sempre nós
            </span>
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
          >
            Eu te amo, ainda vou melhorar o site, eu fiz ele nessa noite, até agora 5:20
          </motion.p>

          {/* Animated date/counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/40 rounded-full px-8 py-4 border border-white/30 shadow-xl">
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ec4899"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </motion.svg>
     
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f472b6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
