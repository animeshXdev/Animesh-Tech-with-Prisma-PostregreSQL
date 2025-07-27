'use client';

import dynamic from 'next/dynamic';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LucideLaptop, LucideBrain, LucideCode2, LucideLightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

// Lottie
const Player = dynamic(() =>
  import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);

const accordionTraits = [
  {
    title: 'Problem Solver',
    content:
      'I excel at breaking down complex challenges into manageable steps and delivering efficient, elegant solutions.',
  },
  {
    title: 'Fast Learner',
    content:
      'I pick up new technologies quickly and enjoy experimenting with modern frameworks, libraries, and tools to stay current.',
  },
  {
    title: 'Team Player',
    content:
      'Collaboration is key. I communicate clearly and love working with others to brainstorm, build, and refine ideas together.',
  },
];

const iconTraits = [
  {
    icon: LucideCode2,
    title: 'Problem Solver',
    desc: 'Turning complex problems into clean code and elegant solutions.',
  },
  {
    icon: LucideLaptop,
    title: 'Full-Stack Focused',
    desc: 'From front-end polish to back-end power, I build across the stack.',
  },
  {
    icon: LucideBrain,
    title: 'Quick Learner',
    desc: 'Constantly learning to stay ahead of fast-evolving tech trends.',
  },
  {
    icon: LucideLightbulb,
    title: 'Creative Thinker',
    desc: 'Blending logic and creativity to craft intuitive UX and UI.',
  },
];

const AboutPage = () => {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (artRef.current) {
      gsap.fromTo(
        artRef.current,
        { opacity: 0.15, y: -40 },
        {
          opacity: 0.05,
          y: 0,
          repeat: -1,
          duration: 6,
          ease: 'power1.inOut',
          yoyo: true,
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full px-6 md:px-12 py-20 bg-background text-foreground overflow-hidden">
      {/* Background Art */}
      <div
        ref={artRef}
        className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile + Traits */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Profile Pic */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border w-60 h-60 md:w-72 md:h-72">
            <Image
              src="/profile.jpg"
              alt="Animesh Prakash"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Icon Traits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {iconTraits.map((trait, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4 bg-muted p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <trait.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{trait.title}</h3>
                  <p className="text-xs text-muted-foreground">{trait.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Lottie */}
          <Player
            autoplay
            loop
            src="https://lottie.host/a5971afb-c063-4228-82df-6188bf985372/l8ufmjFC45.json"
            className="w-36 h-36 block md:hidden mt-4"
          />
        </motion.div>

        {/* Right: About Info */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>

          <div className="text-primary font-semibold mb-4 text-lg md:text-xl">
            <Typewriter
              options={{
                strings: ['Full-stack Developer', 'Next.js Enthusiast', 'UI/UX Craftsman'],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
            I&apos;m <span className="font-semibold text-primary">Animesh Prakash</span>, a passionate full-stack developer focused on building
            performant, responsive, and accessible web experiences using React, Next.js, TypeScript, and beautiful UI/UX practices.
          </p>

          <Button
            asChild
            size="lg"
            className="hover:scale-105 transition-transform duration-300 w-fit"
          >
            <a href="/Animesh_CV.pdf" download target="_blank" rel="noopener noreferrer">
              📄 Download CV
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Accordion Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-24 max-w-3xl mx-auto"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">My Traits</h3>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {accordionTraits.map((trait, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{trait.title}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {trait.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default AboutPage;
