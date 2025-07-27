'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { TypewriterEffect } from './ui/typewriter-effects'

export default function Hero({ scrollToAbout }: { scrollToAbout: () => void }) {
  const words = [
    { text: 'Build ' },
    { text: 'awesome ' },
    { text: 'apps ' },
    { text: 'with ' },
    {
      text: ' Animesh-Tech ',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]

  const blob1 = useRef(null)
  const blob2 = useRef(null)
  const blob3 = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    tl.to(blob1.current, { x: 40, y: -30, duration: 6, ease: 'sine.inOut' })
    tl.to(blob2.current, { x: -30, y: 20, duration: 6, ease: 'sine.inOut' }, 0)
    tl.to(blob3.current, { x: 20, y: 40, duration: 6, ease: 'sine.inOut' }, 0.5)
  }, [])

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden px-6 md:px-12">
      {/* Background Blobs */}
      <motion.div
        ref={blob1}
        className="absolute w-64 h-64 bg-indigo-500 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        ref={blob2}
        className="absolute w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-2xl left-1/4 top-1/3"
      />
      <motion.div
        ref={blob3}
        className="absolute w-48 h-48 bg-pink-500 rounded-full opacity-25 blur-2xl right-1/4 bottom-1/4"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          <div className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          <TypewriterEffect
            words={[
              "Craft Ideas to Reality",
              "Full-Stack Projects",
              "Designing Modern UIs"
            ]}
          />
        </div>
          <div className="flex justify-center items-center flex-col px-4 ">
            <TypewriterEffectSmooth words={words} />
          </div>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          I build beautiful, performant web experiences using modern tech.
        </p>
        <Button onClick={scrollToAbout} className="text-base md:text-lg">
          Explore More
        </Button>
      </div>
    </section>
  )
}
