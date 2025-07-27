"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LucideLaptop, LucideBrain, LucideCode2, LucideLightbulb, LucideUserCircle2 } from "lucide-react";
import Image from "next/image";

const traits = [
  {
    icon: LucideCode2,
    title: "Problem Solver",
    desc: "I love turning complex problems into clean code and finding elegant solutions that work at scale.",
  },
  {
    icon: LucideLaptop,
    title: "Full-Stack Focused",
    desc: "From crafting beautiful UIs to building powerful APIs, I enjoy the full spectrum of web development.",
  },
  {
    icon: LucideBrain,
    title: "Quick Learner",
    desc: "Technology moves fast—and so do I. I constantly adapt and learn to stay ahead of the curve.",
  },
  {
    icon: LucideLightbulb,
    title: "Creative Thinker",
    desc: "I thrive on blending logic with creativity to design intuitive and impactful user experiences.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-background text-foreground px-4 md:px-16 py-20 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl text-center text-muted-foreground text-lg mb-12"
      >
        I'm <span className="text-primary font-semibold">Animesh</span>, a passionate <span className="text-blue-500 font-semibold">web developer</span> with a strong focus on creating <span className="text-emerald-500 font-semibold">performant</span>, <span className="text-yellow-500 font-semibold">scalable</span>, and <span className="text-pink-500 font-semibold">beautiful</span> digital experiences. With a deep love for <span className="text-purple-500 font-semibold">coding</span> and <span className="text-orange-500 font-semibold">continuous learning</span>, I thrive in building solutions that are both functional and visually engaging. Whether it's designing <span className="text-red-400 font-semibold">pixel-perfect UIs</span> or crafting <span className="text-green-500 font-semibold">efficient backend logic</span>, I aim to deliver <span className="text-cyan-400 font-semibold">top-notch results</span> every time.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-border"
        >
          <Image
            src="/profile.jpg" // Replace with your image in public/
            alt="Animesh Profile"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-muted p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <trait.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{trait.title}</h3>
                <p className="text-sm text-muted-foreground">{trait.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 max-w-2xl text-center text-muted-foreground text-base"
      >
        Outside of coding, I enjoy exploring new design trends, watching tech breakdowns, and contributing to open source. My goal is to constantly evolve and be part of projects that make a meaningful impact.
      </motion.div>
    </section>
  );
}
