"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"

interface TimelineItem {
  id: number
  chapter: string
  title: string
  description: string
  image: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    chapter: "Capítulo I",
    title: "O Primeiro Olhar",
    description: "A vida seguia, o destino nos chamava. Num dia comum na academia, você chegava, com o passo leve de quem dança no ar e cabelos encaracolados que faziam o mundo parar. Seus olhos eram imãs que me prendiam sem razão, e naquele instante nasceu uma emoção, tão grande que não cabe em palavras, um universo inteiro em seu sorriso se desbrava.",
    image: "/photos/8.jpeg",
  },
  {
    id: 2,
    chapter: "Capítulo II",
    title: "Onde Tudo Começou",
    description: "Entre elogios e atenção, ganhei a chance do nosso primeiro encontro, depois de um treino intenso. Lutei para te impressionar, o personal tentou me parar, mas mal sabia que o que eu buscava era você, e nenhum esforço poderia me deter. Assim começou nossa história, simples, intensa e cheia de memória.",
    image: "/photos/f.jpeg",
  },
  {
    id: 3,
    chapter: "Capítulo III",
    title: "Nosso Primeiro Beijo",
    description: "Levei você a um cantinho singelo, com caldo de feijão e salada de fruta, para uma menina tão doce, que mal comia um grão de feijão, mas iluminava meu mundo com seu coração. Entre risadas e histórias que contava, me perdia na beleza que de você emanava. Te convidei a me beijar, você resistiu, mas eu insisti; e então, nosso primeiro beijo veio leve e intenso, você tremia de vergonha, eu de alegria imenso.",
    image: "/photos/10.jpeg",
  },
  {
    id: 4,
    chapter: "Capítulo IV",
    title: "Crescendo Juntos",
    description: "Dali nasceu um hábito saudável, que germinava no meu coração: o desejo de estar sempre com você. Vivendo memórias que moldaram nossa decisão, pedi sua mão de forma leve e sincera, para firmar nosso laço e construir juntos um legado de amor e carinho que durará para sempre.",
    image: "/photos/2.jpeg",
  },
  {
    id: 5,
    chapter: "Capítulo V",
    title: "Nosso Ritmo",
    description: "E hoje cá estamos, vivendo e aprendendo, cada dia mais fortes, rindo e nos surpreendendo com nós mesmos. Viajando, criando sonhos e metas, planejando nossa família, guardando conquistas, rindo sem medo, com alegria sincera. O que temos não se apaga com água fria; aquece no calor de um abraço e na magia das nossas risadas.",
    image: "/photos/4.jpeg",
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

      {/* Text content */}
      <motion.div
        className={`flex-1 ${isEven ? "text-right max-md:text-center" : "text-left max-md:text-center"}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="backdrop-blur-md bg-white/40 rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl hover:shadow-pink-200/30 transition-all duration-500 relative overflow-hidden group">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-rose-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
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

      {/* Center heart */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="relative">
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

      {/* Image */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="relative group rounded-2xl overflow-hidden border-2 border-white/50 shadow-xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 opacity-30 group-hover:opacity-60 blur transition-all duration-500" />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent flex items-end justify-center pb-6"
          >
            <Sparkles className="w-8 h-8 text-pink-400" />
          </motion.div>
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
      {/* Background gradients */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-pink-300/30 via-rose-200/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.2, 0.3], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-rose-300/30 via-pink-200/10 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500">
              Nossa História
            </span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {timelineData.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
