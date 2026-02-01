"use client"

import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { GallerySection } from "@/components/gallery-section"
import { LoveLetterSection } from "@/components/love-letter-section"
import { FooterSection } from "@/components/footer-section"
import { FloatingElements } from "@/components/floating-elements"
import { MagicCursor } from "@/components/magic-cursor"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MagicCursor />
      <FloatingElements />
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <LoveLetterSection />
      <FooterSection />
    </main>
  )
}
