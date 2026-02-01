"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  type: "heart" | "flower" | "petal" | "sparkle" | "star" | "glow"
  rotation: number
  color: string
}

const colors = [
  "rgba(236, 72, 153, 0.6)",
  "rgba(244, 114, 182, 0.5)",
  "rgba(251, 207, 232, 0.7)",
  "rgba(253, 164, 175, 0.5)",
  "rgba(255, 228, 230, 0.6)",
]

export function FloatingElements() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 8,
        delay: Math.random() * 8,
        duration: Math.random() * 15 + 20,
        type: ["heart", "flower", "petal", "sparkle", "star", "glow"][
          Math.floor(Math.random() * 6)
        ] as Particle["type"],
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setParticles(newParticles)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
    setTrails(prev => {
      const newTrail = { id: Date.now(), x: e.clientX, y: e.clientY }
      return [...prev.slice(-8), newTrail]
    })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Mouse follower glow */}
      <motion.div
        className="fixed w-64 h-64 pointer-events-none z-50 mix-blend-screen"
        animate={{ x: mousePos.x - 128, y: mousePos.y - 128 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-pink-400/20 via-rose-300/10 to-transparent blur-2xl" />
      </motion.div>

      {/* Mouse trails - hearts */}
      {trails.map((trail, i) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed pointer-events-none z-40"
          style={{ left: trail.x - 8, top: trail.y - 8 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(236, 72, 153, 0.5)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Main floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            initial={{ 
              left: `${p.x}%`, 
              top: `${p.y}%`,
              rotate: p.rotation,
              scale: 0 
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.sin(p.id) * 50, Math.cos(p.id) * 30, Math.sin(p.id) * 60],
              rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
              scale: [0, 1, 1, 0],
              opacity: [0, 0.7, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.type === "heart" && (
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
            {p.type === "flower" && (
              <svg width={p.size} height={p.size} viewBox="0 0 100 100" fill={p.color}>
                <ellipse cx="50" cy="25" rx="15" ry="25" />
                <ellipse cx="50" cy="75" rx="15" ry="25" />
                <ellipse cx="25" cy="50" rx="25" ry="15" />
                <ellipse cx="75" cy="50" rx="25" ry="15" />
                <ellipse cx="28" cy="28" rx="15" ry="25" transform="rotate(-45 28 28)" />
                <ellipse cx="72" cy="28" rx="15" ry="25" transform="rotate(45 72 28)" />
                <ellipse cx="28" cy="72" rx="15" ry="25" transform="rotate(45 28 72)" />
                <ellipse cx="72" cy="72" rx="15" ry="25" transform="rotate(-45 72 72)" />
                <circle cx="50" cy="50" r="12" fill="rgba(253, 224, 71, 0.8)" />
              </svg>
            )}
            {p.type === "petal" && (
              <svg width={p.size} height={p.size * 1.5} viewBox="0 0 40 60" fill={p.color}>
                <ellipse cx="20" cy="30" rx="18" ry="28" />
              </svg>
            )}
            {p.type === "sparkle" && (
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
              </svg>
            )}
            {p.type === "star" && (
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            )}
            {p.type === "glow" && (
              <div 
                className="rounded-full blur-sm"
                style={{ 
                  width: p.size, 
                  height: p.size, 
                  background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)` 
                }} 
              />
            )}
          </motion.div>
        ))}

        {/* Extra ambient glows */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-pink-500/30 via-rose-400/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-rose-400/30 via-pink-300/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-fuchsia-400/20 via-pink-300/10 to-transparent rounded-full blur-3xl"
        />
      </div>
    </>
  )
}
