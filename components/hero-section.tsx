"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, Camera, Sparkles } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  useEffect(() => {
    setMounted(true)
  }, [])

  const letters = "BIANCA".split("")

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(236,72,153,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(244,114,182,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, rgba(251,113,133,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(236,72,153,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(236,72,153,0.1) 1px, transparent 1px)`,
            backgroundSize: "100% 60px",
          }}
        />
        <motion.div
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(236,72,153,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 100%",
          }}
        />
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-pink-300/20 rounded-full"
            style={{
              width: `${400 + i * 150}px`,
              height: `${400 + i * 150}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg shadow-pink-500/50"
              style={{ top: "50%", left: 0, transform: "translate(-50%, -50%)" }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute"
              style={{ top: 0, left: "50%", transform: "translate(-50%, -50%)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(244,114,182,0.8)">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating flowers around the hero */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <svg width={24 + i * 2} height={24 + i * 2} viewBox="0 0 100 100" fill="rgba(251,113,133,0.3)">
              <ellipse cx="50" cy="25" rx="12" ry="22" />
              <ellipse cx="50" cy="75" rx="12" ry="22" />
              <ellipse cx="25" cy="50" rx="22" ry="12" />
              <ellipse cx="75" cy="50" rx="22" ry="12" />
              <circle cx="50" cy="50" r="10" fill="rgba(253,224,71,0.6)" />
            </svg>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y, opacity, scale, rotate }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Sparkle decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-pink-400" />
          </motion.div>
        </motion.div>

        {/* Animated heart constellation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="mb-8 relative"
        >
          <div className="relative inline-block">
            {/* Central pulsing heart */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="relative"
            >
              <svg width="100" height="100" viewBox="0 0 24 24" className="drop-shadow-2xl">
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#fb7185" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  fill="url(#heartGradient)"
                  filter="url(#glow)"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </motion.div>

            {/* Multiple pulsing rings */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 2.5 + i * 0.5],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute inset-0 border-2 border-pink-400 rounded-full"
              />
            ))}

            {/* Orbiting mini hearts */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * (8 / 6),
                }}
              >
                <motion.div
                  style={{
                    x: 60 + i * 5,
                    y: 0,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(244,114,182,0.8)">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 font-serif text-xl md:text-2xl tracking-widest"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Para voce, meu amor
          </motion.span>
        </motion.div>

        {/* Main title with letter animation */}
        <AnimatePresence>
          {mounted && (
            <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mt-6 flex justify-center gap-1 md:gap-2">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.1,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-pink-400 hover:scale-110 transition-transform cursor-default"
                  whileHover={{
                    scale: 1.2,
                    color: "#ec4899",
                    textShadow: "0 0 40px rgba(236,72,153,0.5)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Description with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/20 shadow-xl">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </motion.div>

        {/* Photo placeholder with futuristic frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, type: "spring" }}
          className="mt-16 relative max-w-sm mx-auto"
        >
          <div className="relative">
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-pink-300/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-pink-200/20"
            />

            {/* Glowing corners */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-500/50"
                style={{
                  top: i < 2 ? "-8px" : "auto",
                  bottom: i >= 2 ? "-8px" : "auto",
                  left: i % 2 === 0 ? "-8px" : "auto",
                  right: i % 2 === 1 ? "-8px" : "auto",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Main photo area */}
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-rose-50 border-4 border-white shadow-2xl shadow-pink-200/50 flex items-center justify-center group hover:shadow-pink-300/50 transition-all duration-500 cursor-pointer">
              <motion.div
                className="text-center p-8"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Camera className="w-16 h-16 text-pink-300 mx-auto mb-4" />
                </motion.div>
                <p className="text-pink-400 font-medium">Sua foto favorita</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-pink-400 mb-2 tracking-wider">Descubra nossa historia</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-pink-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
