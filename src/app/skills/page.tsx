'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useEffect, useState } from "react"
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma, SiFirebase, SiRedux,
  SiHtml5, SiCss3, SiGit, SiGithub, SiDocker, SiFigma, SiVercel, SiGraphql
} from "react-icons/si"

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, value: 90, color: "bg-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, value: 85, color: "bg-blue-600" },
  { name: "React", icon: <SiReact />, value: 92, color: "bg-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, value: 88, color: "bg-black" },
  { name: "Node.js", icon: <SiNodedotjs />, value: 86, color: "bg-green-600" },
  { name: "Express", icon: <SiExpress />, value: 80, color: "bg-gray-800" },
  { name: "Tailwind", icon: <SiTailwindcss />, value: 90, color: "bg-cyan-600" },
  { name: "MongoDB", icon: <SiMongodb />, value: 85, color: "bg-green-700" },
  { name: "PostgreSQL", icon: <SiPostgresql />, value: 75, color: "bg-blue-800" },
  { name: "Prisma", icon: <SiPrisma />, value: 82, color: "bg-purple-600" },
  { name: "Firebase", icon: <SiFirebase />, value: 70, color: "bg-yellow-500" },
  { name: "Redux", icon: <SiRedux />, value: 80, color: "bg-purple-800" },
  { name: "HTML5", icon: <SiHtml5 />, value: 95, color: "bg-orange-500" },
  { name: "CSS3", icon: <SiCss3 />, value: 90, color: "bg-blue-500" },
  { name: "Git", icon: <SiGit />, value: 88, color: "bg-orange-600" },
  { name: "GitHub", icon: <SiGithub />, value: 90, color: "bg-gray-900" },
  { name: "Docker", icon: <SiDocker />, value: 65, color: "bg-blue-400" },
  { name: "Figma", icon: <SiFigma />, value: 70, color: "bg-pink-600" },
  { name: "Vercel", icon: <SiVercel />, value: 80, color: "bg-black" },
  { name: "GraphQL", icon: <SiGraphql />, value: 75, color: "bg-pink-500" },
]

const categories = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "GraphQL", "Firebase"],
  tools: ["Git", "GitHub", "Docker", "Figma", "Vercel", "Redux"],
}

const SkillsPage = () => {
  const [floatPositions, setFloatPositions] = useState<{ top: string; left: string }[]>([])

  useEffect(() => {
    // Hydration-safe random floating positions
    const newPositions = Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }))
    setFloatPositions(newPositions)

    // Animate floating circles
    gsap.to(".float", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    })
  }, [])

  const renderSkills = (skillNames: string[]) => {
    return skills
      .filter((skill) => skillNames.includes(skill.name))
      .map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="w-full sm:w-[48%] lg:w-[32%] p-4"
        >
          <Card className="hover:scale-105 transition-all duration-300 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                <span className="text-2xl">{skill.icon}</span> {skill.name}
              </div>
              <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
              <div className="text-sm mt-1">{skill.value}%</div>
            </CardContent>
          </Card>
        </motion.div>
      ))
  }

  return (
    <div className="relative w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-background text-foreground overflow-hidden">
      {/* Hydration-safe floating background elements */}
      {floatPositions.map((pos, i) => (
        <div
          key={i}
          className="float absolute w-10 h-10 rounded-full bg-muted opacity-10"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        My Skills
      </motion.h1>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="flex justify-center flex-wrap gap-2 mb-10">
          <TabsTrigger value="frontend" className="text-lg px-4 py-2">Frontend</TabsTrigger>
          <TabsTrigger value="backend" className="text-lg px-4 py-2">Backend</TabsTrigger>
          <TabsTrigger value="tools" className="text-lg px-4 py-2">Tools & DevOps</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend">
          <div className="flex flex-wrap gap-4 justify-center">
            {renderSkills(categories.frontend)}
          </div>
        </TabsContent>
        <TabsContent value="backend">
          <div className="flex flex-wrap gap-4 justify-center">
            {renderSkills(categories.backend)}
          </div>
        </TabsContent>
        <TabsContent value="tools">
          <div className="flex flex-wrap gap-4 justify-center">
            {renderSkills(categories.tools)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SkillsPage
