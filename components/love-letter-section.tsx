"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"

export function LoveLetterSection() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <section ref={containerRef} className="py-40 px-4 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 50% 0%, rgba(236,72,153,0.2) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 100%, rgba(244,114,182,0.2) 0%, transparent 60%)",
              "radial-gradient(ellipse at 70% 50%, rgba(251,113,133,0.2) 0%, transparent 60%)",
              "radial-gradient(ellipse at 50% 0%, rgba(236,72,153,0.2) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0"
        />

        {/* Floating hearts background */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <svg width={12 + i * 2} height={12 + i * 2} viewBox="0 0 24 24" fill="rgba(244,114,182,0.3)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}

        {/* Floating flowers */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`flower-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            <svg width={30 + i * 3} height={30 + i * 3} viewBox="0 0 100 100" fill="rgba(251,113,133,0.2)">
              <ellipse cx="50" cy="25" rx="12" ry="22" />
              <ellipse cx="50" cy="75" rx="12" ry="22" />
              <ellipse cx="25" cy="50" rx="22" ry="12" />
              <ellipse cx="75" cy="50" rx="22" ry="12" />
              <circle cx="50" cy="50" r="10" fill="rgba(253,224,71,0.4)" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          style={{ rotateX, scale, perspective: 1000 }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          {/* Glowing effect behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/30 via-rose-300/20 to-pink-400/30 rounded-[3rem] blur-2xl" />

          {/* Letter card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-white/50 overflow-hidden">
            {/* Animated border glow */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(236,72,153,0.5), transparent, rgba(244,114,182,0.5))",
                  "linear-gradient(90deg, rgba(244,114,182,0.5), transparent, rgba(251,113,133,0.5))",
                  "linear-gradient(180deg, rgba(251,113,133,0.5), transparent, rgba(236,72,153,0.5))",
                  "linear-gradient(270deg, rgba(236,72,153,0.5), transparent, rgba(244,114,182,0.5))",
                  "linear-gradient(360deg, rgba(244,114,182,0.5), transparent, rgba(251,113,133,0.5))",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 opacity-20 rounded-[2.5rem]"
            />

            {/* Decorative corner flourishes */}
            <div className="absolute top-6 left-6">
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <path
                  d="M5 30 Q5 5 30 5"
                  stroke="rgba(236,72,153,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M10 30 Q10 10 30 10"
                  stroke="rgba(244,114,182,0.2)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="30" cy="5" r="3" fill="rgba(236,72,153,0.4)" />
                <circle cx="5" cy="30" r="3" fill="rgba(244,114,182,0.4)" />
              </motion.svg>
            </div>

            <div className="absolute top-6 right-6 rotate-90">
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              >
                <path
                  d="M5 30 Q5 5 30 5"
                  stroke="rgba(236,72,153,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="30" cy="5" r="3" fill="rgba(236,72,153,0.4)" />
                <circle cx="5" cy="30" r="3" fill="rgba(244,114,182,0.4)" />
              </motion.svg>
            </div>

            <div className="absolute bottom-6 left-6 -rotate-90">
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              >
                <path
                  d="M5 30 Q5 5 30 5"
                  stroke="rgba(236,72,153,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="30" cy="5" r="3" fill="rgba(236,72,153,0.4)" />
                <circle cx="5" cy="30" r="3" fill="rgba(244,114,182,0.4)" />
              </motion.svg>
            </div>

            <div className="absolute bottom-6 right-6 rotate-180">
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
              >
                <path
                  d="M5 30 Q5 5 30 5"
                  stroke="rgba(236,72,153,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="30" cy="5" r="3" fill="rgba(236,72,153,0.4)" />
                <circle cx="5" cy="30" r="3" fill="rgba(244,114,182,0.4)" />
              </motion.svg>
            </div>

            {/* Heart and sparkles header */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
              className="flex justify-center mb-10 relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-pink-300 absolute -top-4 -left-8" />
                </motion.div>

                <motion.svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <defs>
                    <linearGradient id="letterHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#fb7185" />
                    </linearGradient>
                    <filter id="letterGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    fill="url(#letterHeartGradient)"
                    filter="url(#letterGlow)"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </motion.svg>

                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  <Sparkles className="w-5 h-5 text-rose-300 absolute -bottom-2 -right-6" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-10 text-balance"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500">
                Uma carta para voce
              </span>
            </motion.h2>

            {/* Letter content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 text-muted-foreground leading-relaxed text-lg md:text-xl text-center relative z-10"
            >
              <p>
                Desde o primeiro olhar na academia, você trouxe luz e alegria para minha vida. Cada momento juntos, cada sorriso, cada gesto, me mostrou que o que temos é raro e verdadeiro.
              </p>
              <p>
                Lembro do nosso primeiro encontro, do nosso primeiro beijo, e de como cada instante me fez querer estar sempre ao seu lado. Crescemos juntos, aprendendo, rindo, sonhando, e construindo memórias que ninguém mais poderia ter.
              </p>
              <p>
                Hoje, olho para nós e vejo um futuro cheio de amor, conquistas e cumplicidade. Obrigado por ser minha parceira, minha amiga, e a razão de tantos sorrisos no meu dia a dia. Eu te amo mais do que palavras podem expressar.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center relative z-10"
            >
              <p className="font-serif text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 italic">
                Com todo meu amor,
              </p>
              <p className="font-serif text-xl text-muted-foreground mt-3">
                — Nikolas Campos
              </p>
            </motion.div>

            {/* Animated floating elements inside card */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-12 left-12 opacity-20"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(236,72,153,0.8)">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8], rotate: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-28 right-12 opacity-20"
            >
              <svg width="28" height="28" viewBox="0 0 100 100" fill="rgba(244,114,182,0.8)">
                <ellipse cx="50" cy="25" rx="12" ry="22" />
                <ellipse cx="50" cy="75" rx="12" ry="22" />
                <ellipse cx="25" cy="50" rx="22" ry="12" />
                <ellipse cx="75" cy="50" rx="22" ry="12" />
                <circle cx="50" cy="50" r="8" fill="rgba(253,224,71,0.8)" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
