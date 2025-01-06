'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

