"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  type: "heart" | "sparkle" | "flower"
}

export function MagicCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [isClicking, setIsClicking] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })

    // Add sparkle trail randomly
    if (Math.random() > 0.85) {
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        size: Math.random() * 12 + 8,
        type: ["heart", "sparkle", "flower"][Math.floor(Math.random() * 3)] as Sparkle["type"],
      }
      setSparkles(prev => [...prev.slice(-15), newSparkle])
    }
  }, [])

  const handleClick = useCallback((e: MouseEvent) => {
    setIsClicking(true)
    setTimeout(() => setIsClicking(false), 300)

    // Burst of sparkles on click
    const burst: Sparkle[] = []
    for (let i = 0; i < 8; i++) {
      burst.push({
        id: Date.now() + i,
        x: e.clientX + (Math.random() - 0.5) * 60,
        y: e.clientY + (Math.random() - 0.5) * 60,
        size: Math.random() * 16 + 10,
        type: ["heart", "sparkle", "flower"][Math.floor(Math.random() * 3)] as Sparkle["type"],
      })
    }
    setSparkles(prev => [...prev, ...burst])
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [handleMouseMove, handleClick])

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => prev.slice(1))
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-full h-full rounded-full bg-gradient-to-r from-pink-400/50 to-rose-400/50 blur-sm"
        />
      </motion.div>

      {/* Large ambient glow following cursor */}
      <motion.div
        className="absolute w-48 h-48 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-pink-300/20 via-rose-200/10 to-transparent blur-2xl" />
      </motion.div>

      {/* Sparkle trail */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 1, x: sparkle.x, y: sparkle.y }}
            animate={{
              opacity: 0,
              scale: 0,
              y: sparkle.y - 30,
              rotate: 180,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            {sparkle.type === "heart" && (
              <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="rgba(236,72,153,0.7)">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
            {sparkle.type === "sparkle" && (
              <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="rgba(244,114,182,0.7)">
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
              </svg>
            )}
            {sparkle.type === "flower" && (
              <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 100 100" fill="rgba(251,113,133,0.7)">
                <ellipse cx="50" cy="25" rx="10" ry="18" />
                <ellipse cx="50" cy="75" rx="10" ry="18" />
                <ellipse cx="25" cy="50" rx="18" ry="10" />
                <ellipse cx="75" cy="50" rx="18" ry="10" />
                <circle cx="50" cy="50" r="8" fill="rgba(253,224,71,0.8)" />
              </svg>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
