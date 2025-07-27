'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  color: string;
};

type SkillCategory = {
  label: string;
  value: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    label: 'Frontend',
    value: 'frontend',
    skills: [
      { name: 'HTML', level: 95, color: 'bg-orange-400' },
      { name: 'CSS', level: 90, color: 'bg-blue-400' },
      { name: 'JavaScript', level: 88, color: 'bg-yellow-400' },
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'Next.js', level: 85, color: 'bg-gray-800' },
    ],
  },
  {
    label: 'Backend',
    value: 'backend',
    skills: [
      { name: 'Node.js', level: 85, color: 'bg-green-500' },
      { name: 'Express.js', level: 80, color: 'bg-green-400' },
      { name: 'Prisma ORM', level: 80, color: 'bg-indigo-500' },
      { name: 'PostgreSQL', level: 75, color: 'bg-blue-800' },
      { name: 'MongoDB', level: 85, color: 'bg-emerald-500' },
    ],
  },
  {
    label: 'Tools & Dev',
    value: 'tools',
    skills: [
      { name: 'Git & GitHub', level: 90, color: 'bg-pink-500' },
      { name: 'VS Code', level: 95, color: 'bg-cyan-400' },
      { name: 'Postman', level: 85, color: 'bg-red-400' },
      { name: 'Auth.js / JWT', level: 80, color: 'bg-amber-500' },
      { name: 'Linux/CLI', level: 75, color: 'bg-gray-600' },
    ],
  },
  {
    label: 'UI / Motion',
    value: 'design',
    skills: [
      { name: 'Tailwind CSS', level: 92, color: 'bg-teal-400' },
      { name: 'ShadCN UI', level: 85, color: 'bg-purple-400' },
      { name: 'Framer Motion', level: 80, color: 'bg-fuchsia-500' },
      { name: 'Responsive Design', level: 90, color: 'bg-lime-500' },
      { name: 'GSAP Animations', level: 70, color: 'bg-green-600' },
    ],
  },
];

export default function Skills() {
  const [tab, setTab] = useState('frontend');
  const [reloadKey, setReloadKey] = useState(0); // To trigger animation

  useEffect(() => {
    setReloadKey((prev) => prev + 1);
  }, [tab]);

  return (
    <section className="w-full min-h-screen bg-background px-4 py-20" id="skills">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground">
          A showcase of my tools and technologies across frontend, backend, design, and dev tools.
        </p>
      </div>

      <Tabs
        value={tab}
        onValueChange={setTab}
        className="w-full max-w-4xl mx-auto"
      >
       <TabsList className="flex justify-center flex-wrap gap-2 mb-8 bg-muted border border-border rounded-md p-1">
  {categories.map((cat) => (
    <TabsTrigger
      key={cat.value}
      value={cat.value}
      className={cn(
        'px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200',
        'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        'hover:bg-accent hover:text-accent-foreground'
      )}
    >
      {cat.label}
    </TabsTrigger>
  ))}
</TabsList>


        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value} className="space-y-6">
            {cat.skills.map((skill, i) => (
              <div key={`${skill.name}-${reloadKey}`} className="flex flex-col gap-1">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        key={`${skill.name}-bar-${reloadKey}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={cn('h-3 rounded-lg', skill.color)}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.level}% Proficiency</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
