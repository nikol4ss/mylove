"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, Camera } from "lucide-react"

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

      <motion.div
        style={{ y, opacity, scale, rotate }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Subtitle */}
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

        {/* Main title */}
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

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/20 shadow-xl">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Te dedico, com todo meu amor, este espaço que guarda nossa história com carinho, destacando cada momento que permanece vivo na minha memória.
            </p>
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, type: "spring" }}
          className="mt-16 relative max-w-sm mx-auto"
        >
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-rose-50 border-4 border-white shadow-2xl shadow-pink-200/50 flex items-center justify-center group hover:shadow-pink-300/50 transition-all duration-500 cursor-pointer">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.4, type: "spring" }}
                className="mt-16 relative max-w-sm mx-auto"
              >
                <div className=" rounded-full overflow-hidden border-5 border-white shadow-2xl shadow-pink-200/50 flex items-center justify-center">
                  <img
                    src="/photos/5.jpeg"
                    alt="Foto Nossa"
                    className="w-full h-full object-cover"
                  />
                </div>
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
